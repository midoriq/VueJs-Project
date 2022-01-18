const knex = require("./knex");

// knex("name of the table").operation("argument");
function createData(Data,Tname){
    return knex(Tname).insert(Data);
};
function getAllData(Tname){
    return knex(Tname).select("*");
};
async function getWeather(nrRows){
    const maxId = await knex(Tname).select("id");
    return knex(Tname).select("*").where("id",'>',maxId.length - nrRows);
}
function getLongitudeLatitude(name){
    return knex("Coords").select(['Latitude' ,'Longitude']).where("Name",'=',name).then(result => result[0]);
};
function selectSpecific(Tname,Rname,Content){
    return knex(Tname).select(Rname).where(Rname,'=',Content);
};
async function updateWeatherMeasurment(Data){
    const maxId = await knex("Weather").select("id");
    const lastMeasurment = await knex("Weather").select("*").where("id",'=',maxId.length).then(result => result[0]);
    const Mnr = lastMeasurment.nrMeasurments;

    const newMeasurment = '{}';
    const obj = JSON.parse(newMeasurment);
    obj.Id = lastMeasurment.Id;
    obj.Temp = Math.round((parseFloat(Data.Temp) + parseFloat(lastMeasurment.Temp*Mnr)) / (Mnr+1) *100)/100;
    obj.Feels_like = Math.round((parseFloat(Data.Feels_like) + parseFloat(lastMeasurment.Feels_like*Mnr))/(Mnr+1) *100)/100;
    obj.MinTemp = Math.round((parseFloat(Data.MinTemp) + parseFloat(lastMeasurment.MinTemp*Mnr)) / (Mnr+1) *100)/100;
    obj.MaxTemp = Math.round((parseFloat(Data.MaxTemp) + parseFloat(lastMeasurment.MaxTemp*Mnr)) / (Mnr+1) *100)/100;
    obj.Pressure = Math.round((parseFloat(Data.Pressure) + parseFloat(lastMeasurment.Pressure*Mnr)) / (Mnr+1) *100)/100;
    obj.Humidity = Math.round((parseFloat(Data.Humidity) + parseFloat(lastMeasurment.Humidity*Mnr)) / (Mnr+1) *100)/100;
    obj.nrMeasurments = (Mnr+1);

    console.log(obj);
    return knex("Weather").where("id",'=',maxId.length).update(obj);
};

module.exports = {
    createData,
    getAllData,
    getWeather,
    getLongitudeLatitude,
    selectSpecific,
    updateWeatherMeasurment
}