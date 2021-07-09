
import { Album, Photo } from "../types";
import {Utils} from "./util";

class PhotoUser {
   
    public albums:Album[]  = [];
    public photos: Photo[] = [];
    public id :any;
    constructor(albums:any , photos:any,id:any) {
        this.albums = albums;
        this.photos = photos;
        this.id = id;
    }
    async get() {
        this.albums = this.albums.filter((item: Album) => item.userId == this.id);
        const album: Album = Utils.row(this.albums);
        this.photos = this.photos.filter((item: Photo) => item.albumId == album.id);
        return this.photos;
    }
    
}

export {PhotoUser} ;