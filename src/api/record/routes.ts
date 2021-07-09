import express from "express";
const router = express.Router();
//Controlador user
import RecordController from "./controller";

//Rutas de la clase RecordController
router.get("/records", RecordController.getRecords);
router.put("/records/:id", RecordController.updateRecord);
router.delete("/records/:id", RecordController.removeRecord);

export default router;
