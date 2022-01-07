const SecondFetch = async location =>{
 await  fetch(`https://api.meteo.lt/v1/places/${location}/forecasts/long-term`)
    .then(response => {
        if(!response.ok){
            throw Error("ERROR")
        }
        return response.json()})
    .then(location => {
        const html = location.forecastTimestamps.slice(3,35).map(time =>{         
            return `
            <div class="box">
                    ${time.forecastTimeUtc.slice(10,16)}
                    <img src="./images/${time.conditionCode}.png" width=35  />
                    ${Math.round(time.airTemperature)+'°'}
                    <img src="./images/logo.png" width=35 />
                    ${time.relativeHumidity+'%'}
                    <img src="./images/wind-direction.png" width=35/>
                    ${time.windSpeed+'m/s'}
            </div>
            `;
        }).join("")
        
        document
        .querySelector("#app").innerHTML = html;
    })
    .catch(error =>{
        console.log(error)
    })
}


export default SecondFetch