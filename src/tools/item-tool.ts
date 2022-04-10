import { icon } from '@fortawesome/fontawesome-svg-core';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { PaperTool } from '../toolbar';
import { ItemToolbox } from '../toolboxes';
import { project } from 'paper';
import * as paper from 'paper';

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};

export class ItemTool extends PaperTool {
    public readonly name = 'Placer un objet';

    public readonly icon = icon(faObjectGroup);
    private eventPaperChanged = new Event('paper_changed');
    public segment: paper.Segment = new paper.Segment();
    public path: paper.Item = new paper.Item();
    movePath = false;

    public constructor(private readonly itemToolbox: ItemToolbox) {
        super();

        this.paperTool.onMouseDown = this.onMouseDown.bind(this);
        this.paperTool.onMouseDrag = this.onMouseDrag.bind(this);
        this.paperTool.onKeyDown = this.onKeyDown.bind(this);
    }

    public enable(): void {
        super.enable();

        this.itemToolbox.visible = true;
    }

    public disable(): void {
        super.disable();

        this.itemToolbox.visible = false;
    }


    // TODO : AJOUTER SUR SUPPRIMER UN OBJET
    // TODO : AJOUTER POUR TOURNER UN OBJET
    public onMouseDown(event: paper.ToolEvent): void {
        project.activeLayer.selected = false;
        
        if(event.item){
            event.item.selected = true;
        }

        var hitResult = project.hitTest(event.point, hitOptions);

        if (!hitResult){
            return;
        }
    
        if (hitResult) {
            this.path = hitResult.item;
        }
        this.movePath = hitResult.type == 'fill';
        if (this.movePath){
            project.activeLayer.addChild(hitResult.item);
            paper.view.emit('paper_changed', this.eventPaperChanged);
        }
    }


    public onMouseDrag(event: paper.ToolEvent): void {
        if (this.path) {
            this.path.position = event.point;
        }
    }

    public onKeyDown(event: paper.KeyEvent): void {
        // When a key is pressed, set the content of the text item:
        if(this.path){
            if(event.key == "right"){            
                this.path.rotate(45);
            }
            if(event.key == "left"){            
                this.path.rotate(-45);
            }

            if(event.key == "delete"){
                this.path.remove();
            }
            paper.view.emit('paper_changed', this.eventPaperChanged);
        }
    }
}
