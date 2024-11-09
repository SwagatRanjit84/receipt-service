import express from "express";
import bodyParser from "body-parser";
import receiptRoutes from "./routes/receiptRoutes";

const app = express();
const port = process.env.PORT || 3000;

// parse JSON requests using middleware
app.use(bodyParser.json());

// defining the receipt routes
app.use("/", receiptRoutes);

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
