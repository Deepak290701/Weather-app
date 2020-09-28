var button = document.querySelector('.btn');
var inputVal = document.querySelector('.input-val');
var tempShow = document.querySelector('.temp');
var humidityShow = document.querySelector('.humidity');
var temperatueRangeShow = document.querySelector('.temperatueRange');
var cityShow = document.querySelector('.city-name .name');


inputVal.addEventListener("input", function(){
  button.disabled = (this.value === '');
})


button.addEventListener('click',function(e){
    e.preventDefault()
    console.log(inputVal.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=10c580684d558890b99902a920087b55`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var placeName = inputVal.value.toUpperCase();
        var currentTemp = (data["main"]["temp"] - 273.15).toFixed(2);
        var currentHumidity = data["main"]["humidity"];
        var minimumTemp = (data["main"]["temp_min"]-273.15).toFixed(2);
        var maximumTemp = (data["main"]["temp_max"]-273.15).toFixed(2);
        cityShow.innerText = placeName; 
        tempShow.innerText = currentTemp + ' c';
        humidityShow.innerText = currentHumidity;
        temperatueRangeShow.innerText = `[${minimumTemp} c,${maximumTemp} c]`
    })
    .catch(err => alert('Enter Correct city!!!'))
});

