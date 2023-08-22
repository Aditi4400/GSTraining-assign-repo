"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
function myfunc() {
    var dat = document.querySelector("#loc");
    var value = dat.value;
    var url = "http://api.weatherapi.com/v1/forecast.json?key=58bc621817b14ad189e102303232208&q=".concat(value, "&days=5&aqi=no&alerts=no\n    ");
    fetch(url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        renderdatacurrent(data.current);
        renderdata(data.forecast.forecastday);
        //renderdatacurrent(data.current.temp_c);
    })
        .catch(function (error) {
        console.log("error", error);
    });
}
function renderdata(forecastdata) {
    var ulEle = document.querySelector("#show-data");
    for (var _i = 0, forecastdata_1 = forecastdata; _i < forecastdata_1.length; _i++) {
        var a = forecastdata_1[_i];
        var liEle = document.createElement("li");
        //const url = `https:${a.day.condition.icon}`
        liEle.innerHTML = "\n    <p>\n    <img src=https:".concat(a.day.condition.icon, ">\n    maxtemp:").concat(a.day.maxtemp_c, "<br>\n    mintemp:").concat(a.day.mintemp_c, "</p><br>");
        ulEle.appendChild(liEle);
    }
}
function renderdatacurrent(currentdata) {
    var ulEle = document.querySelector("#show-data");
    var url = "https:".concat(currentdata.condition.icon);
    var liEle = document.createElement("li");
    liEle.innerHTML = "\n    <p>\n    <img src=".concat(url, ">\n    current_temperature:").concat(currentdata.temp_c, "<br>");
    ulEle.appendChild(liEle);
}
