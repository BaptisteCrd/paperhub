import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item/item';

export class Shelf implements Item {
    public readonly isSizable : boolean;
    public readonly title: string;
    public readonly icon: Icon

    constructor() {
        this.isSizable = false;
        this.title = "Bloc d'etagères";
        this.icon = icon(faHourglass1);
    }

    drawItem() {
        console.log("Here");
    }
}
