import { Router } from "express";
import { messageController } from "../controllers/messages.controller.js";

const messageRouter = Router();

messageRouter.get("/", messageController.getMessage);
messageRouter.post("/", messageController.addMessage);
messageRouter.patch("/:id", messageController.updateMessage);
messageRouter.delete("/:id", messageController.deleteMessage);

export{messageRouter}