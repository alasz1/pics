(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _third_third_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third/third.component */ "./src/app/third/third.component.ts");






var routes = [{
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
    },
    {
        path: 'first',
        component: _first_first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"]
    },
    {
        path: 'second',
        component: _second_second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"]
    },
    {
        path: 'third',
        component: _third_third_component__WEBPACK_IMPORTED_MODULE_5__["ThirdComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav, a.nav-link {\r\n\r\n    background-color: #fff !important;\r\n}\r\n\r\n\r\n\r\na.nav-link:hover, .navbar-light .nav-item > .nav-link.active {\r\n    font-style: italic;\r\n}\r\n\r\n\r\n\r\n* {\r\n    font-family: 'Lexend Peta', sans-serif;\r\n}\r\n\r\n\r\n\r\nbutton {\r\n    border: none;\r\n    background-color: #fff;\r\n}\r\n\r\n\r\n\r\nbutton:focus, button:active, button.active {\r\n    outline: none;\r\n    font-style: italic;\r\n}\r\n\r\n\r\n\r\n.carousel-control-next-icon, .carousel-control-prev-icon {\r\n        /* Use to adjust size of icons */\r\n        opacity: 0;\r\n        width: 1rem;\r\n        height: 1rem;\r\n    }\r\n\r\n\r\n\r\n.carousel-control-next:hover > .carousel-control-next-icon, .carousel-control-prev:hover > .carousel-control-prev-icon {\r\n        /* Use to adjust size of icons */\r\n        opacity: 1;\r\n        /* -webkit-animation: fadeInFromNone 0.5s ease-out;\r\n        -moz-animation: fadeInFromNone 0.5s ease-out;\r\n        -o-animation: fadeInFromNone 0.5s ease-out;\r\n        animation: fadeInFromNone 0.5s ease-out; */\r\n        /* width: 3rem;\r\n        height: 3rem; */\r\n    }\r\n\r\n\r\n\r\n@-webkit-keyframes fadeInFromNone {\r\n        0% {\r\n     \r\n            opacity: 0;\r\n        }\r\n    \r\n        1% {\r\n         \r\n            opacity: 0;\r\n        }\r\n    \r\n        100% {\r\n      \r\n            opacity: 1;\r\n        }\r\n    }\r\n\r\n\r\n\r\n@keyframes fadeInFromNone {\r\n        0% {\r\n       \r\n            opacity: 0;\r\n        }\r\n    \r\n        1% {\r\n       \r\n            opacity: 0;\r\n        }\r\n    \r\n        100% {\r\n          \r\n            opacity: 1;\r\n        }\r\n    }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUNBQWlDO0FBQ3JDOzs7O0FBSUE7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJLHNDQUFzQztBQUMxQzs7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7OztBQUdJO1FBQ0ksZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7OztBQUVBO1FBQ0ksZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVjs7O2tEQUcwQztRQUMxQzt1QkFDZTtJQUNuQjs7OztBQUVBO1FBQ0k7O1lBRUksVUFBVTtRQUNkOztRQUVBOztZQUVJLFVBQVU7UUFDZDs7UUFFQTs7WUFFSSxVQUFVO1FBQ2Q7SUFDSjs7OztBQW9DQTtRQUNJOztZQUVJLFVBQVU7UUFDZDs7UUFFQTs7WUFFSSxVQUFVO1FBQ2Q7O1FBRUE7O1lBRUksVUFBVTtRQUNkO0lBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiwgYS5uYXYtbGluayB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbmEubmF2LWxpbms6aG92ZXIsIC5uYXZiYXItbGlnaHQgLm5hdi1pdGVtID4gLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCBQZXRhJywgc2Fucy1zZXJpZjtcclxufVxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlLCBidXR0b24uYWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbiAgICBcclxuICAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiwgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICAgICAgICAvKiBVc2UgdG8gYWRqdXN0IHNpemUgb2YgaWNvbnMgKi9cclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0OmhvdmVyID4gLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2OmhvdmVyID4gLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICAgICAgICAvKiBVc2UgdG8gYWRqdXN0IHNpemUgb2YgaWNvbnMgKi9cclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAwLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAwLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUgMC41cyBlYXNlLW91dDtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDAuNXMgZWFzZS1vdXQ7ICovXHJcbiAgICAgICAgLyogd2lkdGg6IDNyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIDElIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIDElIHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQC1vLWtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAxJSB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAxJSB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div> -->\n\n<!-- Navbar disabled, issues when moving between views -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto nav-fill w-100\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/first\" (click)=\"toggleView('first')\">Pics<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/second\" (click)=\"toggleView('second')\">Pics</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/third\" (click)=\"toggleView('third')\">Pics</a>\n      </li>\n    </ul>\n\n  </div>\n\n</nav>\n\n<!-- <div style=\"text-align:center\">\n<button (click)=\"toggleView('first')\" routerLink=\"/first\">Pics</button>\n<button (click)=\"toggleView('second')\" routerLink=\"/second\">Pics</button>\n<button (click)=\"toggleView('third')\" routerLink=\"/third\">Pics</button>\n</div> -->\n\n<!-- <h3>{{pics}}</h3> -->\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pic.service */ "./src/app/pic.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(picService) {
        this.picService = picService;
        this.title = 'pics';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.view = "first";
        // this.picUrl = ['../assets/first/IMG_2801.JPG', '../assets/first/IMG_2802.JPG']
        // this.pics = this.picUrl
        this.getAllPics();
    };
    AppComponent.prototype.getAllPics = function () {
        var _this = this;
        var dir = this.view;
        this.picService.getPics(dir).subscribe(function (pic) {
            _this.pics = pic;
            console.log("this.pics: ", _this.pics);
            var pics = [];
            _this.pics.forEach(function (p) {
                pics.push("../assets/" + _this.view + "/" + p);
                console.log("pics: ", pics, "this.picurl: ", _this.picUrl);
                _this.picUrl = pics;
                console.log("pics2: ", pics, "this.picurl2: ", _this.picUrl);
            });
        });
    };
    AppComponent.prototype.toggleView = function (newView) {
        this.view = newView;
        this.getAllPics();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pic_service__WEBPACK_IMPORTED_MODULE_2__["PicService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _pic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pic.service */ "./src/app/pic.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _third_third_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./third/third.component */ "./src/app/third/third.component.ts");










 // Angular bootstrap
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_5__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_9__["SecondComponent"],
                _third_third_component__WEBPACK_IMPORTED_MODULE_10__["ThirdComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselModule"] // Angular bootstrap
            ],
            providers: [_pic_service__WEBPACK_IMPORTED_MODULE_6__["PicService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-interval=\"false\" data-ride=\"carousel\" data-pause=\"hover\">\n  <div class=\"carousel-inner\">\n\n    <div class=\"carousel-item active\">\n      <img src={{picUrl[0]}} class=\"d-block w-100 h-100\" alt=\"...\" loading=\"lazy\">\n    </div>\n\n    <div class=\"carousel-item\" *ngFor=\"let pic of pics.slice(1); let i = index;\">\n      <img src={{picUrl[i+1]}} class=\"d-block w-100 h-100\" alt=\"...\" loading=\"lazy\">\n    </div>\n\n    <!-- <div class=\"carousel-item\">\n      <img src=\"https://picsum.photos/1200/800\" class=\"d-block w-100 h-100\" alt=\"...\">\n    </div> -->\n\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pic.service */ "./src/app/pic.service.ts");



var FirstComponent = /** @class */ (function () {
    function FirstComponent(picService) {
        this.picService = picService;
        this.title = 'pics';
    }
    FirstComponent.prototype.ngOnInit = function () {
        this.view = "first";
        // this.picUrl = ['../assets/first/IMG_2801.JPG', '../assets/first/IMG_2802.JPG']
        // this.pics = this.picUrl
        this.getAllPics();
    };
    FirstComponent.prototype.getAllPics = function () {
        var _this = this;
        var dir = this.view;
        this.picService.getPics(dir).subscribe(function (pic) {
            _this.pics = pic;
            console.log("this.pics: ", _this.pics);
            var pics = [];
            _this.pics.forEach(function (p) {
                pics.push("../assets/" + _this.view + "/" + p);
                console.log("pics: ", pics, "this.picurl: ", _this.picUrl);
                _this.picUrl = pics;
                console.log("pics2: ", pics, "this.picurl2: ", _this.picUrl);
            });
        });
    };
    FirstComponent.prototype.toggleView = function (newView) {
        this.view = newView;
        this.getAllPics();
    };
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pic_service__WEBPACK_IMPORTED_MODULE_2__["PicService"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/pic.service.ts":
/*!********************************!*\
  !*** ./src/app/pic.service.ts ***!
  \********************************/
/*! exports provided: PicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicService", function() { return PicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PicService = /** @class */ (function () {
    function PicService(http) {
        this.http = http;
    }
    PicService.prototype.getPics = function (dir) {
        var param = { "dir": dir };
        return this.http.get("" + apiUrl, { params: param });
    };
    PicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PicService);
    return PicService;
}());

// const apiUrl = "http://localhost:3000/";
var apiUrl = 'https://picspicspics.herokuapp.com/';


/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pic.service */ "./src/app/pic.service.ts");



var SecondComponent = /** @class */ (function () {
    function SecondComponent(picService) {
        this.picService = picService;
        this.title = 'pics';
    }
    SecondComponent.prototype.ngOnInit = function () {
        this.view = "second";
        // this.picUrl = ['../assets/first/IMG_2801.JPG', '../assets/first/IMG_2802.JPG']
        // this.pics = this.picUrl
        this.getAllPics();
    };
    SecondComponent.prototype.getAllPics = function () {
        var _this = this;
        var dir = this.view;
        this.picService.getPics(dir).subscribe(function (pic) {
            _this.pics = pic;
            console.log("this.pics: ", _this.pics);
            var pics = [];
            _this.pics.forEach(function (p) {
                pics.push("../assets/" + _this.view + "/" + p);
                console.log("pics: ", pics, "this.picurl: ", _this.picUrl);
                _this.picUrl = pics;
                console.log("pics2: ", pics, "this.picurl2: ", _this.picUrl);
            });
        });
    };
    SecondComponent.prototype.toggleView = function (newView) {
        this.view = newView;
        this.getAllPics();
    };
    SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ../first/first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pic_service__WEBPACK_IMPORTED_MODULE_2__["PicService"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/third/third.component.ts":
/*!******************************************!*\
  !*** ./src/app/third/third.component.ts ***!
  \******************************************/
/*! exports provided: ThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdComponent", function() { return ThirdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pic.service */ "./src/app/pic.service.ts");



var ThirdComponent = /** @class */ (function () {
    function ThirdComponent(picService) {
        this.picService = picService;
        this.title = 'pics';
    }
    ThirdComponent.prototype.ngOnInit = function () {
        this.view = "third";
        // this.picUrl = ['../assets/first/IMG_2801.JPG', '../assets/first/IMG_2802.JPG']
        // this.pics = this.picUrl
        this.getAllPics();
    };
    ThirdComponent.prototype.getAllPics = function () {
        var _this = this;
        var dir = this.view;
        this.picService.getPics(dir).subscribe(function (pic) {
            _this.pics = pic;
            console.log("this.pics: ", _this.pics);
            var pics = [];
            _this.pics.forEach(function (p) {
                pics.push("../assets/" + _this.view + "/" + p);
                console.log("pics: ", pics, "this.picurl: ", _this.picUrl);
                _this.picUrl = pics;
                console.log("pics2: ", pics, "this.picurl2: ", _this.picUrl);
            });
        });
    };
    ThirdComponent.prototype.toggleView = function (newView) {
        this.view = newView;
        this.getAllPics();
    };
    ThirdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-third',
            template: __webpack_require__(/*! ../first/first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pic_service__WEBPACK_IMPORTED_MODULE_2__["PicService"]])
    ], ThirdComponent);
    return ThirdComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\antti\Documents\gallery\gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map