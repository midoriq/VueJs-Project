const schedule = require('node-schedule');

const db = require("../DB/DataController");
const Wf = require("./WeatherForecast");
const Coords = require("./Coords");

function createMeasurment(Hours,Minutes)
{
    schedule.scheduleJob({hour: Hours, minute: Minutes}, function(){
        Wf.forecast(async function(Temperature){
            Temperature.nrMeasurments = 1;
            await db.createData(Temperature,"Weather");
            console.log("Created New Measurment");
        },
        Coords.latitude,
        Coords.longitude)
    });
}
function measurment(Hours,Minutes){
    schedule.scheduleJob({hour: Hours, minute: Minutes}, function(){
        Wf.forecast(async function(Temperature){
            await db.updateWeatherMeasurment(Temperature);
            console.log("Updated Last Measurment");
        },
        Coords.latitude,
        Coords.longitude)
    });
}

module.exports = {
    measurment,
    createMeasurment
}


