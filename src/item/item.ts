import * as paper from 'paper';

export abstract class Item {
    isSizable: boolean;
    title: string;	
    isHanging: boolean; 
    isRotatable: boolean;
    color: paper.Color;

    public constructor(isSizable: boolean, title: string, isHanging: boolean, isRotatable: boolean, color: string){
        this.isSizable = isSizable;
        this.title = title;
        this.isHanging = isHanging;
        this.isRotatable = isRotatable;
        this.color = new paper.Color(color);
    }
}
