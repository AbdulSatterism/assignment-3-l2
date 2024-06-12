import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

// app.use('/api/v1', router);

app.get("/", async (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

// app.use(globalErrorHandler);
// app.use(notFound);

export default app;
