function initialiser() {
	var latlng = new google.maps.LatLng(46.779231, 6.659431);
	
	var options = {
		center: latlng,
		zoom: 19,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var carte = new google.maps.Map(document.getElementById("carte"), options);
	
	/****************Nouveau code****************/

	//création du marqueur
	var marqueur = new google.maps.Marker({
		position: new google.maps.LatLng(46.779231, 6.659431),
		map: carte
	});

	/********************************************/
}