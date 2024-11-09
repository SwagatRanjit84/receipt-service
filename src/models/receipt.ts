import { v4 as uuidv4 } from "uuid"; //uuid library is used to to generate the receipt's id.

// in- memory store for receipts
const receipts: Record<string, { receipt: any; points: number }> = {};

// generate a unique ID for the receipt
export function generateReceiptId(): string {
  return uuidv4();
}

// store the points of receipt
export function storeReceipt(receipt: any, points: number): string {
  const receiptId = generateReceiptId();
  receipts[receiptId] = { receipt, points };
  return receiptId;
}

// fetch a receipt by its ID
export function getReceiptById(receiptId: string) {
  return receipts[receiptId];
}
