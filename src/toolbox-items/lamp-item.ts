import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

/**
 * LampItem extends ToolboxItem
 */
export class LampItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of LampItem.
     */
    constructor() {
        super("Lampe", "lamp", icon(faLightbulb));
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    public drawItem(): paper.Path {
      let circle = new paper.Path.Circle(new paper.Point(0, -3), 30);
      circle.fillColor = new paper.Color(ColorHelper.lampFillColor);
      circle.opacity = .7;

      paper.view.emit('paper_changed', new Event('paper_changed'));

      return circle;
    }
}
