import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class DisplayPanel extends Item {

    constructor() {
        super(true, "Panneau d'affichage", true, true, ColorHelper.displayPanelColor);
    }
}
