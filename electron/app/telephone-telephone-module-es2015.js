(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telephone-telephone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/telephone/telephone.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/telephone/telephone.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Téléphone\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <p>Plateforme : {{infoDevice?.platform}}</p>\n    </ion-item>\n    <ion-item>\n      <p>Version : {{infoDevice?.osVersion}}</p>\n    </ion-item>\n    <ion-item>\n      <p>UUID : {{infoDevice?.uuid}}</p>\n    </ion-item>\n    <ion-item>\n      <p>Modèle : {{infoDevice?.model}}</p>\n    </ion-item>\n    <ion-item>\n      <p>Connexion : {{infoReseau?.connectionType}}</p>\n    </ion-item>\n  </ion-list>\n  <ng-container *ngIf=\"isErreurRecuperationDeviceInfo || isErreurRecuperationReseauInfo\">\n    <ion-text color=\"danger\">\n      <p>Une erreur est survenue dans la récupération des informations.</p>\n    </ion-text>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/telephone/telephone.module.ts":
/*!***********************************************!*\
  !*** ./src/app/telephone/telephone.module.ts ***!
  \***********************************************/
/*! exports provided: TelephonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelephonePageModule", function() { return TelephonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _telephone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telephone.page */ "./src/app/telephone/telephone.page.ts");







const routes = [
    {
        path: '',
        component: _telephone_page__WEBPACK_IMPORTED_MODULE_6__["TelephonePage"]
    }
];
let TelephonePageModule = class TelephonePageModule {
};
TelephonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_telephone_page__WEBPACK_IMPORTED_MODULE_6__["TelephonePage"]]
    })
], TelephonePageModule);



/***/ }),

/***/ "./src/app/telephone/telephone.page.ts":
/*!*********************************************!*\
  !*** ./src/app/telephone/telephone.page.ts ***!
  \*********************************************/
/*! exports provided: TelephonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelephonePage", function() { return TelephonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let TelephonePage = class TelephonePage {
    constructor() {
    }
    ngOnInit() {
        Device.getInfo().then((infos => {
            this.isErreurRecuperationDeviceInfo = false;
            this.infoDevice = infos;
        }), (() => this.isErreurRecuperationDeviceInfo = true));
        Network.getStatus().then((infos => {
            this.isErreurRecuperationReseauInfo = false;
            this.infoReseau = infos;
        }), (() => this.isErreurRecuperationReseauInfo = true));
    }
};
TelephonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-telephone',
        template: __webpack_require__(/*! raw-loader!./telephone.page.html */ "./node_modules/raw-loader/index.js!./src/app/telephone/telephone.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TelephonePage);



/***/ })

}]);
//# sourceMappingURL=telephone-telephone-module-es2015.js.map