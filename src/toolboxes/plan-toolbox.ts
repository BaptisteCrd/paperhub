import { Toolbox } from '../toolbox';
import { OvalPlan } from "../toolbox-plans";
import './item-toolbox.scss';
import { project } from 'paper';

/**
 * PlanToolbox extends Toolbox
 */
export class PlanToolbox extends Toolbox {
    protected readonly title = 'Plans';

    private static readonly plans = [
        new OvalPlan
    ];

    /**
     * Creates an HTML Element 
     * @returns element - HTMLElement
     */
    public createElement(): HTMLElement {
        const element = super.createElement();

        element.classList.add('color-toolbox');

        const plansElement = document.createElement('div');

        // Adds all plans to list
        for (const plan of PlanToolbox.plans) {
            const planChildElement = document.createElement('p');

            planChildElement.classList.add("item");
            planChildElement.appendChild(plan.icon.node[0]);
            planChildElement.addEventListener('click', () => this.replaceCurrentPlan(plan));
            plansElement.appendChild(planChildElement);
        }

        element.appendChild(plansElement);

        return element;
    }


    /**
     * Replaces current base plan 
     * @param plan 
     */
    public replaceCurrentPlan(plan : any){
        project.activeLayer.selected = false;
        plan.replaceCurrentPlan();
    }
}
