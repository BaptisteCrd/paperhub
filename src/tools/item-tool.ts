import { icon } from '@fortawesome/fontawesome-svg-core';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import { ItemToolbox } from '../toolboxes';

export class ItemTool extends PaperTool {
    public readonly name = 'Placer un objet';

    public readonly icon = icon(faObjectGroup);

    public constructor(private readonly itemToolbox: ItemToolbox) {
        super();
    }

    public enable(): void {
        super.enable();

        this.itemToolbox.visible = true;
    }

    public disable(): void {
        super.disable();

        this.itemToolbox.visible = false;
    }
}
