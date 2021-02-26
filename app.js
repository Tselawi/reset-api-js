
// Making a map and tiles
const myMap = L.map('mapid').setView([0, 0],4);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(myMap);
// Making a marker with a custom icon
let myIcon = L.icon({
  iconUrl: 'Space.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
  });
  const marker = L.marker([0, 0],{ icon: myIcon }).addTo(myMap);
// getting an api.js form this website wheretheiss.at
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS(){
  const response = await fetch(api_url)
  const data = await response.json();
  const { latitude, longitude }= data;
  //L.marker([latitude, longitude]).addTo(myMap);
  marker.setLatLng([latitude,longitude]);
  
  document.getElementById('lat').textContent= latitude;
  document.getElementById('long').textContent= longitude;
}
getISS()

