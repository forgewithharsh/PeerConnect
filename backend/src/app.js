import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("port", process.env.PORT || 8000);
app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://guleriah59:apnazoomcall@apnazoom.mlt6g8g.mongodb.net/?appName=ApnaZoom"
  );
  console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("LISTENING ON PORT 8000");
  });
};

start();
