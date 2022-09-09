import { Request, Response } from 'express';
import dotenv from 'dotenv';

import { Twilio } from 'twilio';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

export class SendSMSService {

    async execute(phone: string) {
        const hidePhone = phone.replace(/\d(?=(?:\D*\d){4})/g, "*");

        try {
            const digit = Math.floor(100000 + Math.random() * 900000);


            const client = new Twilio(String(accountSid), String(authToken));

            await client.messages.create({
                from: twilioNumber,
                to: `+${phone}`,
                body: "Seu código de autenticação é " + digit,
            })

            return { digit, message: "codigo foi enviado para o celular " + hidePhone };
        } catch (err) {
            throw new Error("falha ao enviar sms para o numero " + hidePhone)
        }
    }
}