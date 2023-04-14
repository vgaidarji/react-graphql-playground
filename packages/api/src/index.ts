import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import populationJson from "data/files/population.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/population", (req: Request, res: Response) => {
  return res.status(200).send(populationJson);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
