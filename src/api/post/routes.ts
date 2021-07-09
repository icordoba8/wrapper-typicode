import express from "express";
const router = express.Router();
//Controlador user
import PostController from "./controller";

//Rutas de la clase UserCPostControllerontroller
router.get("/posts", PostController.getPosts);

export default router;
