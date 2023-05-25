const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  age: {
    type: Number,
    required: true,
  },
  hobbies: {
    type: Array,
  },
});

module.exports = mongoose.model("User", User);
