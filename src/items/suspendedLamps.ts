import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * SuspendedLamps extends Item
 */
export class SuspendedLamps extends Item {

    /**
     * Creates an instance of SuspendedLamps.
     */
    constructor() {
        super(false, "Lampe suspendues", true, true, ColorHelper.suspendedLampsColor);
    }
}
