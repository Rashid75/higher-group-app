webpackJsonp([1],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestPageModule = (function () {
    function TestPageModule() {
    }
    return TestPageModule;
}());
TestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */]
        ]
    })
], TestPageModule);

//# sourceMappingURL=test.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
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


/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, loading, navParams) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: "Loading...",
            duration: 3000
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            _this.navCtrl.setRoot('HomePage');
        }, 2000);
    };
    return TestPage;
}());
TestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-test',template:/*ion-inline-start:"E:\Development\Visual Studio Code\Ionic\higher-group-app\src\pages\test\test.html"*/''/*ion-inline-end:"E:\Development\Visual Studio Code\Ionic\higher-group-app\src\pages\test\test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TestPage);

//# sourceMappingURL=test.js.map

/***/ })

});
//# sourceMappingURL=1.js.map