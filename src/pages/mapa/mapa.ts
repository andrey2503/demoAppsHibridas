import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions,  CameraPosition,  MarkerOptions,  Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
//end mapa

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
  providers:[Geolocation]
})
export class MapaPage {
  map: GoogleMap;
  public latitud:any;
  public longitud:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.cargarPosicion();
  }//fin de ionviredisload

  cargarPosicion(){
    this.geolocation.getCurrentPosition().then((resp) => {
     this.latitud = resp.coords.latitude;
     this.longitud = resp.coords.longitude;
    //  alert(this.latitud+" /" +this.longitud);
     this.loadMap();
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitud,
          lng: this.longitud
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Estas aqui',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.latitud,
              lng: this.longitud
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('Estas aqui');
              });
          });

          
          //marcas

      });

      
  }// fin de loadmap

}//fin de la clase
