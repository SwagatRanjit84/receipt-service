"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const receiptRoutes_1 = __importDefault(require("./routes/receiptRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// parse JSON requests using middleware
app.use(body_parser_1.default.json());
// defining the receipt routes
app.use("/", receiptRoutes_1.default);
// error handling middleware for uncaught errors routes
app.use((req, res) => {
    res.status(500).json({
        error: "Not Found",
        message: `Internal server error.`,
    });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
