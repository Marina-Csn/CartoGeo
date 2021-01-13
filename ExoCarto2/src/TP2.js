$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position) ;
    $('#function1').find('ul').append(
      '<li>Longitude : ' + position.coords.longitude + '</li>',
      "<li>Latitude : " + position.coords.latitude + "</li>",
      "<li>Precision : " + position.coords.accuracy + "</li>",
      "<li>Vitesse : " + position.coords.speed + "</li>",
      "<li>Timestamp : " + position.timestamp + "</li>"
    ) ;
  });

  initMap();

}) ;

// On initialise la latitude et la longitude de Nice (centre de la carte)
var lat = 43.700000;
var lon = 7.250000;
var mymap = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "mymap" et l'insèrer dans l'élément HTML qui a l'ID "map"
    mymap = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
      }).addTo(mymap);
      // Nous ajoutons un marqueur
      var marker = L.marker([lat, lon]).addTo(mymap);
    }