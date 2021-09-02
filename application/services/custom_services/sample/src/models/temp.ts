
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const tempSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: String,
   Email: String
})

const tempModel = mongoose.model('temp', tempSchema, 'temp');
export default tempModel;
