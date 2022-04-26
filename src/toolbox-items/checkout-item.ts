import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

/**
 * CheckoutTtem extends ToolboxItem
 */
export class CheckoutItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of CheckoutTtem.
     */
    constructor() {
        super("Caisse", "checkout", icon(faCashRegister, {title: "Caisse"}));
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    public drawItem(): paper.Path {
      var rectangle = new paper.Rectangle(new paper.Point(-120, -37.5), new paper.Point(120, 37.5));
      var path = new paper.Path.Rectangle(rectangle);
      path.fillColor = new paper.Color(ColorHelper.checkoutColor);
      path.opacity = this.opacity;
      path.position.x = this.startX;
      path.position.y = this.startY;

      paper.view.emit('paper_changed', new Event('paper_changed'));

      return path;
    }
}
