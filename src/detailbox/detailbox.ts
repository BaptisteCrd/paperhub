export abstract class Detailbox {
    protected element?: HTMLElement;

    public constructor() {
    }

    public get visible(): boolean {
        return this.element?.style.display == 'flex';
    }

    public set visible(value: boolean) {
        if (this.element) {
            this.element.style.display = value ? 'flex' : 'none';
        }
    }

    public createElement(): HTMLElement {
        this.element = document.createElement('div');

        this.element.style.display = 'block';
        this.element.classList.add('toolbox');

        return this.element;
    }
}
