import { Router } from "express";
import { studentController } from "../controllers/students.controller.js";

const studentRouter = Router();

studentRouter.get("/", studentController.getStudents);
studentRouter.get("/group/:id", studentController.getStudentByGroup);
studentRouter.get("/status", studentController.getStudentByStatus);
studentRouter.get("/message/:id", studentController.getMessageByStudent);

studentRouter.get("/group/offer/:id", studentController.getOfferForStudentByGroup); 

studentRouter.patch("/group/:id", studentController.addStudentForGroup);
studentRouter.post("/", studentController.addStudent);
studentRouter.patch("/message/:id",  studentController.addMessageForStudent);
studentRouter.patch("/:id", studentController.updateStudent);
studentRouter.delete("/:id", studentController.deleteStudent);

export{studentRouter}
