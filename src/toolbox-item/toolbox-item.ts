import { Icon } from '@fortawesome/fontawesome-svg-core';

export abstract class ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;


    constructor(title: string, name:string, icon:Icon) {
        this.name = name;
        this.title = title;
        this.icon = icon;
    }

    abstract drawItem(): paper.Path ;
}
