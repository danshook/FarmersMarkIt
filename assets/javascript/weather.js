$(document).ready(function(){



	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5308655&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var phxWeatherId = "Today's weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$("#weather").text(phxWeatherId);
			$("#weather").addClass('animated pulse');
			
		})

	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5317058&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var tempeWeatherId = "Weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".tempeWeather").text(tempeWeatherId);
			
		})

		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5295903&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var gilbertWeatherId = "Weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".gilbertWeather").text(gilbertWeatherId);
			
		})	

		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5308655&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var ahwatukeeWeatherId = "Weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".ahwatukeeWeather").text(ahwatukeeWeatherId);
			
		})
			
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Scottsdale,us&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var scottsdaleWeatherId = "Weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".scottsdaleWeather").text(scottsdaleWeatherId);
			
		})	
});