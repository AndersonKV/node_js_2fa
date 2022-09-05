import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';
import "./connection";

const server = express();

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
server.listen(3333);




