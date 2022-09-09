import { Request, Response } from 'express';
import dotenv from 'dotenv';

import { Twilio } from 'twilio';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;


export class SmsController {

    async submit(req: Request, res: Response) {
        const { message, number } = req.body


        try {
            const client = new Twilio(String(accountSid), String(authToken));

            const response = await client.messages.create({
                from: twilioNumber,
                to: `+${number}`,
                body: "Seu código de autenticação é 555 666",
            })

            return res.status(201);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}