function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5;
		center: {lat:-9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});
	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	document.getElementById("encuentrame").addEventListener("click",buscar);
	var latitud,longitud;
	var funcionExito = function(position){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.animation.DROP,
			map: map
		});
	}
}