import express from "express";
import {
  processReceipt,
  getReceiptPoints,
} from "../controllers/receiptController";

const router = express.Router();
// defining routes
router.post("/receipts/process", processReceipt);
router.get("/receipts/:id/points", getReceiptPoints);

export default router;
