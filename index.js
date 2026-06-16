// const express = require("express");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import conectDB from "./database/config.js";
import routerKits from "./routes/kits.js";
import routerPares from "./routes/pares.js";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use("/api/kits", routerKits);
app.use("/api/pares", routerPares);

conectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server online en puerto: ${port}`);
    });
  })
  .catch((err) => {
    console.error(
      "No se pudo iniciar el servidor por error en la base de datos:",
      err,
    );
    process.exit(1);
  });
