import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

export class StorageBoxItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Bloc caisse", "storageBox", icon(faBoxArchive));
    }

    public drawItem(): paper.Path {
      var rectangle = new paper.Rectangle(new paper.Point(-120, -37.5), new paper.Point(120, 37.5));
      var path = new paper.Path.Rectangle(rectangle);
      path.fillColor = new paper.Color(ColorHelper.storageBoxFillColor);
      path.opacity = .7;

      paper.view.emit('paper_changed', new Event('paper_changed'));

      return path;
    }
}
