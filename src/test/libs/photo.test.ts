import { PhotoUser, Utils } from '../../libs'
import { Album, Photo } from '../../types';
import {albums, photos, users } from '../data';

describe("Phostos", function () {
    it("Retorna un array sin elementos", async () => {
        const result = await new PhotoUser([], [], 0).get();
        expect(result.length).toEqual(0);
    });
     it("Retorna un array con  elementos", async () => {
        const { userId }:any = Utils.row(users[0]);
        const result = await new PhotoUser(albums, photos, userId).get();
        expect(result.length).not.toEqual(0);
    });
});

