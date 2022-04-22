import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { PaperTool } from '../toolbar';
import { ColorToolbox } from '../toolboxes';

/**
 * FillTool extends PaperTool
 */
export class FillTool extends PaperTool {
    public readonly name = 'Remplir la forme';
    public readonly icon = icon(faFillDrip);

    private eventPaperChanged = new Event('paper_changed');

    /**
     * Creates an instance of FillTool.
     * @param colorToolbox 
     */
    public constructor(private readonly colorToolbox: ColorToolbox) {
        super();
        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
    }


    /**
     * Enables FillTool and ColorToolBox
     */
    public enable(): void {
        super.enable();

        this.colorToolbox.visible = true;
    }

    /**
     * Disables FillTool and ColorToolBox
     */
    public disable(): void {
        super.disable();

        this.colorToolbox.visible = false;
    }

    /**
     * Changes color of pressed object with given ColorToolbox color
     * @param event 
     */
    public onMouseDown(event: paper.ToolEvent): void {
        const hit = paper.project.activeLayer.hitTest(event.downPoint);

        if (hit?.item) {
            hit.item.fillColor = this.colorToolbox.currentPaperColor;
            paper.view.emit('paper_changed', this.eventPaperChanged);
        }
    }
}
