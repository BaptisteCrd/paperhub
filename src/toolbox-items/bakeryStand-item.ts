import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

export class BakeryStandItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Stand de boulangerie", "bakeryStand", icon(faStore));
    }

    public drawItem(): paper.Path {
        var rectangle = new paper.Rectangle(new paper.Point(-75, -37.5), new paper.Point(75, 37.5));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = new paper.Color(ColorHelper.bakeryStandFillColor);
        path.opacity = .7;

        paper.view.emit('paper_changed', new Event('paper_changed'));
        // var text = new paper.PointText(new paper.Point(75, 40));
        // text.justification = 'center';
        // text.fillColor = new paper.Color('black');
        // text.content = this.title;

        return path;
    }
}
