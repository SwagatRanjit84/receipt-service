"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReceiptId = generateReceiptId;
exports.storeReceipt = storeReceipt;
exports.getReceiptById = getReceiptById;
// src/models/receipt.ts
const uuid_1 = require("uuid");
// In-memory store for receipts
const receipts = {};
// Function to generate a unique ID for each receipt
function generateReceiptId() {
    return (0, uuid_1.v4)();
}
// Function to store the receipt and its points
function storeReceipt(receipt, points) {
    const receiptId = generateReceiptId();
    receipts[receiptId] = { receipt, points };
    return receiptId;
}
// Function to get a receipt by its ID
function getReceiptById(receiptId) {
    return receipts[receiptId];
}
