import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * DisplayPanel extends Item
 */
export class DisplayPanel extends Item {

    /**
     * Creates an instance of DisplayPanel.
     */
    constructor() {
        super(true, "Panneau d'affichage", true, true, ColorHelper.displayPanelColor);
    }
}
