const express = require('express');
const connectionToDb = require('./config/connection');
const UserRoute = require('./controllers/user.controller');
const empRoute = require('./controllers/employee.controller');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use("/user", UserRoute)
app.use("/", empRoute)


app.listen(8001, async()=>{
    try {
        await connectionToDb
         console.log("Connected to database");
        console.log("cool...server started running");
    } catch (error) {
        console.log(error.message);
    }
   
})