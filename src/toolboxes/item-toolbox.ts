import { Item } from '../item/item';
import { ItemFactory } from '../item/itemFactory';
import { Toolbox } from '../toolbox';
import { Extinguisher } from '../toolbox_items/extinguisher';
import { Lamp } from '../toolbox_items/lamp';
import { Shelf } from '../toolbox_items/shelf';
import { StorageBox } from '../toolbox_items/storageBox';
import './item-toolbox.scss';
import { project } from 'paper';

export class ItemToolbox extends Toolbox {
    protected readonly title = 'Objets';

    private static readonly items = [
        new Shelf, new Lamp, new StorageBox, new Extinguisher
    ];

    public createElement(): HTMLElement {
        const element = super.createElement();

        element.classList.add('color-toolbox');

        const itemElement = document.createElement('div');

        for (const item of ItemToolbox.items) {
            const itemChildElement = document.createElement('div');

            itemChildElement.classList.add("item");
            itemChildElement.appendChild(item.icon.node[0]);

            // choisir et placer objet
            itemChildElement.addEventListener('click', (event) => this.createItem(item.name, event));            

            itemElement.appendChild(itemChildElement);
        }

        element.appendChild(itemElement);

        return element;
    }

    public createItem(name: string, event: MouseEvent){
        project.activeLayer.selected = false;
        let item = ItemFactory.createItem(name) as Item;
        item.drawItem(event);
    }

}
