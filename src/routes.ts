import { Router } from "express";

import { SmsController } from './SmsController';
const smsController = new SmsController();
const router = Router();

router.post("/send", smsController.submit)

export default router  