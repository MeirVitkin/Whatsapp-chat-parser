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

app.listen(5555, () => {
    console.log("##### server is listening #####");
});
