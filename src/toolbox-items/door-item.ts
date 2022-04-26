import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

/**
 * DoorItem extends ToolboxItem
 */
export class DoorItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of DoorItem.
     */
    constructor() {
        super("Porte", "door", icon(faDoorOpen, {title: "Porte"}));
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    public drawItem(): paper.Path {
      let path = new paper.Path({
         segments: [[0, 0], [-70, 0], [0, -70]],
      });

      path.fillColor = new paper.Color(ColorHelper.doorFillColor);
      path.opacity = this.opacity;
      path.position.x = this.startX;
      path.position.y = this.startY;
      
      paper.view.emit('paper_changed', new Event('paper_changed'));

      return path;
    }
}
