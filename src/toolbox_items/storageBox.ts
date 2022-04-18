import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../toolbox_item/item';

export class StorageBox extends Item {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Bloc caisse", "storageBox", icon(faBox));
    }

    public drawItem(): paper.Path {
        throw new Error('Method not implemented.');
    }
}
