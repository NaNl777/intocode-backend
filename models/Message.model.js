import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Mesagge = mongoose.model("Message", messageSchema);

export { Mesagge };
