import axios from "axios";
import { Request, Response } from "express";

import { Album, Photo } from "../../types";
import {RecordAction, PhotoUser, Utils}    from "../../libs";

const { API }: any = process.env;
class PhotoController {
   
    static getUserPhoto = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { data: albums }:any = await axios.get<Album>(`${API}/albums`);
            const { data: photos }: any = await axios.get<Photo>(`${API}/photos`);
            
            const userPhotos = await new PhotoUser(albums, photos,  parseInt(id)).get();
            if (userPhotos.length > 0) {
                new RecordAction(req, userPhotos).save();
            }
            
            return  res.json(userPhotos);
           
        } catch (error) {
           res.status(404).json(Utils.error(error));
        }
    }
}

export default PhotoController;