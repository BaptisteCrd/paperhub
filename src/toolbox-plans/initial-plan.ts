import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { ToolboxPlan } from '../toolbox-plan';
import * as paper from 'paper';
import { project } from 'paper';

/**
 * InitialPlan extends ToolboxPlan
 */
export class InitialPlan extends ToolboxPlan {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of InitialPlan.
     */
    constructor() {
        super("Plan initiale", "basePlan", icon(faSquare, {title: "Plan initiale"}));
    }

    /**
     * Replaces current plan
     */
    public replaceCurrentPlan(): void {
        //recuperation du plan de base 
        let basePlan = project.activeLayer.getItem({id: 1}) as paper.Path;
        
        //remplacer les segments      
        basePlan.removeSegments();

        basePlan.add([-400, -300], [-150,-300], [-150,-200], [0,-200], [0,-250], [400,-250], [400, 0], [300,0], [300, 150], [400, 150], [400,350], [-400, 350], [-400,300], [-300, 300], [-300, 250], [-400, 250], [-400, -300]);
        
        paper.view.emit('paper_changed', new Event('paper_changed'));
    }
}
