import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

/**
 * ShelfItem extends ToolboxItem
 */
export class ShelfItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of ShelfItem.
     */
    constructor() {
        super("Bloc d'etagères", "shelf", icon(faTableCellsLarge, {title: "Bloc d'etagères"}));
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    public drawItem(): paper.Path {
        let rectangle = new paper.Rectangle(new paper.Point(-75, -37.5), new paper.Point(75, 37.5));
        let path = new paper.Path.Rectangle(rectangle);
        path.fillColor = new paper.Color(ColorHelper.shelfFillColor);
        path.opacity = .7;

        paper.view.emit('paper_changed', new Event('paper_changed'));

        return path;
    }
}
