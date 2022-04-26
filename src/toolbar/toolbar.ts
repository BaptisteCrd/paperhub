import { Tool } from './tool';
import './toolbar.scss';

/**
 * Toolbar
 */
export class Toolbar {
    private readonly elementByTool = new Map<Tool, HTMLElement>();
    private enabledTool?: Tool;

    /**
     * Creates Toolbar HTML Element
     * @param host 
     * @returns new Toolbar instance 
     */
    public static create(host: HTMLElement): Toolbar {
        const toolbarElement = document.createElement('div');

        toolbarElement.classList.add('toolbar');

        host.appendChild(toolbarElement);

        return new Toolbar(toolbarElement);
    }

    /**
     * Creates an instance of Toolbar.
     * @param element 
     */
    private constructor(private readonly element: HTMLElement) {
    }

    /**
     * Adds Tool to Toolbar
     * @param tool 
     */
    public addTool(tool: Tool): void {
        const toolElement = document.createElement('div');

        this.elementByTool.set(tool, toolElement);

        toolElement.title = tool.name;
        toolElement.classList.add('tool');

        toolElement.appendChild(tool.icon.node[0]);

        toolElement.addEventListener('click', () => this.toggleTool(tool));

        this.element.appendChild(toolElement);
    }

    /**
     * Toggles Tool
     * @param tool 
     */
    private toggleTool(tool: Tool): void {
        if (this.enabledTool) {
            this.enabledTool.disable?.();
            const toolElement = this.elementByTool.get(this.enabledTool)!;
            toolElement.classList.remove('active');
        }

        if (tool == this.enabledTool) {
            this.enabledTool = undefined;
            return;
        }

        tool.enable();

        const toolElement = this.elementByTool.get(tool)!;
        toolElement.classList.add('active');

        this.enabledTool = tool;
    }
}
