import dotenv from 'dotenv';

dotenv.config();

const DATABASE = process.env.DATABASE;

import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${DATABASE}:<password>@cluster0.p2mkkj6.mongodb.net/?retryWrites=true&w=majority`);