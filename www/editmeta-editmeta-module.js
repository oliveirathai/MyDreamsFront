(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editmeta-editmeta-module"],{

/***/ "./src/app/editmeta/editmeta.module.ts":
/*!*********************************************!*\
  !*** ./src/app/editmeta/editmeta.module.ts ***!
  \*********************************************/
/*! exports provided: EditmetaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmetaPageModule", function() { return EditmetaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editmeta_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editmeta.page */ "./src/app/editmeta/editmeta.page.ts");








var routes = [
    {
        path: '',
        component: _editmeta_page__WEBPACK_IMPORTED_MODULE_7__["EditmetaPage"]
    }
];
var EditmetaPageModule = /** @class */ (function () {
    function EditmetaPageModule() {
    }
    EditmetaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editmeta_page__WEBPACK_IMPORTED_MODULE_7__["EditmetaPage"]]
        })
    ], EditmetaPageModule);
    return EditmetaPageModule;
}());



/***/ }),

/***/ "./src/app/editmeta/editmeta.page.html":
/*!*********************************************!*\
  !*** ./src/app/editmeta/editmeta.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nova Meta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Qual seu sonho:</ion-label>\n        <ion-input [(ngModel)]=\"sonho\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Descreva-o:</ion-label>\n        <ion-input [(ngModel)]=\"descricao\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Quanto tempo pretende adquirir:</ion-label>\n        <ion-input type=\"date\" [(ngModel)]=\"bens\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Insira uma foto:</ion-label>\n        <ion-input class=\"foto\" [(ngModel)]=\"url\" ></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n\n\n  <ion-button color=\"danger\" (click)=\"onVoltar()\">Cancelar</ion-button>\n  <ion-button color=\"success\" (click)=\"onConfirmar();onVoltar(1)\">Salvar</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/editmeta/editmeta.page.scss":
/*!*********************************************!*\
  !*** ./src/app/editmeta/editmeta.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: solid 1px black;\n  --padding-end: 1px; }\n\n.foto {\n  width: 100%; }\n\nion-toolbar {\n  --background: red; }\n\nion-title {\n  --color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG1ldGEvQzpcXFVzZXJzXFxBTmdsb2JhbFxcRGVza3RvcFxcZnJvbnRcXE15RHJlYW1zRnJvbnQvc3JjXFxhcHBcXGVkaXRtZXRhXFxlZGl0bWV0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTyx1QkFBdUI7RUFDdkIsa0JBQWMsRUFBQTs7QUFFckI7RUFDSSxXQUFXLEVBQUE7O0FBS2Y7RUFDSSxpQkFBYyxFQUFBOztBQUVkO0VBQ0UsY0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG1ldGEvZWRpdG1ldGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xyXG4gICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICAgICAtLXBhZGRpbmctZW5kOiAxcHg7XHJcbiAgICB9XHJcbi5mb3Rve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogcmVkO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/editmeta/editmeta.page.ts":
/*!*******************************************!*\
  !*** ./src/app/editmeta/editmeta.page.ts ***!
  \*******************************************/
/*! exports provided: EditmetaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmetaPage", function() { return EditmetaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditmetaPage = /** @class */ (function () {
    function EditmetaPage(router) {
        this.router = router;
    }
    EditmetaPage.prototype.ngOnInit = function () {
    };
    EditmetaPage.prototype.onVoltar = function (id) {
        this.router.navigate(['tabs/tab2']);
    };
    EditmetaPage.prototype.createDream = function () {
        fetch('https://hackaton-embracon.herokuapp.com/my-dreams/v1/users/createDream/5cf3dea0c1796b3184fd2b95', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                desc: "Sonho: " + this.sonho + ", descricao" + ", data que desejo conquistar o objetivo: " + this.bens,
                expiration_date: this.bens,
                done_date: this.bens,
                hide_flag: false,
                photo_id: this.url,
                done_flag: this.bens
            })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
        });
    };
    EditmetaPage.prototype.onConfirmar = function () {
        var teste = this.createDream.length;
        if (teste <= 0) {
            alert("você deve preencher todos os campos");
        }
        else {
            this.createDream();
        }
    };
    EditmetaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmeta',
            template: __webpack_require__(/*! ./editmeta.page.html */ "./src/app/editmeta/editmeta.page.html"),
            styles: [__webpack_require__(/*! ./editmeta.page.scss */ "./src/app/editmeta/editmeta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditmetaPage);
    return EditmetaPage;
}());



/***/ })

}]);
//# sourceMappingURL=editmeta-editmeta-module.js.map