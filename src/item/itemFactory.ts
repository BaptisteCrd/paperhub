import { BakeryStand, Door, Extinguisher, Lamp, Shelf, StorageBox, SuspendedLamps, Stairs, DisplayPanel, Checkout } from "../items";
import { Item } from "./item";

/**
 * ItemFactory
 * @description Grants creation of individual items based on their name 
 */
export class ItemFactory {

      /**
     * Create Item 
     * @param itemType
     */
    public static createItem = (itemType: string): Item => {
        if(itemType == "shelf"){
            return new Shelf();
        }

        if(itemType == "lamp"){
            return new Lamp();
        }

        if(itemType == "extinguisher"){
            return new Extinguisher();
        }

        if(itemType == "storageBox"){
            return new StorageBox();
        }

        if(itemType == "bakeryStand"){
            return new BakeryStand;
        }

        if(itemType == "door"){
            return new Door;
        }

        if(itemType == "suspendedLamps"){
          return new SuspendedLamps;
        }

        if(itemType == "stairs"){
          return new Stairs;
        }

        if(itemType == "displayPanel"){
          return new DisplayPanel;
        }

        if(itemType == "checkout"){
          return new Checkout;
        }

        return new Shelf;
    }
}
