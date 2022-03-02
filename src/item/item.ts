import { Icon } from '@fortawesome/fontawesome-svg-core';

export interface Item {
    isSizable : boolean,
    title: string,
    icon: Icon,
    drawItem(): void;
    move(): void;
}
