import * as paper from 'paper';
import { Plan } from '../plan';
import { Toolbar } from '../toolbar';
import { ToolboxesContainer } from '../toolbox';
import { ColorToolbox, SaveToolbox, DoToolbox, ItemToolbox } from '../toolboxes';
import { FillTool, DrawTool,  ItemTool } from '../tools';
import './app.scss';

export class App {
    public static create(host: HTMLElement): App {
        host.classList.add('app');

        return new App(host);
    }

    private constructor(private readonly element: HTMLElement) {
        const colorToolbox = new ColorToolbox();
        const itemToolbox = new ItemToolbox();
        const doToolbox = new DoToolbox();

        const toolboxes = ToolboxesContainer.create(element);

        toolboxes.addToolbox(colorToolbox);
        toolboxes.addToolbox(itemToolbox);
        toolboxes.addToolbox(doToolbox);
        toolboxes.addToolbox(new SaveToolbox());

        const toolbar = Toolbar.create(element);
        
        toolbar.addTool(new FillTool(colorToolbox));
        toolbar.addTool(new DrawTool());
        toolbar.addTool(new ItemTool(itemToolbox));


        this.initializePlan(function() { doToolbox.saveState(); });
    }

    private initializePlan(modifiedCallback: Function): void {
        const canvas = document.createElement('canvas');
        canvas.addEventListener('click', function() { modifiedCallback(); }, false);
        this.element.appendChild(canvas);
        paper.setup(canvas);

        const plan = new Plan();

        plan.initialize();
    }
}
