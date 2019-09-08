(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/go-page/go-page.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/go-page/go-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    {{message}}\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput\r\n             [placeholder]=\"placeholder\"\r\n             [(ngModel)]=\"userInput\"\r\n             [disabled]=\"disableInput\"\r\n             autocomplete=\"off\">\r\n    </mat-form-field>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button color=\"primary\"\r\n            (click)=\"onNextClick()\"\r\n            [disabled]=\"!userInput && !disableInput\">\r\n      <span *ngIf=\"turn < level\">\r\n        {{turn + 1}}/{{level}} •\r\n      </span>\r\n      Далее\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 class=\"mat-active\">\r\n    #словучить\r\n  </h1>\r\n  <nav mat-tab-nav-bar color=\"warn\" backgroundColor=\"primary\">\r\n    <a mat-tab-link\r\n       *ngFor=\"let link of navLinks\"\r\n       [routerLink]=\"link.path\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{link.label}}\r\n    </a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recently-added-page/recently-added-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recently-added-page/recently-added-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-accordion>\r\n        <mat-list dense>\r\n          <mat-list-item *ngFor=\"let dictItem of dict\">\r\n            • {{ dictItem.word }}: {{ dictItem.translate }}\r\n          </mat-list-item>\r\n        </mat-list>\r\n    </mat-accordion>\r\n  </mat-card-content>\r\n  <mat-card-content *ngIf=\"isAdd\">\r\n    <mat-grid-list cols=\"4\" rowHeight=\"64px\">\r\n      <mat-grid-tile colspan=\"3\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Новые слова или фразы (через точку)\"\r\n                 [(ngModel)]=\"userInput\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <button mat-button\r\n                [disabled]=\"!userInput\"\r\n                (click)=\"onTranslate()\">\r\n          Перевести\r\n        </button>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n    <mat-list *ngIf=\"dictItems\">\r\n      <mat-list-item *ngFor=\"let dictItem of dictItems\">\r\n        • {{ dictItem.word }}: {{ dictItem.translate }}\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button\r\n            color=\"primary\"\r\n            *ngIf=\"!isAdd; else elseBlock\"\r\n            (click)=\"isAdd = !isAdd\">\r\n      {{ 'Добавить' }}\r\n    </button>\r\n    <ng-template #elseBlock>\r\n      <button mat-raised-button\r\n              color=\"primary\"\r\n              [disabled]=\"!canSave\"\r\n              (click)=\"onSave()\">\r\n        {{ 'Сохранить' }}\r\n      </button>\r\n    </ng-template>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings-page/settings-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings-page/settings-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Язык\"\r\n                  [value]=\"selectedLang.value\"\r\n                  (valueChange)=\"onChangeLangSelect($event)\">\r\n        <mat-option *ngFor=\"let lang of languages\"\r\n                    [value]=\"lang.value\" >\r\n          {{lang.display}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Кол-во слов\"\r\n                  [(value)]=\"selectedLevel\">\r\n        <mat-option *ngFor=\"let level of levels\"\r\n                    [value]=\"level\">\r\n          {{level}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <p>Язык: {{selectedLang.display}} / Сложность: {{selectedLevel}} слов</p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button\r\n            (click)=\"onResetClick()\">\r\n      Сбросить\r\n    </button>\r\n    <button mat-raised-button color=\"primary\"\r\n            (click)=\"onAgreeClick()\">\r\n      Принять\r\n    </button>\r\n    <button class=\"clear-button\" mat-raised-button color=\"warn\"\r\n            (click)=\"onClearClick()\">\r\n      Очистить словарь\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _go_page_go_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-page/go-page.component */ "./src/app/go-page/go-page.component.ts");
/* harmony import */ var _recently_added_page_recently_added_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recently-added-page/recently-added-page.component */ "./src/app/recently-added-page/recently-added-page.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/settings-page/settings-page.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");







const routes = [
    { path: '', redirectTo: '/add', pathMatch: 'full' },
    { path: 'add', component: _recently_added_page_recently_added_page_component__WEBPACK_IMPORTED_MODULE_4__["RecentlyAddedPageComponent"] },
    { path: 'go', component: _go_page_go_page_component__WEBPACK_IMPORTED_MODULE_3__["GoPageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'settings', component: _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_5__["SettingsPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 480px;\r\n  margin: 10px auto;\r\n  outline: 1px solid #673ab7;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjNjczYWI3O1xyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recently_added_page_recently_added_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recently-added-page/recently-added-page.component */ "./src/app/recently-added-page/recently-added-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _go_page_go_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./go-page/go-page.component */ "./src/app/go-page/go-page.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/settings-page/settings-page.component.ts");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _recently_added_page_recently_added_page_component__WEBPACK_IMPORTED_MODULE_9__["RecentlyAddedPageComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _go_page_go_page_component__WEBPACK_IMPORTED_MODULE_11__["GoPageComponent"],
            _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_12__["SettingsPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");





let AuthGuard = class AuthGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.storage.getDictFromStorage().length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.router.navigate(['/add']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/go-page/go-page.component.css":
/*!***********************************************!*\
  !*** ./src/app/go-page/go-page.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  width: 180px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ28tcGFnZS9nby1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nby1wYWdlL2dvLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/go-page/go-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/go-page/go-page.component.ts ***!
  \**********************************************/
/*! exports provided: GoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoPageComponent", function() { return GoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");



let GoPageComponent = class GoPageComponent {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
        this.setInitState();
    }
    onNextClick() {
        this.turn++;
        if (this.userInput === this.currentWord.translate) {
            this.result++;
        }
        if (this.turn === this.level) {
            this.message = `Ваш результат ${this.result} из ${this.level}`;
            this.placeholder = '';
            this.userInput = '';
            this.disableInput = true;
            return;
        }
        if (this.turn > this.level) {
            this.setInitState();
        }
        this.userInput = '';
        this.currentWord = this.getRandomWord();
        this.message = this.currentWord.word;
    }
    setInitState() {
        this.turn = 0;
        this.result = 0;
        this.placeholder = 'Ваш вариант перевода';
        this.level = this.storage.getLevel();
        this.wordList = this.storage.getDictFromStorage();
        this.currentWord = this.getRandomWord();
        this.message = this.currentWord.word;
        this.disableInput = false;
    }
    getRandomWord() {
        const index = Math.floor(Math.random() * this.wordList.length);
        return this.wordList[index];
    }
};
GoPageComponent.ctorParameters = () => [
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
GoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-go-page',
        template: __webpack_require__(/*! raw-loader!./go-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/go-page/go-page.component.html"),
        styles: [__webpack_require__(/*! ./go-page.component.css */ "./src/app/go-page/go-page.component.css")]
    })
], GoPageComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  box-sizing: border-box;\r\n  background-color: #673ab7;\r\n  text-align: right;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1em 1em 0.5em 0;\r\n  color: rgba(255, 255, 255, 0.7);\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMWVtIDFlbSAwLjVlbSAwO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.navLinks = [
            { path: 'add', label: 'Словарь' },
            { path: 'go', label: 'Игра' },
            { path: 'settings', label: 'Настройки' }
        ];
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/recently-added-page/recently-added-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/recently-added-page/recently-added-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content:first-child {\r\n  max-height: 99px;\r\n  overflow-y: scroll;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card-actions {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZW50bHktYWRkZWQtcGFnZS9yZWNlbnRseS1hZGRlZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVjZW50bHktYWRkZWQtcGFnZS9yZWNlbnRseS1hZGRlZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1jb250ZW50OmZpcnN0LWNoaWxkIHtcclxuICBtYXgtaGVpZ2h0OiA5OXB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/recently-added-page/recently-added-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/recently-added-page/recently-added-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecentlyAddedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyAddedPageComponent", function() { return RecentlyAddedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _services_word_queue_word_queue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/word-queue/word-queue.service */ "./src/app/services/word-queue/word-queue.service.ts");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");





let RecentlyAddedPageComponent = class RecentlyAddedPageComponent {
    constructor(translateService, wordQueueService, storageService) {
        this.translateService = translateService;
        this.wordQueueService = wordQueueService;
        this.storageService = storageService;
        this.isAdd = false;
        this.userInput = '';
        this.dictItems = [];
    }
    ngOnInit() {
        this.dict = this.storageService.getDictFromStorage();
        console.log(this.dict);
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
    onTranslate() {
        this.canSave = false;
        this.wordQueueService.getDictItemsFromInput(this.userInput)
            .subscribe(data => this.dictItems.push(data), err => console.error(), () => this.canSave = true);
    }
    onSave() {
        this.storageService.addDictItems(this.dictItems);
        this.dictItems = [];
        this.userInput = '';
        this.isAdd = false;
        this.dict = this.storageService.getDictFromStorage();
    }
};
RecentlyAddedPageComponent.ctorParameters = () => [
    { type: _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_word_queue_word_queue_service__WEBPACK_IMPORTED_MODULE_3__["WordQueueService"] },
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
RecentlyAddedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recently-added-page',
        template: __webpack_require__(/*! raw-loader!./recently-added-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/recently-added-page/recently-added-page.component.html"),
        providers: [
            _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_word_queue_word_queue_service__WEBPACK_IMPORTED_MODULE_3__["WordQueueService"]
        ],
        styles: [__webpack_require__(/*! ./recently-added-page.component.css */ "./src/app/recently-added-page/recently-added-page.component.css")]
    })
], RecentlyAddedPageComponent);



/***/ }),

/***/ "./src/app/services/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let StorageService = class StorageService {
    constructor() {
        this.localStorage = window.localStorage;
        this.lang = { display: 'Английский', value: 'ru-en' };
        this.level = 5;
    }
    getDictFromStorage() {
        const arr = JSON.parse(this.localStorage.getItem(this.lang.value));
        return arr instanceof Array ? arr : [];
    }
    addDictItems(dictItems) {
        const dict = this.getDictFromStorage();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(dictItems)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(item => !dict.find(({ word }) => word === item.word)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(item => dict.unshift(item))).subscribe({
            complete: () => {
                this.localStorage.setItem(this.lang.value, JSON.stringify(dict));
            }
        });
    }
    clearDictStorage() {
        this.localStorage.removeItem(this.lang.value);
    }
    setLang(lang) {
        this.lang = lang;
    }
    getLang() {
        return this.lang;
    }
    setLevel(level) {
        this.level = level;
    }
    getLevel() {
        return this.level;
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "./src/app/services/translate/translate.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/translate/translate.service.ts ***!
  \*********************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");






let TranslateService = class TranslateService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.key = 'trnsl.1.1.20141203T154628Z.0c69e9e71acbc47b.1cd6959182275e618b08f714041b9188c17cf434';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    getDictItem(word) {
        const lang = this.storageService.getLang().value;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(word)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(item => this.http.post(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.key}&lang=${lang}`, `text=${item}`, this.httpOptions)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((item) => ({
            word,
            translate: item.text[0]
        })));
    }
};
TranslateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslateService);



/***/ }),

/***/ "./src/app/services/word-queue/word-queue.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/word-queue/word-queue.service.ts ***!
  \***********************************************************/
/*! exports provided: WordQueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordQueueService", function() { return WordQueueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WordQueueService = class WordQueueService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    getDictItemsFromInput(input) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(input.split('.'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(item => item.trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(item => item.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(item => this.translateService.getDictItem(item)));
    }
};
WordQueueService.ctorParameters = () => [
    { type: _translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
WordQueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], WordQueueService);



/***/ }),

/***/ "./src/app/settings-page/settings-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/settings-page/settings-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  width: 140px;\r\n}\r\n\r\n.clear-button {\r\n  width: 150px;\r\n}\r\n\r\nmat-form-field:nth-child(odd) {\r\n  margin-right: 2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4uY2xlYXItYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkOm50aC1jaGlsZChvZGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/settings-page/settings-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings-page/settings-page.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SettingsPageComponent = class SettingsPageComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.languages = [
            { display: 'Английский', value: 'ru-en' },
            { display: 'Немецкий', value: 'ru-de' },
            { display: 'Французкий', value: 'ru-fr' },
            { display: 'Итальянский', value: 'ru-it' },
            { display: 'Испанский', value: 'ru-es' },
        ];
        this.levels = [
            5,
            10,
            20,
            50,
            100
        ];
    }
    ngOnInit() {
        this.setInitialState();
    }
    setInitialState() {
        this.selectedLang = this.storage.getLang();
        this.selectedLevel = this.storage.getLevel();
    }
    onChangeLangSelect(eventValue) {
        this.selectedLang = this.languages.find(({ value }) => value === eventValue);
    }
    onAgreeClick() {
        this.storage.setLang(this.selectedLang);
        this.storage.setLevel(this.selectedLevel);
        this.router.navigate(['go']);
    }
    onResetClick() {
        this.storage.setLang({ display: 'Английский', value: 'ru-en' });
        this.storage.setLevel(5);
        this.setInitialState();
    }
    onClearClick() {
        this.storage.clearDictStorage();
        this.router.navigate(['add']);
    }
};
SettingsPageComponent.ctorParameters = () => [
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-page',
        template: __webpack_require__(/*! raw-loader!./settings-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings-page/settings-page.component.html"),
        styles: [__webpack_require__(/*! ./settings-page.component.css */ "./src/app/settings-page/settings-page.component.css")]
    })
], SettingsPageComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Develop\Projects\GitHub\balabanov-grigorii-js-otus\angular\angular4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map