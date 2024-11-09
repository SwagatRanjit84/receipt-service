import { Request, Response } from "express";
import { storeReceipt, getReceiptById } from "../models/receipt";
import { calculatePoints } from "../services/pointsService";
import Ajv from "ajv";
import ajvFormats from "ajv-formats";
import { receiptSchema } from "../schemas/receiptSchema";

// Initialize Ajv. Ajv is JSON schema validator for receipt
const ajv = new Ajv();
ajvFormats(ajv);

// Check for validation of the receipt using schema
function validateReceipt(data: any): boolean {
  const validate = ajv.compile(receiptSchema);
  const valid = validate(data);
  if (!valid) throw new Error("Invalid receipt format");
  return true;
}

//controller to process the receipt and generate points
export async function processReceipt(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // Validate incoming receipt data
    validateReceipt(req.body);

    const receipt = req.body;
    //calculate points based on the rules
    const points = calculatePoints(receipt);
    const receiptId = storeReceipt(receipt, points);
    res.status(200).json({ id: receiptId });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

// controller to get the points of a receipt with the help of its ID
export async function getReceiptPoints(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  const receiptData = getReceiptById(id);

  if (!receiptData) res.status(404).json({ error: "Receipt data not found" });
  else res.status(200).json({ points: receiptData.points });
}
