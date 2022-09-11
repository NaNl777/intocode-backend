import { Mesagge } from "../models/Message.model.js";

const messageController = {
  addMessage: async (req, res) => {
    try {
      data = await Mesagge.create({
        text: req.body.text,
      });
      return res.json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  updateMessage: async (req, res) => {
    try {
      const data = await Mesagge.findByIdAndUpdate(req.params.id, req.body);
      return res.json(data);
    } catch (error) {
        console.log(error.message)
    }
  },

  deleteMessage: async(req, res) => {
    try {
        const data = await Mesagge.findByIdAndDelete(req.params.id);
        return res.json(data)
    } catch (error) {
        console.log(error.message)
    }
  },

  getMessage: async(req, res) => {
    try {
        const data = await Mesagge.find({})
        return res.json(data)
    } catch (error) {
        console.log(error.message)
    }
  }
};

export{messageController}
