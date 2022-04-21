import { icon } from '@fortawesome/fontawesome-svg-core';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import { PlanToolbox } from '../toolboxes';

export class PlanTool extends PaperTool {
    public readonly name = 'Choisir un plan de base';

    public readonly icon = icon(faDrawPolygon);

    public constructor(private readonly planToolbox: PlanToolbox) {
        super();
    }

    public enable(): void {
        super.enable();

        this.planToolbox.visible = true;
    }

    public disable(): void {
        super.disable();

        this.planToolbox.visible = false;
    }
}
