fetch("https://wttr.in/Kuching?format=j1")
.then(response => response.json())
.then(data => {
    document.querySelector(".weather").innerHTML = 
        "Temp: " + data.current_condition[0].temp_C + "°C (" + 
        data.current_condition[0].FeelsLikeC +"°C) | " + 
        data.current_condition[0].weatherDesc[0].value + ' |\xa0';
}).catch(function() {
    document.querySelector(".weather").innerHTML =" ";
});