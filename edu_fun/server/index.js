const mongoose = require("Mongoose");
const express = require("express");
const queRouter = require('./Routes/addQue');
const authRouter = require('./Routes/auth');




const PORT = process.env.port || 3000;
const app = express();
const db="mongodb+srv://jananthak:L1Wd4SxtSyZ7WEqQ@edufun.up0r2bb.mongodb.net/?retryWrites=true&w=majority&appName=Edufun"


app.use(express.json());
app.use(queRouter);
app.use(authRouter);
app.use(queRouter)

mongoose.connect(db).then(()=>{
    console.log("Conection Successful");
}).catch((e)=>{
    console.log("Error",e);
})


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Connected at ${PORT}`)
})