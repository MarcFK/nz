let lat = -43.463;
let lng = 170.19;
let zoom = 13

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* let marker = L.marker([lat, lng]).addTo(map);

marker.bindPopup(`
    <h2>Franz Josef Glacier</h2>
    <ul>
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Länge: ${lng.toFixed(5)}</li>
    </ul>
`).openPopup();
*/

L.control.scale({
    imperial: false,
    maxWidth: 150
}).addTo(map);

let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Franz Josef Glacier"
    }
};

L.geoJSON(jsonPunkt, {
    style: function (feature) {
        return {color: feature.properties.color};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.name;
}).addTo(map);
