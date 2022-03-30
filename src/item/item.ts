export abstract class Item{
    isSizable: boolean;
    title: string;
    selected: boolean;
    path?: paper.Path;
    countClicks: number;

    public constructor(countClicks: number, selected: boolean, isSizable: boolean, title: string){
        console.log("super");
        this.countClicks = countClicks;
        this.selected = selected;
        this.isSizable = isSizable;
        this.title = title;
    }

    abstract drawItem(event: MouseEvent): void;


    moveItem(event: paper.ToolEvent): void {
        console.log("test");
        console.log(this.path);
        console.log(this.selected);
        if(this.path && this.selected){
            this.path.position = event.point;
        }
    }

    placeItem() {
        this.countClicks++;
        if(this.path && !(this.countClicks % 2)){
            this.selected = false;
        } else {
            this.selected = true;
        }
    }
}
