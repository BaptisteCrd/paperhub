import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Stairs extends Item
 */
export class Stairs extends Item {

    /**
     * Creates an instance of Stairs.
     */
    constructor() {
        super(true, "Escaliers", false, true, ColorHelper.stairsColor);
    }
}
