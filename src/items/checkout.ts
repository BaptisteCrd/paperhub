import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Checkout extends Item
 */
export class Checkout extends Item {

    /**
     * Creates an instance of Checkout.
     */
    constructor() {
        super(false, "Caisse", false, true, ColorHelper.checkoutColor);
    }
}
