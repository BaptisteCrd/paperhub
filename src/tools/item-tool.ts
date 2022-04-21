import { icon } from '@fortawesome/fontawesome-svg-core';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import { ItemToolbox } from '../toolboxes';
import { project } from 'paper';
import * as paper from 'paper';
import { PropertyDetailbox } from '../detailsboxes/property-detailbox';
import { PathHelper } from '../helpers';

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};

export class ItemTool extends PaperTool {
    public readonly name = 'Placer un objet';

    public readonly icon = icon(faObjectGroup);
    private eventPaperChanged = new Event('paper_changed');
    public segment: paper.Segment = new paper.Segment();
    public path: any;
    public movePath: boolean = false;
    public initialPosition : paper.Point;

    public constructor(private readonly itemToolbox: ItemToolbox, private readonly propertyDetailbox: PropertyDetailbox) {
        super();

        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseDrag = this.onMouseDrag.bind(this);
        this.paperTool.onKeyDown = this.onKeyDown.bind(this);
        this.paperTool.onMouseUp = this.onMouseUp.bind(this);
    }

    public enable(): void {
        super.enable();

        this.itemToolbox.visible = true;
    }

    public disable(): void {
        super.disable();

        this.itemToolbox.visible = false;
        this.propertyDetailbox.visible = false;
    }

    public onMouseDown(event: paper.ToolEvent): void {
        this.segment = this.path = null;
        project.activeLayer.selected = false;
        
        if(event.item){
            event.item.selected = true;
        }

        var hitResult = project.hitTest(event.point, hitOptions);

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
            if (hitResult.type == 'segment') {
                this.segment = hitResult.segment;
            } else if (hitResult.type == 'stroke') {
                var location = hitResult.location;
                this.segment = this.path.insert(location.index + 1, event.point);
                this.path.smooth();
            }

            this.path = hitResult.item;
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

    public onMouseUp(event: paper.MouseEvent): void {
        var hitResult = project.hitTest(event.point, hitOptions);
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

            this.path.fillColor = this.path.data.color;
        }

        paper.view.emit('paper_changed', this.eventPaperChanged);
    }

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
                this.propertyDetailbox.setPosition(this.path.position);
            }
        } 

        if(PathHelper.checkIntersections(this.path)){
            this.path.fillColor = new paper.Color("red");
        } else {
            this.path.fillColor = this.path.data.color;
        }
    }

    public onKeyDown(event: paper.KeyEvent): void {
        if(this.path){
            if(this.path.data.isRotatable){

                //add message if cant be rotated !!!
                if(event.key == "right"){            
                    let collision = PathHelper.checkIntersections(this.path);
                    if(!collision){
                        this.path.rotate(45);
                        this.propertyDetailbox.setPosition(this.path.position);
                    }
                }
                if(event.key == "left"){            
                    let collision = PathHelper.checkIntersections(this.path);
                    if(!collision){
                        this.path.rotate(-45);
                        this.propertyDetailbox.setPosition(this.path.position);
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
