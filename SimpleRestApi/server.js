const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const schedule = require('node-schedule');

const db = require("./DB/DataController");
const Wf = require("./DB/WeatherForecast");
const cors = require('cors');
  
// Function call
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

var j = schedule.scheduleJob({hour: 10, minute: 00}, function(){
    Wf.forecast(async function(Temperature){
        await db.createData(Temperature,"Last7");
        console.log("added row");
    })
});
//return all data
// {"Temperature":[3.71,4.77,2.76,88]} //wyniki 17.01.2022 9:00
app.get("/CurrentTemp",async (req,res)=>{
    Wf.forecast(function(Temperature){
        res.status(200).json({Temperature});
    })
});
app.get("/Last7",async (req,res)=>{
    const Data = await db.getAllData("Last7");
    res.status(201).json({Data});
});



//update record
app.patch("/Data/:id",async(req,res)=>{
    const id = await db.updateData(req.params.id,req.body);
    res.status(200).json({id});
});

//drop record
app.delete("/Data/:id",async(req,res) =>{
    await db.deleteData(req.params.id);
    res.status(200).json({success:true});
})

app.listen(8080,()=> console.log("server is running on port 8080"));