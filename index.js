const express = require('express'),
app = express();
require("dotenv").config();

require('./DL/db').connect();
app.use(require('cors')());
app.use(express.json());
app.use('/messages',require('./routes/message.route'));

app.listen(5555,()=>{
    console.log("##### server is listening #####");
})
