
const {data_From_Bollywood,data_from_Hollywood,data_From_Technology,data_From_Fitness,data_from_Food}= require("../controller/controller")


const allroutes=require("express").Router()


allroutes.get("/bollywood",data_From_Bollywood)

allroutes.get("/hollywood", data_from_Hollywood)

allroutes.get("/technology" ,data_From_Technology)

allroutes.get("/fitness" ,data_From_Fitness)

allroutes.get("/food" , data_from_Food)



module.exports=allroutes ;