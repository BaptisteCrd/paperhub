import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

/**
 * BakeryStandItem extends ToolboxItem
 */
export class BakeryStandItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of BakeryStandItem.
     */
    constructor() {
        super("Stand de boulangerie", "bakeryStand", icon(faStore, {title: "Stand de boulangerie"}));
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    public drawItem(): paper.Path {
        let rectangle = new paper.Rectangle(new paper.Point(-75, -37.5), new paper.Point(75, 37.5));
        let path = new paper.Path.Rectangle(rectangle);
        path.fillColor = new paper.Color(ColorHelper.bakeryStandFillColor);
        path.opacity = this.opacity;
        path.position.x = this.startX;
        path.position.y = this.startY;

        paper.view.emit('paper_changed', new Event('paper_changed'));

        return path;
    }
}
