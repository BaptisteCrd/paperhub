import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../toolbox_item/item';
import * as paper from 'paper';

export class Door extends Item {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Porte", "door", icon(faDoorOpen));
    }

    public drawItem(): paper.Path {
      var path = new paper.Path({
         segments: [[0, 0], [-70, 0], [0, -70]],
      });

      path.fillColor = new paper.Color('purple');
      paper.view.emit('paper_changed', new Event('paper_changed'));

      return path;
    }
}
