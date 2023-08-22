import {Current, Forecastday, Weather } from "./types";

function myfunc() {
    const dat=document.querySelector("#loc") as HTMLInputElement;
    const value=dat.value;
    const url=`http://api.weatherapi.com/v1/forecast.json?key=58bc621817b14ad189e102303232208&q=${value}&days=5&aqi=no&alerts=no
    `;
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data:Weather) => {
      console.log(data);
      renderdatacurrent(data.current);
      renderdata(data.forecast.forecastday);
      
      //renderdatacurrent(data.current.temp_c);

      })
    .catch((error) => {
      console.log("error", error);
    });
      


}

function renderdata(forecastdata:Forecastday[]):void
{
    
  const ulEle=<HTMLUListElement>document.querySelector("#show-data");

  for(let a of forecastdata)
  {  
    const liEle= <HTMLLIElement>document.createElement("li");
    //const url = `https:${a.day.condition.icon}`
    liEle.innerHTML=`
    <p>
    <img src=https:${a.day.condition.icon}>
    maxtemp:${a.day.maxtemp_c}<br>
    mintemp:${a.day.mintemp_c}</p><br>`;
    ulEle.appendChild(liEle);
  }
}

function renderdatacurrent(currentdata : Current) : void
{
  const ulEle=<HTMLUListElement>document.querySelector("#show-data");
    const url = `https:${currentdata.condition.icon}`
    const liEle= <HTMLLIElement>document.createElement("li");
    liEle.innerHTML=`
    <p>
    <img src=${url}>
    current_temperature:${currentdata.temp_c}<br>`;
    ulEle.appendChild(liEle);
  
}


