let Exo2
let Exo3
let Exo4

$(document).ready(function() {

  Exo2 = $('#Exo2') ;
  Exo3 = $('#Exo3') ;
  Exo4 = $('#Exo4') ;

  navigator.geolocation.getCurrentPosition(function(position) {
    var firstDiv = Exo2.find('.func1') ;
    firstDiv.find('ul').append(
      "<li>Longitude : " + position.coords.longitude + "</li>",
      "<li>Latitude : " + position.coords.latitude + "</li>",
      "<li>Precision : " + position.coords.accuracy + "</li>",
      "<li>Vitesse : " + position.coords.speed + "</li>",
      "<li>Timestamp : " + position.timestamp + "</li>"
    ) ;
  });

  navigator.geolocation.watchPosition(function(position) {
    var secondDiv = Exo2.find('.func2') ;
    secondDiv.find('ul').empty() ;
    secondDiv.find('ul').append(
      '<li>Longitude : ' + position.coords.longitude + '</li>',
      "<li>Latitude : " + position.coords.latitude + "</li>",
      "<li>Precision : " + position.coords.accuracy + "</li>",
      "<li>Vitesse : " + position.coords.speed + "</li>",
      "<li>Timestamp : " + position.timestamp + "</li>"
    ) ;
  });

  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      var firstDiv = Exo3.find('.func1') ;
      setTimeout(function () {
        firstDiv.empty() ;
        firstDiv.find('ul').append(
          "<li>Alpha : " + orientation.alpha + "</li>",
          "<li>Beta : " + orientation.beta + "</li>",
          "<li>Gamma : " + orientation.gamma + "</li>"
        ) ;
      }, 1000);
      console.log(firstDiv.find('ul')) ;
    });
  }

  if(window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(orientation) {
      var secondDiv = Exo3.find('.func2') ;
      setTimeout(function () {
        secondDiv.find('ul').empty() ;
        secondDiv.find('ul').append(
          "<li>Acceleration X : " + orientation.acceleration.x + "</li>",
          "<li>Acceleration Y : " + orientation.acceleration.y + "</li>",
          "<li>Acceleration Z : " + orientation.acceleration.z + "</li>",
          "<li>Rotation alpha : " + orientation.rotationRate.alpha + "</li>",
          "<li>Rotation beta : " + orientation.rotationRate.beta + "</li>",
          "<li>Rotation gamma : " + orientation.rotationRate.gamma + "</li>"
        ) ;
    });
  }

	window.addEventListener('touchstart', touchEventHandler) ;
	window.addEventListener('touchend', touchEventHandler) ;
	window.addEventListener('touchcancel', touchEventHandler) ;
	window.addEventListener('touchleave', touchEventHandler) ;
	window.addEventListener('touchmove', touchEventHandler) ;

	}) ;

	function touchEventHandler(event) {
	  var firstDiv = Exo4.find('div') ;
	  firstDiv.find('ul').empty() ;
	  firstDiv.find('ul').append(
		"<li>Position X : " + event.changedTouches[0].screenX + "</li>",
		"<li>Position X : " + event.changedTouches[0].screenY + "</li>",
		"<li>Type event : " + event.type + "</li>"
	  ) ;
	}
}) ;
