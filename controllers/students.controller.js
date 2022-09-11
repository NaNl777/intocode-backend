import { Student } from "../models/Student.model.js";

const studentController = {
    addStudent: async(req, res) => {
        try {
            const data = await Student.create({
                name: req.body.name,
                surname: req.body.surname,
                age: req.body.age,
                status: req.body.status,
                group: req.body.group,
                message: req.body.message,
                payment: req.body.payment
            })
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    getStudents: async(req, res) => {
        try {
            const data = await Student.find().populate({path: "message", select: "text _id"}).populate({path: "payment", select: "text _id"}).populate({path:"group", select: "name_group _id"});
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    deleteStudent: async(req, res) => {
        try {
            const data = await Student.findByIdAndDelete(req.params.id);
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    updateStudent: async(req, res) => {
        try {
            const data = await Student.findByIdAndUpdate(req.params.id, req.body);
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    getStudentByGroup: async(req, res) => {
        try {
            const data = await Student.find({group: req.params.id});
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },
    
    getMessageByStudent: async(req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            return res.json(student.message)
        } catch (error) {
            console.log(error.message)
        }
    },

    getStudentDidPayments: async(req, res) => {
        try {
            const data = await Student.find({payment: req.params.id});
            return res.json()
        } catch (error) {
            
        }
    },

    getStudentByStatus: async(req, res) => {
        try {
            const data = await Student.find({status: req.body.status});
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    addMessageForStudent: async(req, res) => {
       const student = await Student.findById(req.params.id)

        try {
            const data = await student.updateOne({
                $addToSet: {message: req.body.message}
            })
            return res.json(data)
        } catch (error) {
            console.log(error)
        }
    },

    addStudentForGroup: async(req, res) => {
        const student = await Student.findById(req.params.id);

        try {
            const data = student.updateOne({
                $addToSet: {group: req.body.group}
            });
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },
 
     getOfferForStudentByGroup: async(req, res) => {
      const groupOfStudents = await Student.find({ group: req.params.id });
      const offerStudents = await Student.find({
        group: req.params.id,
        status: "Offer", //Таким образом из ключа status будет актуален только оффер
      });
      const percent = (100 / groupOfStudents.length) * offerStudents.length;
        return res.json(`Вот процент от учеников, которым пришли офферы: => ${percent}%`)
     }
     
}

export{studentController}

