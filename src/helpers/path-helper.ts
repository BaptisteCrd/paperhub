import { project } from 'paper';

export class PathHelper {

    public static checkIntersections(path: paper.Path): boolean {
        let items = project.activeLayer.getItems({class: "Path"});

        let collision = false;

        items.forEach(element => {
            if(path){
                if(element.id != path.id && !element.data.basePlan){
                    if(!collision){
                        if((element.data.isHanging && path.data.isHanging) ||
                        (!element.data.isHanging && !path.data.isHanging)){
                            collision = path.intersects(element);   
                        }                 
                    }
                }
            }
        });

        return collision;
    }

}
