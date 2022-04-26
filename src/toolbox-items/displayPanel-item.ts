import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faSignHanging } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

/**
 * DisplayPanelItem extends Toolbox
 */
export class DisplayPanelItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of DisplayPanelItem.
     */
    constructor() {
        super("Panneau d'affichage", "displayPanel", icon(faSignHanging, {title: "Panneau d'affichage"}));
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    public drawItem(): paper.Path {
      var rectangle = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(175, 15));
      var radius = new paper.Size(20, 20);
      var path = new paper.Path.Rectangle(rectangle, radius);
      path.fillColor = new paper.Color(ColorHelper.displayPanelColor);
      path.opacity = this.opacity;
      path.position.x = this.startX;
      path.position.y = this.startY;

      return path;
    }
}
