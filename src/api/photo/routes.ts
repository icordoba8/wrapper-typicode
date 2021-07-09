import express from "express";
const router = express.Router();
//Controlador photo
import PhotoController from "./controller";

//Rutas de la clase UserCPhotoControllerontroller
router.get("/photos/users/:id", PhotoController.getUserPhoto);

export default router;
