import * as paper from 'paper';

export abstract class Item {
    isSizable: boolean;
    title: string;
    selected: boolean;
    path?: paper.Path;
    countClicks: number;
    paperTool = new paper.Tool();

    public constructor(countClicks: number, selected: boolean, isSizable: boolean, title: string){
        console.log("super");
        this.countClicks = countClicks;
        this.selected = selected;
        this.isSizable = isSizable;
        this.title = title;
    }

    abstract drawItem(event: MouseEvent): void;
}
