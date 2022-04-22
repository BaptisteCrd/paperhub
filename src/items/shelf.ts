import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Shelf extends Item
 */
export class Shelf extends Item {
   
    /**
     * Creates an instance of Shelf.
     */
    constructor() {
        super(false, "Bloc d'etagères", false, true, ColorHelper.shelfFillColor);
    }

}
