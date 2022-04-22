import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Extinguisher extends Item
 */
export class Extinguisher extends Item {

    /**
     * Creates an instance of Extinguisher.
     */
    constructor() {
        super(false, "Extincteur", false, true, ColorHelper.extinguisherFillColor);
    }
}
