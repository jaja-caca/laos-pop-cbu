var size = 0;
var placement = 'point';

var style_village_boundaries_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("data_village_popdensity_Population density (Persons/km2)");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.174020 && value <= 12.220764) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,231,252,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12.220764 && value <= 26.744892) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,190,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 26.744892 && value <= 53.773260) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(161,148,221,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 53.773260 && value <= 137.199200) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(161,148,221,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 137.199200 && value <= 38421.430000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(161,148,221,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
