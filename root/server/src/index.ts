import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const app = express();
const port = process.env.PORT || 0; // Let the OS assign you the port

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/submit", (req: express.Request, res: express.Response) => {
  try {
    res.send(JSON.stringify(req.body));
  } catch (error: any) {
    res.send(JSON.stringify(error.message));
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response) => {
  console.error(err);
  res.status(500).send({ error: "An internal server error occurred" });
});

const listener = app.listen(port);
const portConfig = (listener.address() as AddressInfo).port;

const portConfigInColor = `\u001b[1;31m${portConfig}\u001b[0m`;
const pathInColor = `\u001b[1;33m"root/client/src/env-config.json"\u001b[0m`;

console.log(`Server is Running on port: ${portConfigInColor}.`);
console.log(
  `Copy and paste it at ${pathInColor} to establish communication between Server and Client.`
);
