import { Toolbox } from '../toolbox';
import { OvalPlan } from "../toolbox-plans";
import './item-toolbox.scss';
import { project } from 'paper';


export class PlanToolbox extends Toolbox {
    protected readonly title = 'Plans';

    private static readonly plans = [
        new OvalPlan
    ];


    public createElement(): HTMLElement {
        const element = super.createElement();

        element.classList.add('color-toolbox');

        const plansElement = document.createElement('div');

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


    public replaceCurrentPlan(plan : any){
        project.activeLayer.selected = false;
        plan.replaceCurrentPlan();
    }
}
