import mongoose from "mongoose";

const groupSchema = mongoose.Schema({
  name_group: {
    type: String,
    required: true,
  },

  studentId: [
    {
    ref: "Student",
    type: mongoose.Schema.Types.ObjectId,
  },
],

  putOrderGroup: {
    type: Number
  },

  weekOfgroup: {
    type: Number,
  },

  endStudy: {
    type: Boolean,
  },
});

const Group = mongoose.model('Group', groupSchema)

export{Group}