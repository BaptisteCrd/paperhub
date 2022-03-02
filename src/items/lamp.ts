import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item/item';
import * as paper from 'paper';

export class Lamp implements Item {
    public readonly isSizable : boolean;
    public readonly title: string;
    public readonly icon: Icon

    constructor() {
        this.isSizable = false;
        this.title = "Lampe";
        this.icon = icon(faLightbulb);
    }

    drawItem() {
      var circle = new paper.Path.Circle(new paper.Point(0, -3), 30);
      circle.fillColor = new paper.Color("#33c1ff");
      circle.opacity = .7;

      var text = new paper.PointText(new paper.Point(0, 0));
      text.justification = 'center';
      text.fillColor = new paper.Color('black');;
      text.content = this.title;
    }

    move() {

    }
}
