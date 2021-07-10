import request from "supertest";
import mongoose from "mongoose";

import app from "../../app";
const { USER, PASSWORD, HOST, DB }: any = process.env;

beforeEach((done) => {
  mongoose.disconnect();
	mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`,
	 { useNewUrlParser: true, useUnifiedTopology: true },
		() => done()
  )
})

afterEach((done) => {
  mongoose.disconnect(() => {
    done()
  })
})

describe("GET /users", function () {
  it("Respueta status 200 y array de usuarios", async function () {
   await request(app)
      .get("/api/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
     .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).not.toEqual(0)
		})
  });

});