ol.proj.get("EPSG:4326").setExtent([-194627.353774, 433058.403279, 666538.943424, 1218356.881404]);
var wms_layers = [];
var format_ocean_0 = new ol.format.GeoJSON();
var features_ocean_0 = format_ocean_0.readFeatures(json_ocean_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ocean_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ocean_0.addFeatures(features_ocean_0);var lyr_ocean_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ocean_0, 
                style: style_ocean_0,
                title: '<img src="styles/legend/ocean_0.png" /> ocean'
            });var format_cidistrict_1 = new ol.format.GeoJSON();
var features_cidistrict_1 = format_cidistrict_1.readFeatures(json_cidistrict_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cidistrict_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cidistrict_1.addFeatures(features_cidistrict_1);var lyr_cidistrict_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cidistrict_1, 
                style: style_cidistrict_1,
                title: '<img src="styles/legend/cidistrict_1.png" /> ci-district'
            });var format_ciregions_2 = new ol.format.GeoJSON();
var features_ciregions_2 = format_ciregions_2.readFeatures(json_ciregions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ciregions_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ciregions_2.addFeatures(features_ciregions_2);var lyr_ciregions_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ciregions_2, 
                style: style_ciregions_2,
                title: '<img src="styles/legend/ciregions_2.png" /> ci-regions'
            });var format_cideparts_3 = new ol.format.GeoJSON();
var features_cideparts_3 = format_cideparts_3.readFeatures(json_cideparts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cideparts_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cideparts_3.addFeatures(features_cideparts_3);var lyr_cideparts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cideparts_3, 
                style: style_cideparts_3,
                title: '<img src="styles/legend/cideparts_3.png" /> ci-departs'
            });var format_cisp_4 = new ol.format.GeoJSON();
var features_cisp_4 = format_cisp_4.readFeatures(json_cisp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cisp_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cisp_4.addFeatures(features_cisp_4);var lyr_cisp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cisp_4, 
                style: style_cisp_4,
                title: '<img src="styles/legend/cisp_4.png" /> ci-sp'
            });var format_ciparcs_5 = new ol.format.GeoJSON();
var features_ciparcs_5 = format_ciparcs_5.readFeatures(json_ciparcs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ciparcs_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ciparcs_5.addFeatures(features_ciparcs_5);var lyr_ciparcs_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ciparcs_5, 
                style: style_ciparcs_5,
                title: '<img src="styles/legend/ciparcs_5.png" /> ci-parcs'
            });var format_cisp_locs_6 = new ol.format.GeoJSON();
var features_cisp_locs_6 = format_cisp_locs_6.readFeatures(json_cisp_locs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cisp_locs_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cisp_locs_6.addFeatures(features_cisp_locs_6);var lyr_cisp_locs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cisp_locs_6, 
                style: style_cisp_locs_6,
                title: '<img src="styles/legend/cisp_locs_6.png" /> ci-sp_locs'
            });var format_cidept_locs_7 = new ol.format.GeoJSON();
var features_cidept_locs_7 = format_cidept_locs_7.readFeatures(json_cidept_locs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cidept_locs_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cidept_locs_7.addFeatures(features_cidept_locs_7);var lyr_cidept_locs_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cidept_locs_7, 
                style: style_cidept_locs_7,
                title: '<img src="styles/legend/cidept_locs_7.png" /> ci-dept_locs'
            });var format_ciregion_locs_8 = new ol.format.GeoJSON();
var features_ciregion_locs_8 = format_ciregion_locs_8.readFeatures(json_ciregion_locs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ciregion_locs_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ciregion_locs_8.addFeatures(features_ciregion_locs_8);var lyr_ciregion_locs_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ciregion_locs_8, 
                style: style_ciregion_locs_8,
                title: '<img src="styles/legend/ciregion_locs_8.png" /> ci-region_locs'
            });var format_cidistrict_locs_9 = new ol.format.GeoJSON();
var features_cidistrict_locs_9 = format_cidistrict_locs_9.readFeatures(json_cidistrict_locs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cidistrict_locs_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cidistrict_locs_9.addFeatures(features_cidistrict_locs_9);var lyr_cidistrict_locs_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cidistrict_locs_9, 
                style: style_cidistrict_locs_9,
                title: '<img src="styles/legend/cidistrict_locs_9.png" /> ci-district_locs'
            });var format_abidjancapitaleeconomique_10 = new ol.format.GeoJSON();
var features_abidjancapitaleeconomique_10 = format_abidjancapitaleeconomique_10.readFeatures(json_abidjancapitaleeconomique_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_abidjancapitaleeconomique_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_abidjancapitaleeconomique_10.addFeatures(features_abidjancapitaleeconomique_10);var lyr_abidjancapitaleeconomique_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_abidjancapitaleeconomique_10, 
                style: style_abidjancapitaleeconomique_10,
                title: '<img src="styles/legend/abidjancapitaleeconomique_10.png" /> abidjan capitale economique'
            });var format_yakrocapitalepolitique_11 = new ol.format.GeoJSON();
var features_yakrocapitalepolitique_11 = format_yakrocapitalepolitique_11.readFeatures(json_yakrocapitalepolitique_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_yakrocapitalepolitique_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_yakrocapitalepolitique_11.addFeatures(features_yakrocapitalepolitique_11);var lyr_yakrocapitalepolitique_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yakrocapitalepolitique_11, 
                style: style_yakrocapitalepolitique_11,
                title: '<img src="styles/legend/yakrocapitalepolitique_11.png" /> yakro capitale politique'
            });

lyr_ocean_0.setVisible(true);lyr_cidistrict_1.setVisible(true);lyr_ciregions_2.setVisible(true);lyr_cideparts_3.setVisible(true);lyr_cisp_4.setVisible(true);lyr_ciparcs_5.setVisible(true);lyr_cisp_locs_6.setVisible(true);lyr_cidept_locs_7.setVisible(true);lyr_ciregion_locs_8.setVisible(true);lyr_cidistrict_locs_9.setVisible(true);lyr_abidjancapitaleeconomique_10.setVisible(true);lyr_yakrocapitalepolitique_11.setVisible(true);
var layersList = [lyr_ocean_0,lyr_cidistrict_1,lyr_ciregions_2,lyr_cideparts_3,lyr_cisp_4,lyr_ciparcs_5,lyr_cisp_locs_6,lyr_cidept_locs_7,lyr_ciregion_locs_8,lyr_cidistrict_locs_9,lyr_abidjancapitaleeconomique_10,lyr_yakrocapitalepolitique_11];
lyr_ocean_0.set('fieldAliases', {'AREA': 'Superficie eau maritime ivoirienne (ha)', 'PERIMETER': 'PERIMETER', 'OCEAN1_': 'Ocean Atlantique', 'OCEAN1_ID': 'OCEAN1_ID', });
lyr_cidistrict_1.set('fieldAliases', {'LIBREG': 'LIBREG', 'LIBDEP': 'LIBDEP', 'LIBDIST': 'District', });
lyr_ciregions_2.set('fieldAliases', {'NOM': 'Chef-lieu Region', 'LIBREG': 'LIBREG', 'LIBDEP': 'LIBDEP', 'LIBDIST': 'Distrct', });
lyr_cideparts_3.set('fieldAliases', {'AREA': 'Superficie (ha)', 'PERIMETER': 'PERIMETER', 'ADMINS_': 'ADMINS_', 'ADMINS_ID': 'ADMINS_ID', 'CI1_': 'CI1_', 'CI1_ID': 'CI1_ID', 'LOC': 'LOC', 'NOM': 'Departement', 'REGIONS': 'REGIONS', 'CODE_REG': 'CODE_REG', 'REGION': 'REGION', 'LIBREG': 'Region', 'LIBDEP': 'LIBDEP', 'LIBSP': 'LIBSP', 'COMMUNE': 'COMMUNE', 'LIBCOM': 'Commune', 'CODLOC': 'CODLOC', 'FORM': 'FORM', 'CEC': 'CEC', 'TYPLOC': 'TYPLOC', 'CODE_LOC': 'CODE_LOC', 'HECTARES': 'HECTARES', });
lyr_cisp_4.set('fieldAliases', {'AREA': 'Superficie (ha)', 'PERIMETER': 'PERIMETER', 'ADMINS_': 'ADMINS_', 'ADMINS_ID': 'ADMINS_ID', 'CI1_': 'CI1_', 'CI1_ID': 'CI1_ID', 'LOC': 'LOC', 'NOM': 'Sous-prefecture', 'REGIONS': 'REGIONS', 'CODE_REG': 'CODE_REG', 'REGION': 'REGION', 'LIBREG': 'LIBREG', 'LIBDEP': 'Departement', 'LIBSP': 'LIBSP', 'COMMUNE': 'COMMUNE', 'LIBCOM': 'LIBCOM', 'CODLOC': 'CODLOC', 'FORM': 'FORM', 'CEC': 'CEC', 'TYPLOC': 'TYPLOC', 'CODE_LOC': 'CODE_LOC', 'HECTARES': 'HECTARES', });
lyr_ciparcs_5.set('fieldAliases', {'AREA': 'Sperficie', 'PERIMETER': 'PERIMETER', 'THEMA_': 'THEMA_', 'THEMA_ID': 'THEMA_ID', 'NOM_FORET': 'Parc National', 'TYPE': 'TYPE', });
lyr_cisp_locs_6.set('fieldAliases', {'NOM': 'Chef-lieu Sous-prefecture', 'HOMMES': 'Population Homme Sous-prefecture', 'FEMMES': 'Population Femme Sous-prefecture', 'TOTAL': 'Total Population Sous-prefecture', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'USER': 'USER', });
lyr_cidept_locs_7.set('fieldAliases', {'NOM': 'Chef-lieu Departement', 'HOMMES': 'Population Homme Departement', 'FEMMES': 'Population Femme Departement', 'TOTAL': 'Total Population Departement', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'USER': 'USER', });
lyr_ciregion_locs_8.set('fieldAliases', {'NOM': 'Chef-lieu Région', 'HOMMES': 'Population Homme', 'FEMMES': 'Population Femme', 'TOTAL': 'Total Population', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'USER': 'USER', 'Alias': 'Alias', });
lyr_cidistrict_locs_9.set('fieldAliases', {'NOM': 'Chef-lieu District', 'HOMMES': 'Population Homme Distrct', 'FEMMES': 'Population Femme Distrct', 'TOTAL': 'Total Population Distrct', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'USER': 'USER', });
lyr_abidjancapitaleeconomique_10.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_yakrocapitalepolitique_11.set('fieldAliases', {'id': 'id', 'nom': 'Denomination', });
lyr_ocean_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'Hidden', 'OCEAN1_': 'TextEdit', 'OCEAN1_ID': 'Hidden', });
lyr_cidistrict_1.set('fieldImages', {'LIBREG': 'Hidden', 'LIBDEP': 'Hidden', 'LIBDIST': 'TextEdit', });
lyr_ciregions_2.set('fieldImages', {'NOM': 'TextEdit', 'LIBREG': 'Hidden', 'LIBDEP': 'Hidden', 'LIBDIST': 'TextEdit', });
lyr_cideparts_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'Hidden', 'ADMINS_': 'Hidden', 'ADMINS_ID': 'Hidden', 'CI1_': 'Hidden', 'CI1_ID': 'Hidden', 'LOC': 'Hidden', 'NOM': 'TextEdit', 'REGIONS': 'TextEdit', 'CODE_REG': 'Hidden', 'REGION': 'Hidden', 'LIBREG': 'TextEdit', 'LIBDEP': 'Hidden', 'LIBSP': 'Hidden', 'COMMUNE': 'Hidden', 'LIBCOM': 'TextEdit', 'CODLOC': 'Hidden', 'FORM': 'Hidden', 'CEC': 'Hidden', 'TYPLOC': 'Hidden', 'CODE_LOC': 'Hidden', 'HECTARES': 'Hidden', });
lyr_cisp_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'Hidden', 'ADMINS_': 'Hidden', 'ADMINS_ID': 'Hidden', 'CI1_': 'Hidden', 'CI1_ID': 'Hidden', 'LOC': 'Hidden', 'NOM': 'TextEdit', 'REGIONS': 'Hidden', 'CODE_REG': 'Hidden', 'REGION': 'Hidden', 'LIBREG': 'Hidden', 'LIBDEP': 'TextEdit', 'LIBSP': 'Hidden', 'COMMUNE': 'Hidden', 'LIBCOM': 'Hidden', 'CODLOC': 'Hidden', 'FORM': 'Hidden', 'CEC': 'Hidden', 'TYPLOC': 'Hidden', 'CODE_LOC': 'Hidden', 'HECTARES': 'Hidden', });
lyr_ciparcs_5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'Hidden', 'THEMA_': 'Hidden', 'THEMA_ID': 'Hidden', 'NOM_FORET': 'TextEdit', 'TYPE': 'Hidden', });
lyr_cisp_locs_6.set('fieldImages', {'NOM': 'TextEdit', 'HOMMES': 'TextEdit', 'FEMMES': 'TextEdit', 'TOTAL': 'TextEdit', 'X_COORD': 'Hidden', 'Y_COORD': 'Hidden', 'USER': 'Hidden', });
lyr_cidept_locs_7.set('fieldImages', {'NOM': 'TextEdit', 'HOMMES': 'TextEdit', 'FEMMES': 'TextEdit', 'TOTAL': 'TextEdit', 'X_COORD': 'Hidden', 'Y_COORD': 'Hidden', 'USER': 'Hidden', });
lyr_ciregion_locs_8.set('fieldImages', {'NOM': 'TextEdit', 'HOMMES': 'TextEdit', 'FEMMES': 'TextEdit', 'TOTAL': 'TextEdit', 'X_COORD': 'Hidden', 'Y_COORD': 'Hidden', 'USER': 'Hidden', 'Alias': 'TextEdit', });
lyr_cidistrict_locs_9.set('fieldImages', {'NOM': 'TextEdit', 'HOMMES': 'TextEdit', 'FEMMES': 'TextEdit', 'TOTAL': 'TextEdit', 'X_COORD': 'Hidden', 'Y_COORD': 'Hidden', 'USER': 'Hidden', });
lyr_abidjancapitaleeconomique_10.set('fieldImages', {'id': 'Hidden', 'nom': 'TextEdit', });
lyr_yakrocapitalepolitique_11.set('fieldImages', {'id': 'Hidden', 'nom': 'TextEdit', });
lyr_ocean_0.set('fieldLabels', {'AREA': 'no label', 'OCEAN1_': 'no label', });
lyr_cidistrict_1.set('fieldLabels', {'LIBDIST': 'no label', });
lyr_ciregions_2.set('fieldLabels', {'NOM': 'no label', 'LIBDIST': 'no label', });
lyr_cideparts_3.set('fieldLabels', {'AREA': 'no label', 'NOM': 'no label', 'REGIONS': 'no label', 'LIBREG': 'no label', 'LIBCOM': 'no label', });
lyr_cisp_4.set('fieldLabels', {'AREA': 'no label', 'NOM': 'no label', 'LIBDEP': 'no label', });
lyr_ciparcs_5.set('fieldLabels', {'AREA': 'no label', 'NOM_FORET': 'no label', });
lyr_cisp_locs_6.set('fieldLabels', {'NOM': 'no label', 'HOMMES': 'no label', 'FEMMES': 'no label', 'TOTAL': 'no label', });
lyr_cidept_locs_7.set('fieldLabels', {'NOM': 'no label', 'HOMMES': 'no label', 'FEMMES': 'no label', 'TOTAL': 'no label', });
lyr_ciregion_locs_8.set('fieldLabels', {'NOM': 'no label', 'HOMMES': 'no label', 'FEMMES': 'no label', 'TOTAL': 'no label', 'Alias': 'no label', });
lyr_cidistrict_locs_9.set('fieldLabels', {'NOM': 'no label', 'HOMMES': 'no label', 'FEMMES': 'no label', 'TOTAL': 'no label', });
lyr_abidjancapitaleeconomique_10.set('fieldLabels', {'nom': 'no label', });
lyr_yakrocapitalepolitique_11.set('fieldLabels', {'nom': 'no label', });
lyr_yakrocapitalepolitique_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});