import './messagebox.scss';

/**
 * Messagebox
 * @description Abstract class (base of individual messageboxes)
 */
export abstract class Messagebox {
    protected element?: HTMLElement;
    protected abstract message: HTMLElement;

    /**
     * Creates an instance of Messagebox.
     */
    public constructor() {
    }


    /**
     * Lauch/Display the HTML (message) 
     */
    public show(){
        if(this.message){
            // Initialize the display style 
            this.element.style.visibility = 'visible';
            this.element.style.opacity = '1';
            this.element.style.transition = 'none';

            let self = this;
            let index = 0;
            let timer = setInterval(function(){
                self.element.style.visibility = 'hidden';
                self.element.style.opacity = '0';
                self.element.style.transition = 'visibility 0s 1s, opacity 1s linear';

                if(index == 0){ 
                    clearInterval(timer);
                }
              }, 800);
              
        }
    }

    /**
     * Creates an HTML Element 
     * @returns element - HTMLElement
     */
    public createElement(): HTMLElement {
        this.element = document.createElement('div');

        this.element.classList.add('messagebox');

        return this.element;
    }
}
