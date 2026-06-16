import { Router } from "express";
import { getKits } from "../controllers/kits.js";

const router = Router();

router.get("/", getKits);

export default router;
