import * as paper from 'paper';
import { ColorHelper } from '../helpers';

export class Plan {
    basePlan: boolean;
    isSizable: boolean;
    title: string;	
    isHanging: boolean; 
    isRotatable: boolean;
    color: paper.Color;

    public constructor(){
        this.basePlan = true;
        this.isSizable = true;
        this.title = "Plan de base";
        this.isHanging = false;
        this.isRotatable = false;
    }

    public initialize(): void {
        paper.view.center = new paper.Point(0, 0);

        var myPath = new paper.Path({
	         segments: [[-400, -300], [-150,-300], [-150,-200], [0,-200], [0,-250], [400,-250], [400, 0], [300,0], [300, 150], [400, 150], [400,350], [-400, 350], [-400,300], [-300, 300], [-300, 250], [-400, 250], [-400, -300]],
        });

        myPath.strokeColor = new paper.Color(ColorHelper.basePlanStrokeColor);
        myPath.fillColor = new paper.Color(ColorHelper.basePlanFillColor);
        
        myPath.data.basePlan = this.basePlan;
        myPath.data.isSizable = this.isSizable;
        myPath.data.title = this.title;
        myPath.data.isRotatable = this.isRotatable;
        myPath.data.isHanging = this.isHanging;
        myPath.data.color = new paper.Color(ColorHelper.basePlanFillColor);
    }   
}