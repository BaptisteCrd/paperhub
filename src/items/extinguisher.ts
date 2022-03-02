import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';

import { Item } from '../item/item';

export class Extinguisher implements Item {
    public readonly isSizable : boolean;
    public readonly title: string;
    public readonly icon: Icon

    constructor() {
        this.isSizable = false;
        this.title = "Extincteur";
        this.icon = icon(faFireExtinguisher);
    }

    drawItem() {

    }

    move() {

    }
}
