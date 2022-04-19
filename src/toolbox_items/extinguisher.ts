import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../toolbox_item/item';
import * as paper from 'paper';

export class Extinguisher extends Item {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Extincteur", "extinguisher", icon(faFireExtinguisher));
    }

    public drawItem(): paper.Path {
      var circle = new paper.Path.Circle(new paper.Point(0, -3), 15);
      circle.fillColor = new paper.Color("red");
      circle.opacity = .7;

      paper.view.emit('paper_changed', new Event('paper_changed'));

      return circle;
    }
}
