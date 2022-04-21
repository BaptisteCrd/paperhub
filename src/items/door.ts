import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class Door extends Item {

    constructor() {
        super(false, "Porte", false, true, ColorHelper.doorFillColor);
    }
}
