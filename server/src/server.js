const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Form_Data = require("../models/formDataModel");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send("Hello World from API");
});

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

app.post("/form_data", async (req, res) => {
  try {
    if (req.body._id && !isValidObjectId(req.body._id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const data = await Form_Data.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3001;

mongoose
  .connect(`mongodb+srv://${process.env.MONGODB_URI}` || "")
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
