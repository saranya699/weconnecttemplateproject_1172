import { Request, Response } from 'express';
import { tempService } from '../service/tempService';
import { CustomLogger } from '../config/Logger'
let temp = new tempService();

export class tempController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
temp.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tempController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tempController.ts: GpCreate');
    })}


}