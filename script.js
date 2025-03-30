const apikey = "fa35ba05f8e12038956c0290e9ca348a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
	
	try{

		const response = await fetch(apiurl + city + `&appid=${apikey}`);
        
        var data = await response.json();
        console.log(data)
		
		CityName.innerHTML = data.name;

		temp.innerHTML = Math.round(data.main.temp);
		temp2.innerHTML = Math.round(data.main.temp);
		feels_like.innerHTML = data.main.feels_like;
		humidity.innerHTML = data.main.humidity;
		humidity2.innerHTML = data.main.humidity;
		min_temp.innerHTML = data.main.temp_min;
		max_temp.innerHTML = data.main.temp_max;
		wind_speed.innerHTML = data.wind.speed;
		wind_speed2.innerHTML = data.wind.speed;
		wind_degrees.innerHTML = data.wind.deg;
		sunrise.innerHTML = data.sys.sunrise;
		sunset.innerHTML = data.sys.sunset;


		console.log('Temperature:', temp);
		console.log('Feels Like:', feels_like);
		console.log('Humidity:', humidity);
		console.log('Min Temperature:', min_temp);
		console.log('Max Temperature:', max_temp);
		console.log('Wind Speed:', wind_speed);
		console.log('Wind Degrees:', wind_degrees);
		console.log('Sunrise:', sunrise);
		console.log('Sunset:', sunset);
        
        
        
    } catch (error) {
		console.error(`Error fetching weather data for ${city}:`, error);
	}
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	checkWeather(city.value);

});
checkWeather("Visakhapatnam");

submit.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(city.value);
    }
});

const cities = ['Tokyo', 'Shibuya', 'Seoul', 'Hyderabad'];

const getWeather2 = async (city) => {
	try {
	
		const response = await fetch(apiurl + city + `&appid=${apikey}`);
        
        var data = await response.json();
		// Sending the GET request to the weather API
		// const response = await fetch(url, options);
		// // Parsing the response as JSON
		// const result = await response.json();
		
		// Updating HTML elements for the specific city
		document.getElementById(`${city.toLowerCase()}_temp`).innerHTML =Math.round(data.main.temp);
		document.getElementById(`${city.toLowerCase()}_feels_like`).innerHTML = data.main.feels_like;
		document.getElementById(`${city.toLowerCase()}_humidity`).innerHTML = data.main.humidity;
		document.getElementById(`${city.toLowerCase()}_min_temp`).innerHTML = data.main.temp_min;
		document.getElementById(`${city.toLowerCase()}_max_temp`).innerHTML = data.main.temp_max;
		document.getElementById(`${city.toLowerCase()}_wind_speed`).innerHTML = data.wind.speed;
		document.getElementById(`${city.toLowerCase()}_wind_degrees`).innerHTML = data.wind.deg;
		document.getElementById(`${city.toLowerCase()}_sunrise`).innerHTML = data.sys.sunrise;
		document.getElementById(`${city.toLowerCase()}_sunset`).innerHTML = data.sys.sunset;
		
		// console.log(`Weather data for ${city}:`, result);
	} catch (error) {
		console.error(`Error fetching weather data for ${city}:`, error);
	}
};

const updateWeatherForAllCities = () => {
	cities.forEach(city => getWeather2(city));
};

updateWeatherForAllCities();