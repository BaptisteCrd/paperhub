import * as paper from 'paper';

export class Plan {
    public initialize(): void {
        paper.view.center = new paper.Point(0, 0);

        var myPath = new paper.Path({
	         segments: [[-400, -300], [-150,-300], [-150,-200], [0,-200], [0,-250], [400,-250], [400, 0], [300,0], [300, 150], [400, 150], [400,350], [-400, 350], [-400,300], [-300, 300], [-300, 250], [-400, 250], [-400, -300]],
        });

        myPath.fillColor = new paper.Color('#c4c1be');

        myPath.selected = true;
        
        myPath.data.basePlan = true;
        myPath.data.isSizable = true;
        myPath.data.title = "Plan de base"
        myPath.data.isRotatable = false;
        myPath.data.isHanging = false;
    }   
}
