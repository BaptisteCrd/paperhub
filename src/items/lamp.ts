import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Lamp extends Item
 */
export class Lamp extends Item {

    /**
     * Creates an instance of Lamp.
     */
    constructor() {
      super(false, "Lampe", true, true, ColorHelper.lampFillColor);
    }
}
