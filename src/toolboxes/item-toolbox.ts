import { Item } from '../item/item';
import { StorageBox, Shelf, Lamp, Extinguisher } from '../items';
import { Toolbox } from '../toolbox';
import './item-toolbox.scss';

export class ItemToolbox extends Toolbox {
    protected readonly title = 'Objets';

    private static readonly items = [
        new Shelf, new StorageBox, new Lamp, new Extinguisher
    ];

    private currentItemElement?: Item;

    public get currentItem(): Item {
        if (!this.currentItemElement) {
            throw new Error(`${this.createElement.name} was not called!`);
        }

        return this.currentItemElement;
    }

    public createElement(): HTMLElement {
        const element = super.createElement();

        element.classList.add('color-toolbox');

        const itemElement = document.createElement('div');

        //this.currentItemElement.classList.add('input-current-color');

        for (const item of ItemToolbox.items) {
            const itemChildElement = document.createElement('div');

            itemChildElement.classList.add("item");
            itemChildElement.appendChild(item.icon.node[0]);

            // choisir et placer objet
            itemChildElement.addEventListener('click', () => item.drawItem());

            itemElement.appendChild(itemChildElement);
        }

        element.appendChild(itemElement);

        return element;
    }
}
