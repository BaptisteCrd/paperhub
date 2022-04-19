import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../toolbox_item/item';
import * as paper from 'paper';

export class Lamp extends Item {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Lampe", "lamp", icon(faLightbulb));
    }


    public drawItem(): paper.Path {
      var circle = new paper.Path.Circle(new paper.Point(0, -3), 30);
      circle.fillColor = new paper.Color("blue");
      circle.opacity = .7;

      paper.view.emit('paper_changed', new Event('paper_changed'));
      // var text = new paper.PointText(new paper.Point(0, 0));
      // text.justification = 'center';
      // text.fillColor = new paper.Color('black');;
      // text.content = this.title;

      return circle;
    }
}
