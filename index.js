
const express = require("express");
const allroutes = require("./router/allroutes");

const portNum=4001 ;


const app = express();

            const corse = require("cors")

            app.use(corse({
                origin:"*"
            }))


app.use("/api",allroutes) // http://localhost:4001/api/bollywood/:id

app.get("/", (req,res)=>{
    res.send("Pradum")
})

app.listen(portNum,()=>{
    try{
        console.log(`Running port is ${portNum}`)
    }
    catch(err){
        console.log(`Error ${err}`)
    }
})

