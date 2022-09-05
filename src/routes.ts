import { Router } from "express";

import { UserController } from './controllers/userController/userController';

import { SmsController } from './SmsController';


const userController = new UserController();
const smsController = new SmsController();

const router = Router();


router.post("/users/create", userController.create)
router.get("/users", userController.find)
router.post("/send", smsController.submit)

export default router  