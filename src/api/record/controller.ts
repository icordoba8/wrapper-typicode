import axios from "axios";
import { Request, Response } from "express";
import xlsx from 'node-xlsx';

import arraybuffer from "base64-arraybuffer";

import {RecordAction, Utils} from "../../libs";
import Excel from "../../libs/excel";
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

    
    static exportRecords = async (req: Request, res: Response) => {
        try {
            const response = await new RecordAction(req).get();
            const excel = new Excel();
            const data = await excel.create(response);
            const buffer = xlsx.build([{ name: "Records", data: data }]);
            const  b64 = arraybuffer.encode(buffer)
            res.json(b64)
        } catch (error) {
            res.json(Utils.error(error));
        }
    }

    
}

export default RecordController;