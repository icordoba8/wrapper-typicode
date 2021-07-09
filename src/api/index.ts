import express, { Router } from "express";
const api = express.Router();

//Importamos las rutas de los empoint
import user from "./user/routes";
import photo from "./photo/routes";
import post from "./post/routes";
import record from "./record/routes";

api.use("/", user);
api.use("/", photo);
api.use("/", post);
api.use("/", record);

export default api;
