const thirdfetchTry = async location =>{
    await  fetch(`https://api.meteo.lt/v1/places/${location}/forecasts/long-term`)
       .then(response => {
           if(!response.ok){
               throw Error("ERROR")
           }
           return response.json()})
       .then(location  => {
           const html = location.forecastTimestamps.slice(0,1).map(time =>{
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 6;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                    
                }
                );
                const maxtemp = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp = Math.min(...todaydata.map(o => o.airTemperature));
                var temper = Math.round(mintemp) + "° /" + Math.round(maxtemp) + "° ";
                document.querySelector('#temperature').innerHTML = (`<img src="./images/${location.forecastTimestamps[6].conditionCode}.png" width=70  />`) + temper;

               
            }
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 5;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp2 = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp2 = Math.min(...todaydata.map(o => o.airTemperature));
                
                var temper = Math.round(mintemp2) + "° /" + Math.round(maxtemp2) + "° ";
                document.querySelector('#temperature2').innerHTML = (`<img src="./images/${location.forecastTimestamps[5].conditionCode}.png" width=70  />`) + temper;

            }
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 4;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp3 = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp3 = Math.min(...todaydata.map(o => o.airTemperature));  
               
                var temper = Math.round(mintemp3) + "° /" + Math.round(maxtemp3) + "° ";
                document.querySelector('#temperature3').innerHTML = (`<img src="./images/${location.forecastTimestamps[4].conditionCode}.png" width=70  />`) + temper;

        
            }
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 3;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp4 = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp4 = Math.min(...todaydata.map(o => o.airTemperature));   
                
                var temper = Math.round(mintemp4) + "° /" + Math.round(maxtemp4) + "° ";
                document.querySelector('#temperature4').innerHTML = (`<img src="./images/${location.forecastTimestamps[3].conditionCode}.png" width=70  />`) + temper;

            }
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 2;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp5 = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp5 = Math.min(...todaydata.map(o => o.airTemperature));  
                
                var temper = Math.round(mintemp5) + "° /" + Math.round(maxtemp5) + "° ";
                document.querySelector('#temperature5').innerHTML = (`<img src="./images/${location.forecastTimestamps[2].conditionCode}.png" width=70  />`) + temper;

            }
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 1;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp6 = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp6 = Math.min(...todaydata.map(o => o.airTemperature));
                
                var temper = Math.round(mintemp6) + "° /" + Math.round(maxtemp6) + "° ";
                document.querySelector('#temperature6').innerHTML = (`<img src="./images/${location.forecastTimestamps[1].conditionCode}.png" width=70  />`) + temper;
            }
            for (var i=0; i<1; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + 0;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp7 = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp7 = Math.min(...todaydata.map(o => o.airTemperature));
                
                var temper = Math.round(mintemp7) + "° /" + Math.round(maxtemp7) + "° ";
            document.querySelector('#temperature7').innerHTML =(`<img src="./images/${time.conditionCode}.png" width=70  />`) + temper ;

            }
            for (var i=0; i<7; i++){
                var todaydata = location.forecastTimestamps.filter(function (item) {
                    var currentDate = new Date();
                    var day = currentDate.getDate() + i;
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    if(month.length<2) {let month ='0'+month;}
                    if(day.length<2) {let day = '0'+day;}
                    var dayfix = (day<10) ?'0'+day : day;
                    var monthfix = (month<10) ?'0'+month : month;
                    var formatd = year + "-" + monthfix + "-" + dayfix;
                    return item.forecastTimeUtc.includes(formatd);
                }
                );
                const maxtemp = Math.max(...todaydata.map(o => o.airTemperature));
                const mintemp = Math.min(...todaydata.map(o => o.airTemperature));
                var temper = Math.round(mintemp) + "° " + Math.round(maxtemp) + "° ";
               
                console.log(temper)
                console.log(location.forecastTimestamps[i].conditionCode)
                console.log(location.forecastTimestamps[i].windSpeed) 
            }
           })
       })
   }
   export default thirdfetchTry