import { Payment } from "../models/Payment.model.js";

const paymentsController = {
  addPayment: async (req, res) => {
    try {
      data = await Payment.create({
        status: req.body.status,
      });
      return res.json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  updatePayment: async (req, res) => {
    try {
      const data = await Payment.findByIdAndUpdate(req.params.id, req.body);
      return res.json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  deletePayment: async (req, res) => {
    try {
      const data = await Payment.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  getPayments: async (req, res) => {
    try {
      const data = await Payment.find({});
      return res.json(data);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export{paymentsController}