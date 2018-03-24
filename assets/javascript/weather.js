$(document).ready(function(){

	//AJAX request and writing to page for general Phx weather in upper right corner
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5308655&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var phxWeatherId = "Today's weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$("#weather").text(phxWeatherId);
			$("#weather").addClass('animated pulse');
			
		})

	//AJAX request and writing to page for Tempe weather in market card
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5317058&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var tempeWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".tempeWeather").text(tempeWeatherId);
			
		})

		//AJAX request and writing to page for Gilbert weather in market card
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5295903&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var gilbertWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".gilbertWeather").text(gilbertWeatherId);
			
		})	

		//AJAX request and writing to page for Ahwatukee weather in market card	
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5308655&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var ahwatukeeWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".ahwatukeeWeather").text(ahwatukeeWeatherId);
			
		})
		
		//AJAX request and writing to page for Scottsdale weather in market card	
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Scottsdale,us&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var scottsdaleWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_min) + "°" + " / " + parseInt(response.main.temp_max) + "°"
			
			$(".scottsdaleWeather").text(scottsdaleWeatherId);
			
		})	


});