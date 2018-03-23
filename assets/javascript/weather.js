$(document).ready(function(){

	//var currentWeather;
	console.log("test")
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Phoenix,us&appid=028ca2a1c72ae0a27b9432b8005fae88&units=imperial',
		type: "GET"
		}).then(function(response){
			console.log(response);
		})



	//}).then(function(weatherObj) {
		
});