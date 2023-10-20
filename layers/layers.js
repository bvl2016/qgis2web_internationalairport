ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-183.993912, -86.967579, 188.053719, 111.432821]);
var wms_layers = [];

var format_ne_airport_minor_0 = new ol.format.GeoJSON();
var features_ne_airport_minor_0 = format_ne_airport_minor_0.readFeatures(json_ne_airport_minor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ne_airport_minor_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_airport_minor_0.addFeatures(features_ne_airport_minor_0);
var lyr_ne_airport_minor_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_airport_minor_0, 
                style: style_ne_airport_minor_0,
                interactive: true,
                title: '<img src="styles/legend/ne_airport_minor_0.png" /> ne_airport_minor'
            });
var format_ne_airport_major_1 = new ol.format.GeoJSON();
var features_ne_airport_major_1 = format_ne_airport_major_1.readFeatures(json_ne_airport_major_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ne_airport_major_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_airport_major_1.addFeatures(features_ne_airport_major_1);
var lyr_ne_airport_major_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_airport_major_1, 
                style: style_ne_airport_major_1,
                interactive: true,
                title: '<img src="styles/legend/ne_airport_major_1.png" /> ne_airport_major'
            });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_airport = new ol.layer.Group({
                                layers: [lyr_ne_airport_minor_0,lyr_ne_airport_major_1,],
                                title: "airport"});

lyr_ne_airport_minor_0.setVisible(true);lyr_ne_airport_major_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);
var layersList = [group_airport,lyr_OSMStandard_2];
lyr_ne_airport_minor_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_ne_airport_major_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_ne_airport_minor_0.set('fieldImages', {'scalerank': '', 'featurecla': '', 'type': '', 'name': '', 'abbrev': '', 'location': '', 'gps_code': '', 'iata_code': '', 'wikipedia': '', 'natlscale': '', });
lyr_ne_airport_major_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', });
lyr_ne_airport_minor_0.set('fieldLabels', {});
lyr_ne_airport_major_1.set('fieldLabels', {});
lyr_ne_airport_major_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});