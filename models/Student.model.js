import mongoose from "mongoose";

const studentSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    age: {
        type: Number,
    },

    payment: {
        ref: "Payment",
        type: mongoose.Schema.Types.ObjectId
    },
 

    group: {
        ref: "Group",
        type: mongoose.Schema.Types.ObjectId
    },

    message: [
        {
        ref: "Message",
        type: mongoose.Schema.Types.ObjectId
    }
    ],

    status: [
        {
        type: String
    }
]
})


const Student = mongoose.model("Student", studentSchema)

export{Student}