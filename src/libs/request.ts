
import Db from "../db";
import RecordRequestModel from "../db/models/recordrequest";
import { Photo, User } from "../types";
class RecordAction {
    public request: Object;
    public data: User[] | Photo[] | any;
    constructor(req?: any, data?:User[] | Photo[] | any) {
        Db.conect();
        const { originalUrl, hostname, protocol, method }:any = req ;
        this.request = {
            originalUrl:originalUrl,
            url:`${protocol}://${hostname}${originalUrl}`,
            method: method
        }
        this.data = data;
    }
   async get() {
        try {
            return await RecordRequestModel.find();
        } catch (error) {
            return error
        }
    }
    async save() {
        try {
            const record = new RecordRequestModel({
                date:Date.now(),
                request: this.request,
                records:this.data
            });
            return await record.save();
        } catch (error) {
            return error
        }
    }

    update(req: any) {
        const { id } = req.params;
        try {
            const record = RecordRequestModel.updateOne({ _id: id }, req.body);
            return record;
        } catch (error) {
            return error
        }
    }

    async remove(req: any) {
       const { id } = req.params;
        try {
            const record = await RecordRequestModel.deleteOne({ _id: id });
            return record;
        } catch (error) {
            return error
        }
    }
}

export {RecordAction} ;