import { BakeryStand, Door, Extinguisher, Lamp, Shelf, StorageBox } from "../items";
import { Item } from "./item";

export class ItemFactory {

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

        return new Shelf;
    }
}
