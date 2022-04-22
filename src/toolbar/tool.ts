import { Icon } from '@fortawesome/fontawesome-svg-core';

/**
 * Tool
 * @description Abstract class (base of individual tools)
 */
export abstract class Tool {
    public abstract readonly icon: Icon;

    public abstract readonly name: string;

    public abstract enable(): void;

    public abstract disable?(): void;
}
