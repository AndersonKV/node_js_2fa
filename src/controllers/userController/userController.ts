import { Request, Response } from 'express';


export class userController {

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body

        try {

            return res.status(201);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}