(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessions-sessions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sessions/sessions.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sessions/sessions.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n      </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Sessions\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card ion-text-center\">\n        <ion-card-content *ngFor=\"let session of sessionsData\"\n                          class=\"ion-no-padding ion-padding-top ion-padding-start ion-padding-end\">\n            <ng-container *ngIf=\"!isErreurRecuperationSessions\">\n                <a routerLink=\"/sessions/{{session.id}}\">\n                    {{session.titleMobile || session.title}}\n                </a>\n            </ng-container>\n            <ng-container *ngIf=\"isErreurRecuperationSessions\">\n              <ion-text color=\"danger\">\n                  <p>Une erreur dans la récupération des sessions\n                      s'est produite.</p>\n              </ion-text>\n            </ng-container>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sessions/sessions.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sessions/sessions.module.ts ***!
  \*********************************************/
/*! exports provided: SessionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsPageModule", function() { return SessionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessions.page */ "./src/app/sessions/sessions.page.ts");







const routes = [
    {
        path: '',
        component: _sessions_page__WEBPACK_IMPORTED_MODULE_6__["SessionsPage"]
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | session-session-module */ "session-session-module").then(__webpack_require__.bind(null, /*! ./session/session.module */ "./src/app/sessions/session/session.module.ts")).then(m => m.SessionPageModule)
    }
];
let SessionsPageModule = class SessionsPageModule {
};
SessionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sessions_page__WEBPACK_IMPORTED_MODULE_6__["SessionsPage"]]
    })
], SessionsPageModule);



/***/ }),

/***/ "./src/app/sessions/sessions.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sessions/sessions.page.ts ***!
  \*******************************************/
/*! exports provided: SessionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsPage", function() { return SessionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



/**
 * Composant gérant la page affichant la liste des sessions.
 */
let SessionsPage = class SessionsPage {
    /**
     * Constructeur
     * @param dataService : DataService
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.recupererDonneesSessions().subscribe((sessions => {
            this.isErreurRecuperationSessions = false;
            this.sessionsData = sessions;
        }), (() => this.isErreurRecuperationSessions = true));
    }
};
SessionsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
SessionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sessions',
        template: __webpack_require__(/*! raw-loader!./sessions.page.html */ "./node_modules/raw-loader/index.js!./src/app/sessions/sessions.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], SessionsPage);



/***/ })

}]);
//# sourceMappingURL=sessions-sessions-module-es2015.js.map