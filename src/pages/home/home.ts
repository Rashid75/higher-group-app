import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, ToastController, LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  originAutocomplete: any;
  destAutocomplete: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  geoCoder = new google.maps.Geocoder();
  originInput = ''
  destinationInput = ''
  constructor(public navCtrl: NavController, private ngZone: NgZone, public toast: ToastController, public loading: LoadingController) {
  }
  createLoader(message) {
    return this.loading.create({
      content: message,
      duration: 3000
    });
  }
  ngAfterViewInit() {
    this.originAutocomplete = new google.maps.places.Autocomplete(document.getElementById('start').getElementsByTagName('input')[0], { placeIdOnly: true });
    this.destAutocomplete = new google.maps.places.Autocomplete(document.getElementById('end').getElementsByTagName('input')[0], { placeIdOnly: true });

    google.maps.event.addListener(this.originAutocomplete, 'place_changed', () => {
      this.ngZone.run(() => {
        this.originInput = this.originAutocomplete.getPlace().name
      });
    });
    google.maps.event.addListener(this.destAutocomplete, 'place_changed', () => {
      this.ngZone.run(() => {
        this.destinationInput = this.destAutocomplete.getPlace().name
      });
    });
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    const loader = this.createLoader('Searching')
    loader.present();
    this.directionsService.route({
      origin: this.originInput,
      destination: this.destinationInput,
      travelMode: 'DRIVING'
    }, (response, status) => {
      loader.dismiss()
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        this.toast.create({
          message: `Location ${status}`,
          duration: 2000
        }).present();
      }
    });
  }
}
