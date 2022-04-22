import { Detailbox } from './detailbox';
import './detailboxes-container.scss';

/**
 * DetailboxesContainer
 */
export class DetailboxesContainer {

    /**
     * Creates DetailboxesContainer
     * @param host 
     * @returns DetailboxContainer instance  
     */
    public static create(host: HTMLElement): DetailboxesContainer {
        const element = document.createElement('div');

        element.classList.add('detailboxes-container');

        host.appendChild(element);

        return new DetailboxesContainer(element);
    }


    /**
     * Creates an instance of DetailboxesContainer.
     * @param element 
     */
    private constructor(private readonly element: HTMLElement) {
    }


    /**
     * Adds Detailbox to DetailboxContainer
     * @param detailbox 
     */
    public addDetailbox(detailbox: Detailbox): void {
        this.element.appendChild(detailbox.createElement());
    }
}
