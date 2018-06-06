import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, App, Events } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { OscPage } from '../../pages/osc/osc';
import { ConnectProvider } from '../connect/connect';
import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';

declare var google;
declare var OverlappingMarkerSpiderfier;
declare var MarkerClusterer;

var markers = [];
var geo = [];
var map;
var infoWindow;
var oms;
var markerCluster;
var id_reg = [];
var markerclear = [];
var local;
var popupOsc = [];

@Injectable()
export class GoogleMapsProvider {

  popup_osc:string = 'https://mapaosc-desenv.ipea.gov.br:8383/api/osc/popup';
  api_região = 'https://mapaosc-desenv.ipea.gov.br:8383/api/geo/cluster/regiao'
  api_estado = 'https://mapaosc-desenv.ipea.gov.br:8383/api/geo/cluster/estado/';
  api_osc_estado = 'https://mapaosc-desenv.ipea.gov.br:8383/api/search/estado/geo/';

  mapInitialised: boolean = false;
  private apiKey: any;

  conect: boolean = true;

  constructor(public events: Events, public network: Network, public http: Http, protected app: App, public connect: ConnectProvider) {
  }

  initialize(element, mark = null) {

    if(typeof google == "undefined" || typeof google.maps == "undefined"){

      //Para teste local e no emulador
      if(this.conect){

      //if(this.connect.isOnline()){
        window['mapInit'] = () => {
          this.initMap(element, mark);
        }

        let script = document.createElement("script");
        script.id = "googleMaps";

        // Key api Google Maps
        this.apiKey = '';

        if(this.apiKey){
          script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
          script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
        }

        document.body.appendChild(script);

      }else{
        this.disableMap();
      }
    }
    else {
      //Para teste local e no emulador
      if(this.conect){

      //if(this.connect.isOnline()){
        this.initMap(element, mark);
      }
      else {
        this.disableMap();
      }
    }
  }

  initMap(element, mark){

    this.mapInitialised = true;

    markers = [];
    geo = [];

    var mapOptions = {
       center: new google.maps.LatLng(-15.175008, -54.4868151),
       zoom: 4,
       mapTypeId: 'roadmap',
       disableDefaultUI: true,
       maxZoom: 16,
       minZoom: 3
    };

    map = new google.maps.Map(element, mapOptions);

    infoWindow = new google.maps.InfoWindow();
    infoWindow.setOptions({maxWidth:180});

    oms = new OverlappingMarkerSpiderfier(map, {
      markersWontMove: true,
     markersWontHide: true,
     keepSpiderfied: true,
     ignoreMapClick: true
    });

    oms.addListener('click', function(marker) {
       infoWindow.open(map, marker);
     });

    google.maps.event.addListener(map, 'click', function() {
       infoWindow.close();
    });

    map.addListener('zoom_changed', event => {

       var zoom =  map.getZoom();
       if (zoom == 4 && mark == null) {
         if(markerCluster && id_reg != []){

           for(var i in markerclear){
             markerclear[i].clearMarkers();
           }
           this.getEstado(id_reg);
           id_reg = [];
         }
       }
   });

    this.getGeoLocalization(mark);

  }

  disableMap(){
    this.connect.showAlert("ERRO", "Erro ao carregar o Mapa, verifique sua conexão!", HomePage);
  }

  getGeoLocalization(mark){
    local = 'regiao';
    this.http.get(this.api_região).map(res => res.json()).subscribe(data => {
      geo.push(data);
      this.displayMarkers(mark, local);
    });
  }

  displayMarkers(mark, local){
    var markersData = [];

    if(mark != null){
      local = 'oscs';
      for(var j in mark){
        markersData .push({
          osc: j,
          lat: mark[j][0],
          lng: mark[j][1]
        });
      };
    }else{
      if(local == 'oscs'){
        for(var k in geo){
          for(var l in geo[k]){
            markersData .push({
              osc: l,
              lat: geo[k][l][0],
              lng: geo[k][l][1]
            });
          }
        };
      }else{
        for(var m in geo){
          for(var n in geo[m]){
            markersData .push({
              osc: null,
              id: geo[m][n].id_regiao,
              nome: geo[m][n].tx_nome_regiao,
              nr: geo[m][n].nr_quantidade_osc_regiao,
              lat: geo[m][n].geo_lat_centroid_regiao,
              lng: geo[m][n].geo_lng_centroid_regiao
            });
          }
        };
      }
    }

   var bounds = new google.maps.LatLngBounds();

   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var id_osc = markersData[i].osc;
      var id_regiao = markersData[i].id;
      var nome = markersData[i].nome;
      var nr = markersData[i].nr;

      this.createMarker(latlng, id_osc, id_regiao, nome, nr, local);

      bounds.extend(latlng);
   }

   var clusterStyles = [
    {
      url: 'assets/m/1.png',
      height: 36,
      width: 36
    },
   {
      url: 'assets/m/2.png',
      height: 35,
      width: 36
    },
   {
      url: 'assets/m/3.png',
      height: 46,
      width: 46
    }
  ];

  var mcOptions = {
      styles: clusterStyles,
      maxZoom: 15
  };

   if(local == 'oscs'){

    markerCluster = new MarkerClusterer(
         map,
         markers,
         mcOptions
       );

    markerclear.push(markerCluster);
   }
}

createMarker(latlng, id_osc, id_regiao, nome, nr, local){
  var marker;

  if(local == 'regiao' || local == 'estado'){
    var icon = '';

    if(local == 'regiao'){
      icon = 'assets/m/cluster.png';
    }else{
      if(local == 'estado'){
        icon = 'assets/m/cluster_y.png';
      }
    }

    marker = new google.maps.Marker({
       map: map,
       position: latlng,
       title: nome,
       label: ''+ nr +'',
       icon: icon
    });

  }else{
    marker = new google.maps.Marker({
      map: map,
      position: latlng,
      icon: 'assets/m/marker-icon.png',
   });
  }

  oms.addMarker(marker);

  markers.push(marker);

   if(local == 'regiao'){
     marker.addListener('click', event => {
       marker.setMap(null);
       markers.splice(marker);
       this.getEstado(id_regiao);
     });
   }else{
     if(local == 'estado'){
       marker.addListener('click', event => {
         marker.setMap(null);
         markers.splice(marker);
         this.getOscEstado(id_regiao, latlng);
         id_reg.push(id_regiao);
       });
     }else{
       marker.addListener('click', event => {
         this.getPopupOsc(id_osc, marker);
       });
     }
   }
  }

  getEstado(id_regiao){
    for(var r in id_regiao){
    var mark = null
    geo = null;
    local = 'estado';

      var regiao = this.api_estado + id_regiao[r];
      this.http.get(regiao).map(res => res.json()).subscribe(data => {
        geo = [];
        geo.push(data);
        this.displayMarkers(mark, local);
      });
    }


  }

  getOscEstado(id_regiao, latlng){
    var mark = null
    geo = [];
    local = 'oscs';

    var regiao = this.api_osc_estado + id_regiao;
    this.http.get(regiao).map(res => res.json()).subscribe(data => {
      geo.push(data);
      map.setCenter(latlng);
      map.setZoom(5);
      this.displayMarkers(mark, local);
    });
  }


  getPopupOsc(id_osc, marker){
    popupOsc = [];
    const url = `${this.popup_osc}/${id_osc}`;

    var iwContent = '<div id="info" style="text-align: center;">' +
       '<img id="clickableItem" src="assets/img/loading.gif"/>'
       '</div>';

    infoWindow.setContent(iwContent);

    this.http.get(url).map(res => res.json()).subscribe(data => {
      popupOsc.push(data);
      this.createPopup(id_osc, marker);
    });
  }

  createPopup(id_osc, marker){
    map.setCenter(marker.getPosition());
    var iwContent = '<div id="info" style="text-align: center;">' +
       '<h4 id="'+id_osc+'" style="font-size: 15px; color: #337cbb;">'+popupOsc[0].tx_nome_osc+'</h4>' +
       '<p style="font-size: 12px;text-align: left;"><strong>Endereço:</strong> '+popupOsc[0].tx_endereco+'</p>' +
       '<button class="btn-info" id="clickableItem" >Detalhar</button>' +
       '</div>';


    infoWindow.setContent(iwContent);

    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {

      var div_info = document.getElementById('info');
      var div = div_info.parentElement.parentElement.parentElement.parentElement.children[0].children;
      var info = div[1];
      info.setAttribute("class", "div_info1");
      var info2 = div[3];
      info2.setAttribute("class", "div_info2");

      var clickid = document.getElementById('clickableItem');
      clickid.addEventListener('click', () => {
        this.pageOsc(id_osc);
      });
   });
  }

  navCrtl(): NavController{
    return this.app.getRootNav();
  }

  pageOsc(id_osc){
    this.navCrtl().push(OscPage, {id_osc: id_osc});
  }

}
