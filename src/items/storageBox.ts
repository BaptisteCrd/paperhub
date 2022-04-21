import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class StorageBox extends Item {

    constructor() {
        super(false, "Bloc caisse", false, true, ColorHelper.storageBoxFillColor);
    }
}
