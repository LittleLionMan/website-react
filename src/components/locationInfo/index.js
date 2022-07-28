import { useState, useEffect } from "react";
import './style.css';

export default function GetCityInfo(id) {
    const [cityInfo, setCityInfo] = useState([]);
    const [weather, setWeather] = useState(null);
    const [time, setTime] = useState(null);
    const wikiId = id.id;
   /* useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const endpoint = 'https://api.api-ninjas.com/v1/city?name='
        const request = {
            method: 'Get',
            headers: {
                'X-Api-Key': 'qRR7veQG0o8ayqmi5hniTw==0q9aiPVHqguKPipd'
            }
        }
         fetch(endpoint + loc, request)
            .then(response => response.json())
            .then(data => {
                if (!(data.length === 0)) {
                    setCityInfo({population: data[0].population, 
                                country: data[0].country, 
                                lat: data[0].latitude,
                                long: data[0].longitude        
                    })
                } else {
                    setCityInfo({
                        population: "n/a"
                })
                };
            });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [loc]); */

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const method = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "9bdb139e84mshb898206982ee48bp1fa6eejsn20961e39fff0"
            }
        };
        const endpoint = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${wikiId}`;
        
        fetch(endpoint, method)
            .then(response => response.json())
            .then(data => {
                if (!(data.errors)) {
                    const tz = data.data.timezone;
                    const strings = tz.replace("__", " ");
                    const split = strings.split(" ", 2);
                setCityInfo({
                    population: data.data.population,
                    lat: data.data.latitude,
                    long: data.data.longitude,
                    country: data.data.country,
                    timezone: split[1],
                    continent: split[0]
                })
                
            } else {
                setCityInfo({
                    population: 'n/a',
                    country: 'n/a'
                })
            }
            });
    }, [wikiId]);


     useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const method = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "world-time2.p.rapidapi.com",
                "x-rapidapi-key": "9bdb139e84mshb898206982ee48bp1fa6eejsn20961e39fff0"
            }
        };
        const endpoint = `https://world-time2.p.rapidapi.com/timezone/${cityInfo.continent}/${cityInfo.timezone}`;
        
        fetch(endpoint, method)
            .then(response => response.json())
            .then(data => {
                if ((typeof cityInfo.continent === 'string')) {
                    setTime(data.datetime.slice(11, 16));
                }
            });
    }, [cityInfo.continent, cityInfo.timezone]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const lat = (Math.round(cityInfo.lat * 100) / 100).toFixed(2);
        const lon = (Math.round(cityInfo.long * 100) / 100).toFixed(2);
        const key = '013e49d9f84487d396daebe092b7aa53';
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        if (!isNaN(lat)) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.weather[0].icon);
                setWeather({
                    temp: data.main.temp,
                    icon: data.weather[0].icon
                });
                
            });
        }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [cityInfo.lat, cityInfo.long]);

    return (
        <div className='infoContainer'>
            <div className='slide'>
                <div className='text'>
                    <p>Land: {cityInfo.country}</p>
                    <p>Einwohnerzahl: {cityInfo.population === 0 ? "n/a" : cityInfo.population}</p>
                    <p>Temperatur: {weather === null ? "n/a" : `${Math.round(weather.temp - 273.15).toFixed(1)}°C`}</p>
                    {weather === null ? "" : <img alt="" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>}
                    <p>Uhrzeit: {time === null ? "n/a" : `${time}`}</p>
                </div>
           </div>
        </div>
    )

}