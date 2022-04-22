import * as paper from 'paper';
import { Tool } from './tool';

/**
 * PaperTool
 */
export abstract class PaperTool extends Tool {
    protected readonly paperTool = new paper.Tool();
    private static readonly neutralTool = new paper.Tool();

    /**
     * Enables PaperTool
     */
    public enable(): void {
        this.paperTool.activate();
    }

    /**
     * Disables PaperTool
     */
    public disable(): void {
        PaperTool.neutralTool.activate();
    }
}
