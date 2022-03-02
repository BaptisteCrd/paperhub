import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { PaperTool } from '../toolbar';

export class DrawTool extends PaperTool {
    public readonly name = 'Dessiner une cloison';
    public readonly icon = icon(faPencil);
    public myPath : any;

    public constructor() {
        super();

        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseUp = this.onMouseUp.bind(this);
    }


    public onMouseDown(event: paper.ToolEvent): void {
      this.myPath = new paper.Path();
      this.myPath.strokeColor = "blue";
      this.myPath.add(event.point);

    }

    public onMouseUp(event: paper.ToolEvent): void {
    	this.myPath.add(event.point);
    }
}
