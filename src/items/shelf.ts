import * as paper from 'paper';
import { Item } from '../item/item';

export class Shelf extends Item {
    constructor() {
        super(0, true, false, "Bloc d'etagères");
    }

    drawItem = (event : MouseEvent) => {
        console.log(event);
        var rectangle = new paper.Rectangle(new paper.Point(-75, -37.5), new paper.Point(75, 37.5));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = new paper.Color('orange');
        path.opacity = .7;

        // var text = new paper.PointText(new paper.Point(75, 40));
        // text.justification = 'center';
        // text.fillColor = new paper.Color('black');
        // text.content = this.title;
    }

}
