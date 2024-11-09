"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const receiptRoutes_1 = __importDefault(require("./routes/receiptRoutes")); // Make sure this path is correct
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON requests
app.use(body_parser_1.default.json());
// Simple test route
app.get("/", (req, res) => {
    res.send("Hello from Node.js!");
});
// Use the receipt routes (this should be correct if you have defined your routes correctly)
app.use("/", receiptRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
