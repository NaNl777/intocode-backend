import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema)

export{Payment}