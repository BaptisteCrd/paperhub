import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { ToolboxPlan } from '../toolbox-plan';
import * as paper from 'paper';
import { project } from 'paper';

/**
 * OvalPlan extends ToolboxPlan
 */
export class OvalPlan extends ToolboxPlan {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    /**
     * Creates an instance of OvalPlan.
     */
    constructor() {
        super("Plan ovale", "basePlan", icon(faCircle));
    }

    /**
     * Replaces current plan
     */
    public replaceCurrentPlan(): void {
        //recuperation du plan de base 
        let basePlan = project.activeLayer.getItem({id: 1}) as paper.Path; // TODO: A VERIFIER
        
        //remplacer les segments      
        basePlan.removeSegments();
        
        basePlan.add([-400, 0], [-250, -100], [0, -200], [250, -100], [400, 0], [250, 100], [0, 200], [-250, 100], [-400, 0]);
        
        paper.view.emit('paper_changed', new Event('paper_changed'));
    }
}
