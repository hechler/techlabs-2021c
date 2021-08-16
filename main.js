
const apiKey = 'pk.eyJ1IjoiaWxiZTIxIiwiYSI6ImNrcmhsbW90ZjBrbnEycHBnZ21lbGp2a3oifQ.ZNtjT4wdEZo30PS-OTYnEg';

const mymap = L.map('map').setView([50.941278, 6.958281], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/kohomb/cksatep89alqd18o4f6mz873q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia29ob21iIiwiYSI6ImNrczNmaWp4eDBtdzgyb3BmenJqaHRhZHAifQ.9xNK9NSQkEDTV_bjTZfuzQ', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

//Adding Marker: 

const marker = L.marker([50.93748790878701, 6.881883433967217]).addTo(mymap)

marker.bindPopup('Stadtwaldgarten')
//hiermit geben wir dem marker den wir erstellt haben ein popup, das ist aber noch nicht geöffnet 

marker.on('mouseover', function (e) {
    this.openPopup();
    //hiermit öffnen wird es dann wenn wir drüber gehen 
});

marker.on('mouseout', function (e) {
    this.closePopup();
    //hier wird es geschlossen beim Weggehen 
});

// marker.bindPopup('Stadtwaldgarten2').openPopup();
//hiermit hätten wir einen ein neues Popup erstellt welches das erste ja überschrieben hätte da es danach kommt, zudem wäre es mit .openPopup() von Anfang an geöffnet 

