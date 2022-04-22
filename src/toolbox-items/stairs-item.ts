import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faStairs } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

export class StairsItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Escaliers", "stairs", icon(faStairs));
    }

    public drawItem(): paper.Path {
      var rectangle = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(150, 200));
      var path = new paper.Path.Rectangle(rectangle);
      path.fillColor = new paper.Color(ColorHelper.stairsColor);
      path.opacity = .7;

      paper.view.emit('paper_changed', new Event('paper_changed'));

      return path;
    }
}
