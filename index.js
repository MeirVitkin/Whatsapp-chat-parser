import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connect } from './DL/db.js';
import messageRoutes from './routes/message.route.js';


const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use('/messages', messageRoutes);
const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`#### Server running on port ${port} ####`));
