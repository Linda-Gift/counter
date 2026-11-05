import {useState, useEffect} from "react"

export default function Weather(){

    const apiKey = "62f4ba13d78977c09b585934de20ae2e"
    const city = "Malmo"

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((response) => response.json()).then((linda)=>{
            setWeather(linda)
        })
    }, [])
    return(
        <div className="student">
            <h1>Weather Forecast</h1>
            <p>City : {city} </p>
            <h3> Temperature : {weather?.main?.temp}</h3>
        
        </div>
    )
}