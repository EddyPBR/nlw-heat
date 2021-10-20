import express from "express";
import http from "http";
import { Server } from "socket.io";
import "express-async-errors";
import { ErrorHandling } from "@middlewares/ErrorHandling";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(ErrorHandling);

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log(`User connected on socket ${socket.id}`);
});

export { serverHttp, io };
