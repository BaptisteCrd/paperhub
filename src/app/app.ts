import * as paper from 'paper';
import { Plan } from '../plan';
import { PropertyDetailbox } from '../detailsboxes/property-detailbox';
import { Toolbar } from '../toolbar';
import { ToolboxesContainer } from '../toolbox';
import { ColorToolbox, SaveToolbox, DoToolbox, ItemToolbox, PlanToolbox } from '../toolboxes';
import { FillTool, DrawTool,  ItemTool, PlanTool, PartitionTool } from '../tools';
import './app.scss';
import { DetailboxesContainer } from '../detailbox/detailboxes-container';
import { MessageboxesContainer } from '../messagebox/messageboxes-container';
import { ErrorMessagebox } from '../messageboxes/error-messagebox';

/**
 * App (Entrypoint of application)
 */
export class App {
    public static create(host: HTMLElement): App {
        host.classList.add('app');

        return new App(host);
    }


    /**
     * Creates an instance of App.
     * @param element
     */
    private constructor(private readonly element: HTMLElement) {
        // Section - Messagebox
        const errorMessagebox = new ErrorMessagebox();
        
        const messageboxes = MessageboxesContainer.create(element);

        messageboxes.addMessagebox(errorMessagebox);

        // Section - Detailbox
        const propertyDetailbox = new PropertyDetailbox();

        const detailboxes = DetailboxesContainer.create(element);

        detailboxes.addDetailbox(propertyDetailbox);

        // Section - Toolbox
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

        // Section - Toolbar
        const toolbar = Toolbar.create(element);

        const fillTool = new FillTool(colorToolbox);
        const partitionTool = new PartitionTool(errorMessagebox);
        const drawTool = new DrawTool(errorMessagebox);
        const itemTool = new ItemTool(itemToolbox, propertyDetailbox, errorMessagebox);
        const planTool = new PlanTool(planToolbox);

        toolbar.addTool(planTool);
        toolbar.addTool(partitionTool);
        toolbar.addTool(fillTool);
        toolbar.addTool(drawTool);
        toolbar.addTool(itemTool);

        // Create canvas, initializes paperJS 
        const canvas = document.createElement('canvas');
        this.element.appendChild(canvas);
        paper.setup(canvas);

        // Create base plan
        const plan = new Plan();
        plan.initialize();

        paper.view.on('paper_changed', function () { doToolbox.saveState(); });
        paper.view.emit('paper_changed', new Event('paper_changed'));
    }
}
