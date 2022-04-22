import { icon } from '@fortawesome/fontawesome-svg-core';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import { PlanToolbox } from '../toolboxes';

/**
 * PlanTool extends PaperTool
 */
export class PlanTool extends PaperTool {
    public readonly name = 'Choisir un plan de base';
    public readonly icon = icon(faDrawPolygon);

    /**
     * Creates an instance of PlanTool.
     * @param planToolbox 
     */
    public constructor(private readonly planToolbox: PlanToolbox) {
        super();
    }

    /**
     * Enables PlanTool and PlanToolbox
     */
    public enable(): void {
        super.enable();

        this.planToolbox.visible = true;
    }

    /**
     * Disables PlanTool and PlanToolbox
     */
    public disable(): void {
        super.disable();

        this.planToolbox.visible = false;
    }
}
