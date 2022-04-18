import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../toolbox_item/item';

export class Extinguisher extends Item {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Extincteur", "extinguisher", icon(faFireExtinguisher));
    }

    public drawItem(): paper.Path {
        throw new Error('Method not implemented.');
    }
}
