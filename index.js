 import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connect } from './DL/db.js';
import messageRoutes from './routes/message.route.js';
import { initIo } from './socket_service/index.js';


const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use('/messages', messageRoutes);
const port = process.env.PORT || 5050;

const server = app.listen(port, () => console.log(`#### Server running on port ${port} ####`));
initIo(server)