"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReceiptId = generateReceiptId;
exports.storeReceipt = storeReceipt;
exports.getReceiptById = getReceiptById;
const uuid_1 = require("uuid"); //uuid library is used to to generate the receipt's id.
// in- memory store for receipts
const receipts = {};
// generate a unique ID for the receipt
function generateReceiptId() {
    return (0, uuid_1.v4)();
}
// store the points of receipt
function storeReceipt(receipt, points) {
    const receiptId = generateReceiptId();
    receipts[receiptId] = { receipt, points };
    return receiptId;
}
// fetch a receipt by its ID
function getReceiptById(receiptId) {
    return receipts[receiptId];
}
