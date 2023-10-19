const { bollywood, hollywood, technology, fitness, food } = require("../dummydata/alldata")

    const data_From_Bollywood = (req,res)=>{
       return res.send(bollywood)
    }

    const data_from_Hollywood = (req,res)=>{
      return  res.send (hollywood)
    }

    const data_From_Technology = (req,res)=>{
       return res.send ( technology)
    }
    const data_From_Fitness = (req,res) =>{
       return res.send (fitness)
    }
    const data_from_Food = (req,res)=>{
      return  res.send (food)
    }

    module.exports = {data_From_Bollywood,data_from_Hollywood,data_From_Technology,data_From_Fitness,data_from_Food}