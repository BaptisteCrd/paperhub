import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class BakeryStand extends Item {
    constructor() {
        super(true, "Le stand boulangerie", false, true, ColorHelper.bakeryStandFillColor);
    }

}
