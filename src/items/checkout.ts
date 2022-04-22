import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class Checkout extends Item {

    constructor() {
        super(false, "Caisse", false, true, ColorHelper.checkoutColor);
    }
}
