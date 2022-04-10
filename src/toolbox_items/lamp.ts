import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export class Lamp {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        this.name = "lamp"
        this.title = "Lampe";
        this.icon = icon(faLightbulb);
    }
}
