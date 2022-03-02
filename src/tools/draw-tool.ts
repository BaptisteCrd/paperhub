import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
// import * as paper from 'paper';
import { PaperTool } from '../toolbar';
// import { ColorToolbox } from '../toolboxes';

export class DrawTool extends PaperTool {
    public readonly name = 'Dessiner une cloison';

    public readonly icon = icon(faPencil);

    public constructor() {
        super();

        // this.paperTool.onMouseDown = this.onMouseDown.bind(this);
    }

    // public enable(): void {
    //     super.enable();
    //
    // }
    //
    // public disable(): void {
    //     super.disable();
    //
    // }
    //
    // public onMouseDown(event: paper.ToolEvent): void {
    //     const hit = paper.project.activeLayer.hitTest(event.downPoint);
    //
    //     if (hit?.item) {
    //         hit.item.fillColor = this.colorToolbox.currentPaperColor;
    //     }
    // }
}
