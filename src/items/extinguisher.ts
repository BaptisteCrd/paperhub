import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

export class Extinguisher extends Item {

    constructor() {
        super(false, "Extincteur", false, true, ColorHelper.extinguisherFillColor);
    }
}
