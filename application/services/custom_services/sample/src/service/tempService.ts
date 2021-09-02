import { Request, Response } from 'express';
import {tempDao} from '../dao/tempDao';
import { CustomLogger } from '../config/Logger'
let temp = new tempDao();

export class tempService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tempService.ts: GpCreate')
     const  tempData = req.body;
     temp.GpCreate(tempData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tempService.ts: GpCreate')
         callback(response);
         });
    }


}