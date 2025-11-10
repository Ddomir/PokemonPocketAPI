import express from "express";
import { getMoves, postMove } from "../controllers/moveController.js";

const router = express.Router();

router.get("/moves", getMoves);
router.post("/move", postMove);

export default router;