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

L.control.scale({
    imperial: false,
    maxWidth: 150
}).addTo(map);

let jsondata = {
    
    "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [172.67751, -34.42677]
                },
                "properties": {
                    "nr": 1,
                    "user": "danielwebmap",
                    "name": "Cape Reinga",
                    "wikipedia": "https://de.wikipedia.org/wiki/Cape_Reinga"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [174.80000, -36.83333]
                },
                "properties": {
                    "nr": 2,
                    "user": "madeleinehll",
                    "name": "Auckland",
                    "wikipedia": "https://de.wikipedia.org/wiki/Auckland"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [176.07083, -38.68444]
                },
                "properties": {
                    "nr": 3,
                    "user": "laurauniibk",
                    "name": "Taupo",
                    "wikipedia": "https://de.wikipedia.org/wiki/Taup%C5%8D_(Stadt)"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [175.58333, -39.20000]
                },
                "properties": {
                    "nr": 4,
                    "user": "webmapping",
                    "name": "Tongariro National Park",
                    "wikipedia": "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [174.00194, -41.29306]
                },
                "properties": {
                    "nr": 5,
                    "user": "ernstanton",
                    "name": "Picton",
                    "wikipedia": "https://de.wikipedia.org/wiki/Picton_(Neuseeland)"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [172.83750, -41.81917]
                },
                "properties": {
                    "nr": 6,
                    "user": "annagruber263",
                    "name": "Nelson",
                    "wikipedia": "https://de.wikipedia.org/wiki/Nelson_(Neuseeland)"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [172.90000, -40.83333]
                },
                "properties": {
                    "nr": 7,
                    "user": "kreiselinho",
                    "name": "Abel Tasman Nationalpark",
                    "wikipedia": "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [171.32694, -42.11861]
                },
                "properties": {
                    "nr": 8,
                    "user": "amjusi",
                    "name": "Pancake rocks (Punakaiki)",
                    "wikipedia": "https://www.wikiwand.com/de/Pancake_Rocks#introduction"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.19000, -43.46300]
                },
                "properties": {
                    "nr": 9,
                    "user": "marcfk",
                    "name": "Franz Josef Glacier",
                    "wikipedia": "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.15000, -43.53000]
                },
                "properties": {
                    "nr": 10,
                    "user": "sebspr",
                    "name": "Fox Glacier",
                    "wikipedia": "https://de.wikipedia.org/wiki/Fox-Gletscher"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [169.13528, -44.69722]
                },
                "properties": {
                    "nr": 11,
                    "user": "marcelboehm",
                    "name": "Wanaka",
                    "wikipedia": "https://de.wikipedia.org/wiki/Wanaka"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [167.86667, -44.61667]
                },
                "properties": {
                    "nr": 12,
                    "user": "sophiest01",
                    "name": "Milford Sound",
                    "wikipedia": "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [166.98333, -45.31667]
                },
                "properties": {
                    "nr": 13,
                    "user": "johanna135",
                    "name": "Doubtfull Sound",
                    "wikipedia": "https://en.wikipedia.org/wiki/Doubtful_Sound_/_Patea"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.50000, -45.87000]
                },
                "properties": {
                    "nr": 14,
                    "user": "czackl",
                    "name": "Dunedin",
                    "wikipedia": "https://de.wikipedia.org/wiki/Dunedin"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.82606, -45.34528]
                },
                "properties": {
                    "nr": 15,
                    "user": "meritkoch",
                    "name": "Moeraki Boulders",
                    "wikipedia": "https://de.wikipedia.org/wiki/Moeraki_Boulders"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.16667, -44.04667]
                },
                "properties": {
                    "nr": 16,
                    "user": "niklasschw",
                    "name": "Lake Pukaki",
                    "wikipedia": "https://de.wikipedia.org/wiki/Lake_Pukaki"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.14210, -43.59514]
                },
                "properties": {
                    "nr": 17,
                    "user": "bendai98",
                    "name": "Mount Cook",
                    "wikipedia": "https://de.wikipedia.org/wiki/Aoraki/Mount_Cook"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [170.51667, -43.88333]
                },
                "properties": {
                    "nr": 18,
                    "user": "yle5",
                    "name": "Lake Tekapo",
                    "wikipedia": "https://en.wikipedia.org/wiki/Lake_Tekapo"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [172.63667, -43.53111]
                },
                "properties": {
                    "nr": 19,
                    "user": "laurent2997",
                    "name": "Christchurch",
                    "wikipedia": "https://de.wikipedia.org/wiki/Christchurch"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [173.68222, -42.41167]
                },
                "properties": {
                    "nr": 20,
                    "user": "lealucia",
                    "name": "Kaikoura",
                    "wikipedia": "https://de.wikipedia.org/wiki/Kaikoura_(Neuseeland)"
                }
            }
        ]
}

L.geoJSON(jsondata, {}).bindPopup(function (layer) {
    console.log(layer.feature.properties)
    return `
    <h2>${layer.feature.properties.name}</h2>
    <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)}</li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)}</li>
        <li><a href= "https://${layer.feature.properties.user}.github.io/nz">Etappenseite</a></li> 
        <li><a href= "https://${layer.feature.properties.wikipedia}">Wikipediaseite</a></li>
    </ul>
`;
}).addTo(map);
