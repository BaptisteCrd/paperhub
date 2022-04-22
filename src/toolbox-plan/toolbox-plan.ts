import { Icon } from '@fortawesome/fontawesome-svg-core';

/**
 * ToolboxPlan
 * @description Abstract class (base of individual toolbox plans)
 */
export abstract class ToolboxPlan {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of ToolboxPlan.
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
     * Replaces current base plan
     */
    abstract replaceCurrentPlan(): void ;
}
