import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper, PathHelper } from '../helpers';
import { DrawItem } from '../items/drawItem';
import { ErrorMessagebox } from '../messageboxes/error-messagebox';
import { PaperTool } from '../toolbar';

/**
 * DrawTool extends PaperTool
 */
export class DrawTool extends PaperTool {
    public readonly name = 'Dessiner une cloison';
    public readonly icon = icon(faPencil);
    public myPath : any;
    public active: boolean = false;

    private eventPaperChanged = new Event('paper_changed');

    /**
     * Creates an instance of DrawTool.
     */
    public constructor(private readonly errorMessagebox: ErrorMessagebox) {
        super();

        this.paperTool.minDistance = 20;
        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseUp = this.onMouseUp.bind(this);
        this.paperTool.onMouseDrag = this.onMouseDrag.bind(this);
        this.paperTool.onKeyDown = this.onKeyDown.bind(this);
    }

    /**
     * Disables DrawTool
     */
    public disable(): void {
      if(typeof this.myPath !== "undefined"){
        if(!this.myPath.closed){
          this.myPath.remove();
          this.myPath = undefined;
        }
          
        if(this.myPath.fullySelected){
          this.myPath.fullySelected = false;
        }
      } 
    }

    /**
     * Gets distance between two points (x1, y2) and (x2, y2)
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     * @returns distance of the two given points
     */
    private getDistance(x1:number, y1:number, x2:number, y2:number) : number{
      let y = x2 - x1;
      let x = y2 - y1;
      
      return Math.sqrt(x * x + y * y);
    }

    /**
     * Creates new paperJS Path
     * @param event 
     */
    public onMouseDown(event: paper.ToolEvent): void {
      if(!this.myPath){
        this.myPath = new paper.Path();
        this.myPath.strokeColor = new paper.Color(ColorHelper.customPathStrokeColor);
      }

      if(this.myPath.fullySelected){
        this.myPath.fullySelected = false;
        this.myPath = null;
      
      } else {    
        if(!this.active && !this.myPath){
          this.myPath = new paper.Path();
          this.myPath.strokeColor = new paper.Color(ColorHelper.customPathStrokeColor);
          this.active = !this.active;
        }  else {
          if(this.myPath){
            this.myPath.add(event.point);
          }
        }
      }
    }

    /**
     * Adds current mouse position as point to myPath 
     * @param event 
     */
    public onMouseDrag(event: paper.ToolEvent): void {
      if(this.myPath){
        this.myPath.add(event.point);

        if(PathHelper.checkIntersections(this.myPath)){
          this.myPath.strokeColor = new paper.Color(ColorHelper.invalidPartitionStrokeColor);
        } else {
            this.myPath.strokeColor = new paper.Color(ColorHelper.customPathStrokeColor);
        }
      }
    }

    /**
     * Checks if path builds an fully object
     * @param event 
     */
    public onMouseUp(event: paper.ToolEvent): void {
      if(this.myPath){
        if(this.myPath.firstSegment){
          let distFirstPoint = 50;
          
          distFirstPoint = this.getDistance(event.point.x, event.point.y, this.myPath.firstSegment.point.x, this.myPath.firstSegment.point.y);

          //Checks if path should be closed to build an fully object
          if(distFirstPoint < 30 && this.myPath.firstSegment != this.myPath.lastSegment){
            
            if(PathHelper.checkIntersections(this.myPath)){
              this.myPath.remove();
              this.errorMessagebox.setErrorMessage("Vous ne pouvez pas tracer cet objet à cause de collisions !");
              this.errorMessagebox.show();
            } else {
              this.myPath.closed = true;
              this.myPath.strokeColor = null;
              this.myPath.fillColor = new paper.Color(ColorHelper.customPathFillColor);
              this.myPath.data = new DrawItem(true, "Objet dessiné", false, true);
              this.myPath.fullySelected = true;
            }

            this.active = false;
            
            paper.view.emit('paper_changed', this.eventPaperChanged);

          } else {
            if(PathHelper.checkIntersections(this.myPath)){
              this.myPath.remove();
              this.errorMessagebox.setErrorMessage("Vous ne pouvez pas tracer cet objet à cause de collisions !");
              this.errorMessagebox.show();
              this.active = false;
              this.myPath = null;
            }
          }
        }
      }
    }

        /**
     * Delete / Cancel a path (stroke)
     * @param event 
     */
    public onKeyDown(event: paper.KeyEvent): void {
        if(typeof this.myPath !== "undefined"){
            if(event.key == "escape"){
                this.myPath.remove();
                this.myPath.fullySelected = false;
                this.myPath = null;

                paper.view.emit('paper_changed', this.eventPaperChanged);
            } else if(this.myPath.closed && this.myPath.fullySelected){
              if(event.key == "delete"){
                this.myPath.remove();
                this.myPath.fullySelected = false;
                this.myPath = null;

                paper.view.emit('paper_changed', this.eventPaperChanged);
              }
            }
        }
  };
}
