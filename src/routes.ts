import { Router } from "express";

import { UserController } from './controllers/userController/userController';


const userController = new UserController();

const router = Router();


router.post("/users/create", userController.create)
router.get("/users/find", userController.find)
router.post("/users/sign_in", userController.signIn)
router.delete("/delete/users", userController.delete)

export default router  