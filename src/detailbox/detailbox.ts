import './detailbox.scss';

/**
 * Detailbox
 * @description Abstract class (base of individual detailboxes)
 */
export abstract class Detailbox {
    protected element?: HTMLElement;


    /**
     * Creates an instance of Detailbox.
     */
    public constructor() {
    }


    /**
     * Gets display style of HTML 
     * @return display style of element
     */
    public get visible(): boolean {
        return this.element?.style.display == 'flex';
    }


    /**
     * Sets display style of HTML 
     * @param value
     */
    public set visible(value: boolean) {
        if (this.element) {
            this.element.style.display = value ? 'flex' : 'none';
        }
    }


    /**
     * Creates an HTML Element 
     * @returns element - HTMLElement
     */
    public createElement(): HTMLElement {
        this.element = document.createElement('div');

        this.element.style.display = 'block';
        this.element.classList.add('detailbox');

        return this.element;
    }
}
