import { ColorHelper } from '../helpers';
import { Item } from '../item/item';


/**
 * BakeryStand extends Item
 */
export class BakeryStand extends Item {

    /**
     * Creates an instance of BakeryStand.
     */
    constructor() {
        super(true, "Le stand boulangerie", false, true, ColorHelper.bakeryStandFillColor);
    }

}
