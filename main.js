/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Source Sans Pro', sans-serif; }\n\nli {\n  list-style-type: none; }\n\n.btn {\n  cursor: pointer;\n  border: none;\n  padding: .3rem;\n  border-radius: 5px;\n  font-size: 1rem; }\n  .btn:hover {\n    background-color: silver; }\n\n.main-header {\n  background-color: #53c6ec;\n  padding: 1rem;\n  text-align: center; }\n\n.page-wrapper {\n  display: grid;\n  grid-template-columns: 20% 80%; }\n  .page-wrapper .sidebar {\n    height: 100vh;\n    background-color: lightgray;\n    padding: 2rem; }\n    .page-wrapper .sidebar .sidebar-list {\n      display: none;\n      width: 100%;\n      margin: 3rem 0; }\n      .page-wrapper .sidebar .sidebar-list .sidebar-list__item {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: .5rem 0;\n        cursor: pointer; }\n        .page-wrapper .sidebar .sidebar-list .sidebar-list__item:hover {\n          background-color: silver; }\n    .page-wrapper .sidebar .form-projects {\n      display: flex;\n      justify-content: space-between; }\n      .page-wrapper .sidebar .form-projects label {\n        cursor: pointer; }\n    .page-wrapper .sidebar .projects-list__container {\n      margin-top: 1rem; }\n      .page-wrapper .sidebar .projects-list__container .project-list__item {\n        padding: .2rem;\n        margin-top: .5rem;\n        display: flex;\n        justify-content: space-between;\n        border-radius: 12px;\n        cursor: pointer; }\n        .page-wrapper .sidebar .projects-list__container .project-list__item:hover {\n          background: silver; }\n    .page-wrapper .sidebar .project-input__container {\n      display: none;\n      grid-template-columns: 3fr 1fr; }\n      .page-wrapper .sidebar .project-input__container input {\n        font-size: 1rem;\n        width: 100%;\n        border: none;\n        outline: none;\n        border-bottom: 2px solid black;\n        background: transparent; }\n      .page-wrapper .sidebar .project-input__container button {\n        background: transparent;\n        border-bottom: 2px solid black;\n        border-radius: 0; }\n        .page-wrapper .sidebar .project-input__container button:hover {\n          background: silver; }\n  .page-wrapper .editor {\n    position: relative;\n    padding: 4rem; }\n    .page-wrapper .editor .header-tasks-container h2 {\n      margin-bottom: 2rem; }\n    .page-wrapper .editor .task-window {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      padding: 1rem;\n      background: lightgray;\n      border-radius: 12px;\n      display: none;\n      flex-direction: column;\n      width: 35rem;\n      height: 20rem;\n      z-index: 1; }\n      .page-wrapper .editor .task-window .task-input-container {\n        display: flex;\n        flex-direction: column;\n        margin: .6rem 0; }\n        .page-wrapper .editor .task-window .task-input-container .task-description-input {\n          resize: none; }\n        .page-wrapper .editor .task-window .task-input-container input {\n          outline: none;\n          font-size: 1rem; }\n        .page-wrapper .editor .task-window .task-input-container textarea {\n          font-size: 1rem;\n          height: 6rem;\n          outline: none; }\n        .page-wrapper .editor .task-window .task-input-container * + small {\n          height: .3rem; }\n      .page-wrapper .editor .task-window .task-buttons-container {\n        display: flex;\n        justify-content: space-around;\n        margin-top: 1rem; }\n        .page-wrapper .editor .task-window .task-buttons-container button {\n          width: 6rem; }\n    .page-wrapper .editor .tasks-list-container {\n      width: 100%; }\n\n.active-list {\n  font-weight: 800; }\n\n.sidebar-del-button {\n  width: 1.5rem;\n  height: 1.5rem;\n  outline: none;\n  border: none;\n  border-radius: 50%;\n  background-size: cover; }\n  .sidebar-del-button:hover {\n    background: red;\n    cursor: pointer; }\n\n.error {\n  border: 2px solid red; }\n\n.success {\n  border: 2px solid greenyellow; }\n\n.modal {\n  position: fixed;\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1; }\n\n.date-picker {\n  position: relative; }\n  .date-picker::-webkit-calendar-picker-indicator {\n    position: absolute;\n    background: transparent;\n    bottom: 0;\n    color: transparent;\n    cursor: pointer;\n    height: 100%;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: auto; }\n", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AASA;EACI,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,0CAA0C,EAAA;;AAG9C;EACI,qBAAqB,EAAA;;AAEzB;EACI,eAAe;EACf,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,eAAe,EAAA;EALnB;IAOQ,wBAxBmB,EAAA;;AA4B3B;EACI,yBA9B+B;EA+B/B,aAAa;EACb,kBAAkB,EAAA;;AAGtB;EACI,aAAa;EACb,8BAA8B,EAAA;EAFlC;IAIQ,aAAa;IACb,2BAtCoB;IAuCpB,aAAa,EAAA;IANrB;MAQY,aAAa;MACb,WAAW;MACX,cAAc,EAAA;MAV1B;QAYgB,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,gBAAgB;QAChB,eAAe,EAAA;QAhB/B;UAkBoB,wBAjDK,EAAA;IA+BzB;MAuBY,aAAa;MACb,8BAA8B,EAAA;MAxB1C;QA0BgB,eAAe,EAAA;IA1B/B;MA8BY,gBAAgB,EAAA;MA9B5B;QAgCgB,cAAc;QACd,iBAAiB;QACjB,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,eAAe,EAAA;QArC/B;UAuCoB,kBAtEK,EAAA;IA+BzB;MA4CY,aAAa;MACb,8BAA8B,EAAA;MA7C1C;QA+CgB,eAAe;QACf,WAAW;QACX,YAAY;QACZ,aAAa;QACb,8BAA8B;QAC9B,uBAAuB,EAAA;MApDvC;QAuDgB,uBAAuB;QACvB,8BAA8B;QAC9B,gBAAgB,EAAA;QAzDhC;UA2DoB,kBA7FO,EAAA;EAkC3B;IAiEQ,kBAAkB;IAClB,aAAa,EAAA;IAlErB;MAqEgB,mBAAmB,EAAA;IArEnC;MAyEY,kBAAkB;MAClB,MAAM;MACN,SAAS;MACT,OAAO;MACP,QAAQ;MACR,YAAY;MACZ,aAAa;MACb,qBA9Ge;MA+Gf,mBAAmB;MACnB,aAAa;MACb,sBAAsB;MACtB,YAAY;MACZ,aAAa;MACb,UAAU,EAAA;MAtFtB;QAwFgB,aAAa;QACb,sBAAsB;QACtB,eAAe,EAAA;QA1F/B;UA4FoB,YAAY,EAAA;QA5FhC;UA+FoB,aAAa;UACb,eAAe,EAAA;QAhGnC;UAmGoB,eAAe;UACf,YAAY;UACZ,aAAa,EAAA;QArGjC;UAwGoB,aAAa,EAAA;MAxGjC;QA4GgB,aAAa;QACb,6BAA6B;QAC7B,gBAAgB,EAAA;QA9GhC;UAgHoB,WAAW,EAAA;IAhH/B;MAqHY,WAAW,EAAA;;AAKvB;EACI,gBAAgB,EAAA;;AAGpB;EACI,aAAa;EACb,cAAc;EACd,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,sBAAqB,EAAA;EANzB;IAQQ,eAAe;IACf,eAAe,EAAA;;AAIvB;EACI,qBAAqB,EAAA;;AAEzB;EACI,6BAA6B,EAAA;;AAEjC;EACI,eAAe;EACf,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA6B;EAC7B,UAAU,EAAA;;AAGd;EACI,kBAAkB,EAAA;EADtB;IAGQ,kBAAkB;IAClB,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,MAAM;IACN,WAAW,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n$header-bg-color: rgb(83, 198, 236);\n$button-hover-color: silver;\n$sidebar-bg-color: lightgray;\n$content-bg-color: silver;\n$hover-list-color: silver;\n$window-bg-color: lightgray;\n$task-bg-color: yellow;\n\n*, *::before, *::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\nli {\n    list-style-type: none;\n}\n.btn {\n    cursor: pointer;\n    border: none;\n    padding: .3rem;\n    border-radius: 5px;\n    font-size: 1rem;\n    &:hover {\n        background-color: $button-hover-color;\n    }\n}\n\n.main-header {\n    background-color: $header-bg-color;\n    padding: 1rem;\n    text-align: center;\n}\n\n.page-wrapper {\n    display: grid;\n    grid-template-columns: 20% 80%;\n    .sidebar {\n        height: 100vh;\n        background-color: $sidebar-bg-color;\n        padding: 2rem;\n        .sidebar-list {\n            display: none;\n            width: 100%;\n            margin: 3rem 0;\n            .sidebar-list__item {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: .5rem 0;\n                cursor: pointer;\n                &:hover {\n                    background-color: $hover-list-color;\n                }\n            }\n        }\n        .form-projects {\n            display: flex;\n            justify-content: space-between;\n            label {\n                cursor: pointer;\n            }\n        }\n        .projects-list__container {\n            margin-top: 1rem;\n            .project-list__item {\n                padding: .2rem;\n                margin-top: .5rem;\n                display: flex;\n                justify-content: space-between;\n                border-radius: 12px;\n                cursor: pointer;\n                &:hover {\n                    background: $hover-list-color;\n                }\n            }\n        }\n        .project-input__container {\n            display: none;\n            grid-template-columns: 3fr 1fr;\n            input {\n                font-size: 1rem;\n                width: 100%;\n                border: none;\n                outline: none;\n                border-bottom: 2px solid black;\n                background: transparent;\n            }\n            button {\n                background: transparent;\n                border-bottom: 2px solid black;\n                border-radius: 0;\n                &:hover {\n                    background: $button-hover-color;\n                }\n            }\n        }\n    }\n    .editor {\n        position: relative;\n        padding: 4rem;\n        .header-tasks-container {\n            h2 {\n                margin-bottom: 2rem;\n            }\n        }\n        .task-window {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin: auto;\n            padding: 1rem;\n            background: $window-bg-color;\n            border-radius: 12px;\n            display: none;\n            flex-direction: column;\n            width: 35rem;\n            height: 20rem;\n            z-index: 1;\n            .task-input-container {\n                display: flex;\n                flex-direction: column;\n                margin: .6rem 0;\n                .task-description-input {\n                    resize: none;\n                }\n                input {\n                    outline: none;\n                    font-size: 1rem;\n                }\n                textarea {\n                    font-size: 1rem;\n                    height: 6rem;\n                    outline: none;\n                }\n                * + small {\n                    height: .3rem;\n                }\n            }\n            .task-buttons-container {\n                display: flex;\n                justify-content: space-around;\n                margin-top: 1rem;\n                button {\n                    width: 6rem;\n                }\n            }\n        }\n        .tasks-list-container {\n            width: 100%;\n        }\n    }\n}\n\n.active-list {\n    font-weight: 800;\n}\n\n.sidebar-del-button {\n    width: 1.5rem;\n    height: 1.5rem;\n    outline: none;\n    border: none;\n    border-radius: 50%;\n    background-size:cover;\n    &:hover {\n        background: red;\n        cursor: pointer;\n    }\n}\n\n.error {\n    border: 2px solid red;\n}\n.success {\n    border: 2px solid greenyellow;\n}\n.modal {\n    position: fixed;\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, .4);\n    z-index: 1;\n}\n\n.date-picker {\n    position: relative;\n    &::-webkit-calendar-picker-indicator {\n        position: absolute;\n        background: transparent;\n        bottom: 0;\n        color: transparent;\n        cursor: pointer;\n        height: 100%;\n        left: 0;\n        right: 0;\n        top: 0;\n        width: auto;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/tasks.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/tasks.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task-container {\n  position: relative;\n  margin: 1rem auto;\n  background-color: #c4e4be;\n  width: 70%;\n  max-height: 4rem;\n  display: grid;\n  border-radius: 12px;\n  padding: .3rem;\n  grid-template-columns: 30% 30% 28% 25%;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"title title . button\" \"description description date button\" \"description description . button\";\n  cursor: pointer; }\n\n.task-title {\n  grid-area: title;\n  font-weight: 600;\n  text-align: left;\n  margin-left: .5rem;\n  pointer-events: none; }\n\n.task-description {\n  grid-area: description;\n  text-align: left;\n  margin-left: .5rem;\n  pointer-events: none;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical; }\n\n.task-button {\n  grid-area: button;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  margin: auto;\n  border-radius: 50%;\n  width: 4rem;\n  height: auto;\n  outline: none;\n  border: none;\n  cursor: pointer; }\n  .task-button:hover {\n    background: orange; }\n\n.task-date {\n  grid-area: date;\n  pointer-events: none; }\n", "",{"version":3,"sources":["webpack://./src/styles/tasks.scss"],"names":[],"mappings":"AAGA;EACI,kBAAkB;EAClB,iBAAiB;EACjB,yBANqC;EAOrC,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,sCAAsC;EACtC,+BAA+B;EAC/B,oHAE0D;EAC1D,eAAe,EAAA;;AAGnB;EACI,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB,EAAA;;AAGxB;EACI,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,gBAAe;EACf,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B,EAAA;;AAGhC;EACI,iBAAiB;EACjB,kBAAkB;EAClB,QAAO;EACP,SAAS;EACT,OAAM;EACN,MAAM;EACN,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe,EAAA;EAbnB;IAeQ,kBArDgB,EAAA;;AA0DxB;EACI,eAAe;EACf,oBAAoB,EAAA","sourcesContent":["$task-container-color: rgb(196, 228, 190);\n$btn-hover-color: orange;\n\n.task-container {\n    position: relative;\n    margin: 1rem auto;\n    background-color: $task-container-color;\n    width: 70%;\n    max-height: 4rem;\n    display: grid;\n    border-radius: 12px;\n    padding: .3rem;\n    grid-template-columns: 30% 30% 28% 25%;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas:    \"title title . button\"\n                            \"description description date button\"\n                            \"description description . button\";\n    cursor: pointer;\n}\n\n.task-title {\n    grid-area: title;\n    font-weight: 600;\n    text-align: left;\n    margin-left: .5rem;\n    pointer-events: none;\n}\n\n.task-description {\n    grid-area: description;\n    text-align: left;\n    margin-left: .5rem;\n    pointer-events: none;\n    overflow:hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\n.task-button {\n    grid-area: button;\n    position: absolute;\n    right:0;\n    bottom: 0;\n    left:0;\n    top: 0;\n    margin: auto;\n    border-radius: 50%;\n    width: 4rem;\n    height: auto;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    &:hover {\n        background: $btn-hover-color;\n    }\n}\n\n\n.task-date {\n    grid-area: date;\n    pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/tasks.scss":
/*!*******************************!*\
  !*** ./src/styles/tasks.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tasks_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./tasks.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/tasks.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tasks_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tasks_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tasks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tasks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateInput": () => (/* binding */ dateInput)
/* harmony export */ });
const dateInput = (dateElement) => {
    const _dateElement = dateElement;
    const _today = new Date().toISOString().split("T")[0];
    
    const setMinDate = (() => {
        _dateElement.setAttribute("min", _today);
    })();

    const getDate = () => _dateElement.value;

    return {getDate};
};



/***/ }),

/***/ "./src/modules/editor.js":
/*!*******************************!*\
  !*** ./src/modules/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskWindow": () => (/* binding */ TaskWindow),
/* harmony export */   "taskContent": () => (/* binding */ taskContent),
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");

const tasksContainer = document.querySelector("[data-tasks-list]");

const Sidebar = (() => {
    const inboxTasksCounter = document.querySelector("[data-inbox-tasks] small");

    const countTasks = (number) => {
        inboxTasksCounter.innerText = number;
    };

    return {countTasks};
})();

const taskController = (() => {
    const _title = document.querySelector("[data-project-title]");
    const _addTaskBtn = document.querySelector("[data-project-btn-add]");

    const setTitle = (title) => {
        if(!title) {
            _title.innerText = "No Selected Projects";
            _title.style.fontWeight = 200;
            _addTaskBtn.style.display = "none";
        }
        else {
            _title.innerText = title;
            _title.style.fontWeight = "";
            _addTaskBtn.style.display = "block";
        }
    };
    const hideButton = () => {
        _addTaskBtn.style.visibility = "hidden";
    };
    const displayButton = () => {
        _addTaskBtn.style.visibility = "visible";
    };

    return {setTitle, hideButton, displayButton};
})();

const TaskWindow = (() => {
    const modal = document.querySelector(".modal");
    const _taskWindow = document.querySelector("[data-task-window]");
    const formInputs = _taskWindow.querySelectorAll("input, textarea");
    const addButton = document.querySelector("#add-btn");
    const editButton = document.querySelector("#edit-btn");
    formInputs.forEach(input => input.addEventListener("input", checkInput));

    function checkInput() {
        const _userInput = {};
        formInputs.forEach(input => {
            const inputValue = getValue(input); 
            validateInput(inputValue, input);
            _userInput[input.name] = inputValue;
        });
        for (let key in _userInput) {
            if(!_userInput[key]){
                return;
            }
        }
        _userInput.id = Date.now().toString();
        return _userInput;
    }

    const getUserInput = () => {
        const value = checkInput();
        return value;
    };

    function getValue (input) {return input.value;} 

    function displayWindow() {
        clearInput();
        _taskWindow.style.display = "flex";
        editButton.style.display = "none";
        modal.style.display = "block";    
    }
    function hideWindow() {
        _taskWindow.style.display = "none";
        addButton.style.display = "inline-block";
        modal.style.display = "none"; 
        clearInput();
    }
    function displayEditWindow() {
        clearInput();

        _taskWindow.style.display = "flex";
        addButton.style.display = "none";
        editButton.style.display = "inline-block";
        modal.style.display = "block";
    }
    function clearInput() {
        formInputs.forEach(input => input.value = null);
    }

    function validateInput(input, inputContainer) {
        clearInputError(inputContainer);
        if (!input) {
            showInputError(inputContainer);
        }
    }

    function clearInputError(inputContainer) {
            inputContainer.classList.remove("error");
            inputContainer.classList.add("success");
            inputContainer.parentNode.querySelector("small").innerText = "";
            inputContainer.parentNode.querySelector("small").style.color = "";
    }

    function showInputError(inputContainer) {
            inputContainer.classList.add("error");
            inputContainer.classList.remove("success");
            inputContainer.parentNode.querySelector("small").innerText = `Please add ${inputContainer.name}`;
            inputContainer.parentNode.querySelector("small").style.color = "red";
    }

    const pullTaskInfo = (data) => {
            formInputs.forEach(input => {
                input.value = data[input.name];
            });
    };
    return {getUserInput, displayWindow, hideWindow, displayEditWindow, pullTaskInfo};
})();

const taskContent = (() => {
    const render = (tasks) => {
        clearElement();
        if(!tasks) return;
        tasks.forEach(task => {
            const taskList = document.createElement("li");
            const title = document.createElement("div");
            const description = document.createElement("div");
            const date = document.createElement("div");
            const completeButton = document.createElement("button");

            title.innerText = task.title;
            description.innerText = task.description;
            date.innerText = task.date;
            completeButton.innerText = "Done";

            title.classList.add("task-title");
            description.classList.add("task-description");
            date.classList.add("task-date");
            completeButton.classList.add("task-button");
            completeButton.dataset.btnId = task.id;
            taskList.appendChild(title);
            taskList.appendChild(description);
            taskList.appendChild(date);

            taskList.appendChild(completeButton);

            taskList.classList.add("task-container");
            tasksContainer.appendChild(taskList);
        });

    };

    const display = () => {
        tasksContainer.style.display = "inline-block";
    };
    const hide = () => {
        tasksContainer.style.display = "none";
    };

    function clearElement() {
        while (tasksContainer.firstChild) {
            tasksContainer.removeChild(tasksContainer.firstChild);
        }
    }

    return {display, hide, render}
})();



/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderUI": () => (/* binding */ renderUI)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_tasks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tasks.scss */ "./src/styles/tasks.scss");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/modules/editor.js");







const tasksContainerList = document.querySelector("[data-tasks-list]");
const projectsContainer = document.querySelector("[data-projects-container]");
const addProjectButton = document.querySelector("[data-add-project]");
const saveProjectButton = document.querySelector("[data-save-button]");
const addTaskButton = document.querySelector("[data-project-btn-add]");
const _dateInput = document.querySelector("input[type='date']");

const windowInputButtons = document.querySelectorAll("[data-window-btn-container] button");
const projectsStorage = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.dataStorage)("projects.list");
const activeIdStorage = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.dataStorage)("active.projectId");


addProjectButton.addEventListener("click", displayProjectInput);
projectsContainer.addEventListener("click", selectProject);
saveProjectButton.addEventListener("click", saveProject);
addTaskButton.addEventListener("click", addTaskList);
windowInputButtons.forEach(button => button.addEventListener("click", handleWindowInput));
tasksContainerList.addEventListener("click", handleTask);

function renderUI() {
    _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.set(projectsStorage.get());
    _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.setActiveId(activeIdStorage.get());
    _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.render(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll(), projectsContainer);
    const selectedProject = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll().find(project => project.id === activeIdStorage.get()) || "";
    _editor__WEBPACK_IMPORTED_MODULE_5__.taskController.setTitle(selectedProject.name);
    if (activeIdStorage.get()) {
        const activeTasks = getActiveTasks();     
        _editor__WEBPACK_IMPORTED_MODULE_5__.taskContent.display();
        _editor__WEBPACK_IMPORTED_MODULE_5__.taskContent.render(activeTasks);
    }
    else {
        _editor__WEBPACK_IMPORTED_MODULE_5__.taskContent.hide();
    }
}

function handleTask(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        completeTask(event);
    }
    if (event.target.tagName.toLowerCase() === "li") {
        (0,_date__WEBPACK_IMPORTED_MODULE_4__.dateInput)(_dateInput);
        const editTaskButton = document.querySelector("#edit-btn");
        _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.displayEditWindow();
        const activeTaskId = event.target.querySelector("button").dataset.btnId;
        const activeProjectId = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getActiveId();
        const activeProject = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getElementById(activeProjectId);
        const taskIndex = getSelectedTaskIndex(activeProject, activeTaskId);
        _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.pullTaskInfo(activeProject.tasks[taskIndex]);
        const editButton = editTaskButton.cloneNode(true);
        editTaskButton.parentNode.replaceChild(editButton, editTaskButton)
        editButton.addEventListener("click", () => {editTaskInfo(activeProject, taskIndex)})
    }
}

function getSelectedTaskIndex(project, searchIndex) {
    let selTaskIndex = null;

    project.tasks.map((task, index) => {
        if (task.id === searchIndex) {
            selTaskIndex = index;
        }
    });
    return selTaskIndex;
}

function completeTask(event) {
    const taskId = event.target.dataset.btnId;
    const activeProjectId = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getActiveId();
    const project = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getElementById(activeProjectId);
    const incompleteTasks = project.tasks.filter(task => task.id !== taskId);
        
    _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.setValuesByProperty(project, "tasks", incompleteTasks);
    projectsStorage.save(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll());
    renderUI();
}

function editTaskInfo(project, index) {
    const taskInput = _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.getUserInput();
    if (!taskInput) return;
    _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.hideWindow();
    project.tasks.splice(index, 1, taskInput);   
    projectsStorage.save(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll());
    renderUI();
}

function handleWindowInput(event) {
    event.preventDefault();
    if (event.target.id === "add-btn") {
        const activeId = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getActiveId();
        if (!activeId) {
            alert("Please choose project (make one if none)");
            return;
        }
        const activeProject = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getElementById(activeId);
        const userInput = _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.getUserInput();
        if (!userInput) return;

        activeProject.tasks.push(userInput);
        projectsStorage.save(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll());

        _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.hideWindow();
        _editor__WEBPACK_IMPORTED_MODULE_5__.taskController.displayButton();

        renderUI();
    } 
    if (event.target.id === "cancel-btn") {
        _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.hideWindow();
        _editor__WEBPACK_IMPORTED_MODULE_5__.taskController.displayButton();
    }
}

function getActiveTasks() {
    const activeId = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getActiveId();
    const activeProject = _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getElementById(activeId);
    return activeProject.tasks;
}

function addTaskList() {
    _editor__WEBPACK_IMPORTED_MODULE_5__.taskController.hideButton();
    _editor__WEBPACK_IMPORTED_MODULE_5__.TaskWindow.displayWindow();
    (0,_date__WEBPACK_IMPORTED_MODULE_4__.dateInput)(_dateInput);
}

function selectProject(event) {
    if (event.target.tagName.toLowerCase() === "li") {
        _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.setActiveId(event.target.dataset.listId);
        activeIdStorage.save(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getActiveId());
        renderUI();
    }
    if (event.target.tagName.toLowerCase() === "button") {
        const removeButtonId = event.target.dataset.btnId;
        if (removeButtonId === _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getActiveId()) {
            activeIdStorage.clear();
        }
        _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.remove(removeButtonId);
        projectsStorage.save(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll());
        renderUI();
    }
}

function displayProjectInput() {
    document.querySelector("[data-projects-input]").style.display = "grid";
}

function saveProject(event) {
    event.preventDefault();
    const projectName = document.querySelector("[data-input-project]").value;
    
    _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.add({name: projectName, id: Date.now().toString(), tasks:[]});
    document.querySelector("[data-input-project]").value = null;
    document.querySelector("[data-projects-input]").style.display = "none";
    projectsStorage.save(_projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsList.getAll());
    renderUI();
}



/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsList": () => (/* binding */ ProjectsList)
/* harmony export */ });
const ProjectsList = (() => {
    let _projects = [];
    let _selectedProjectId = null;

    const render = (projects, container) => {
        clearElement(container);
        const _container = container;
        if (!projects) return;
        projects.forEach(project => {
            const projectElement = document.createElement("li");
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("sidebar-del-button");
            projectElement.dataset.listId = project.id;
            deleteButton.dataset.btnId = project.id;
            projectElement.innerText = project.name;
            if (project.id === _selectedProjectId) {
                projectElement.classList.add("active-list");
            }
            projectElement.classList.add("project-list__item");
            projectElement.appendChild(deleteButton)
            _container.appendChild(projectElement);
        });
    };

    const add = (project) => {
        console.log(project);
        _projects.push(project);
    };
    const set = (projects) => {
        if(!projects) return;
        _projects = projects;
    };
    const setActiveId = (activeProjectId) => {
        if(activeProjectId){
            _selectedProjectId = activeProjectId;
        }      
    };
    const getActiveId = () => _selectedProjectId;

    const getAll = () => _projects;

    function clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    const remove = (projectId) => {
        _projects = _projects.filter(project => project.id !== projectId);
    };

    const getElementById = (id) => {
        return _projects.find(project => project.id === id);
    };

    const setValuesByProperty = (project, property, data) => {
        project[property] = data;
    };

    return {render, add, set, getAll, setActiveId, getActiveId, remove, getElementById, setValuesByProperty}
})();



/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataStorage": () => (/* binding */ dataStorage)
/* harmony export */ });
const dataStorage = (key) => {
    const LOCAL_STORAGE_PROJECTS_KEY = key;

    const get = () => {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY));
    }
    const save = (data=[]) => {
        localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(data));
    };
    const clear = () => {
        localStorage.clear();
    };
    return {save, get, clear};
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main */ "./src/modules/main.js");


(0,_modules_main__WEBPACK_IMPORTED_MODULE_0__.renderUI)();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDLHVEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90YXNrcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Rhc2tzLnNjc3M/NjY3MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IH1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAuYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyOyB9XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2M2ZWM7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlOyB9XFxuICAucGFnZS13cmFwcGVyIC5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBwYWRkaW5nOiAycmVtOyB9XFxuICAgIC5wYWdlLXdyYXBwZXIgLnNpZGViYXIgLnNpZGViYXItbGlzdCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW46IDNyZW0gMDsgfVxcbiAgICAgIC5wYWdlLXdyYXBwZXIgLnNpZGViYXIgLnNpZGViYXItbGlzdCAuc2lkZWJhci1saXN0X19pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgLnBhZ2Utd3JhcHBlciAuc2lkZWJhciAuc2lkZWJhci1saXN0IC5zaWRlYmFyLWxpc3RfX2l0ZW06aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7IH1cXG4gICAgLnBhZ2Utd3JhcHBlciAuc2lkZWJhciAuZm9ybS1wcm9qZWN0cyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAucGFnZS13cmFwcGVyIC5zaWRlYmFyIC5mb3JtLXByb2plY3RzIGxhYmVsIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAucGFnZS13cmFwcGVyIC5zaWRlYmFyIC5wcm9qZWN0cy1saXN0X19jb250YWluZXIge1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07IH1cXG4gICAgICAucGFnZS13cmFwcGVyIC5zaWRlYmFyIC5wcm9qZWN0cy1saXN0X19jb250YWluZXIgLnByb2plY3QtbGlzdF9faXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAuMnJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgIC5wYWdlLXdyYXBwZXIgLnNpZGViYXIgLnByb2plY3RzLWxpc3RfX2NvbnRhaW5lciAucHJvamVjdC1saXN0X19pdGVtOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogc2lsdmVyOyB9XFxuICAgIC5wYWdlLXdyYXBwZXIgLnNpZGViYXIgLnByb2plY3QtaW5wdXRfX2NvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7IH1cXG4gICAgICAucGFnZS13cmFwcGVyIC5zaWRlYmFyIC5wcm9qZWN0LWlucHV0X19jb250YWluZXIgaW5wdXQge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAucGFnZS13cmFwcGVyIC5zaWRlYmFyIC5wcm9qZWN0LWlucHV0X19jb250YWluZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAgICAgLnBhZ2Utd3JhcHBlciAuc2lkZWJhciAucHJvamVjdC1pbnB1dF9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHNpbHZlcjsgfVxcbiAgLnBhZ2Utd3JhcHBlciAuZWRpdG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA0cmVtOyB9XFxuICAgIC5wYWdlLXdyYXBwZXIgLmVkaXRvciAuaGVhZGVyLXRhc2tzLWNvbnRhaW5lciBoMiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcbiAgICAucGFnZS13cmFwcGVyIC5lZGl0b3IgLnRhc2std2luZG93IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB3aWR0aDogMzVyZW07XFxuICAgICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLnBhZ2Utd3JhcHBlciAuZWRpdG9yIC50YXNrLXdpbmRvdyAudGFzay1pbnB1dC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW46IC42cmVtIDA7IH1cXG4gICAgICAgIC5wYWdlLXdyYXBwZXIgLmVkaXRvciAudGFzay13aW5kb3cgLnRhc2staW5wdXQtY29udGFpbmVyIC50YXNrLWRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgICAgICAgcmVzaXplOiBub25lOyB9XFxuICAgICAgICAucGFnZS13cmFwcGVyIC5lZGl0b3IgLnRhc2std2luZG93IC50YXNrLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxcbiAgICAgICAgLnBhZ2Utd3JhcHBlciAuZWRpdG9yIC50YXNrLXdpbmRvdyAudGFzay1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLnBhZ2Utd3JhcHBlciAuZWRpdG9yIC50YXNrLXdpbmRvdyAudGFzay1pbnB1dC1jb250YWluZXIgKiArIHNtYWxsIHtcXG4gICAgICAgICAgaGVpZ2h0OiAuM3JlbTsgfVxcbiAgICAgIC5wYWdlLXdyYXBwZXIgLmVkaXRvciAudGFzay13aW5kb3cgLnRhc2stYnV0dG9ucy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgfVxcbiAgICAgICAgLnBhZ2Utd3JhcHBlciAuZWRpdG9yIC50YXNrLXdpbmRvdyAudGFzay1idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICAgICAgICB3aWR0aDogNnJlbTsgfVxcbiAgICAucGFnZS13cmFwcGVyIC5lZGl0b3IgLnRhc2tzLWxpc3QtY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICBmb250LXdlaWdodDogODAwOyB9XFxuXFxuLnNpZGViYXItZGVsLWJ1dHRvbiB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcbiAgLnNpZGViYXItZGVsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmVycm9yIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgfVxcblxcbi5zdWNjZXNzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyB9XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi5kYXRlLXBpY2tlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5kYXRlLXBpY2tlcjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsMENBQTBDLEVBQUE7O0FBRzlDO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUxuQjtJQU9RLHdCQXhCbUIsRUFBQTs7QUE0QjNCO0VBQ0kseUJBOUIrQjtFQStCL0IsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtFQUZsQztJQUlRLGFBQWE7SUFDYiwyQkF0Q29CO0lBdUNwQixhQUFhLEVBQUE7SUFOckI7TUFRWSxhQUFhO01BQ2IsV0FBVztNQUNYLGNBQWMsRUFBQTtNQVYxQjtRQVlnQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO1FBaEIvQjtVQWtCb0Isd0JBakRLLEVBQUE7SUErQnpCO01BdUJZLGFBQWE7TUFDYiw4QkFBOEIsRUFBQTtNQXhCMUM7UUEwQmdCLGVBQWUsRUFBQTtJQTFCL0I7TUE4QlksZ0JBQWdCLEVBQUE7TUE5QjVCO1FBZ0NnQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLGVBQWUsRUFBQTtRQXJDL0I7VUF1Q29CLGtCQXRFSyxFQUFBO0lBK0J6QjtNQTRDWSxhQUFhO01BQ2IsOEJBQThCLEVBQUE7TUE3QzFDO1FBK0NnQixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHVCQUF1QixFQUFBO01BcER2QztRQXVEZ0IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixnQkFBZ0IsRUFBQTtRQXpEaEM7VUEyRG9CLGtCQTdGTyxFQUFBO0VBa0MzQjtJQWlFUSxrQkFBa0I7SUFDbEIsYUFBYSxFQUFBO0lBbEVyQjtNQXFFZ0IsbUJBQW1CLEVBQUE7SUFyRW5DO01BeUVZLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO01BQ1IsWUFBWTtNQUNaLGFBQWE7TUFDYixxQkE5R2U7TUErR2YsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixVQUFVLEVBQUE7TUF0RnRCO1FBd0ZnQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGVBQWUsRUFBQTtRQTFGL0I7VUE0Rm9CLFlBQVksRUFBQTtRQTVGaEM7VUErRm9CLGFBQWE7VUFDYixlQUFlLEVBQUE7UUFoR25DO1VBbUdvQixlQUFlO1VBQ2YsWUFBWTtVQUNaLGFBQWEsRUFBQTtRQXJHakM7VUF3R29CLGFBQWEsRUFBQTtNQXhHakM7UUE0R2dCLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsZ0JBQWdCLEVBQUE7UUE5R2hDO1VBZ0hvQixXQUFXLEVBQUE7SUFoSC9CO01BcUhZLFdBQVcsRUFBQTs7QUFLdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFxQixFQUFBO0VBTnpCO0lBUVEsZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1Esa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcXG4kaGVhZGVyLWJnLWNvbG9yOiByZ2IoODMsIDE5OCwgMjM2KTtcXG4kYnV0dG9uLWhvdmVyLWNvbG9yOiBzaWx2ZXI7XFxuJHNpZGViYXItYmctY29sb3I6IGxpZ2h0Z3JheTtcXG4kY29udGVudC1iZy1jb2xvcjogc2lsdmVyO1xcbiRob3Zlci1saXN0LWNvbG9yOiBzaWx2ZXI7XFxuJHdpbmRvdy1iZy1jb2xvcjogbGlnaHRncmF5O1xcbiR0YXNrLWJnLWNvbG9yOiB5ZWxsb3c7XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1ob3Zlci1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJnLWNvbG9yO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcjtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICAuc2lkZWJhci1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogM3JlbSAwO1xcbiAgICAgICAgICAgIC5zaWRlYmFyLWxpc3RfX2l0ZW0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItbGlzdC1jb2xvcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5mb3JtLXByb2plY3RzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdHMtbGlzdF9fY29udGFpbmVyIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgICAgIC5wcm9qZWN0LWxpc3RfX2l0ZW0ge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRob3Zlci1saXN0LWNvbG9yO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3QtaW5wdXRfX2NvbnRhaW5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJ1dHRvbi1ob3Zlci1jb2xvcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuZWRpdG9yIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmc6IDRyZW07XFxuICAgICAgICAuaGVhZGVyLXRhc2tzLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgaDIge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrLXdpbmRvdyB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2luZG93LWJnLWNvbG9yO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIHdpZHRoOiAzNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICAgICAgLnRhc2staW5wdXQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAuNnJlbSAwO1xcbiAgICAgICAgICAgICAgICAudGFzay1kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICogKyBzbWFsbCB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC4zcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50YXNrLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrcy1saXN0LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnNpZGViYXItZGVsLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcbi5zdWNjZXNzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XFxufVxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmRhdGUtcGlja2VyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAmOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFzay1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlNGJlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC1oZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDI4JSAyNSU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlIC4gYnV0dG9uXFxcIiBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGF0ZSBidXR0b25cXFwiIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuIGJ1dHRvblxcXCI7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udGFzay10aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyB9XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7IH1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90YXNrcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFOcUM7RUFPckMsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsK0JBQStCO0VBQy9CLG9IQUUwRDtFQUMxRCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUztFQUNULE9BQU07RUFDTixNQUFNO0VBQ04sWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBYm5CO0lBZVEsa0JBckRnQixFQUFBOztBQTBEeEI7RUFDSSxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHRhc2stY29udGFpbmVyLWNvbG9yOiByZ2IoMTk2LCAyMjgsIDE5MCk7XFxuJGJ0bi1ob3Zlci1jb2xvcjogb3JhbmdlO1xcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLWNvbnRhaW5lci1jb2xvcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWF4LWhlaWdodDogNHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogLjNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDMwJSAyOCUgMjUlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgICBcXFwidGl0bGUgdGl0bGUgLiBidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkYXRlIGJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC4gYnV0dG9uXFxcIjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDowO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6MDtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJ0bi1ob3Zlci1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG5cXG4udGFzay1kYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza3Muc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkYXRlSW5wdXQgPSAoZGF0ZUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBfZGF0ZUVsZW1lbnQgPSBkYXRlRWxlbWVudDtcbiAgICBjb25zdCBfdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgIFxuICAgIGNvbnN0IHNldE1pbkRhdGUgPSAoKCkgPT4ge1xuICAgICAgICBfZGF0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIF90b2RheSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiBfZGF0ZUVsZW1lbnQudmFsdWU7XG5cbiAgICByZXR1cm4ge2dldERhdGV9O1xufTtcblxuZXhwb3J0IHtkYXRlSW5wdXR9OyIsImltcG9ydCB7IGRhdGVJbnB1dCB9IGZyb20gXCIuL2RhdGVcIjtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2tzLWxpc3RdXCIpO1xuXG5jb25zdCBTaWRlYmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbmJveFRhc2tzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbmJveC10YXNrc10gc21hbGxcIik7XG5cbiAgICBjb25zdCBjb3VudFRhc2tzID0gKG51bWJlcikgPT4ge1xuICAgICAgICBpbmJveFRhc2tzQ291bnRlci5pbm5lclRleHQgPSBudW1iZXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7Y291bnRUYXNrc307XG59KSgpO1xuXG5jb25zdCB0YXNrQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpO1xuICAgIGNvbnN0IF9hZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtYnRuLWFkZF1cIik7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBpZighdGl0bGUpIHtcbiAgICAgICAgICAgIF90aXRsZS5pbm5lclRleHQgPSBcIk5vIFNlbGVjdGVkIFByb2plY3RzXCI7XG4gICAgICAgICAgICBfdGl0bGUuc3R5bGUuZm9udFdlaWdodCA9IDIwMDtcbiAgICAgICAgICAgIF9hZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICAgICAgICAgIF90aXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgICAgICAgIF9hZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhpZGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIF9hZGRUYXNrQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgX2FkZFRhc2tCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH07XG5cbiAgICByZXR1cm4ge3NldFRpdGxlLCBoaWRlQnV0dG9uLCBkaXNwbGF5QnV0dG9ufTtcbn0pKCk7XG5cbmNvbnN0IFRhc2tXaW5kb3cgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICBjb25zdCBfdGFza1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLXdpbmRvd11cIik7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IF90YXNrV2luZG93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWFcIik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnRuXCIpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtYnRuXCIpO1xuICAgIGZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2hlY2tJbnB1dCkpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgX3VzZXJJbnB1dCA9IHt9O1xuICAgICAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGdldFZhbHVlKGlucHV0KTsgXG4gICAgICAgICAgICB2YWxpZGF0ZUlucHV0KGlucHV0VmFsdWUsIGlucHV0KTtcbiAgICAgICAgICAgIF91c2VySW5wdXRbaW5wdXQubmFtZV0gPSBpbnB1dFZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIF91c2VySW5wdXQpIHtcbiAgICAgICAgICAgIGlmKCFfdXNlcklucHV0W2tleV0pe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdXNlcklucHV0LmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gX3VzZXJJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRVc2VySW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY2hlY2tJbnB1dCgpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFZhbHVlIChpbnB1dCkge3JldHVybiBpbnB1dC52YWx1ZTt9IFxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVdpbmRvdygpIHtcbiAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICBfdGFza1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVkaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gaGlkZVdpbmRvdygpIHtcbiAgICAgICAgX3Rhc2tXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUVkaXRXaW5kb3coKSB7XG4gICAgICAgIGNsZWFySW5wdXQoKTtcblxuICAgICAgICBfdGFza1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGFkZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVkaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXQoKSB7XG4gICAgICAgIGZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQsIGlucHV0Q29udGFpbmVyKSB7XG4gICAgICAgIGNsZWFySW5wdXRFcnJvcihpbnB1dENvbnRhaW5lcik7XG4gICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgIHNob3dJbnB1dEVycm9yKGlucHV0Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXRFcnJvcihpbnB1dENvbnRhaW5lcikge1xuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbFwiKS5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgaW5wdXRDb250YWluZXIucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwic21hbGxcIikuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dJbnB1dEVycm9yKGlucHV0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcInNtYWxsXCIpLmlubmVyVGV4dCA9IGBQbGVhc2UgYWRkICR7aW5wdXRDb250YWluZXIubmFtZX1gO1xuICAgICAgICAgICAgaW5wdXRDb250YWluZXIucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwic21hbGxcIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IHB1bGxUYXNrSW5mbyA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtpbnB1dC5uYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHtnZXRVc2VySW5wdXQsIGRpc3BsYXlXaW5kb3csIGhpZGVXaW5kb3csIGRpc3BsYXlFZGl0V2luZG93LCBwdWxsVGFza0luZm99O1xufSkoKTtcblxuY29uc3QgdGFza0NvbnRlbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlciA9ICh0YXNrcykgPT4ge1xuICAgICAgICBjbGVhckVsZW1lbnQoKTtcbiAgICAgICAgaWYoIXRhc2tzKSByZXR1cm47XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEb25lXCI7XG5cbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5kYXRhc2V0LmJ0bklkID0gdGFzay5pZDtcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgZGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgfTtcbiAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyRWxlbWVudCgpIHtcbiAgICAgICAgd2hpbGUgKHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtkaXNwbGF5LCBoaWRlLCByZW5kZXJ9XG59KSgpO1xuXG5leHBvcnQge1Rhc2tXaW5kb3csIHRhc2tDb250ZW50LCB0YXNrQ29udHJvbGxlciwgU2lkZWJhcn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Rhc2tzLnNjc3MnO1xuaW1wb3J0IHtQcm9qZWN0c0xpc3R9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgZGF0YVN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZGF0ZUlucHV0IH0gZnJvbSAnLi9kYXRlJztcbmltcG9ydCB7IFRhc2tXaW5kb3csIHRhc2tDb250ZW50LCB0YXNrQ29udHJvbGxlciwgU2lkZWJhcn0gZnJvbSAnLi9lZGl0b3InO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFza3MtbGlzdF1cIik7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0cy1jb250YWluZXJdXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hZGQtcHJvamVjdF1cIik7XG5jb25zdCBzYXZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zYXZlLWJ1dHRvbl1cIik7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtYnRuLWFkZF1cIik7XG5jb25zdCBfZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J2RhdGUnXVwiKTtcblxuY29uc3Qgd2luZG93SW5wdXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXdpbmRvdy1idG4tY29udGFpbmVyXSBidXR0b25cIik7XG5jb25zdCBwcm9qZWN0c1N0b3JhZ2UgPSBkYXRhU3RvcmFnZShcInByb2plY3RzLmxpc3RcIik7XG5jb25zdCBhY3RpdmVJZFN0b3JhZ2UgPSBkYXRhU3RvcmFnZShcImFjdGl2ZS5wcm9qZWN0SWRcIik7XG5cblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RJbnB1dCk7XG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0UHJvamVjdCk7XG5zYXZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVByb2plY3QpO1xuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0xpc3QpO1xud2luZG93SW5wdXRCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlV2luZG93SW5wdXQpKTtcbnRhc2tzQ29udGFpbmVyTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFzayk7XG5cbmZ1bmN0aW9uIHJlbmRlclVJKCkge1xuICAgIFByb2plY3RzTGlzdC5zZXQocHJvamVjdHNTdG9yYWdlLmdldCgpKTtcbiAgICBQcm9qZWN0c0xpc3Quc2V0QWN0aXZlSWQoYWN0aXZlSWRTdG9yYWdlLmdldCgpKTtcbiAgICBQcm9qZWN0c0xpc3QucmVuZGVyKFByb2plY3RzTGlzdC5nZXRBbGwoKSwgcHJvamVjdHNDb250YWluZXIpO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzTGlzdC5nZXRBbGwoKS5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gYWN0aXZlSWRTdG9yYWdlLmdldCgpKSB8fCBcIlwiO1xuICAgIHRhc2tDb250cm9sbGVyLnNldFRpdGxlKHNlbGVjdGVkUHJvamVjdC5uYW1lKTtcbiAgICBpZiAoYWN0aXZlSWRTdG9yYWdlLmdldCgpKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhc2tzID0gZ2V0QWN0aXZlVGFza3MoKTsgICAgIFxuICAgICAgICB0YXNrQ29udGVudC5kaXNwbGF5KCk7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbmRlcihhY3RpdmVUYXNrcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXNrQ29udGVudC5oaWRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYnV0dG9uXCIpIHtcbiAgICAgICAgY29tcGxldGVUYXNrKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgICBkYXRlSW5wdXQoX2RhdGVJbnB1dCk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWJ0blwiKTtcbiAgICAgICAgVGFza1dpbmRvdy5kaXNwbGF5RWRpdFdpbmRvdygpO1xuICAgICAgICBjb25zdCBhY3RpdmVUYXNrSWQgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5kYXRhc2V0LmJ0bklkO1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0SWQgPSBQcm9qZWN0c0xpc3QuZ2V0QWN0aXZlSWQoKTtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IFByb2plY3RzTGlzdC5nZXRFbGVtZW50QnlJZChhY3RpdmVQcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBnZXRTZWxlY3RlZFRhc2tJbmRleChhY3RpdmVQcm9qZWN0LCBhY3RpdmVUYXNrSWQpO1xuICAgICAgICBUYXNrV2luZG93LnB1bGxUYXNrSW5mbyhhY3RpdmVQcm9qZWN0LnRhc2tzW3Rhc2tJbmRleF0pO1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZWRpdFRhc2tCdXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBlZGl0VGFza0J1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlZGl0QnV0dG9uLCBlZGl0VGFza0J1dHRvbilcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2VkaXRUYXNrSW5mbyhhY3RpdmVQcm9qZWN0LCB0YXNrSW5kZXgpfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGVkVGFza0luZGV4KHByb2plY3QsIHNlYXJjaEluZGV4KSB7XG4gICAgbGV0IHNlbFRhc2tJbmRleCA9IG51bGw7XG5cbiAgICBwcm9qZWN0LnRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IHNlYXJjaEluZGV4KSB7XG4gICAgICAgICAgICBzZWxUYXNrSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxUYXNrSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ0bklkO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJZCA9IFByb2plY3RzTGlzdC5nZXRBY3RpdmVJZCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c0xpc3QuZ2V0RWxlbWVudEJ5SWQoYWN0aXZlUHJvamVjdElkKTtcbiAgICBjb25zdCBpbmNvbXBsZXRlVGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgICAgIFxuICAgIFByb2plY3RzTGlzdC5zZXRWYWx1ZXNCeVByb3BlcnR5KHByb2plY3QsIFwidGFza3NcIiwgaW5jb21wbGV0ZVRhc2tzKTtcbiAgICBwcm9qZWN0c1N0b3JhZ2Uuc2F2ZShQcm9qZWN0c0xpc3QuZ2V0QWxsKCkpO1xuICAgIHJlbmRlclVJKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrSW5mbyhwcm9qZWN0LCBpbmRleCkge1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IFRhc2tXaW5kb3cuZ2V0VXNlcklucHV0KCk7XG4gICAgaWYgKCF0YXNrSW5wdXQpIHJldHVybjtcbiAgICBUYXNrV2luZG93LmhpZGVXaW5kb3coKTtcbiAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSwgdGFza0lucHV0KTsgICBcbiAgICBwcm9qZWN0c1N0b3JhZ2Uuc2F2ZShQcm9qZWN0c0xpc3QuZ2V0QWxsKCkpO1xuICAgIHJlbmRlclVJKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVdpbmRvd0lucHV0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImFkZC1idG5cIikge1xuICAgICAgICBjb25zdCBhY3RpdmVJZCA9IFByb2plY3RzTGlzdC5nZXRBY3RpdmVJZCgpO1xuICAgICAgICBpZiAoIWFjdGl2ZUlkKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBjaG9vc2UgcHJvamVjdCAobWFrZSBvbmUgaWYgbm9uZSlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IFByb2plY3RzTGlzdC5nZXRFbGVtZW50QnlJZChhY3RpdmVJZCk7XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IFRhc2tXaW5kb3cuZ2V0VXNlcklucHV0KCk7XG4gICAgICAgIGlmICghdXNlcklucHV0KSByZXR1cm47XG5cbiAgICAgICAgYWN0aXZlUHJvamVjdC50YXNrcy5wdXNoKHVzZXJJbnB1dCk7XG4gICAgICAgIHByb2plY3RzU3RvcmFnZS5zYXZlKFByb2plY3RzTGlzdC5nZXRBbGwoKSk7XG5cbiAgICAgICAgVGFza1dpbmRvdy5oaWRlV2luZG93KCk7XG4gICAgICAgIHRhc2tDb250cm9sbGVyLmRpc3BsYXlCdXR0b24oKTtcblxuICAgICAgICByZW5kZXJVSSgpO1xuICAgIH0gXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJjYW5jZWwtYnRuXCIpIHtcbiAgICAgICAgVGFza1dpbmRvdy5oaWRlV2luZG93KCk7XG4gICAgICAgIHRhc2tDb250cm9sbGVyLmRpc3BsYXlCdXR0b24oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVRhc2tzKCkge1xuICAgIGNvbnN0IGFjdGl2ZUlkID0gUHJvamVjdHNMaXN0LmdldEFjdGl2ZUlkKCk7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IFByb2plY3RzTGlzdC5nZXRFbGVtZW50QnlJZChhY3RpdmVJZCk7XG4gICAgcmV0dXJuIGFjdGl2ZVByb2plY3QudGFza3M7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0KCkge1xuICAgIHRhc2tDb250cm9sbGVyLmhpZGVCdXR0b24oKTtcbiAgICBUYXNrV2luZG93LmRpc3BsYXlXaW5kb3coKTtcbiAgICBkYXRlSW5wdXQoX2RhdGVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgICAgIFByb2plY3RzTGlzdC5zZXRBY3RpdmVJZChldmVudC50YXJnZXQuZGF0YXNldC5saXN0SWQpO1xuICAgICAgICBhY3RpdmVJZFN0b3JhZ2Uuc2F2ZShQcm9qZWN0c0xpc3QuZ2V0QWN0aXZlSWQoKSk7XG4gICAgICAgIHJlbmRlclVJKCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbklkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnRuSWQ7XG4gICAgICAgIGlmIChyZW1vdmVCdXR0b25JZCA9PT0gUHJvamVjdHNMaXN0LmdldEFjdGl2ZUlkKCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUlkU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFByb2plY3RzTGlzdC5yZW1vdmUocmVtb3ZlQnV0dG9uSWQpO1xuICAgICAgICBwcm9qZWN0c1N0b3JhZ2Uuc2F2ZShQcm9qZWN0c0xpc3QuZ2V0QWxsKCkpO1xuICAgICAgICByZW5kZXJVSSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RJbnB1dCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdHMtaW5wdXRdXCIpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbn1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0LXByb2plY3RdXCIpLnZhbHVlO1xuICAgIFxuICAgIFByb2plY3RzTGlzdC5hZGQoe25hbWU6IHByb2plY3ROYW1lLCBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCB0YXNrczpbXX0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbnB1dC1wcm9qZWN0XVwiKS52YWx1ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWlucHV0XVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcHJvamVjdHNTdG9yYWdlLnNhdmUoUHJvamVjdHNMaXN0LmdldEFsbCgpKTtcbiAgICByZW5kZXJVSSgpO1xufVxuZXhwb3J0IHtyZW5kZXJVSX07XG4iLCJjb25zdCBQcm9qZWN0c0xpc3QgPSAoKCkgPT4ge1xuICAgIGxldCBfcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgX3NlbGVjdGVkUHJvamVjdElkID0gbnVsbDtcblxuICAgIGNvbnN0IHJlbmRlciA9IChwcm9qZWN0cywgY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNsZWFyRWxlbWVudChjb250YWluZXIpO1xuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICBpZiAoIXByb2plY3RzKSByZXR1cm47XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItZGVsLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LmJ0bklkID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBfc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0X19pdGVtXCIpO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuICAgICAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGQgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgX3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfTtcbiAgICBjb25zdCBzZXQgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgaWYoIXByb2plY3RzKSByZXR1cm47XG4gICAgICAgIF9wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH07XG4gICAgY29uc3Qgc2V0QWN0aXZlSWQgPSAoYWN0aXZlUHJvamVjdElkKSA9PiB7XG4gICAgICAgIGlmKGFjdGl2ZVByb2plY3RJZCl7XG4gICAgICAgICAgICBfc2VsZWN0ZWRQcm9qZWN0SWQgPSBhY3RpdmVQcm9qZWN0SWQ7XG4gICAgICAgIH0gICAgICBcbiAgICB9O1xuICAgIGNvbnN0IGdldEFjdGl2ZUlkID0gKCkgPT4gX3NlbGVjdGVkUHJvamVjdElkO1xuXG4gICAgY29uc3QgZ2V0QWxsID0gKCkgPT4gX3Byb2plY3RzO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBfcHJvamVjdHMgPSBfcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gcHJvamVjdElkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RWxlbWVudEJ5SWQgPSAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRWYWx1ZXNCeVByb3BlcnR5ID0gKHByb2plY3QsIHByb3BlcnR5LCBkYXRhKSA9PiB7XG4gICAgICAgIHByb2plY3RbcHJvcGVydHldID0gZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtyZW5kZXIsIGFkZCwgc2V0LCBnZXRBbGwsIHNldEFjdGl2ZUlkLCBnZXRBY3RpdmVJZCwgcmVtb3ZlLCBnZXRFbGVtZW50QnlJZCwgc2V0VmFsdWVzQnlQcm9wZXJ0eX1cbn0pKCk7XG5cbmV4cG9ydCB7UHJvamVjdHNMaXN0fTsiLCJjb25zdCBkYXRhU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICBjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9IGtleTtcblxuICAgIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKTtcbiAgICB9XG4gICAgY29uc3Qgc2F2ZSA9IChkYXRhPVtdKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfTtcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge3NhdmUsIGdldCwgY2xlYXJ9O1xufTtcblxuZXhwb3J0IHtkYXRhU3RvcmFnZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlclVJIH0gZnJvbSAnLi9tb2R1bGVzL21haW4nO1xuXG5yZW5kZXJVSSgpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9