import request from "supertest";
import app from "../app";
import mongoose from "mongoose";

const {USER,PASSWORD,HOST,DB }: any = process.env;
beforeEach((done) => {
	mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => done()
  )
 
})

afterEach((done) => {
  mongoose.disconnect(()=>done())
})

describe("GET /posts", function () {
  it("Respueta status 200 y array de publicaciones", async function () {
   await request(app)
      .get("/api/posts")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).not.toEqual(0)
		})
  });

});