import { project } from 'paper';
import { Toolbox } from '../toolbox';
//import * as paper from 'paper';

export class DoToolbox extends Toolbox {
    protected readonly title = 'Undo / Redo';
    private undoList : Array<string> = [];
    private currentState : number = 0;

    public constructor() {
        super();
    }

    public createElement(): HTMLElement {
        const element = super.createElement();

        const undoButtonElement = document.createElement('button');

        undoButtonElement.classList.add('btn');
        undoButtonElement.appendChild(document.createTextNode('Undo'));

        undoButtonElement.addEventListener('click', () => this.undoProject());

        element.appendChild(undoButtonElement);

        const redoButtonElement = document.createElement('button');

        redoButtonElement.classList.add('btn');
        redoButtonElement.appendChild(document.createTextNode('Redo'));

        redoButtonElement.addEventListener('click', () => this.redoProject());

        element.appendChild(redoButtonElement);

        this.visible = true;

        return element;
    }

    // private saveState(): void {
    //     const json = paper.project.exportJSON();
    //     this.undoList.push(json);
    //     if(this.undoList.length > 10)
    //         this.undoList.shift();
    //     else 
    //         this.currentState++;
    // }

    private undoProject(): void {
        if(this.currentState > 0)
            this.currentState--;
        const json = this.undoList.at(this.currentState);
        if (json) {
            project.clear();
            project.importJSON(json);
        }
    }

    private redoProject(): void {
        if(this.currentState < 10)
            this.currentState++;
        const json = this.undoList.at(this.currentState);
        if (json) {
            project.clear();
            project.importJSON(json);
        }
    }
}
