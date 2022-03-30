import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

export class Shelf {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        this.name = "shelf"
        this.title = "Bloc d'etagères";
        this.icon = icon(faTableCellsLarge);
    }
}
