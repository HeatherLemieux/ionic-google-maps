import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mapOptions(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(private googleMaps: GoogleMaps) { }

// Load map only after view is initialized
ngAfterViewInit() {
 this.loadMap();
}

 loadMap() {
    this.mapElement = document.getElementById('map');
    this.map = this.googleMaps.create(this.mapElement, this.mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => this.map.addMarker({
          title: 'BTL Marketing',
          icon: 'blue',
          animation: 'DROP',
          position: new LatLng(43.0741904,-89.3809802)
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });

        }))
  }

loadMap2() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 );

 // create LatLng object
 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };

 }

}