import { Item } from '../item/item';
import { ItemFactory } from '../item/itemFactory';
import { Toolbox } from '../toolbox';
import { BakeryStand, Extinguisher, Lamp, Shelf, StorageBox } from "../toolbox_items";
import './item-toolbox.scss';
import { project } from 'paper';


export class ItemToolbox extends Toolbox {
    protected readonly title = 'Tailles fixes';

    private static readonly fixItems = [
        new Shelf, new StorageBox, new Extinguisher
    ];

    private static readonly varItems = [
        new BakeryStand
    ];

    private static readonly hangingItems = [
        new Lamp
    ];


    public createElement(): HTMLElement {
        const element = super.createElement();

        element.classList.add('color-toolbox');

        // fix items
        const fixItemElement = document.createElement('div');

        for (const item of ItemToolbox.fixItems) {
            const itemChildElement = document.createElement('p');

            itemChildElement.classList.add("item");
            itemChildElement.appendChild(item.icon.node[0]);
            itemChildElement.addEventListener('click', () => this.createItem(item));            
            fixItemElement.appendChild(itemChildElement);
        }

        element.appendChild(fixItemElement);

        // variables items
        this.addListTitle("Tailles variables");
        const varItemElement = document.createElement('div');

        for (const item of ItemToolbox.varItems) {
            const itemChildElement = document.createElement('p');

            itemChildElement.classList.add("item");
            itemChildElement.appendChild(item.icon.node[0]);
            itemChildElement.addEventListener('click', () => this.createItem(item));            
            varItemElement.appendChild(itemChildElement);
        }

        element.appendChild(varItemElement);

        // hanging items
        this.addListTitle("Suspendus");
        const hangItemElement = document.createElement('div');

        for (const item of ItemToolbox.hangingItems) {
            const itemChildElement = document.createElement('div');

            itemChildElement.classList.add("item");
            itemChildElement.appendChild(item.icon.node[0]);
            itemChildElement.addEventListener('click', () => this.createItem(item));            
            hangItemElement.appendChild(itemChildElement);
        }

        element.appendChild(hangItemElement);

        return element;
    }

    public addListTitle(title: string){
        const titleElement = document.createElement('div');

        titleElement.classList.add('toolbox-title');
        titleElement.innerText = title;

        this.element.appendChild(titleElement);

    }

    public createItem(item : any){
        project.activeLayer.selected = false;
        let path = item.drawItem();
        path.data = ItemFactory.createItem(item.name) as Item;
    }

}
