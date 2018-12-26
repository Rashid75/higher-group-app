import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import { IonicPage, ToastController, LoadingController } from "ionic-angular";
import { NavController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import {
  LaunchNavigator,
  LaunchNavigatorOptions
} from "@ionic-native/launch-navigator";
declare var google;

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;
  originAutocomplete: any;
  destAutocomplete: any;
  directionsService: any;
  directionsDisplay: any;
  geoCoder: any;
  originInput = "";
  destinationInput = "";
  markerArray = [];
  constructor(
    public navCtrl: NavController,
    private launchNavigator: LaunchNavigator,
    private ngZone: NgZone,
    private geolocation: Geolocation,
    public toast: ToastController,
    public loading: LoadingController
  ) {}
  createLoader(message) {
    return this.loading.create({
      content: message,
      duration: 3000
    });
  }
  initializeEvents() {
    try {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.geoCoder = new google.maps.Geocoder();
      this.destAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("end").getElementsByTagName("input")[0],
        { placeIdOnly: true }
      );

      google.maps.event.addListener(
        this.destAutocomplete,
        "place_changed",
        () => {
          this.ngZone.run(() => {
            this.destinationInput = this.destAutocomplete.getPlace().name;
          });
        }
      );
    } catch (e) {
      alert("Check your internet connection");
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeEvents();
      this.initMap();
    }, 2000);
  }
  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
    this.directionsDisplay.setMap(this.map);
  }

  async calculateAndDisplayRoute() {
    const current = await this.getNativeCurrentLocation();
    if (!current) {
      alert("Current location not found");
      return;
    }
    const map = this.map;
    this.clearMarker();
    const loader = this.createLoader("Searching");
    loader.present();
    this.directionsService.route(
      {
        origin: current["lat"] + "," + current["lng"],
        destination: this.destinationInput,
        travelMode: "DRIVING",
        provideRouteAlternatives: true
      },
      (response, status) => {
        loader.dismiss();
        if (status === "OK") {
          this.directionsDisplay.setDirections(response);
          let alternate = true;
          console.log(response.routes.length);
          response.routes.forEach((el1, ind1) => {
            let alter_path = response.routes[ind1].overview_path;
            alternate = true;
            alter_path.forEach((el2, ind2) => {
              const distance = this.getDistance(
                current["lat"],
                current["lng"],
                el2.lat(),
                el2.lng()
              );
              if (parseInt(distance.toFixed(1)) === 3 && alternate) {
                var marker = new google.maps.Marker();
                marker.setMap(map);
                marker.setPosition({
                  lat: el2.lat(),
                  lng: el2.lng()
                });
                this.markerArray.push(marker);
                console.log("--marker---" + distance);
                alternate = false;
              }
            });
          });
        } else {
          this.toast
            .create({
              message: `Location ${status}`,
              duration: 2000
            })
            .present();
        }
      }
    );
  }
  clearMarker() {
    for (var i = 0; i < this.markerArray.length; i++) {
      this.markerArray[i].setMap(null);
    }
  }

  showSteps(directionResult, markerArray) {
    var myRoute = directionResult.routes[0].legs[0];
    for (var i = 0; i < myRoute.steps.length; i++) {
      var marker = (markerArray[i] =
        markerArray[i] || new google.maps.Marker());
      marker.setMap(this.map);
      marker.setPosition(myRoute.steps[i].start_location);
    }
  }
  getNativeCurrentLocation() {
    return new Promise((resolve, reject) => {
      return this.geolocation
        .getCurrentPosition()
        .then(resp =>
          resolve({
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          })
        )
        .catch(() => reject(false));
    });
  }
  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          return resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        function() {
          reject(false);
        }
      );
    });
  }
  getDistance(lat1, lng1, lat2, lng2) {
    if (lat1 == null || lng1 == null || lat2 == null || lng2 == null) {
      return 0;
    } else {
      var earthRadius = 6371; //3958.75 in miles, change to 6371 for kilometer output

      var degLat = (lat2 - lat1) * (Math.PI / 100);
      var degLng = (lng2 - lng1) * (Math.PI / 100);

      var dLat = degLat;
      var dLng = degLng;

      var sindLat = Math.sin(dLat / 2);
      var sindLng = Math.sin(dLng / 2);

      var deglat1 = lat1 * (Math.PI / 100);
      var deglat2 = lat2 * (Math.PI / 100);

      var a =
        Math.pow(sindLat, 2) +
        Math.pow(sindLng, 2) * Math.cos(deglat1) * Math.cos(deglat2);

      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      var dist = earthRadius * c;
      // console.log('distance from l1 to l2', dist);
      return dist; // output distance, in MILES
    }
  }
}
