function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5;
		center: {lat:-9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});
}