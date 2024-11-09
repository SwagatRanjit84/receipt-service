import express from "express";
import { processReceipt } from "../controllers/receiptController";

const router = express.Router();
// defining routes
router.post("/receipts/process", processReceipt);

export default router;
