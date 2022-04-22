import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { DrawItem } from '../items/drawItem';
import { PaperTool } from '../toolbar';

/**
 * DrawTool extends PaperTool
 */
export class DrawTool extends PaperTool {
    public readonly name = 'Dessiner une cloison';
    public readonly icon = icon(faPencil);
    public myPath : any;

    private eventPaperChanged = new Event('paper_changed');

    /**
     * Creates an instance of DrawTool.
     */
    public constructor() {
        super();

        this.paperTool.minDistance = 20;
        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseUp = this.onMouseUp.bind(this);
        this.paperTool.onMouseDrag = this.onMouseDrag.bind(this);
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

      this.myPath.add(event.point);

    }

    /**
     * Adds current mouse position as point to myPath 
     * @param event 
     */
    public onMouseDrag(event: paper.ToolEvent): void {
      this.myPath.add(event.point);
    }

    /**
     * Checks if path builds an fully object
     * @param event 
     */
    public onMouseUp(event: paper.ToolEvent): void {
      let distFirstPoint = 50;
      distFirstPoint = this.getDistance(event.point.x, event.point.y, this.myPath.firstSegment.point.x, this.myPath.firstSegment.point.y);

      //Checks if path should be closed to build an fully object
      if(distFirstPoint < 30 && this.myPath.firstSegment != this.myPath.lastSegment){
    	  this.myPath.closed = true;
        this.myPath.strokeColor = null; // TODO : A TESTER
        this.myPath.fillColor = new paper.Color(ColorHelper.customPathFillColor);
        this.myPath.data = new DrawItem(true, "Objet dessiné", false, true);
        this.myPath = undefined;
        
        paper.view.emit('paper_changed', this.eventPaperChanged);

      } else {
        this.myPath.add(event.point);
      }
    }
}
