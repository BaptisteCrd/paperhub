import { Shelf } from "../items";
import { Item } from "./item";

export class ItemFactory {
    
    public static createItem = (itemType: string): Item => { 

        if(itemType == "shelf"){
            return new Shelf();
        } 

        return new Shelf;
    }
}
