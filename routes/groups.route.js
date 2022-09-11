import { Router } from "express";
import { groupController } from "../controllers/groups.controller.js";;

const groupRouter = Router();

groupRouter.get("/", groupController.getGroup);
groupRouter.get("/:week", groupController.getGroupOfWeek);
groupRouter.patch("/study", groupController.addGroupStudy);
groupRouter.post("/", groupController.addGroup);
groupRouter.patch("/:id", groupController.addGroupStudent);
groupRouter.delete("/:id", groupController.deleteGroup);

export{groupRouter}
