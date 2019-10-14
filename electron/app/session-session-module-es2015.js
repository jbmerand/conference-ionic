(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sessions/session/session.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sessions/session/session.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Session</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <h1>{{sessionData?.titleMobile || sessionData?.title}}</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <ng-container *ngIf=\"!isErreurRecuperationSession\">\n                <p>\n                    <em>{{sessionData.description || \"Pas de description disponible.\"}}</em>\n                </p>\n                <ng-container *ngIf=\"presentateursData.length > 0\">\n                    <h2 class=\"ion-padding-top ion-padding-end\">\n                        Présentateur(s)</h2>\n                    <ion-list>\n                        <ion-item\n                                *ngFor=\"let presentateur of presentateursData\">\n                            <ion-avatar slot=\"start\">\n                                <img [src]=\"urlBlogDevFest.concat(presentateur.photoUrl)\"\n                                     alt=\"photo du présentateur\">\n                            </ion-avatar>\n                            <ion-label>\n                                <a routerLink=\"/speakers/{{presentateur.id}}\">\n                                    {{presentateur.name}}\n                                </a>\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"isErreurRecuperationSession\">\n                <ion-text color=\"danger\">\n                    <p>Une erreur s'est produite dans la récupération des\n                        données de la session.</p>\n                </ion-text>\n            </ng-container>\n            <ion-button expand=\"block\"\n                        routerLink=\"/sessions/{{sessionId}}/notes\">\n                Mes\n                notes\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sessions/session/session.module.ts":
/*!****************************************************!*\
  !*** ./src/app/sessions/session/session.module.ts ***!
  \****************************************************/
/*! exports provided: SessionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPageModule", function() { return SessionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _session_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.page */ "./src/app/sessions/session/session.page.ts");







const routes = [
    {
        path: '',
        component: _session_page__WEBPACK_IMPORTED_MODULE_6__["SessionPage"]
    },
    {
        path: 'notes',
        loadChildren: () => Promise.all(/*! import() | notes-notes-module */[__webpack_require__.e("default~notes-notes-module~telephone-telephone-module"), __webpack_require__.e("notes-notes-module")]).then(__webpack_require__.bind(null, /*! ./notes/notes.module */ "./src/app/sessions/session/notes/notes.module.ts")).then(m => m.NotesPageModule)
    }
];
let SessionPageModule = class SessionPageModule {
};
SessionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_session_page__WEBPACK_IMPORTED_MODULE_6__["SessionPage"]]
    })
], SessionPageModule);



/***/ }),

/***/ "./src/app/sessions/session/session.page.ts":
/*!**************************************************!*\
  !*** ./src/app/sessions/session/session.page.ts ***!
  \**************************************************/
/*! exports provided: SessionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPage", function() { return SessionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




/**
 * Composant gérant la page de description d'une session.
 */
let SessionPage = class SessionPage {
    /**
     * Constructeur
     * @param dataService : DataService
     * @param route : ActivatedRoute
     */
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.presentateursData = [];
        this.urlBlogDevFest = 'https://devfest2018.gdgnantes.com/';
        this.sessionId = route.snapshot.paramMap.get('id');
    }
    /**
     * Méthode récupérant les données nécessaires à l'affichage de la page.
     */
    recupererLesDonnees() {
        this.dataService.recupererDonneesSessions().subscribe((sessions => {
            this.isErreurRecuperationSession = false;
            this.sessionData = sessions.find(session => session.id.toString() === this.sessionId);
            if (this.sessionData.speakers) {
                this.sessionData.speakers.forEach(presentateurId => this.dataService.recupererDonneesSpeakers()
                    .subscribe((speakers => this.presentateursData
                    .push(speakers
                    .find(speaker => speaker.id.toString() === presentateurId.toString()))), () => this.isErreurRecuperationPresentateurs = true));
            }
        }), (() => this.isErreurRecuperationSession = true));
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const sessionId = params.get('id');
        });
        this.recupererLesDonnees();
    }
};
SessionPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SessionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session',
        template: __webpack_require__(/*! raw-loader!./session.page.html */ "./node_modules/raw-loader/index.js!./src/app/sessions/session/session.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SessionPage);



/***/ })

}]);
//# sourceMappingURL=session-session-module-es2015.js.map