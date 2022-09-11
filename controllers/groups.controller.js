import { Group } from "../models/Group.model.js";

const groupController = {
    getGroup: async(req, res) => {
        try {
            const data = await Group.find().populate({path: "studentId", select: "name surname status"})
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },
  
    getGroupOfWeek: async(req, res) => {
        try {
            const data = await Group.findOne({weekOfGroup: req.params.week});
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    addGroupStudy: async(req, res) => {
        try {
            const data = await Group.find({endStudy: req.body.study})
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    addGroup: async(req, res) => {
        try {
           const { nameGroup, putOrderGroup, weekOfgroup, endStudy } = req.body;
           const data = await Group.create({ nameGroup, putOrderGroup, weekOfgroup, endStudy});
           return res.json(data);
        } catch (error) {
            console.log(error.message)
        }
    },

    addGroupStudent: async(req, res) => {
        try {
            const data = await Group.findByIdAndUpdate({$addToset: {studentId: req.body.studentId}});
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    },

    deleteGroup: async(req, res) => {
        try {
            const data = await Group.findByIdAndDelete(req.params.id);
            return res.json(data)
        } catch (error) {
            console.log(error.message)
        }
    }
}

export{groupController}