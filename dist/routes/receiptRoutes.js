"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/receiptRoutes.ts
const express_1 = __importDefault(require("express"));
const receiptController_1 = require("../controllers/receiptController");
const router = express_1.default.Router();
// Define routes
router.post("/receipts/process", receiptController_1.processReceipt);
router.get("/receipts/:id/points", receiptController_1.getReceiptPoints);
exports.default = router;
