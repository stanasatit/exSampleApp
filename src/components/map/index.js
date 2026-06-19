import React, { useState, useEffect, useRef, useMemo, useContext } from 'react'
import { Platform, BackHandler } from 'react-native'
import { Box } from 'native-base'
import { WebView } from 'react-native-webview'

import useDidMount from '../../helper/useDidMount'

const MapView = (props) => {
    let webviewRef = useRef();
    const didMount = useDidMount();

    const onLoadLocation = async () => {
        let _objItem = {
            oninit_map: 0,
            current_latlng: props.deviceLocation,
        }
        setTimeout(() => {
            if (webviewRef.current) {
                webviewRef.current.postMessage(JSON.stringify(_objItem));
            }
        }, 500);
    }

    const onWebViewMessage = (event) => {
        let objMsg = JSON.parse(event.nativeEvent.data);
        // props.getCurrentLocation(objMsg)
    }

    return (
        // <Box w={'100%'} h={'100%'} pointerEvents={'none'}>
        <Box w={'100%'} h={'100%'}>
            <WebView
                ref={webviewRef}
                onLoad={() => onLoadLocation()}
                originWhitelist={['*']}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                scalesPageToFit
                scrollEnabled={false}
                mixedContentMode={'always'}
                useWebKit={Platform.OS == 'ios'}
                allowUniversalAccessFromFileURLs={true}
                userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
                source={{
                    html: `
                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <title>MAP</title>

                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"/>
                    <link rel="stylesheet" href="http://sitdev.dyndns.org:8081/EMRS/Scripts/link-mobile/L.Icon.Pulse.2.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.76.1/dist/L.Control.Locate.min.css" />
                    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css" />
                    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css" />

                    <style>
                        body {
                            padding: 0;
                            margin: 0;
                        }

                        html,
                        body,
                        #map {
                            height: 100%;
                            width: 100vw;
                        }

                        /* css to customize Leaflet default styles  */
                        .custom .leaflet-popup-tip,
                        .custom .leaflet-popup-content-wrapper {
                            background: #FFF;
                            color: #000;
                        }

                        h5 {
                            margin-top: 0;
                            color: #666;
                            font-family: "Trebuchet MS", Tahoma, Arial, sans-serif;
                        }

                        h1 {
                            font-size: 11px;
                            /* 40px/16=2.5em */
                        }

                        textarea {
                            font-size: 14px;
                            border: 0px;
                            font-family: "Trebuchet MS", Tahoma, Arial, sans-serif;
                        }

                        .leaflet-top {
                            margin-top: 0px;
                        }

                        ion-icon {
                            font-size: 18px;
                        }

                        .center {
                            text-align: center;
                        }

                        .leaflet-control-layers label {
                            display: block;
                            font-size: 10px;
                            /* font-size: 1.08333em; */
                        }

                        .btn-block {
                            padding: 1% 0; 
                            /* define values in pixels / Percentage or em. whatever suits 
                            your requirements */
                        }

                        .btn-group {
                            display: flex;
                            flex-direction: row;
                        }

                        .btn-group > button {
                            width: 100%;
                        }

                        .btn {
                            border: none;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 12px;
                            margin: 3px 1px;
                            cursor: pointer;
                            width: 135px;
                            padding: 5px;
                        }

                        .circle {
                            display: table-cell;
                            text-align: center;
                            vertical-align: middle;
                            border-radius: 50%;
                            border-style: solid;
                            font-size: 16px;
                            font-weight: bold;
                        }
                        .circle.circle1 {
                            border-color: #FFFFFF;
                            background: #3388FF;
                            color: white;
                        }
                    </style>


                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
                    <script src="http://sitdev.dyndns.org:8081/EMRS/Scripts/leaflet-mobile/leaflet.groupedlayercontrol.js"></script>
                    <script src="http://sitdev.dyndns.org:8081/EMRS/Scripts/leaflet-mobile/L.TileLayer.BetterWMS.js"></script>
                    <script src="http://sitdev.dyndns.org:8081/EMRS/Scripts/leaflet-mobile/L.Icon.Pulse.2.js"></script>
                    <script src="http://sitdev.dyndns.org:8081/EMRS/Scripts/leaflet-mobile/leaflet.awesome-markers.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.76.1/dist/L.Control.Locate.min.js" charset="utf-8"></script>
                    <script type = "text/JavaScript" src = "https://MomentJS.com/downloads/moment.js"></script>

                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                    <script src="https://unpkg.com/leaflet.markercluster@1.3.0/dist/leaflet.markercluster.js"></script>

                    <script>
                            var lc = null;
                            var markers;
                            var jobMarker;
                            var bounds;
                            var mymap;
                            var gpsMarker = null;
                            var gpsCircleMarker;
                            var deviLat;
                            var deviLng;
                            var popup;
                            var devicelatlng;
                            var pointList;
                            var markerDraggable = false;

                            var curLat;
                            var curLng;
                            var pulsingMarker;
                            var restrict_area;

                            let target = ${Platform.OS == 'ios' ? 'window' : 'document'};
                            target.addEventListener("message", message => {
                                let _obj = JSON.parse(message.data);
                                if(_obj.oninit_map == 0){
                                    devicelatlng = _obj.current_latlng;
                                    restrict_area = _obj.restrictArea;
                                    $(document).ready(function () {
                                        initMap();
                                    });
                                }else if(_obj.oninit_map == 4){ 
                                    //curLat = _obj.cur_lat;
                                    //curLng = _obj.cur_lng;
                                    //document.getElementById("btnOne").onclick = getCurrentLocationDevice();
                                }
                                var statusLocate = false;
                                function initMap() {
                                    //Open streetmap
                                    var openstreetmapURL = 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}';

                                    //World imagery
                                    var worldimageryURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
                                    var worldimageryAttrib = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

                                    var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                                        maxZoom: 30,
                                        maxNativeZoom: 22,
                                        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                                        attribution: ' '
                                    });

                                    var googleRoad = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                                        maxZoom: 30,
                                        maxNativeZoom: 22,
                                        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                                        attribution: ' '
                                    });

                                    var opsMap = L.tileLayer(openstreetmapURL, {
                                        attribution: 'OpenStreetMap',
                                        id: 'mapbox.streets',
                                        maxZoom: 30,
                                        maxNativeZoom: 22,
                                        attribution: ' '
                                    });

                                    deviLat = devicelatlng.latitude;
                                    deviLng = devicelatlng.longitude;
                                    ////Codeding MAP    
                                    mymap = L.map('map', { 
                                        zoomControl: true,
                                        layers: [googleRoad],
                                    }).setView([deviLat, deviLng], 18)
                                    mymap.options.minZoom = 5;

                                    var groupedOverlays = {  };
                                    getCurrentLocationDevice(deviLat,deviLng);
                                };
                            });

                            function circleWithText2(latLng, txt, radius, borderWidth, circleClass) {
                                var size = radius * 2;
                                var style = 'style="width: ' + size + 'px; height: ' + size + 'px; border-width: ' + borderWidth + 'px;"';
                                var iconSize = size + (borderWidth * 2);
                                var icon = L.divIcon({
                                    html: '<span class="' + 'circle ' + circleClass + '" ' + style + '>' + txt + '</span>',
                                    className: '',
                                    iconSize: [iconSize, iconSize]
                                });
                                pulsingMarker = new L.marker(latLng, { icon: icon });
                                return(pulsingMarker);
                            }

                            function getCurrentLocationDevice(curLat, curLng) {
                                // current point location
                                if(pulsingMarker){
                                    mymap.removeLayer(pulsingMarker);
                                }
                                circleWithText2([curLat, curLng], '', 11, 3, 'circle1').addTo(mymap);
                                mymap.panTo([curLat, curLng],{
                                        animate: true,
                                        duration: 0,
                                        easeLinearity: 0.9
                                    });
                                var msgObj = { lat : curLat, lng: curLng};
                                var msg = JSON.stringify(msgObj);
                                window.ReactNativeWebView.postMessage(msg);
                            }
                    </script>
                </head>
                <body>
                    <div id="map"></div>
                </body>
                </html>
                `, baseUrl: ''
                }}
                onMessage={onWebViewMessage}
            />
        </Box>
    )
}

export default MapView