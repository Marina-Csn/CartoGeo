$(document).ready(function() {

  var canvas = document.getElementById('canvas') ;
  var ctx = canvas.getContext('2d');
  var boussole = new Image();
  var aiguille = new Image() ;
  boussole.src = './images/compass.png' ;
  aiguille.src = './images/needle.png' ;

  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      moveNeedle(orientation);
    }) ;
  }

  function moveNeedle(orientation) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(boussole, 0, 0);
    ctx.save();
    ctx.translate(100, 100);
    ctx.rotate(orientation.alpha * (Math.PI / 180));
    ctx.drawImage(aiguille, -100, -100);
    ctx.restore();
  }

}) ;
