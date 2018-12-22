webpackJsonp([1],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, ngZone, toast, loading) {
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.toast = toast;
        this.loading = loading;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.geoCoder = new google.maps.Geocoder();
        this.originInput = '';
        this.destinationInput = '';
    }
    HomePage.prototype.createLoader = function (message) {
        return this.loading.create({
            content: message,
            duration: 3000
        });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.originAutocomplete = new google.maps.places.Autocomplete(document.getElementById('start').getElementsByTagName('input')[0], { placeIdOnly: true });
        this.destAutocomplete = new google.maps.places.Autocomplete(document.getElementById('end').getElementsByTagName('input')[0], { placeIdOnly: true });
        google.maps.event.addListener(this.originAutocomplete, 'place_changed', function () {
            _this.ngZone.run(function () {
                _this.originInput = _this.originAutocomplete.getPlace().name;
            });
        });
        google.maps.event.addListener(this.destAutocomplete, 'place_changed', function () {
            _this.ngZone.run(function () {
                _this.destinationInput = _this.destAutocomplete.getPlace().name;
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    HomePage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    HomePage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        var loader = this.createLoader('Searching');
        loader.present();
        this.directionsService.route({
            origin: this.originInput,
            destination: this.destinationInput,
            travelMode: 'DRIVING'
        }, function (response, status) {
            loader.dismiss();
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                _this.toast.create({
                    message: "Location " + status,
                    duration: 2000
                }).present();
            }
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\TMC\Downloads\google map\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Higher Ground App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list inset>\n\n      <ion-item>\n        \n          <ion-label >Start</ion-label>\n          <ion-input  type="search"  [(ngModel)]="originInput"  name="start"    clearInput id="start"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label >End</ion-label>\n        <ion-input  type="search" [(ngModel)]="destinationInput" id="end" name="end"    clearInput></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button   full (click)="calculateAndDisplayRoute()">Draw</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\TMC\Downloads\google map\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map