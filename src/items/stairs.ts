import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class Stairs extends Item {

    constructor() {
        super(true, "Escaliers", false, true, ColorHelper.stairsColor);
    }
}
