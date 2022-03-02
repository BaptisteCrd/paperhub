import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item/item';
import * as paper from 'paper';

export class Shelf implements Item {
    public readonly isSizable : boolean;
    public readonly title: string;
    public readonly icon: Icon

    constructor() {
        this.isSizable = false;
        this.title = "Bloc d'etagères";
        this.icon = icon(faHourglass1);
    }

    drawItem() {
        var rectangle = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(150, 75));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = new paper.Color('orange');
        path.opacity = .7;

        var text = new paper.PointText(new paper.Point(75, 40));
        text.justification = 'center';
        text.fillColor = new paper.Color('black');;
        text.content = this.title;
    }

    move() {
      // path.selected = true;
    }
}
