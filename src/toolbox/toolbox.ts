import './toolbox.scss';

/**
 * Toolbox
 * @description Abstract class (base of individual toolboxes)  
 */
export abstract class Toolbox {
    protected abstract readonly title: string;
    protected element?: HTMLElement;

    /**
     * Creates an instance of Toolbox.
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

        this.element.style.display = 'none';
        this.element.classList.add('toolbox');

        const titleElement = document.createElement('div');

        titleElement.classList.add('toolbox-title');
        titleElement.innerText = this.title;

        this.element.appendChild(titleElement);

        return this.element;
    }
}
