import { icon } from '@fortawesome/fontawesome-svg-core';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import * as paper from 'paper';
import { PathHelper, ColorHelper } from '../helpers';
import { ErrorMessagebox } from '../messageboxes/error-messagebox';

/**
 * PartitionTool extends PaperTool
 */
export class PartitionTool extends PaperTool {
    public readonly name = 'Créer une cloison';
    public readonly icon = icon(faDivide);

    public path: any;
    public point: paper.Point;
    public active: boolean = false;

    private eventPaperChanged = new Event('paper_changed');

    /**
     * Creates an instance of PartitionTool.
     */
    public constructor(private readonly errorMessagebox : ErrorMessagebox) {
        super();
        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onKeyDown = this.onKeyDown.bind(this);
        this.paperTool.onMouseMove = this.onMouseMove.bind(this);
    }

    /**
     * Disables PartitionTool
     */
    public disable(): void {
        if(this.path && this.active){
            this.path.remove();
            this.path.fullySelected = false;
            this.active = false;
        } else if (this.path && this.path.fullySelected){
            this.path.fullySelected = false;
        }
    }

    /**
     * Four possibilites : 
     * - Creates first point of new paperJS path 
     * - Creates second point of path to make a stroke
     * - Cancels path because of intersections
     * - Selects a path after creation of a stroke
     * @param event 
     */
    public onMouseDown(event: paper.ToolEvent): void {
        if(!this.path){
            this.path = new paper.Path();
            this.path.data.isPartition = true;
            this.path.data.title = "Cloison";
        }

        if(this.path.fullySelected){
            this.path.fullySelected = false;
        } else {
            if(!this.active){
                this.path = new paper.Path();
                this.path.data.isPartition = true;
                this.path.data.title = "Cloison";
                this.path.strokeColor = new paper.Color(ColorHelper.validPartitionStrokeColor);

                if(PathHelper.checkIntersections(this.path)){
                    this.path.remove();
                    this.path.fullySelected = false;
                    this.active = !this.active;

                    this.errorMessagebox.setErrorMessage("Vous ne pouvez pas tracer cette cloison à cause de collisions !");
                    this.errorMessagebox.show();
                } else {
                    this.point = event.point;
                }
            } else {
                if(PathHelper.checkIntersections(this.path)){
                    this.path.remove();
                    this.path.fullySelected = false;

                    this.errorMessagebox.setErrorMessage("Vous ne pouvez pas tracer cette cloison à cause de collisions !");
                    this.errorMessagebox.show();
                } else {
                    this.path.fullySelected = true;
                }
            }

            this.active = !this.active;
        }

        paper.view.emit('paper_changed', this.eventPaperChanged);
    }
    
    /**
     * Creates new point on mouse position and checks intersections
     * @param event 
     */
    public onMouseMove(event: paper.ToolEvent): void {
        if(this.active){
            this.path.removeSegments();
            this.path.add(this.point);
            this.path.add(event.point);

            if(PathHelper.checkIntersections(this.path)){
                this.path.strokeColor = new paper.Color(ColorHelper.invalidPartitionStrokeColor);
            } else {
                this.path.strokeColor = new paper.Color(ColorHelper.validPartitionStrokeColor);
            }
        }
    }
    
    /**
     * Delete / Cancel a path (stroke)
     * @param event 
     */
    public onKeyDown(event: paper.KeyEvent): void {
        if(this.path.fullySelected){
            if(event.key == "delete"){
                this.path.remove();
                this.path.fullySelected = false;
                this.active = false;

                paper.view.emit('paper_changed', this.eventPaperChanged);
            }
        } else {
            if(this.active){
                if(event.key == "escape"){
                    this.path.remove();
                    this.path.fullySelected = false;
                    this.active = false;

                    paper.view.emit('paper_changed', this.eventPaperChanged);
                }
            }
        }
    };
}