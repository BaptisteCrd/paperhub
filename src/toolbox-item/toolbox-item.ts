import { Icon } from '@fortawesome/fontawesome-svg-core';

/**
 * ToolboxItem
 * @description Abstract class (base of individual toolbox items)
 */
export abstract class ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of ToolboxItem.
     * @param title 
     * @param name 
     * @param icon 
     */
    constructor(title: string, name:string, icon:Icon) {
        this.name = name;
        this.title = title;
        this.icon = icon;
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    abstract drawItem(): paper.Path ;
}
