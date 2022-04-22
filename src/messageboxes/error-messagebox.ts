import { Messagebox } from '../messagebox/messagebox';
import './error-messagebox.scss';
//import * as paper from 'paper';

/**
 * ErrorMessagebox extends Messagebox
 */
export class ErrorMessagebox extends Messagebox {
    protected message: HTMLElement;

    /**
     * Sets error message
     * @param message 
     */
    public setErrorMessage(message: string): void {
        this.message.textContent = message;
    }

    /**
     * Creates HTML Element
     * @returns element 
     */
    public createElement(): HTMLElement {
        const element = super.createElement();
        element.style.visibility = 'hidden';

        const detailElement = document.createElement('div');
        detailElement.classList.add("error-message");

        const errorTitle = document.createElement('div');
        errorTitle.textContent = "ERREUR : "

        const errorMessage = document.createElement('div');
        errorMessage.append(errorTitle);

        this.message = document.createElement('div');
        this.message.textContent = "";
        errorMessage.append(this.message)

        detailElement.appendChild(errorMessage);

        element.appendChild(detailElement);

        return element;
    }
}
