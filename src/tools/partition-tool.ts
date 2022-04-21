import { icon } from '@fortawesome/fontawesome-svg-core';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import * as paper from 'paper';
import { PathHelper, ColorHelper } from '../helpers';

export class PartitionTool extends PaperTool {
    public readonly name = 'Créer une cloison';

    public readonly icon = icon(faDivide);
    private eventPaperChanged = new Event('paper_changed');
    public path: any;
    public point: paper.Point;
    public active: boolean = false;

    public constructor() {
        super();
        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onKeyDown = this.onKeyDown.bind(this);
        this.paperTool.onMouseMove = this.onMouseMove.bind(this);
    }

    public onMouseDown(event: paper.ToolEvent): void {
        if(!this.path){
            this.path = new paper.Path();
        }

        if(this.path.fullySelected){
            this.path.fullySelected = false;
        } else {
            if(!this.active){
                this.path = new paper.Path();
                this.path.strokeColor = new paper.Color(ColorHelper.validPartitionStrokeColor);
                //TODO: Add error message
                if(PathHelper.checkIntersections(this.path)){
                    this.path.remove();
                    this.path.fullySelected = false;
                    this.active = !this.active;
                } else {
                    this.point = event.point;
                }
            } else {
                if(PathHelper.checkIntersections(this.path)){
                    this.path.remove();
                    this.path.fullySelected = false;
                } else {
                    this.path.fullySelected = true;
                }
            }

            this.active = !this.active;
        }

        paper.view.emit('paper_changed', this.eventPaperChanged);
    }
    
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
    
    public onKeyDown(event: paper.KeyEvent): void {
        if(this.path.fullySelected){
            if(event.key == "delete"){
                this.path.remove();
                this.path.fullySelected = false;
                this.active = false;
            }
        } else {
            if(this.active){
                if(event.key == "escape"){
                    this.path.remove();
                    this.path.fullySelected = false;
                    this.active = false;
                }
            }
        }
        paper.view.emit('paper_changed', this.eventPaperChanged);
    };
}