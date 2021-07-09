import axios from "axios";
import { Request, Response } from "express";

import { User } from "../../types";
import {RecordAction, Utils}  from "../../libs/";

const { API }: any = process.env;

class UserController {
    
    static getUsers = async (req: Request, res: Response) => {
        try {
           
           const { data }: any = await axios.get<User>(`${API}/users`);
           new RecordAction(req,data).save();
            res.json(data);
           

        } catch (error) {
            const response = Utils.error(error);
            res.status(404).json(response);
        }
    }
}

export default UserController;