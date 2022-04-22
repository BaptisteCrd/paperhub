import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * StorageBox extends Item
 */
export class StorageBox extends Item {

    /**
     * Creates an instance of StorageBox.
     */
    constructor() {
        super(false, "Bloc caisse", false, true, ColorHelper.storageBoxFillColor);
    }
}
