import currentMoment from "../date"
const SecondFetch = async location =>{
    await  fetch(`https://api.meteo.lt/v1/places/${location}/forecasts/long-term`)
       .then(response => {
           if(!response.ok){
               throw Error("ERROR")
           }
           return response.json()})
       .then(location => {
           const html = location.forecastTimestamps.slice(0,7).map(time =>{    
            return`
                <div class="datedisplay2">
                ${currentMoment.add(1, 'days').format('MMM Do')}
                
                </div>
                `
                
           }).join("")
           
           document
           .querySelector("#datedisplay").innerHTML = html;
       })
       .catch(error =>{
           console.log(error)
       })
   }
   
   
   export default SecondFetch