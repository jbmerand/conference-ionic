(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speakers-speakers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/speakers/speakers.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/speakers/speakers.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Présentateurs\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-content\n                class=\"ion-no-padding ion-padding-top ion-padding-start ion-padding-end\">\n            <ng-container *ngIf=\"!isErreurRecuperationPresentateurs\">\n                <ng-container *ngIf=\"presentateursData.length > 0\">\n                    <ion-list>\n                        <ion-item\n                                *ngFor=\"let presentateur of presentateursData\">\n                            <ion-avatar slot=\"start\">\n                                <img [src]=\"urlBlogDevFest.concat(presentateur.photoUrl)\"\n                                     alt=\"photo du présentateur\">\n                            </ion-avatar>\n                            <ion-label>\n                                <a routerLink=\"/speakers/{{presentateur.id}}\">\n                                  {{presentateur.name}}\n                                </a>\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"isErreurRecuperationPresentateurs\">\n                <ion-text color=\"danger\">\n                    <p>Une erreur dans la récupération des présentateurs\n                        s'est produite.</p>\n                </ion-text>\n            </ng-container>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/speakers/speakers.module.ts":
/*!*********************************************!*\
  !*** ./src/app/speakers/speakers.module.ts ***!
  \*********************************************/
/*! exports provided: SpeakersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersPageModule", function() { return SpeakersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _speakers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speakers.page */ "./src/app/speakers/speakers.page.ts");







const routes = [
    {
        path: '',
        component: _speakers_page__WEBPACK_IMPORTED_MODULE_6__["SpeakersPage"]
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | speaker-speaker-module */ "speaker-speaker-module").then(__webpack_require__.bind(null, /*! ./speaker/speaker.module */ "./src/app/speakers/speaker/speaker.module.ts")).then(m => m.SpeakerPageModule)
    }
];
let SpeakersPageModule = class SpeakersPageModule {
};
SpeakersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_speakers_page__WEBPACK_IMPORTED_MODULE_6__["SpeakersPage"]]
    })
], SpeakersPageModule);



/***/ }),

/***/ "./src/app/speakers/speakers.page.ts":
/*!*******************************************!*\
  !*** ./src/app/speakers/speakers.page.ts ***!
  \*******************************************/
/*! exports provided: SpeakersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersPage", function() { return SpeakersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



/**
 * Composant gérant la page d'affichage de la liste des présentateurs.
 */
let SpeakersPage = class SpeakersPage {
    /**
     * Constructeur
     * @param dataService : DataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';
    }
    ngOnInit() {
        this.dataService.recupererDonneesSpeakers().subscribe((presentateurs => {
            this.isErreurRecuperationPresentateurs = false;
            this.presentateursData = presentateurs;
        }), (() => this.isErreurRecuperationPresentateurs = true));
    }
};
SpeakersPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
SpeakersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speakers',
        template: __webpack_require__(/*! raw-loader!./speakers.page.html */ "./node_modules/raw-loader/index.js!./src/app/speakers/speakers.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], SpeakersPage);



/***/ })

}]);
//# sourceMappingURL=speakers-speakers-module-es2015.js.map