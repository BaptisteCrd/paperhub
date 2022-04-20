import { Detailbox } from './detailbox';
import './detailboxes-container.scss';

export class DetailboxesContainer {
    public static create(host: HTMLElement): DetailboxesContainer {
        const element = document.createElement('div');

        element.classList.add('detailboxes-container');

        host.appendChild(element);

        return new DetailboxesContainer(element);
    }

    private constructor(private readonly element: HTMLElement) {
    }

    public addDetailbox(detailbox: Detailbox): void {
        this.element.appendChild(detailbox.createElement());
    }
}
