import { Request, Response } from 'express';

import User from "../model/User";

export class UserController {

    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        try {
            const data = [];

            data.push({ email, name, password })

            const user = await User.create(data);
            return res.status(201).json({ user });
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }

    async find(req: Request, res: Response): Promise<Response> {

        try {

            const user = await User.find();
            return res.status(201).json({ user });
        } catch (err) {
            return res.status(400).json({ error: err, message: err.message });
        }
    }
}