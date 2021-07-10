import express, { Application, Request, Response  } from "express";
import cors from "cors";
require("dotenv").config();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true,}));

const corsOptionsDelegate = (req: Request, callback: any) => {
  const corsOptions = {credentials: true,origin: req.header("Origin")};
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate));
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});
//Importamos las rutas de la api
import apiRouter from "./api";
app.use("/api", apiRouter);

export default app;
