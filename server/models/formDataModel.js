const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    movie: {
      type: String,
      required: true,
    },
    show: {
      type: String,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    drink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form_Data = mongoose.model("Form_Data", formDataSchema);

module.exports = Form_Data;
