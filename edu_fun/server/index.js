const express = require("express");
const mongoose = require("mongoose");
const queRouter = require('./Routes/addQue');
const authRouter = require('./Routes/auth');
const courseRouter=require('./Routes/addCourse');
const questionsRouter = require("./Routes/fetchQue");




const PORT = process.env.port || 3001;
const app = express();
const db="mongodb+srv://jananthak:T2gfOXBRQGf5tQqF@cluster0.tzhsr42.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



app.use(express.json());
app.use(queRouter);
app.use(authRouter);
app.use(queRouter)
app.use(courseRouter);

app.use(questionsRouter);

mongoose.connect(db).then(()=>{
    console.log("Conection Successful");
}).catch((e)=>{
    console.log("Error",e);
})


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Connected at ${PORT}`)
})