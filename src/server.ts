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


const PORT = process.env.PORT || 8080;
app.use("/", (req: Request, res:Response) => {
    res.json('0k')
});

app.listen(PORT, () => {
  //console.log(`server started at http://localhost:${PORT}`);
});

export default app;
