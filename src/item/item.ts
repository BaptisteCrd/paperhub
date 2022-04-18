export abstract class Item {
    isSizable: boolean;
    title: string;	
    isHanging: boolean; 
    isRotatable: boolean;

    public constructor(isSizable: boolean, title: string, isHanging: boolean, isRotatable: boolean){
        this.isSizable = isSizable;
        this.title = title;
        this.isHanging = isHanging;
        this.isRotatable = isRotatable;
    }
}
