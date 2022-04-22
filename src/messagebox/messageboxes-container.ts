import { Messagebox } from './messagebox';
import './messageboxes-container.scss';

/**
 * MessageboxesContainer
 */
export class MessageboxesContainer {

    /**
     * Creates MessageboxesContainer
     * @param host 
     * @returns MessageboxesContainer instance  
     */
    public static create(host: HTMLElement): MessageboxesContainer {
        const element = document.createElement('div');

        element.classList.add('messageboxes-container');

        host.appendChild(element);

        return new MessageboxesContainer(element);
    }


    /**
     * Creates an instance of MessageboxesContainer.
     * @param element 
     */
    private constructor(private readonly element: HTMLElement) {
    }


    /**
     * Adds Messagebox to MessageboxesContainer
     * @param messagebox 
     */
    public addMessagebox(messagebox: Messagebox): void {
        this.element.appendChild(messagebox.createElement());
    }
}
