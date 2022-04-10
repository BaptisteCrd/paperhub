import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';

export class Extinguisher {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        this.name = "extinguisher"
        this.title = "Extincteur";
        this.icon = icon(faFireExtinguisher);
    }
}
