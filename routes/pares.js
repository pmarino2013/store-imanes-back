import { Router } from "express";
import { getPares } from "../controllers/pares.js";

const router = Router();

router.get("/", getPares);

export default router;
