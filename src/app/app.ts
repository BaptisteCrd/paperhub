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

        const fillTool = new FillTool(colorToolbox);
        const drawTool = new DrawTool();
        const itemTool = new ItemTool(itemToolbox);

        toolbar.addTool(fillTool);
        toolbar.addTool(drawTool);
        toolbar.addTool(itemTool);

        const canvas = document.createElement('canvas');
        this.element.appendChild(canvas);
        paper.setup(canvas);

        const plan = new Plan();
        plan.initialize();

        paper.view.on('paper_changed', function () { doToolbox.saveState(); });
        paper.view.emit('paper_changed', new Event('paper_changed'));
    }
}
