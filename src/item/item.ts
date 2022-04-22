import * as paper from 'paper';


/**
 * Item
 * @description Abstract class (base of individual items)
 */
export abstract class Item {
    isSizable: boolean;
    title: string;	
    isHanging: boolean; 
    isRotatable: boolean;
    color: paper.Color;


    /**
     * Creates an instance of Item.
     * @param isSizable 
     * @param title 
     * @param isHanging 
     * @param isRotatable 
     * @param color 
     */
    public constructor(isSizable: boolean, title: string, isHanging: boolean, isRotatable: boolean, color: string){
        this.isSizable = isSizable;
        this.title = title;
        this.isHanging = isHanging;
        this.isRotatable = isRotatable;
        this.color = new paper.Color(color);
    }
}
