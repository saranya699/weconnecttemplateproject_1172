import * as mongoose from 'mongoose';
import tempModel from '../models/temp';
import { CustomLogger } from '../config/Logger'


export class tempDao {
    private temp = tempModel;
    constructor() { }
public GpCreate(tempData, callback){
new CustomLogger().showLogger('info', 'Enter into tempDao.ts: GpCreate')
let temp = new tempModel(tempData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from tempDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}