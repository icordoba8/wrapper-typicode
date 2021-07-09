import request from "supertest";
import app from "../server";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { RecordAction } from "../libs";
import axios from "axios";
import { User } from "../types";
import RecordRequestModel from "../db/models/recordrequest";
const api = request(app);
const { USER, PASSWORD, HOST, DB, API }: any = process.env;
 
var req:any  =  {
    originalUrl: "/api/users",
    hostname:'localhost:8080',
    protocol:'http',
    url:`${req?.protocol}://${req?.hostname}${req?.originalUrl}`,
    method: 'GET'
}
let _id: string = '';
beforeEach((done) => {
	mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`,
	 { useNewUrlParser: true, useUnifiedTopology: true },
    async () => {
        const record = new RecordRequestModel({
        date: Date.now(),
        request: req,
        records: []
        });
      record.save()
      done()
    }
  )

})
afterEach((done) => {
  mongoose.disconnect(() => done())
})

describe("Records", function () {
  it("Respueta status 200 y array de peticioens", async function () {
   await api
      .get("/api/records")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).not.toEqual(0)
      })
    
  });
  it("Guardar registro", async function () {
     
    const record = new RecordRequestModel({
      date: Date.now(),
      request: req,
      records: []
    });
      const response = await record.save();
    _id = response._id;
    expect(response._id).toEqual(expect.objectContaining(response._id))
  });

  
  it("Actualizar registro", async function () {
    
      const data: any = {
        params: {
          id:_id
        },
        body: {
          request: {
              originalUrl: "/api/posts",
              url: "http://localhost/api/posts",
              method: "GET"
          },
          records: [{
            name:"prueba"
          }]
        }
      }
    
      const response = await new RecordAction(req).update(data);
      expect(response.nModified).toEqual(1);
    });
  
   
  it("Eliminar  registro  ", async function () {
     
      const data: any = {
        params: {
          id:_id
        }
      }
      
    const response = await new RecordAction(req).remove(data);
    expect(response.deletedCount).toEqual(1);
  });
});

