import { Toolbox } from './toolbox';
import './toolboxes-container.scss';

/**
 * ToolboxesContainer
 */
export class ToolboxesContainer {

    /**
     * Creates ToolboxesContainer
     * @param host 
     * @returns ToolboxesContainer instance  
     */
    public static create(host: HTMLElement): ToolboxesContainer {
        const element = document.createElement('div');

        element.classList.add('toolboxes-container');

        host.appendChild(element);

        return new ToolboxesContainer(element);
    }

    /**
     * Creates an instance of ToolboxesContainer.
     * @param element 
     */
    private constructor(private readonly element: HTMLElement) {
    }

    /**
     * Adds Toolbox to ToolboxesContainer
     * @param toolbox 
     */
    public addToolbox(toolbox: Toolbox): void {
        this.element.appendChild(toolbox.createElement());
    }
}
