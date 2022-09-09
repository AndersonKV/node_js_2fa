import { Router } from "express";

import { UserController } from './controllers/userController/userController';

import { SmsController } from './controllers/messageController/smsController';


const userController = new UserController();
const smsController = new SmsController();

const router = Router();


router.post("/users/create", userController.create)
router.get("/users/find", userController.find)
router.post("/users/sign_in", userController.signIn)
router.post("/sms/send", smsController.submit)
router.delete("/delete/users", userController.delete)

export default router  