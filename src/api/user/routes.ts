import express from "express";
const router = express.Router();
//Controlador user
import UserController from "./controller";

//Rutas de la clase UserController
router.get("/users", UserController.getUsers);


export default router;
