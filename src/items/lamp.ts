import { Item } from '../item/item';
import * as paper from 'paper';

export class Lamp extends Item {

    constructor() {
        super(0, true, false, "Lampe");
    }

    drawItem() {
      var circle = new paper.Path.Circle(new paper.Point(0, -3), 30);
      circle.fillColor = new paper.Color("#33c1ff");
      circle.opacity = .7;

      // var text = new paper.PointText(new paper.Point(0, 0));
      // text.justification = 'center';
      // text.fillColor = new paper.Color('black');;
      // text.content = this.title;
    }
}
