import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item/item';

export class Lamp implements Item {
    public readonly isSizable : boolean;
    public readonly title: string;
    public readonly icon: Icon

    constructor() {
        this.isSizable = false;
        this.title = "Lampe";
        this.icon = icon(faLightbulb);
    }

    drawItem() {

    }

    move() {
      
    }
}
