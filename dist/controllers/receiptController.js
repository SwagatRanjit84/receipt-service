"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.processReceipt = processReceipt;
exports.getReceiptPoints = getReceiptPoints;
const receipt_1 = require("../models/receipt");
const pointsService_1 = require("../services/pointsService");
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const receiptSchema_1 = require("../schemas/receiptSchema");
// Initialize Ajv
const ajv = new ajv_1.default();
(0, ajv_formats_1.default)(ajv);
// Validate the receipt using schema
function validateReceipt(data) {
  const validate = ajv.compile(receiptSchema_1.receiptSchema);
  const valid = validate(data);
  if (!valid) {
    throw new Error("Invalid receipt format");
  }
  return true;
}
// Controller to process the receipt and generate points
function processReceipt(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    console.log("data");
    try {
      // Validate incoming receipt data
      validateReceipt(req.body);
      const receipt = req.body;
      // Calculate points based on receipt
      const points = (0, pointsService_1.calculatePoints)(receipt);
      // Store the receipt and its points
      const receiptId = (0, receipt_1.storeReceipt)(receipt, points);
      // Return the receipt ID
      res.status(200).json({ id: receiptId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
}
// Controller to fetch the points of a receipt by its ID
function getReceiptPoints(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    console.log("data");
    const { id } = req.params;
    const receiptData = (0, receipt_1.getReceiptById)(id);
    if (!receiptData) res.status(404).json({ error: "Receipt data not found" });
    res.status(200).json({ points: receiptData.points });
  });
}
