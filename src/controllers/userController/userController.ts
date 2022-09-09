import { Request, Response } from 'express';

import User from "../../model/User";
import { SendSMSService } from '../../service/SendSMSService';

export class UserController {

    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password, phone } = req.body

        try {

            const find = await User.findOne({ email });

            if (find) {
                return res.status(400).json({ error: "esse email já está em uso" });
            }

            const data = [];

            data.push({ email, name, password, phone })

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

    async signIn(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        try {

            const find = await User.findOne({ email });

            if (!find) {
                return res.status(400).json({ error: "email não foi registrado" });
            }

            if (password !== find.password) {
                return res.status(400).json({ error: "senha errada" });
            }

            const sms = await new SendSMSService().execute(find.phone);

            return res.status(201).json({ data: find, sms });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }


    async delete(req: Request, res: Response): Promise<Response> {
        try {
            await User.deleteMany();
            return res.status(200).json();
        } catch (err) {
            return res.status(400).json({ error: err, message: err.message });
        }
    }
}