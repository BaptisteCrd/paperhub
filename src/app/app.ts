import * as paper from 'paper';
import { Plan } from '../plan';
import { PropertyDetailbox } from '../detailsboxes/property-detailbox';
import { Toolbar } from '../toolbar';
import { ToolboxesContainer } from '../toolbox';
import { ColorToolbox, SaveToolbox, DoToolbox, ItemToolbox, PlanToolbox } from '../toolboxes';
import { FillTool, DrawTool,  ItemTool, PlanTool, PartitionTool } from '../tools';
import './app.scss';
import { DetailboxesContainer } from '../detailbox/detailboxes-container';

export class App {
    public static create(host: HTMLElement): App {
        host.classList.add('app');

        return new App(host);
    }

    private constructor(private readonly element: HTMLElement) {
        const propertyDetailbox = new PropertyDetailbox();

        const detailboxes = DetailboxesContainer.create(element);

        detailboxes.addDetailbox(propertyDetailbox);

        const colorToolbox = new ColorToolbox();
        const itemToolbox = new ItemToolbox();
        const doToolbox = new DoToolbox();
        const planToolbox = new PlanToolbox();

        const toolboxes = ToolboxesContainer.create(element);

        toolboxes.addToolbox(planToolbox);
        toolboxes.addToolbox(colorToolbox);
        toolboxes.addToolbox(itemToolbox);
        toolboxes.addToolbox(doToolbox);
        toolboxes.addToolbox(new SaveToolbox());

        const toolbar = Toolbar.create(element);

        const fillTool = new FillTool(colorToolbox);
        const partitionTool = new PartitionTool();
        const drawTool = new DrawTool();
        const itemTool = new ItemTool(itemToolbox, propertyDetailbox);
        const planTool = new PlanTool(planToolbox);

        toolbar.addTool(planTool);
        toolbar.addTool(partitionTool);
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
