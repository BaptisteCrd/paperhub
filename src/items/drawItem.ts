import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class DrawItem extends Item {
    constructor(isSizable: boolean, name: string, isHanging: boolean, isRotatable: boolean) {
        super(isSizable, name, isHanging, isRotatable, ColorHelper.customPathFillColor);
    }

}
