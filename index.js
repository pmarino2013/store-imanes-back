// const express = require("express");
import app from "./api/index.js";
import cors from "cors";
import dotenv from "dotenv";

import routerKits from "./routes/kits.js";
import routerPares from "./routes/pares.js";

dotenv.config({ path: ".env" });

app.use(cors());
app.use("/api/kits", routerKits);
app.use("/api/pares", routerPares);
