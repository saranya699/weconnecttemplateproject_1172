import { Request, Response, NextFunction } from "express";
import { tempController } from '../controller/tempController';


export class Routes {
    private temp: tempController = new tempController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/temp').post(this.temp.GpCreate);
     }

}