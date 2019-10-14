(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-notes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sessions/session/notes/notes.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sessions/session/notes/notes.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Mes notes</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <h1>{{sessionData?.titleMobile || sessionData?.title}}</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-fab-button (click)=\"prendreUnePhoto()\" size=\"small\">\n                    <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\n                </ion-fab-button>\n                <ion-fab-button onclick=\"prendreUnePhoto()\" size=\"small\">\n                    <ion-icon name=\"images\"></ion-icon>\n                </ion-fab-button>\n            </ion-row>\n\n            <ng-container *ngIf=\"!isErreurRecuperationSession\">\n                <form (ngSubmit)=\"enregistrerNote()\">\n                    <ion-textarea [(ngModel)]=\"contenuNote\"\n                                  auto-grow=\"true\"\n                                  name=\"contenuNote\"\n                                  placeholder=\"Cette conférence...\"\n                                  rows=\"4\">\n                    </ion-textarea>\n                    <img [src]=\"photo\" alt=\"photo\">\n                    <ion-button (click)=\"enregistrerNote()\" expand=\"block\"\n                                class=\"ion-margin-top\">\n                        Enregistrer\n                    </ion-button>\n                </form>\n            </ng-container>\n            <ng-container *ngIf=\"isErreurRecuperationSession\">\n                <ion-text color=\"danger\">\n                    <p>Une erreur s'est produite dans la récupération des\n                        données de la session.</p>\n                </ion-text>\n            </ng-container>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sessions/session/notes/notes.module.ts":
/*!********************************************************!*\
  !*** ./src/app/sessions/session/notes/notes.module.ts ***!
  \********************************************************/
/*! exports provided: NotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes.page */ "./src/app/sessions/session/notes/notes.page.ts");







var routes = [
    {
        path: '',
        component: _notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"]
    }
];
var NotesPageModule = /** @class */ (function () {
    function NotesPageModule() {
    }
    NotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"]]
        })
    ], NotesPageModule);
    return NotesPageModule;
}());



/***/ }),

/***/ "./src/app/sessions/session/notes/notes.page.ts":
/*!******************************************************!*\
  !*** ./src/app/sessions/session/notes/notes.page.ts ***!
  \******************************************************/
/*! exports provided: NotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _sessions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sessions.service */ "./src/app/sessions/sessions.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







/**
 * Composant gérant l'affichage de la page de note sur une session.
 */
var NotesPage = /** @class */ (function () {
    /**
     * Constructeur
     * @param route : ActivatedRoute
     * @param dataService : DataService
     * @param sessionsService : SessionsService
     * @param sanitizer : DomSanitizer
     */
    function NotesPage(route, dataService, sessionsService, sanitizer) {
        this.route = route;
        this.dataService = dataService;
        this.sessionsService = sessionsService;
        this.sanitizer = sanitizer;
        this.sessionId = route.snapshot.paramMap.get('id');
    }
    /**
     * Méthode récupérant les données nécessaires à l'affichage de la page.
     */
    NotesPage.prototype.recupererDonnees = function () {
        var _this = this;
        this.dataService.recupererDonneesSessions().subscribe((function (sessions) { return _this.sessionData = sessions.find(function (session) { return session.id.toString() === _this.sessionId; }); }), function () { return _this.isErreurRecuperationSession = true; });
        var note = this.sessionsService.recupererNoteParIdSession(this.sessionId);
        if (note != null) {
            this.contenuNote = note.message;
        }
        else {
            this.contenuNote = '';
        }
    };
    /**
     * Méthode pour enregistrer une note en sollicitant un service.
     */
    NotesPage.prototype.enregistrerNote = function () {
        var note = { sessionId: this.sessionId, message: this.contenuNote };
        this.sessionsService.sauvegarderNote(note);
    };
    NotesPage.prototype.prendreUnePhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera.getPhoto({
                            quality: 100,
                            allowEditing: false,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Camera // si .Photo pour aller chercher
                            // photo ou prompt, qui donne accès aux deux
                        })];
                    case 1:
                        image = _a.sent();
                        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
                        return [2 /*return*/];
                }
            });
        });
    };
    NotesPage.prototype.ngOnInit = function () {
        this.route.paramMap.subscribe(function (params) {
            var sessionId = params.get('id');
        });
        this.recupererDonnees();
    };
    NotesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _sessions_service__WEBPACK_IMPORTED_MODULE_4__["SessionsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
    ]; };
    NotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! raw-loader!./notes.page.html */ "./node_modules/raw-loader/index.js!./src/app/sessions/session/notes/notes.page.html"),
            styles: ['ion-textarea { border: dashed; border-color: silver; ' +
                    'border-radius: 16px; background-color: #f5f6f9; font-style: italic}']
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _sessions_service__WEBPACK_IMPORTED_MODULE_4__["SessionsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], NotesPage);
    return NotesPage;
}());



/***/ }),

/***/ "./src/app/sessions/sessions.service.ts":
/*!**********************************************!*\
  !*** ./src/app/sessions/sessions.service.ts ***!
  \**********************************************/
/*! exports provided: SessionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsService", function() { return SessionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Classe de service regroupant les méthodes utiles pour les pages commençant par
 * /sessions.
 */
var SessionsService = /** @class */ (function () {
    function SessionsService() {
    }
    /**
     * Méthode permettant de sauvegarder la note renseignée qui concerne une
     * session dans le cache ou de la mettre à jour si elle existe déjà.
     * @param note : Note la note renseignée par l'utilisateur
     * @return : void
     */
    SessionsService.prototype.sauvegarderNote = function (note) {
        if (!localStorage.getItem('NotesSessions')) {
            this.notes = [];
            this.notes.push(note);
            localStorage.setItem('NotesSessions', JSON.stringify(this.notes));
        }
        else {
            this.notes = JSON.parse(localStorage.getItem('NotesSessions'));
            if (this.notes.find(function (noteLS) { return noteLS.sessionId === note.sessionId; })) {
                this.notes.find(function (noteLS) { return noteLS.sessionId === note.sessionId; }).message = note.message;
            }
            else {
                this.notes.push(note);
            }
            localStorage.setItem('NotesSessions', JSON.stringify(this.notes));
        }
    };
    /**
     * Méthode permettant de retourner la note écrite pour la session indiquée.
     * @param sessionId : string l'id de la session
     * @return : Note ou null
     */
    SessionsService.prototype.recupererNoteParIdSession = function (sessionId) {
        if (localStorage.getItem('NotesSessions')) {
            this.notes = JSON.parse(localStorage.getItem('NotesSessions'));
            if (this.notes.find(function (noteLS) { return noteLS.sessionId === sessionId; })) {
                return this.notes.find(function (noteLS) { return noteLS.sessionId === sessionId; });
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    SessionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionsService);
    return SessionsService;
}());



/***/ })

}]);
//# sourceMappingURL=notes-notes-module-es5.js.map