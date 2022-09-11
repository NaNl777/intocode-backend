import { Router } from "express";
import { paymentsController } from "../controllers/payments.controller.js";

const paymentRouter = Router();

paymentRouter.get("/", paymentsController.getPayments);
paymentRouter.post("/",  paymentsController.addPayment);
paymentRouter.patch("/:id", paymentsController.updatePayment);
paymentRouter.delete("/:id", paymentsController.deletePayment);

export{paymentRouter};