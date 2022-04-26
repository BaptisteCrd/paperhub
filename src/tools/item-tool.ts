import { icon } from '@fortawesome/fontawesome-svg-core';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import { ItemToolbox } from '../toolboxes';
import { project } from 'paper';
import * as paper from 'paper';
import { PropertyDetailbox } from '../detailsboxes/property-detailbox';
import { ColorHelper, PathHelper } from '../helpers';
import { ErrorMessagebox } from '../messageboxes/error-messagebox';

/**
 * ItemTool extends PaperTool
 */
export class ItemTool extends PaperTool {
    public readonly name = 'Placer un objet';
    public readonly icon = icon(faObjectGroup);

    public segment: paper.Segment = new paper.Segment();
    public path: any;
    public movePath: boolean = false;
    public initialPosition : paper.Point;

    private eventPaperChanged = new Event('paper_changed');

    private hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
    };

    /**
     * Creates an instance of ItemTool.
     * @param itemToolbox
     * @param propertyDetailbox
     */
    public constructor(private readonly itemToolbox: ItemToolbox, private readonly propertyDetailbox: PropertyDetailbox, private readonly errorMessagebox: ErrorMessagebox) {
        super();

        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseDrag = this.onMouseDrag.bind(this);
        this.paperTool.onKeyDown = this.onKeyDown.bind(this);
        this.paperTool.onMouseUp = this.onMouseUp.bind(this);
    }

    /**
     * Enables ItemTool and ItemToolbox
     */
    public enable(): void {
        super.enable();

        this.itemToolbox.visible = true;
    }

    /**
     * Disables ItemTool and ItemToolbox
     */
    public disable(): void {
        super.disable();
        if(this.path){
            this.path.fullySelected = false;
        }

        this.itemToolbox.visible = false;
        this.propertyDetailbox.visible = false;
    }

    /**
     * Select path (item) / segment
     * @param event
     */
    public onMouseDown(event: paper.ToolEvent): void {
        this.segment = this.path = null;
        project.activeLayer.selected = false;

        if(event.item){
            event.item.selected = true;
        }

        let hitResult = project.hitTest(event.point, this.hitOptions);

        if (!hitResult){
            this.propertyDetailbox.visible = false;
            return;
        }

        if (event.modifiers.shift) {
            if (hitResult.type == 'segment') {
                hitResult.segment.remove();
            };
            return;
        }

        if (hitResult) {
            this.path = hitResult.item;

            if (hitResult.type == 'segment') {
                this.segment = hitResult.segment;

            } else if (hitResult.type == 'stroke' && (typeof this.path.data.isPartition === 'undefined') && (typeof this.path.data.basePlan === 'undefined')) {
                let location = hitResult.location;
                this.segment = this.path.insert(location.index + 1, event.point);
                this.path.smooth();
            }
        }

        this.movePath = hitResult.type == 'fill';
        if (this.movePath && !this.path.data.basePlan){
            project.activeLayer.addChild(hitResult.item);
        }

        if(hitResult.type == 'segment'){
            this.initialPosition = new paper.Point(this.segment.point.x, this.segment.point.y);
        } else {
            this.initialPosition = new paper.Point(this.path.position.x, this.path.position.y);
        }

        this.propertyDetailbox.setProperties(this.path);
        this.propertyDetailbox.visible = true;

        paper.view.emit('paper_changed', this.eventPaperChanged);
    }

    /**
     * Place new path (item) / segment position if no collision
     * @param event
     */
    public onMouseUp(event: paper.MouseEvent): void {
        let hitResult = project.hitTest(event.point, this.hitOptions);
        let type = "";
        if(hitResult){
            type = hitResult.type;
        }

        let collision = PathHelper.checkIntersections(this.path);

        if(collision){
            if(type == "segment"){
                this.segment.point.x = this.initialPosition.x;
                this.segment.point.y = this.initialPosition.y;
            } else {
                this.path.position.x = this.initialPosition.x;
                this.path.position.y = this.initialPosition.y;
                this.propertyDetailbox.setPosition(this.path.position);
            }

            this.propertyDetailbox.setLength(this.path.length);

            this.errorMessagebox.setErrorMessage("Vous ne pouvez pas deplacer cet objet à cause de collisions !");
            this.errorMessagebox.show();

            this.path.fillColor = this.path.data.color;
        }

        paper.view.emit('paper_changed', this.eventPaperChanged);
    }

    /**
     * Moving the path (item) or segment
     * @param event
     */
    public onMouseDrag(event: paper.MouseEvent): void {
        if(this.segment){
            if(this.path.data.isSizable){
                this.segment.point.x += event.delta.x;
                this.segment.point.y += event.delta.y;
            }
        } else if(this.path) {
            if(!this.path.data.basePlan){
                this.path.position.x += event.delta.x;
                this.path.position.y += event.delta.y;
            }
        }

        this.propertyDetailbox.setPosition(this.path.position);
        this.propertyDetailbox.setLength(this.path.length);


        if(PathHelper.checkIntersections(this.path)){
            this.path.fillColor = new paper.Color(ColorHelper.collisionColor);
        } else {
            this.path.fillColor = this.path.data.color;
        }
    }

    /**
     * Rotate and delete a path (item)
     * @param event
     */
    public onKeyDown(event: paper.KeyEvent): void {
        if(this.path){
            if(this.path.data.isRotatable){
                if(event.key == "right"){
                    this.path.rotate(45);

                    let collision = PathHelper.checkIntersections(this.path);
                    if(!collision){
                        this.propertyDetailbox.setPosition(this.path.position);
                    } else {
                        this.path.rotate(-45);
                        this.errorMessagebox.setErrorMessage("Vous ne pouvez pas tourner cet objet à cause de collisions !");
                        this.errorMessagebox.show();
                    }
                } else if(event.key == "left"){
                    this.path.rotate(-45);

                    let collision = PathHelper.checkIntersections(this.path);
                    if(!collision){
                        this.propertyDetailbox.setPosition(this.path.position);
                    } else {
                        this.path.rotate(45);
                        this.errorMessagebox.setErrorMessage("Vous ne pouvez pas tourner cet objet à cause de collisions !");
                        this.errorMessagebox.show();
                    }
                }
            }

            if(!this.path.data.basePlan){
                if(event.key == "delete"){
                    this.path.remove();
                }
            }
            paper.view.emit('paper_changed', this.eventPaperChanged);
        }
    }
}
