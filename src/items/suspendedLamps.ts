import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class SuspendedLamps extends Item {

    constructor() {
        super(false, "Lampe suspendues", true, true, ColorHelper.suspendedLampsColor);
    }
}
