import { Icon } from '@fortawesome/fontawesome-svg-core';

/**
 * ToolboxItem
 * @description Abstract class (base of individual toolbox items)
 */
export abstract class ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;
    public readonly opacity: number;
    public readonly startX: number;
    public readonly startY: number;

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
        this.opacity = 0.7;
        this.startX = 0;
        this.startY = -370;     
    }

    /**
     * Draws Item (Adds paperJS Path to paperJS project)
     * @returns paperJS Path instance 
     */
    abstract drawItem(): paper.Path ;
}
