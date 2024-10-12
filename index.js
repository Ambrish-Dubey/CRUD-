import express from "express"                   //installing express
import mongoose from "mongoose"                 //installing db 
import bodyParser from "body-parser"            //used to extract useful data
import dotenv from "dotenv"                     //has all the production values
import route from "./routes/userRoute.js"       //certain routes

const app = express();
app.use(bodyParser.json());

dotenv.config();                            //configuring production/development values from .env file

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL; 

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected Successfully.")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : http://localhost:${PORT}`)
    })
}).catch(error => console.log(error));

app.use("/api/task", route)