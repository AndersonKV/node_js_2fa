import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

import db from './connection'

db.connect();
const port = 3333;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);


server.listen(port, () => {
    console.log(`listening on port ${port}`)
})




