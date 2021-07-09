import express, { Application, Request, Response  } from "express";
import cors from "cors";
require("dotenv").config();

const app: Application = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const corsOptionsDelegate = (req: Request, callback: any) => {
  let corsOptions = {
    credentials: true,
    origin: req.header("Origin"),
  };
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));
//Importamos las rutas de la api
import apiRouter from "./api";
app.use("/api", apiRouter);
const PORT = process.env.PORT || 8080;
// app.use("/", (req: Request, res:Response) => {
//     res.json('0k')
// });
app.use("/api", apiRouter);
const server = app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

export default server;
