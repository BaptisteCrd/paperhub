import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class Shelf extends Item {
    constructor() {
        super(false, "Bloc d'etagères", false, true, ColorHelper.shelfFillColor);
    }

}
