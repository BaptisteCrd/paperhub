import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { PaperTool } from '../toolbar';

export class DrawTool extends PaperTool {
    public readonly name = 'Dessiner une cloison';
    public readonly icon = icon(faPencil);
    public myPath : any;

    private eventPaperChanged = new Event('paper_changed');

    public constructor() {
        super();

        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseUp = this.onMouseUp.bind(this);
    }

    private getDistance(x1:number, y1:number, x2:number, y2:number) : number{
      let y = x2 - x1;
      let x = y2 - y1;
      
      return Math.sqrt(x * x + y * y);
    }

    public onMouseDown(event: paper.ToolEvent): void {
      if(!this.myPath){
        this.myPath = new paper.Path();
        this.myPath.strokeColor = "blue";
      }
      this.myPath.add(event.point);

    }

    public onMouseUp(event: paper.ToolEvent): void {
      let distFirstPoint = 50;
      distFirstPoint = this.getDistance(event.point.x, event.point.y, this.myPath.firstSegment.point.x, this.myPath.firstSegment.point.y);

      if(distFirstPoint<30 && this.myPath.firstSegment!=this.myPath.lastSegment){
    	  this.myPath.closed = true;
        this.myPath.fillColor = '#9AD8FF';
        this.myPath = undefined;
        paper.view.emit('paper_changed', this.eventPaperChanged);
      } else {
        this.myPath.add(event.point);
      }
    }
}
