import { project } from 'paper';

/**
 * PathHelper
 */
export class PathHelper {

    /**
     * Checks intersections of path with all objets in projet
     * @param path 
     * @returns true if intersections 
     */
    public static checkIntersections(path: paper.Path): boolean {
        let items = project.getItems({class: "Path"});

        let collision = false;

        items.forEach(element => {
            if(path){
                if(element.id != path.id && !element.data.basePlan){
                    if(!collision){
                        // Only check intersections between hanging objets OR not hanging objets
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
