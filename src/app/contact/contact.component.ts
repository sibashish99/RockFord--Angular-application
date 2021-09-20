import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  ImagePath: string;
  ImagePath1: string;
  constructor() { 
    this.ImagePath = '../assets/6.png';
    this.ImagePath1 = '../assets/place.png';
  }
  // title = 'google-map';
  ngOnInit(): void {
    // throw new Error('Not implemented');
    // let loader= new Loader({
    //   apiKey: 'AIzaSyA_9QUGst3ymAeCfoUbUUgZiyZygPUr-To',
    // });
    // loader.load().then(() => {
    //    new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //     center: { lat: 42.2689, lng:  89.0187 },
    //     zoom: 6,
    //     styles:[
    //       {
    //         "featureType": "administrative.land_parcel",
    //         "elementType": "labels",
    //         "stylers": [
    //           {
    //             "visibility": "off"
    //           }
    //         ]
    //       },
    //       {
    //         "featureType": "poi.business",
    //         "stylers": [
    //           {
    //             "visibility": "off"
    //           }
    //         ]
    //       },
    //       {
    //         "featureType": "poi.park",
    //         "elementType": "labels.text",
    //         "stylers": [
    //           {
    //             "visibility": "off"
    //           }
    //         ]
    //       },
    //       {
    //         "featureType": "road.highway",
    //         "elementType": "labels.icon",
    //         "stylers": [
    //           {
    //             "weight": 2
    //           }
    //         ]
    //       },
    //       {
    //         "featureType": "road.local",
    //         "elementType": "labels",
    //         "stylers": [
    //           {
    //             "visibility": "off"
    //           }
    //         ]
    //       }
    //     ]
    //   });
    // });
  }

}
