import { Item } from '../item/item';
import { ItemFactory } from '../item/itemFactory';
import { Toolbox } from '../toolbox';
import { Shelf } from '../toolbox_items/shelf';
import './item-toolbox.scss';

export class ItemToolbox extends Toolbox {
    protected readonly title = 'Objets';

    private static readonly items = [
        new Shelf
    ];

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
            itemChildElement.addEventListener('click', (event) => this.createItem(item.name, event));            

            itemElement.appendChild(itemChildElement);
        }

        element.appendChild(itemElement);

        return element;
    }

    public createItem(name: string, event: MouseEvent){
        let item = ItemFactory.createItem(name) as Item;
        item.drawItem(event);
        
       // item.moveItem(event);
    }
}
