(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/3On":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("EnSQ"),s=u("F/XL"),o=function(){function n(){}return n.prototype.sauvegarderNote=function(n){localStorage.getItem("NotesSessions")?(this.notes=JSON.parse(localStorage.getItem("NotesSessions")),this.notes.find((function(l){return l.sessionId===n.sessionId}))?(this.notes.find((function(l){return l.sessionId===n.sessionId})).message=n.message,this.notes.find((function(l){return l.sessionId===n.sessionId})).images=n.images):this.notes.push(n),localStorage.setItem("NotesSessions",JSON.stringify(this.notes))):(this.notes=[],this.notes.push(n),localStorage.setItem("NotesSessions",JSON.stringify(this.notes)))},n.prototype.recupererNoteParIdSession=function(n){return localStorage.getItem("NotesSessions")?(this.notes=JSON.parse(localStorage.getItem("NotesSessions")),this.notes.find((function(l){return l.sessionId===n}))?Object(s.a)(this.notes.find((function(l){return l.sessionId===n}))):Object(s.a)(null)):Object(s.a)(null)},n.ngInjectableDef=e.Ob({factory:function(){return new n},token:n,providedIn:"root"}),n}(),i=u("gcOT"),r=function(){function n(n,l,u,e){this.route=n,this.dataService=l,this.sessionsService=u,this.sanitizer=e,this.sessionId=n.snapshot.paramMap.get("id")}return n.prototype.recupererDonnees=function(){var n=this;this.dataService.recupererDonneesSessions().subscribe((function(l){return n.sessionData=l.find((function(l){return l.id.toString()===n.sessionId}))}),(function(){return n.isErreurRecuperationSession=!0})),this.sessionsService.recupererNoteParIdSession(this.sessionId).subscribe((function(l){null!=l?(n.contenuNote=l.message,n.imagesUrlBase64=l.images,n.imagesUrlBase64Sanitized=n.sanitizeTableauDUrls(l.images)):(n.contenuNote="",n.imagesUrlBase64=[],n.imagesUrlBase64Sanitized=[])}))},n.prototype.enregistrerNote=function(){this.sessionsService.sauvegarderNote({sessionId:this.sessionId,message:this.contenuNote,images:this.imagesUrlBase64})},n.prototype.prendreUnePhoto=function(){var n=this;i.c.Camera.getPhoto({quality:90,allowEditing:!0,resultType:i.a.Base64,source:i.b.Camera}).then((function(l){n.isErreurPriseDePhoto=!1,n.imagesUrlBase64.push("data:image/jpeg;base64, "+l.base64String),n.imagesUrlBase64Sanitized=n.sanitizeTableauDUrls(n.imagesUrlBase64)}),(function(){return n.isErreurPriseDePhoto=!0}))},n.prototype.chercherUnePhoto=function(){var n=this;i.c.Camera.getPhoto({quality:90,allowEditing:!0,resultType:i.a.Base64,source:i.b.Photos}).then((function(l){n.isErreurRecuperationPhoto=!1,n.imagesUrlBase64.push("data:image/jpeg;base64, "+l.base64String),n.imagesUrlBase64Sanitized=n.sanitizeTableauDUrls(n.imagesUrlBase64)}),(function(){return n.isErreurRecuperationPhoto=!0}))},n.prototype.sanitizeTableauDUrls=function(n){var l=this;return n.map((function(n){return l.sanitizer.bypassSecurityTrustUrl(n)}))},n.prototype.ngOnInit=function(){this.route.paramMap.subscribe((function(n){n.get("id")})),this.recupererDonnees()},n}(),a=function(){return function(){}}(),b=u("pMnS"),c=u("oBZk"),g=u("ZZ/e"),d=u("Ip0R"),h=u("gIcY"),p=u("ZYCi"),f=u("ZYjt"),m=e.rb({encapsulation:0,styles:["ion-textarea[_ngcontent-%COMP%] { border: dashed; border-color: silver; border-radius: 16px; background-color: #f5f6f9; font-style: italic}"],data:{}});function k(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.tb(1,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,c.Y,c.x)),e.sb(2,49152,null,0,g.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(3,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Une erreur s'est produite dans la r\xe9cup\xe9ration des donn\xe9es de la session."]))],(function(n,l){n(l,2,0,"danger")}),null)}function z(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.tb(1,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,c.Y,c.x)),e.sb(2,49152,null,0,g.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(3,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Une erreur s'est produite dans la prise de la photographie."]))],(function(n,l){n(l,2,0,"danger")}),null)}function S(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.tb(1,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,c.Y,c.x)),e.sb(2,49152,null,0,g.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(3,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Une erreur s'est produite dans le chargement de l'image."]))],(function(n,l){n(l,2,0,"danger")}),null)}function v(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,4,"ion-card",[],null,null,null,c.K,c.f)),e.sb(1,49152,null,0,g.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,2,"ion-card-content",[],null,null,null,c.G,c.g)),e.sb(3,49152,null,0,g.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,0,"img",[["alt","photo"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,4,0,l.context.$implicit)}))}function I(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,33,null,null,null,null,null,null,null)),(n()(),e.tb(1,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.enregistrerNote()&&e),e}),c.E,c.d)),e.sb(2,49152,null,0,g.i,[e.h,e.k,e.z],{expand:[0,"expand"]},null),(n()(),e.Kb(-1,0,[" Enregistrer "])),(n()(),e.ib(16777216,null,null,1,null,k)),e.sb(5,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,z)),e.sb(7,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,S)),e.sb(9,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(10,0,null,null,23,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,u){var t=!0,s=n.component;return"submit"===l&&(t=!1!==e.Fb(n,12).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.Fb(n,12).onReset()&&t),"ngSubmit"===l&&(t=!1!==s.enregistrerNote()&&t),t}),null,null)),e.sb(11,16384,null,0,h.k,[],null,null),e.sb(12,4210688,null,0,h.g,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Hb(2048,null,h.a,null,[h.g]),e.sb(14,16384,null,0,h.f,[[4,h.a]],null,null),(n()(),e.tb(15,0,null,null,6,"ion-textarea",[["auto-grow","true"],["class","ion-margin-top"],["name","contenuNote"],["placeholder","Cette conf\xe9rence..."],["rows","4"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,s=n.component;return"ionBlur"===l&&(t=!1!==e.Fb(n,16)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Fb(n,16)._handleInputEvent(u.target)&&t),"ngModelChange"===l&&(t=!1!==(s.contenuNote=u)&&t),t}),c.Z,c.y)),e.sb(16,16384,null,0,g.Jb,[e.k],null,null),e.Hb(1024,null,h.c,(function(n){return[n]}),[g.Jb]),e.sb(18,671744,null,0,h.h,[[2,h.a],[8,null],[8,null],[6,h.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,h.d,null,[h.h]),e.sb(20,16384,null,0,h.e,[[4,h.d]],null,null),e.sb(21,49152,null,0,g.wb,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(n()(),e.tb(22,0,null,null,9,"ion-row",[],null,null,null,c.W,c.v)),e.sb(23,49152,null,0,g.hb,[e.h,e.k,e.z],null,null),(n()(),e.tb(24,0,null,0,3,"ion-fab-button",[["size","small"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.prendreUnePhoto()&&e),e}),c.M,c.l)),e.sb(25,49152,null,0,g.v,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(26,0,null,0,1,"ion-icon",[["ios","ios-camera"],["md","md-camera"]],null,null,null,c.O,c.n)),e.sb(27,49152,null,0,g.A,[e.h,e.k,e.z],{ios:[0,"ios"],md:[1,"md"]},null),(n()(),e.tb(28,0,null,0,3,"ion-fab-button",[["size","small"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.chercherUnePhoto()&&e),e}),c.M,c.l)),e.sb(29,49152,null,0,g.v,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(30,0,null,0,1,"ion-icon",[["name","images"]],null,null,null,c.O,c.n)),e.sb(31,49152,null,0,g.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.ib(16777216,null,null,1,null,v)),e.sb(33,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var u=l.component;n(l,2,0,"block"),n(l,5,0,u.isErreurRecuperationSession),n(l,7,0,u.isErreurPriseDePhoto),n(l,9,0,u.isErreurRecuperationPhoto),n(l,18,0,"contenuNote",u.contenuNote),n(l,21,0,"contenuNote","Cette conf\xe9rence...","4"),n(l,25,0,"small"),n(l,27,0,"ios-camera","md-camera"),n(l,29,0,"small"),n(l,31,0,"images"),n(l,33,0,u.imagesUrlBase64Sanitized)}),(function(n,l){n(l,10,0,e.Fb(l,14).ngClassUntouched,e.Fb(l,14).ngClassTouched,e.Fb(l,14).ngClassPristine,e.Fb(l,14).ngClassDirty,e.Fb(l,14).ngClassValid,e.Fb(l,14).ngClassInvalid,e.Fb(l,14).ngClassPending),n(l,15,0,e.Fb(l,20).ngClassUntouched,e.Fb(l,20).ngClassTouched,e.Fb(l,20).ngClassPristine,e.Fb(l,20).ngClassDirty,e.Fb(l,20).ngClassValid,e.Fb(l,20).ngClassInvalid,e.Fb(l,20).ngClassPending)}))}function D(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,15,"ion-header",[["class","ion-text-center"]],null,null,null,c.N,c.m)),e.sb(1,49152,null,0,g.z,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,13,"ion-toolbar",[],null,null,null,c.bb,c.A)),e.sb(3,49152,null,0,g.Ab,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.F,c.e)),e.sb(5,49152,null,0,g.j,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,2,"ion-back-button",[["icon","arrow-back"],["text",""]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.Fb(n,8).onClick(u)&&t),t}),c.D,c.c)),e.sb(7,49152,null,0,g.e,[e.h,e.k,e.z],{icon:[0,"icon"],text:[1,"text"]},null),e.sb(8,16384,null,0,g.f,[[2,g.gb],g.Fb],null,null),(n()(),e.tb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,c.F,c.e)),e.sb(10,49152,null,0,g.j,[e.h,e.k,e.z],null,null),(n()(),e.tb(11,0,null,0,1,"ion-menu-button",[],null,null,null,c.T,c.t)),e.sb(12,49152,null,0,g.P,[e.h,e.k,e.z],null,null),(n()(),e.tb(13,0,null,0,2,"ion-title",[],null,null,null,c.ab,c.z)),e.sb(14,49152,null,0,g.yb,[e.h,e.k,e.z],null,null),(n()(),e.Kb(-1,0,["Mes notes"])),(n()(),e.tb(16,0,null,null,11,"ion-content",[],null,null,null,c.L,c.k)),e.sb(17,49152,null,0,g.s,[e.h,e.k,e.z],null,null),(n()(),e.tb(18,0,null,0,9,"ion-card",[],null,null,null,c.K,c.f)),e.sb(19,49152,null,0,g.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(20,0,null,0,3,"ion-card-header",[],null,null,null,c.H,c.h)),e.sb(21,49152,null,0,g.m,[e.h,e.k,e.z],null,null),(n()(),e.tb(22,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Kb(23,null,["",""])),(n()(),e.tb(24,0,null,0,3,"ion-card-content",[],null,null,null,c.G,c.g)),e.sb(25,49152,null,0,g.l,[e.h,e.k,e.z],null,null),(n()(),e.ib(16777216,null,0,1,null,I)),e.sb(27,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,7,0,"arrow-back",""),n(l,27,0,!u.isErreurRecuperationSession)}),(function(n,l){var u=l.component;n(l,23,0,(null==u.sessionData?null:u.sessionData.titleMobile)||(null==u.sessionData?null:u.sessionData.title))}))}function C(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,1,"app-notes",[],null,null,null,D,m)),e.sb(1,114688,null,0,r,[p.a,t.a,o,f.b],null,null)],(function(n,l){n(l,1,0)}),null)}var N=e.pb("app-notes",r,C,{},{},[]);u.d(l,"NotesPageModuleNgFactory",(function(){return y}));var y=e.qb(a,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[b.a,N]],[3,e.j],e.x]),e.Db(4608,d.k,d.j,[e.u,[2,d.r]]),e.Db(4608,h.j,h.j,[]),e.Db(4608,g.a,g.a,[e.z,e.g]),e.Db(4608,g.Eb,g.Eb,[g.a,e.j,e.q]),e.Db(4608,g.Hb,g.Hb,[g.a,e.j,e.q]),e.Db(1073742336,d.b,d.b,[]),e.Db(1073742336,h.i,h.i,[]),e.Db(1073742336,h.b,h.b,[]),e.Db(1073742336,g.Cb,g.Cb,[]),e.Db(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),e.Db(1073742336,a,a,[]),e.Db(1024,p.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);