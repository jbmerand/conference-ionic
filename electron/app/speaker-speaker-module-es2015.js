(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speaker-speaker-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/speakers/speaker/speaker.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/speakers/speaker/speaker.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Présentateur</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header class=\"ion-text-center\">\n      <h1>{{presentateurData?.name}}</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <ng-container *ngIf=\"!isErreurRecuperationPresentateur\">\n      <ion-img [src]=\"urlBlogDevFest.concat(presentateurData.photoUrl)\"></ion-img>\n      <h2 class=\"ion-padding-top ion-padding-end\">Biographie</h2>\n      <p class=\"ion-padding-top ion-padding-end\">\n        <em>{{presentateurData.bio || \"Aucune biographie disponible.\"}}</em>\n      </p>\n      <ng-container *ngIf=\"!isErreurRecuperationSessions\">\n        <ng-container *ngIf=\"sessionsData.length > 0\">\n          <h2 class=\"ion-padding-top ion-padding-end\">Ses présentations</h2>\n          <ion-list>\n            <ion-item *ngFor=\"let session of sessionsData\">\n              <ion-label>\n                <a routerLink=\"/sessions/{{session.id}}\">\n                  {{session.titleMobile || session.title}}\n                </a>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"isErreurRecuperationSessions\">\n        <ion-text color=\"danger\">\n          <p>Une erreur s'est produite dans la récupération des\n            données des sessions.</p>\n        </ion-text>\n      </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"isErreurRecuperationPresentateur\">\n        <ion-text color=\"danger\">\n          <p>Une erreur s'est produite dans la récupération des\n            données du présentateur.</p>\n        </ion-text>\n      </ng-container>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/speakers/speaker/speaker.module.ts":
/*!****************************************************!*\
  !*** ./src/app/speakers/speaker/speaker.module.ts ***!
  \****************************************************/
/*! exports provided: SpeakerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerPageModule", function() { return SpeakerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _speaker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speaker.page */ "./src/app/speakers/speaker/speaker.page.ts");







const routes = [
    {
        path: '',
        component: _speaker_page__WEBPACK_IMPORTED_MODULE_6__["SpeakerPage"]
    }
];
let SpeakerPageModule = class SpeakerPageModule {
};
SpeakerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_speaker_page__WEBPACK_IMPORTED_MODULE_6__["SpeakerPage"]]
    })
], SpeakerPageModule);



/***/ }),

/***/ "./src/app/speakers/speaker/speaker.page.ts":
/*!**************************************************!*\
  !*** ./src/app/speakers/speaker/speaker.page.ts ***!
  \**************************************************/
/*! exports provided: SpeakerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerPage", function() { return SpeakerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




/**
 * Composant gérant la page d'affichage de la description d'un présentateur.
 */
let SpeakerPage = class SpeakerPage {
    /**
     * Constructeur
     * @param dataService : DataService
     * @param route : ActivatedRoute
     */
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';
        this.sessionsData = [];
        this.presentateurId = route.snapshot.paramMap.get('id');
    }
    /**
     * Méthode récupérant toutes les données nécessaires à l'affichage de la page.
     */
    recupererLesDonnees() {
        this.dataService.recupererDonneesSpeakers().subscribe((speakers => {
            this.isErreurRecuperationPresentateur = false;
            this.presentateurData = speakers
                .find(speaker => speaker.id.toString() === this.presentateurId);
            this.dataService.recupererDonneesSessions().subscribe((sessions => {
                this.isErreurRecuperationSessions = false;
                sessions.forEach(session => {
                    if (session.speakers && session.speakers
                        .includes(parseInt(this.presentateurId, 10))) {
                        this.sessionsData.push(session);
                    }
                });
            }), (() => this.isErreurRecuperationSessions = true));
        }), () => this.isErreurRecuperationPresentateur = true);
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const sessionId = params.get('id');
        });
        this.recupererLesDonnees();
    }
};
SpeakerPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SpeakerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speaker',
        template: __webpack_require__(/*! raw-loader!./speaker.page.html */ "./node_modules/raw-loader/index.js!./src/app/speakers/speaker/speaker.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SpeakerPage);



/***/ })

}]);
//# sourceMappingURL=speaker-speaker-module-es2015.js.map