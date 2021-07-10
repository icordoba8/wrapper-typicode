import axios from "axios";
import { Request, Response } from "express";
import {RecordAction, Utils}  from "../../libs";
import { Post } from "../../types";

const { API }: any = process.env;
class PostController {
   
    static getPosts = async (req: Request, res: Response) => {
        try {
            const { data } = await axios.get<Post>(`${API}/posts`);
            new RecordAction(req,data).save();
            res.json(data);
        } catch (error) {
          res.status(404).json(Utils.error(error));
        }
    }
}

export default PostController;