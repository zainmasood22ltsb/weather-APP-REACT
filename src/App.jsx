
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city,setCity] = useState("24.8607,67.0011")
  const pakistanCitiesCoordinates = [
    { city: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { city: "Lahore", latitude: 31.5497, longitude: 74.3436 },
    { city: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
    { city: "Rawalpindi", latitude: 33.5651, longitude: 73.0169 },
    { city: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
    { city: "Quetta", latitude: 30.1798, longitude: 66.9750 },
    { city: "Multan", latitude: 30.1575, longitude: 71.5249 },
    { city: "Faisalabad", latitude: 31.4504, longitude: 73.1350 },
    { city: "Hyderabad", latitude: 25.3960, longitude: 68.3578 },
    { city: "Sialkot", latitude: 32.4945, longitude: 74.5229 }
];
useEffect(()=>{
  weather()
},[city])
const [latitude,longitude]=city.split(",")
console.log(currentWeather)
function weather(){
   
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c153479685c47f1b34a83591f3b1acbe`).then((res)=>res.json()).then((data)=>setCurrentWeather(data))
}
const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLikes = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondtion = currentWeather?.weather[0]?.main;
  return(
    <div>
      <select value={city} onChange={((e)=>setCity(e.target.value))}>
       {pakistanCitiesCoordinates.map((data,index)=>{
   
       return  <option key={index} value={`${data.latitude},${data.longitude}`}>{data.city}</option>
       })}

      </select>
      <div className="shadow-lg p-6 my-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white">
  <div className="flex justify-between items-center mb-4">
    <h1 className="font-medium text-lg">Temperature</h1>
    <h1 className="text-2xl font-extrabold">{temp}°C</h1>
  </div>
  <div className="flex justify-between items-center mb-4">
    <h1 className="font-medium text-lg">Feels Like</h1>
    <h1 className="text-2xl font-extrabold">{feelsLikes}°C</h1>
  </div>
  <div className="flex justify-between items-center">
    <h1 className="font-medium text-lg">Weather</h1>
    <h1 className="text-2xl font-extrabold">{weatherCondtion}</h1>
  </div>
</div>


    </div>
  )
    



};



export default App



