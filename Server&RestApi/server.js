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

var j = schedule.scheduleJob({hour: 9, minute: 05}, function(){
    Wf.forecast(async function(Temperature){
        await db.createData(Temperature,"Weather");
        console.log("added row");
    },latitude,longitude)
});

//adding city with coordinates to database ( this enable weather check for new city )
app.post("/AddCoords",async (req,res)=>{
    const checkForExisting = await db.selectSpecific("Coords","Name",req.body.Name);
    if(checkForExisting.length == 0)
    {
        const Data = await db.createData(req.body,"Coords");
        res.send("Pomyślnie dodano nowe miasto");
    }else
    {
        res.send("Byczq takie mastu juz mamy");
    }
});

//return current temperature in warsaw
app.get("/CurrentTemp",async (req,res)=>{
    Wf.forecast(function(Temperature){
        res.status(200).json({Temperature});
    },latitude,longitude)
});
//return current temperature in city with given name (if in database)
app.get("/CurrentTemp/:name",async (req,res)=>{
    const Data = await db.getLongitudeLatitude(req.params.name);
    Wf.forecast(function(Temperature){
        res.status(200).json({Temperature});
    },
    Data.Latitude,Data.Longitude)
});

//return temperature from last 7 days in poland
app.get("/Weather7",async (req,res)=>{
    const Data = await db.getData("Weather",7);
    res.status(201).json({Data});
});
//return temperature from last 30 days in poland
app.get("/Weather30",async (req,res)=>{
    const Data = await db.getData("Weather",30);
    res.status(201).json({Data});
});

app.listen(8080,()=> console.log("server is running on port 8080"));