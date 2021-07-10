import axios from "axios";
import { Request, Response } from "express";
import {RecordAction, Utils} from "../../libs";
const { API }: any = process.env;

class RecordController {

    static getRecords = async (req: Request, res: Response) => {
        try {
           const action = await new RecordAction(req).get();
            res.json(action);

        } catch (error) {
            res.json(Utils.error(error));
        }
    }
    static updateRecord = async (req: Request, res: Response) => {
        try {
           const action = await new RecordAction(req).update(req);
           res.json(action);

        } catch (error) {
           res.status(404).json(Utils.error(error));
        }
    }


    static removeRecord = async (req: Request, res: Response) => {
        try {
           const action = await new RecordAction(req).remove(req);
            res.json(action);

        } catch (error) {
          res.status(404).json(Utils.error(error));
        }
    }

    
}

export default RecordController;