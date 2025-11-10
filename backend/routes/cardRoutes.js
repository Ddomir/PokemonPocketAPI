import express from "express";
import { getCards, postCard } from "../controllers/cardController.js";



const router = express.Router();

router.get("/cards", getCards);
router.post("/card", postCard);

export default router;