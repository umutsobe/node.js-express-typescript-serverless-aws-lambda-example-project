import express, { Request, Response } from "express";
import serverless from "serverless-http";
import books from "./routes/books.route";
import {message} from "../env.config"

const app = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json([{ stage: "wwwwwwww=" + message}]);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

app.use("/books", books);

export const server = app;
export const handler = serverless(app);
