$(document).ready(function(){

	//AJAX request and writing to page for general Phx weather in upper right corner
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5308655&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var phxWeatherId = "Today's weather: " + response.weather[0].description + " | " + parseInt(response.main.temp_max) + "°" + " / " + parseInt(response.main.temp_min) + "°"
			
			$("#weather").text(phxWeatherId);
			$("#weather").addClass('animated pulse');
			
		})

	//AJAX request and writing to page for Tempe weather in market card
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5317058&appid=4b7dec207637026b068ebbe15f2de199&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var tempeWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_max) + "°" + " / " + parseInt(response.main.temp_min) + "°"
			
			$(".tempeWeather").text(tempeWeatherId);
			
		})

		//AJAX request and writing to page for Gilbert weather in market card
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5295903&appid=1a71012b82a2720bed53b81eb544988c&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var gilbertWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_max) + "°" + " / " + parseInt(response.main.temp_min) + "°"
			
			$(".gilbertWeather").text(gilbertWeatherId);
			
		})	

		//AJAX request and writing to page for Ahwatukee weather in market card	
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=5308655&appid=136372444981f95741f23131958cb253&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var ahwatukeeWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_max) + "°" + " / " + parseInt(response.main.temp_min) + "°"
			
			$(".ahwatukeeWeather").text(ahwatukeeWeatherId);
			
		})
		
		//AJAX request and writing to page for Scottsdale weather in market card	
		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Scottsdale,us&appid=22e8aef8d44651f51f40eb4812f529cd&units=imperial',
		type: "GET"
		}).then(function(response){
			
			var scottsdaleWeatherId = response.weather[0].description + " | " + parseInt(response.main.temp_max) + "°" + " / " + parseInt(response.main.temp_min) + "°"
			
			$(".scottsdaleWeather").text(scottsdaleWeatherId);
			
		})	


		
});