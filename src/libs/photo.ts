
import { Album, Photo } from "../types";
import {Utils} from "./util";

class PhotoUser {
   
    public albums:Album[]  = [];
    public photos: Photo[] = [];
    public id :number;
    constructor(albums:Array<Album> , photos:Array<Photo>,id:number) {
        this.albums = albums;
        this.photos = photos;
        this.id = id;
    }
    async get() {
        if (this.albums.length>0 && this.photos.length>0 && this.id ) 
        {
            this.albums = this.albums.filter((item: Album) => item.userId === this.id);
            const album:any = Utils.row(this.albums);
            this.photos = this.photos.filter((item: Photo) => item.albumId === album.id);
        }
        return this.photos;
    }
    
}

export {PhotoUser} ;