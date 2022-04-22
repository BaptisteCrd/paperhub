import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Door extends Item
 */
export class Door extends Item {

    /**
     * Creates an instance of Door.
     */
    constructor() {
        super(false, "Porte", false, true, ColorHelper.doorFillColor);
    }
}
