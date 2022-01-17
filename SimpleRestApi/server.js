const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const schedule = require('node-schedule');

const db = require("./DB/DataController");
const Wf = require("./DB/WeatherForecast");
const cors = require('cors');
  
const latitude = 52.237049;
const longitude = 21.017532; 

// Function call
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

var j = schedule.scheduleJob({hour: 10, minute: 00}, function(){
    Wf.forecast(async function(Temperature){
        await db.createData(Temperature,"Weather");
        console.log("added row");
    },latitude,longitude)
});
//return all data
app.get("/CurrentTemp",async (req,res)=>{
    Wf.forecast(function(Temperature){
        res.status(200).json({Temperature});
    },latitude,longitude)
});
app.get("/CurrentTemp/:name",async (req,res)=>{
    const Data = await db.getLongitudeLatitude(req.params.name);
    Wf.forecast(function(Temperature){
        res.status(200).json({Temperature});
    },
    Data.Latitude,Data.Longitude)
});

app.get("/Weather7",async (req,res)=>{
    const Data = await db.getData("Weather",7);
    res.status(201).json({Data});
});
app.get("/Weather30",async (req,res)=>{
    const Data = await db.getData("Weather",30);
    res.status(201).json({Data});
});



// //update record
// app.patch("/Data/:id",async(req,res)=>{
//     const id = await db.updateData(req.params.id,req.body);
//     res.status(200).json({id});
// });
// //drop record
// app.delete("/Data/:id",async(req,res) =>{
//     await db.deleteData(req.params.id);
//     res.status(200).json({success:true});
// })

app.listen(8080,()=> console.log("server is running on port 8080"));