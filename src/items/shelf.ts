import * as paper from 'paper';
import { tool } from 'paper/dist/paper-core';
import { Item } from '../item/item';

export class Shelf extends Item {
    constructor() {
        super(0, true, false, "Bloc d'etagères");

        tool.onMouseDrag = this.moveItem.bind(this);

    }

    drawItem = (event : MouseEvent) => {
        var rectangle = new paper.Rectangle(new paper.Point(0,0), new paper.Point(event.clientX + 150, event.clientY + 75));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = new paper.Color('orange');
        path.opacity = .7;

        var text = new paper.PointText(new paper.Point(75, 40));
        text.justification = 'center';
        text.fillColor = new paper.Color('black');
        text.content = this.title;

        this.path = path;

    }
}
