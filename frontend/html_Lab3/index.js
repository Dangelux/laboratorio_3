/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_marker_labels]
// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.

var bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJQUE9PSUlfSldUIiwic3ViIjoibHVpcyIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE3MTUyMDk0NTAsImV4cCI6MTcxNjA3MzQ1MH0.qTUtsQC_34hORq_rhfaeDQ30vvHdY2NiUfO80XUnkszUp6SA7OcYlgAt4qVEhtLftT-dU8hfK7BG_ot9CJHZaQ";
fetch('http://localhost:9001/LaboratorioV1/coordenadas', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
                'Authorization': bearer
            },
            mode: 'cors'
        })
      .then(response => response.json())
      .then(json => {
            console.log(json);
            const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let labelIndex = 0;
            function initMap() {
                const bangalore = {lat: 4.4279668,lng:-75.21346609999999};
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 14,
                    center: bangalore,
                }); 
                // Add a marker at the center of the map.
                for(const coord of json){ 
                    addMarker({lat: coord.longitud  , lng: coord.latitud }, map, coord.marca);
                }
            }
            // Adds a marker to the map.
            function addMarker(location, map, label) {
            // Add the marker at the clicked location, and add the next-available label
            // from the array of alphabetical characters.
            new google.maps.Marker({
                position: location,
                label: labels[labelIndex++ % labels.length],
                title: label,
                map: map,
            });
            }
            window.initMap = initMap; 
            // [END maps_marker_labels]
      })

