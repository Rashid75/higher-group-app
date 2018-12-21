webpackJsonp([0],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(306);
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
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(102);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
var LaunchNavigator = (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit'
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit'
        };
        return _this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.navigate = /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.isAppAvailable = /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    LaunchNavigator.prototype.availableApps = /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    LaunchNavigator.prototype.getAppDisplayName = /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getAppsForPlatform = /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsTransportMode = /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getTransportModes = /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsDestName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStart = /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStartName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsLaunchMode = /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    LaunchNavigator.prototype.userSelect = /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    function (destination, options) { };
    LaunchNavigator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "navigate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "isAppAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "availableApps", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], LaunchNavigator.prototype, "getAppDisplayName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getAppsForPlatform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsTransportMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getTransportModes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsDestName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStartName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsLaunchMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LaunchNavigator.prototype, "userSelect", null);
    /**
     * @name Launch Navigator
     * @description
     * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
     *
     * @usage
     * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
     *
     * ```typescript
     * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
     *
     * constructor(private launchNavigator: LaunchNavigator) { }
     *
     * ...
     *
     * let options: LaunchNavigatorOptions = {
     *   start: 'London, ON',
     *   app: LaunchNavigator.APPS.UBER
     * };
     *
     * this.launchNavigator.navigate('Toronto, ON', options)
     *   .then(
     *     success => console.log('Launched navigator'),
     *     error => console.log('Error launching navigator', error)
     *   );
     * ```
     * @interfaces
     * LaunchNavigatorOptions
     * PromptsOptions
     * RememberChoiceOptions
     * AppSelectionOptions
     * UserChoice
     * UserPrompted
     * AppSelection
     */
    LaunchNavigator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(306);
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
    function HomePage(navCtrl, launchNavigator, ngZone, toast, loading) {
        this.navCtrl = navCtrl;
        this.launchNavigator = launchNavigator;
        this.ngZone = ngZone;
        this.toast = toast;
        this.loading = loading;
        this.originInput = "";
        this.destinationInput = "";
    }
    HomePage.prototype.createLoader = function (message) {
        return this.loading.create({
            content: message,
            duration: 3000
        });
    };
    HomePage.prototype.initializeEvents = function () {
        var _this = this;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.geoCoder = new google.maps.Geocoder();
        this.originAutocomplete = new google.maps.places.Autocomplete(document.getElementById("start").getElementsByTagName("input")[0], { placeIdOnly: true });
        this.destAutocomplete = new google.maps.places.Autocomplete(document.getElementById("end").getElementsByTagName("input")[0], { placeIdOnly: true });
        google.maps.event.addListener(this.originAutocomplete, "place_changed", function () {
            _this.ngZone.run(function () {
                _this.originInput = _this.originAutocomplete.getPlace().name;
            });
        });
        google.maps.event.addListener(this.destAutocomplete, "place_changed", function () {
            _this.ngZone.run(function () {
                _this.destinationInput = _this.destAutocomplete.getPlace().name;
            });
        });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initializeEvents();
            _this.initMap();
        }, 2000);
    };
    HomePage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    HomePage.prototype.navigate = function () {
        var _this = this;
        var options = {
            start: this.originInput,
            launchModeGoogleMaps: 'turn-by-turn'
        };
        setTimeout(function () {
            _this.destinationInput = 'Allah Hoo Chowk';
            _this.launchNavigator
                .navigate(_this.destinationInput, options)
                .then(function (success) { return alert("Launched navigator"); }, function (error) { return alert("Error launching navigator: " + error); });
        }, 20000);
        this.launchNavigator
            .navigate(this.destinationInput, options)
            .then(function (success) { return alert("Launched navigator"); }, function (error) { return alert("Error launching navigator: " + error); });
    };
    HomePage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        var loader = this.createLoader("Searching");
        loader.present();
        this.directionsService.route({
            origin: this.originInput,
            destination: this.destinationInput,
            travelMode: "DRIVING"
        }, function (response, status) {
            loader.dismiss();
            if (status === "OK") {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                _this.toast
                    .create({
                    message: "Location " + status,
                    duration: 2000
                })
                    .present();
            }
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("map"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-home",template:/*ion-inline-start:"E:\Development\Visual Studio Code\Ionic\higher-group-app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar> <ion-title> Higher Ground App </ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list inset>\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-input\n          type="search"\n          [(ngModel)]="originInput"\n          name="start"\n          clearInput\n          id="start"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>End</ion-label>\n        <ion-input\n          type="search"\n          [(ngModel)]="destinationInput"\n          id="end"\n          name="end"\n          clearInput\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n    <div >\n      <button ion-button style="width:48%" (click)="calculateAndDisplayRoute()">Draw</button>\n      <button ion-button style="width:48%" (click)="navigate()">Navigate</button>\n    </div>\n    \n  </div>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"E:\Development\Visual Studio Code\Ionic\higher-group-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map