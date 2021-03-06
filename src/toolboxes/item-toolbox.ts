import { Item } from '../item/item';
import { ItemFactory } from '../item/itemFactory';
import { Toolbox } from '../toolbox';
import './item-toolbox.scss';
import { project } from 'paper';
import { ShelfItem, StorageBoxItem, ExtinguisherItem, DoorItem, BakeryStandItem, LampItem, SuspendedLampsItem, StairsItem, DisplayPanelItem, CheckoutItem } from '../toolbox-items';

/**
 * ItemToolbox extends Toolbox
 */
export class ItemToolbox extends Toolbox {
    protected readonly title = 'Tailles fixes';

    private static readonly fixItems = [
        new ShelfItem, new StorageBoxItem, new ExtinguisherItem, new DoorItem, new StairsItem
    ];

    private static readonly varItems = [
        new BakeryStandItem, new CheckoutItem
    ];

    private static readonly hangingItems = [
        new LampItem, new SuspendedLampsItem, new DisplayPanelItem
    ];

    /**
     * Creates an HTML Element 
     * @returns element - HTMLElement
     */
    public createElement(): HTMLElement {
        const element = super.createElement();

        element.classList.add('color-toolbox');

        // Fix items
        const fixItemElement = document.createElement('div');

        for (const item of ItemToolbox.fixItems) {
            const itemChildElement = document.createElement('p');

            itemChildElement.classList.add("item");
            itemChildElement.appendChild(item.icon.node[0]);
            itemChildElement.addEventListener('click', () => this.createItem(item));
            fixItemElement.appendChild(itemChildElement);
        }

        element.appendChild(fixItemElement);

        // Variables items (size)
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

        // Hanging items
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

    /**
     * Adds title section (e.g before HTML list)
     * @param title 
     */
    public addListTitle(title: string){
        const titleElement = document.createElement('div');

        titleElement.classList.add('toolbox-title');
        titleElement.innerText = title;

        this.element.appendChild(titleElement);

    }

    /**
     * Draws paperJS Path and stores Item as Path's data
     * @param item 
     */
    public createItem(item : any){
        project.activeLayer.selected = false;
        let path = item.drawItem();
        path.data = ItemFactory.createItem(item.name) as Item;
    }

}
