import { project } from 'paper';
import { Toolbox } from '../toolbox';
import * as paper from 'paper';

export class DoToolbox extends Toolbox {
    protected readonly title = 'Undo / Redo';
    protected saveList : Array<string> = [];
    protected idxCurrentState : number = -1;
    private readonly maxSave : number = 10;

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

    public saveState(): void {
        const json = paper.project.exportJSON();
        if(json != this.saveList[this.idxCurrentState]){
            this.idxCurrentState++;
            this.saveList.splice(this.idxCurrentState, this.saveList.length, json);
        }
        this.saveList.splice(this.maxSave, this.saveList.length);
        console.log('SAVED LENGTH', this.saveList, 'idxCurrentState' , this.idxCurrentState);
    }

    private undoProject(): void {
        if(this.idxCurrentState>0){
            const json = this.saveList.at(this.idxCurrentState-1);
            if (json) {
                project.clear();
                project.importJSON(json);
                this.idxCurrentState--;
            }
        }
        //console.log('LENGTH', this.saveList.length, 'idxCurrentState' , this.idxCurrentState);
    }

    private redoProject(): void {
        if(this.idxCurrentState < this.saveList.length-1){
            const json = this.saveList.at(this.idxCurrentState+1);
            if (json) {
                project.clear();
                project.importJSON(json);
                this.idxCurrentState++;
            }
        }
        //console.log('LENGTH', this.saveList.length, 'idxCurrentState' , this.idxCurrentState);
    }
}
