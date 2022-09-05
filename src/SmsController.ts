import { Request, Response } from 'express';
import dotenv from 'dotenv';

import { Twilio } from 'twilio';

dotenv.config();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;


console.log({ twilioNumber })
export class SmsController {

    async submit(req: Request, res: Response) {
        const { message, number } = req.body


        try {
            const client = new Twilio(String(accountSid), String(authToken));

            const response = await client.messages.create({
                from: twilioNumber,
                to: String(twilioNumber),
                body: "You just sent an SMS from TypeScript using Twilio!",
            })

            console.log(response.sid)
            return res.status(200).json({ success: true });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}