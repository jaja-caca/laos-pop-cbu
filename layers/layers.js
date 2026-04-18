ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([95.837923, 11.499790, 117.749152, 27.271536]);
var wms_layers = [];

var format_geoBoundariesCGAZ_ADM0globalADM0_0 = new ol.format.GeoJSON();
var features_geoBoundariesCGAZ_ADM0globalADM0_0 = format_geoBoundariesCGAZ_ADM0globalADM0_0.readFeatures(json_geoBoundariesCGAZ_ADM0globalADM0_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_geoBoundariesCGAZ_ADM0globalADM0_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoBoundariesCGAZ_ADM0globalADM0_0.addFeatures(features_geoBoundariesCGAZ_ADM0globalADM0_0);
var lyr_geoBoundariesCGAZ_ADM0globalADM0_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoBoundariesCGAZ_ADM0globalADM0_0, 
                style: style_geoBoundariesCGAZ_ADM0globalADM0_0,
                popuplayertitle: 'geoBoundariesCGAZ_ADM0 — globalADM0',
                interactive: false,
                title: '<img src="styles/legend/geoBoundariesCGAZ_ADM0globalADM0_0.png" /> geoBoundariesCGAZ_ADM0 — globalADM0'
            });
var format_village_boundaries_1 = new ol.format.GeoJSON();
var features_village_boundaries_1 = format_village_boundaries_1.readFeatures(json_village_boundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_village_boundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_boundaries_1.addFeatures(features_village_boundaries_1);
var lyr_village_boundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_village_boundaries_1, 
                style: style_village_boundaries_1,
                popuplayertitle: 'village_boundaries',
                interactive: false,
    title: 'village_boundaries<br />\
    <img src="styles/legend/village_boundaries_1_0.png" /> 0 - 12<br />\
    <img src="styles/legend/village_boundaries_1_1.png" /> 12 - 27<br />\
    <img src="styles/legend/village_boundaries_1_2.png" /> 27 - 54<br />\
    <img src="styles/legend/village_boundaries_1_3.png" /> 54 - 137<br />\
    <img src="styles/legend/village_boundaries_1_4.png" /> 137 - 38421<br />' });
var format_clippedCBUs_2 = new ol.format.GeoJSON();
var features_clippedCBUs_2 = format_clippedCBUs_2.readFeatures(json_clippedCBUs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_clippedCBUs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedCBUs_2.addFeatures(features_clippedCBUs_2);
var lyr_clippedCBUs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedCBUs_2, 
                style: style_clippedCBUs_2,
                popuplayertitle: 'clippedCBUs',
                interactive: false,
                title: '<img src="styles/legend/clippedCBUs_2.png" /> clippedCBUs'
            });

lyr_geoBoundariesCGAZ_ADM0globalADM0_0.setVisible(true);lyr_village_boundaries_1.setVisible(true);lyr_clippedCBUs_2.setVisible(true);
var layersList = [lyr_geoBoundariesCGAZ_ADM0globalADM0_0,lyr_village_boundaries_1,lyr_clippedCBUs_2];
lyr_geoBoundariesCGAZ_ADM0globalADM0_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'shapeName': 'shapeName', });
lyr_village_boundaries_1.set('fieldAliases', {'objectid': 'objectid', 'pcode': 'pcode', 'pname': 'pname', 'l_pname': 'l_pname', 'dcode': 'dcode', 'dname': 'dname', 'l_dname': 'l_dname', 'vname': 'vname', 'l_vname': 'l_vname', 'vcode': 'vcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'data_village_popdensity_Population density (Persons/km2)': 'data_village_popdensity_Population density (Persons/km2)', });
lyr_clippedCBUs_2.set('fieldAliases', {'fid': 'fid', 'THOR_DATA_VIET_ID': 'THOR_DATA_VIET_ID', 'COUNTRYFLYINGMISSION': 'COUNTRYFLYINGMISSION', 'MILSERVICE': 'MILSERVICE', 'MSNDATE': 'MSNDATE', 'SOURCEID': 'SOURCEID', 'SOURCERECORD': 'SOURCERECORD', 'VALID_AIRCRAFT_ROOT': 'VALID_AIRCRAFT_ROOT', 'TAKEOFFLOCATION': 'TAKEOFFLOCATION', 'TGTTYPE': 'TGTTYPE', 'NUMWEAPONSDELIVERED': 'NUMWEAPONSDELIVERED', 'TIMEONTARGET': 'TIMEONTARGET', 'WEAPONTYPE': 'WEAPONTYPE', 'WEAPONTYPECLASS': 'WEAPONTYPECLASS', 'WEAPONTYPEWEIGHT': 'WEAPONTYPEWEIGHT', 'AIRCRAFT_ORIGINAL': 'AIRCRAFT_ORIGINAL', 'AIRCRAFT_ROOT': 'AIRCRAFT_ROOT', 'AIRFORCEGROUP': 'AIRFORCEGROUP', 'AIRFORCESQDN': 'AIRFORCESQDN', 'CALLSIGN': 'CALLSIGN', 'FLTHOURS': 'FLTHOURS', 'MFUNC': 'MFUNC', 'MFUNC_DESC': 'MFUNC_DESC', 'MISSIONID': 'MISSIONID', 'NUMOFACFT': 'NUMOFACFT', 'OPERATIONSUPPORTED': 'OPERATIONSUPPORTED', 'PERIODOFDAY': 'PERIODOFDAY', 'UNIT': 'UNIT', 'TGTCLOUDCOVER': 'TGTCLOUDCOVER', 'TGTCONTROL': 'TGTCONTROL', 'TGTCOUNTRY': 'TGTCOUNTRY', 'TGTID': 'TGTID', 'TGTORIGCOORDS': 'TGTORIGCOORDS', 'TGTORIGCOORDSFORMAT': 'TGTORIGCOORDSFORMAT', 'TGTWEATHER': 'TGTWEATHER', 'ADDITIONALINFO': 'ADDITIONALINFO', 'GEOZONE': 'GEOZONE', 'ID': 'ID', 'MFUNC_DESC_CLASS': 'MFUNC_DESC_CLASS', 'NUMWEAPONSJETTISONED': 'NUMWEAPONSJETTISONED', 'NUMWEAPONSRETURNED': 'NUMWEAPONSRETURNED', 'RELEASEALTITUDE': 'RELEASEALTITUDE', 'RELEASEFLTSPEED': 'RELEASEFLTSPEED', 'RESULTSBDA': 'RESULTSBDA', 'TIMEOFFTARGET': 'TIMEOFFTARGET', 'WEAPONSLOADEDWEIGHT': 'WEAPONSLOADEDWEIGHT', });
lyr_geoBoundariesCGAZ_ADM0globalADM0_0.set('fieldImages', {'fid': '', 'id': '', 'shapeGroup': '', 'shapeType': '', 'shapeName': '', });
lyr_village_boundaries_1.set('fieldImages', {'objectid': 'Range', 'pcode': 'Range', 'pname': 'TextEdit', 'l_pname': 'TextEdit', 'dcode': 'Range', 'dname': 'TextEdit', 'l_dname': 'TextEdit', 'vname': 'TextEdit', 'l_vname': 'TextEdit', 'vcode': 'Range', 'Shape_Leng': 'Range', 'Shape_Area': 'Range', 'data_village_popdensity_Population density (Persons/km2)': 'TextEdit', });
lyr_clippedCBUs_2.set('fieldImages', {'fid': '', 'THOR_DATA_VIET_ID': '', 'COUNTRYFLYINGMISSION': '', 'MILSERVICE': '', 'MSNDATE': '', 'SOURCEID': '', 'SOURCERECORD': '', 'VALID_AIRCRAFT_ROOT': '', 'TAKEOFFLOCATION': '', 'TGTTYPE': '', 'NUMWEAPONSDELIVERED': '', 'TIMEONTARGET': '', 'WEAPONTYPE': '', 'WEAPONTYPECLASS': '', 'WEAPONTYPEWEIGHT': '', 'AIRCRAFT_ORIGINAL': '', 'AIRCRAFT_ROOT': '', 'AIRFORCEGROUP': '', 'AIRFORCESQDN': '', 'CALLSIGN': '', 'FLTHOURS': '', 'MFUNC': '', 'MFUNC_DESC': '', 'MISSIONID': '', 'NUMOFACFT': '', 'OPERATIONSUPPORTED': '', 'PERIODOFDAY': '', 'UNIT': '', 'TGTCLOUDCOVER': '', 'TGTCONTROL': '', 'TGTCOUNTRY': '', 'TGTID': '', 'TGTORIGCOORDS': '', 'TGTORIGCOORDSFORMAT': '', 'TGTWEATHER': '', 'ADDITIONALINFO': '', 'GEOZONE': '', 'ID': '', 'MFUNC_DESC_CLASS': '', 'NUMWEAPONSJETTISONED': '', 'NUMWEAPONSRETURNED': '', 'RELEASEALTITUDE': '', 'RELEASEFLTSPEED': '', 'RESULTSBDA': '', 'TIMEOFFTARGET': '', 'WEAPONSLOADEDWEIGHT': '', });
lyr_geoBoundariesCGAZ_ADM0globalADM0_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', 'shapeName': 'no label', });
lyr_village_boundaries_1.set('fieldLabels', {'objectid': 'no label', 'pcode': 'no label', 'pname': 'no label', 'l_pname': 'no label', 'dcode': 'no label', 'dname': 'no label', 'l_dname': 'no label', 'vname': 'no label', 'l_vname': 'no label', 'vcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'data_village_popdensity_Population density (Persons/km2)': 'header label - visible with data', });
lyr_clippedCBUs_2.set('fieldLabels', {'fid': 'no label', 'THOR_DATA_VIET_ID': 'no label', 'COUNTRYFLYINGMISSION': 'no label', 'MILSERVICE': 'no label', 'MSNDATE': 'no label', 'SOURCEID': 'no label', 'SOURCERECORD': 'no label', 'VALID_AIRCRAFT_ROOT': 'no label', 'TAKEOFFLOCATION': 'no label', 'TGTTYPE': 'no label', 'NUMWEAPONSDELIVERED': 'no label', 'TIMEONTARGET': 'no label', 'WEAPONTYPE': 'header label - visible with data', 'WEAPONTYPECLASS': 'no label', 'WEAPONTYPEWEIGHT': 'no label', 'AIRCRAFT_ORIGINAL': 'no label', 'AIRCRAFT_ROOT': 'no label', 'AIRFORCEGROUP': 'no label', 'AIRFORCESQDN': 'no label', 'CALLSIGN': 'no label', 'FLTHOURS': 'no label', 'MFUNC': 'no label', 'MFUNC_DESC': 'no label', 'MISSIONID': 'no label', 'NUMOFACFT': 'no label', 'OPERATIONSUPPORTED': 'no label', 'PERIODOFDAY': 'no label', 'UNIT': 'no label', 'TGTCLOUDCOVER': 'no label', 'TGTCONTROL': 'no label', 'TGTCOUNTRY': 'no label', 'TGTID': 'no label', 'TGTORIGCOORDS': 'no label', 'TGTORIGCOORDSFORMAT': 'no label', 'TGTWEATHER': 'no label', 'ADDITIONALINFO': 'no label', 'GEOZONE': 'no label', 'ID': 'no label', 'MFUNC_DESC_CLASS': 'no label', 'NUMWEAPONSJETTISONED': 'no label', 'NUMWEAPONSRETURNED': 'no label', 'RELEASEALTITUDE': 'no label', 'RELEASEFLTSPEED': 'no label', 'RESULTSBDA': 'no label', 'TIMEOFFTARGET': 'no label', 'WEAPONSLOADEDWEIGHT': 'no label', });
lyr_clippedCBUs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});