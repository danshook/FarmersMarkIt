$(document).ready(function(){



	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Phoenix,us&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var phxWeatherId = "Today's weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$("#weather").text(phxWeatherId);
			$("#weather").addClass('animated pulse');
			
		})

	$.ajax({
		url: 'http://http://api.openweathermap.org/data/2.5/weather?q=Tempe,us&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var tempeWeatherId = "Today's weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$("#tempeWeather").text(tempeWeatherId);
			
		})

});