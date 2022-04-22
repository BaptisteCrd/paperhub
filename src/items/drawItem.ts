import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * DrawItem extends Item
 */
export class DrawItem extends Item {

    /**
     * Creates an instance of DrawItem.
     * @param isSizable 
     * @param name 
     * @param isHanging 
     * @param isRotatable 
     */
    constructor(isSizable: boolean, name: string, isHanging: boolean, isRotatable: boolean) {
        super(isSizable, name, isHanging, isRotatable, ColorHelper.customPathFillColor);
    }

}
