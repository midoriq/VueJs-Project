const request = require('request'); 
var API_KEY = '31205224be5780b275da435258517fba'; 
function forecast(callback) { 
  
    var latitude = 52.237049;
    var longitude = 21.017532; 
    var url = `http://api.openweathermap.org/data/2.5/weather?`
                +`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    request({ url: url, json: true }, function (error, response) { 
        if (error) { 
            console.log('Unable to connect to Forecast API'); 
        } 
        const record = '{"Temp":1,"MaxTemp":1,"MinTemp":1,"Humidity":1}';
        const obj = JSON.parse(record);
        obj.Temp = Math.round((response.body.main.temp - 273.15)*100)/100;
        obj.MaxTemp = Math.round((response.body.main.temp_max - 273.15)*100)/100;
        obj.MinTemp = Math.round((response.body.main.temp_min - 273.15)*100)/100;
        obj.Humidity = response.body.main.humidity;
        console.log(obj);
        return callback(obj);
    });
    } 
module.exports ={
    forecast
}