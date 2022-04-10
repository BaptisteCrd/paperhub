import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faBox } from '@fortawesome/free-solid-svg-icons';

export class StorageBox {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        this.name = "storageBox"
        this.title = "Bloc caisse";
        this.icon = icon(faBox);
    }
}
