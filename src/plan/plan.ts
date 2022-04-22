import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { Item } from '../item/item';

/**
 * Plan extends Item
 */
export class Plan extends Item {
    basePlan: boolean;
    isSizable: boolean;
    title: string;	
    isHanging: boolean; 
    isRotatable: boolean;
    color: paper.Color;

    /**
     * Creates an instance of Plan.
     */
    public constructor(){
        super(false, "Plan de base", false, false, ColorHelper.basePlanFillColor);
      
        this.basePlan = true;
    }

    /**
     * Initializes Plan (draw in paperJS project)
     */
    public initialize(): void {
        paper.view.center = new paper.Point(0, 0);

        let myPath = new paper.Path({
	         segments: [[-400, -300], [-150,-300], [-150,-200], [0,-200], [0,-250], [400,-250], [400, 0], [300,0], [300, 150], [400, 150], [400,350], [-400, 350], [-400,300], [-300, 300], [-300, 250], [-400, 250], [-400, -300]],
        });

        myPath.strokeColor = new paper.Color(ColorHelper.basePlanStrokeColor);
        myPath.fillColor = new paper.Color(ColorHelper.basePlanFillColor);
        
        // Init class variables
        myPath.data.basePlan = this.basePlan;
        myPath.data.isSizable = this.isSizable;
        myPath.data.title = this.title;
        myPath.data.isRotatable = this.isRotatable;
        myPath.data.isHanging = this.isHanging;
        myPath.data.color = this.color;
    }   
}