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

            client.messages
                .create({
                    from: twilioNumber,
                    to: String(twilioNumber),
                    body: "You just sent an SMS from TypeScript using Twilio!",
                })
                .then((message) => console.log(message.sid));
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}