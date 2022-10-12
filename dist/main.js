/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/esm/pixi.mjs");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");\n/* harmony import */ var _assets_images_pineapple_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/pineapple.png */ "./src/assets/images/pineapple.png");\n/* harmony import */ var _assets_images_plum_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/plum.png */ "./src/assets/images/plum.png");\n/* harmony import */ var _assets_images_corn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/corn.png */ "./src/assets/images/corn.png");\n/* harmony import */ var _assets_images_fruit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/fruit.png */ "./src/assets/images/fruit.png");\n\n\n\n\n\n\nvar app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application({\n  width: window.innerWidth,\n  height: window.innerHeight,\n  backgroundColor: 0x1099bb,\n  resolution: window.devicePixelRatio || 1\n});\ndocument.body.appendChild(app.view);\napp.loader.add(_assets_images_pineapple_png__WEBPACK_IMPORTED_MODULE_2__, _assets_images_pineapple_png__WEBPACK_IMPORTED_MODULE_2__).add(_assets_images_plum_png__WEBPACK_IMPORTED_MODULE_3__, _assets_images_plum_png__WEBPACK_IMPORTED_MODULE_3__).add(_assets_images_corn_png__WEBPACK_IMPORTED_MODULE_4__, _assets_images_corn_png__WEBPACK_IMPORTED_MODULE_4__).add(_assets_images_fruit_png__WEBPACK_IMPORTED_MODULE_5__, _assets_images_fruit_png__WEBPACK_IMPORTED_MODULE_5__).load(onAssetsLoaded);\nvar REEL_WIDTH = 240;\nvar SYMBOL_SIZE = 240; // onAssetsLoaded handler builds the example.\n\nfunction onAssetsLoaded() {\n  // Create different slot symbols.\n  var slotTextures = [pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_assets_images_pineapple_png__WEBPACK_IMPORTED_MODULE_2__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_assets_images_plum_png__WEBPACK_IMPORTED_MODULE_3__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_assets_images_corn_png__WEBPACK_IMPORTED_MODULE_4__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_assets_images_fruit_png__WEBPACK_IMPORTED_MODULE_5__)];\n  var fruitTextStyle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TextStyle({\n    fontFamily: "Arial",\n    fontSize: 360,\n    fontWeight: "bold",\n    fill: ["#000000"],\n    align: "center"\n  }); // Build the reels\n\n  var reels = [];\n  var reelContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();\n\n  for (var i = 0; i < 5; i++) {\n    var rc = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();\n    rc.x = i * REEL_WIDTH;\n    reelContainer.addChild(rc);\n    var reel = {\n      container: rc,\n      symbols: [],\n      position: 0,\n      previousPosition: 0,\n      blur: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.filters.BlurFilter()\n    };\n    reel.blur.blurX = 0;\n    reel.blur.blurY = 0;\n    rc.filters = [reel.blur]; // Build the symbols\n\n    for (var j = 0; j < 4; j++) {\n      var symbol = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]); // Scale the symbol to fit symbol area.\n      //   symbol.y = j * SYMBOL_SIZE + 500;\n\n      symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);\n      symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);\n      reel.symbols.push(symbol); //   const playText = new PIXI.Text(`${i}-${j}`, fruitTextStyle);\n      //   symbol.addChild(playText);\n\n      rc.addChild(symbol);\n    }\n\n    reels.push(reel);\n  }\n\n  app.stage.addChild(reelContainer); // Build top & bottom covers and position reelContainer\n\n  var margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;\n  reelContainer.y = margin;\n  reelContainer.x = Math.round(app.screen.width / 2) - reelContainer.width / 2;\n  var top = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics();\n  top.beginFill(0, 1);\n  top.drawRect(0, 0, app.screen.width, margin);\n  var bottom = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics();\n  bottom.beginFill(0, 1);\n  bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin); // Add play text\n\n  var style = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TextStyle({\n    fontFamily: "Arial",\n    fontSize: 36,\n    fontStyle: "italic",\n    fontWeight: "bold",\n    fill: ["#ffffff", "#00ff99"],\n    // gradient\n    stroke: "#4a1850",\n    strokeThickness: 5,\n    dropShadow: true,\n    dropShadowColor: "#000000",\n    dropShadowBlur: 4,\n    dropShadowAngle: Math.PI / 6,\n    dropShadowDistance: 6,\n    wordWrap: true,\n    wordWrapWidth: 440\n  });\n  var playText = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text("Spin the wheels!", style);\n  playText.x = Math.round((bottom.width - playText.width) / 2);\n  playText.y = app.screen.height - margin + Math.round((margin - playText.height) / 2);\n  bottom.addChild(playText); // Add header text\n\n  var headerText = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text("PIXI FRUITS SLOTS!", style);\n  headerText.x = Math.round((top.width - headerText.width) / 2);\n  headerText.y = Math.round((margin - headerText.height) / 2);\n  top.addChild(headerText);\n  app.stage.addChild(top);\n  app.stage.addChild(bottom); // Set the interactivity.\n\n  bottom.interactive = true;\n  bottom.buttonMode = true;\n  bottom.addListener("pointerdown", function () {\n    startPlay();\n  });\n  var running = false; // Function to start playing.\n\n  function startPlay() {\n    if (running) return;\n    running = true;\n    console.log(reels, "reels");\n\n    for (var _i = 0; _i < reels.length; _i++) {\n      var r = reels[_i];\n      var extra = Math.floor(Math.random() * 3);\n      var target = r.position + 10 + (_i + 1) * 10 + extra;\n      var time = 2500 + _i * 600 + extra * 100;\n      tweenTo(r, "position", target, time, function (t) {\n        return t;\n      }, null, _i === reels.length - 1 ? reelsComplete : null);\n    }\n  } // Reels done handler.\n\n\n  function reelsComplete() {\n    running = false;\n  } // Listen for animate update.\n\n\n  app.ticker.add(function (delta) {\n    // Update the slots.\n    for (var _i2 = 0; _i2 < reels.length; _i2++) {\n      var r = reels[_i2]; // Update blur filter y amount based on speed.\n      // This would be better if calculated with time in mind also. Now blur depends on frame rate.\n\n      r.blur.blurY = (r.position - r.previousPosition) * 8;\n      r.previousPosition = r.position; // Update symbol positions on reel.\n\n      for (var _j = 0; _j < r.symbols.length; _j++) {\n        var s = r.symbols[_j];\n        var prevy = s.y;\n        s.y = (r.position + _j) % r.symbols.length * SYMBOL_SIZE - SYMBOL_SIZE;\n\n        if (s.y < 0 && prevy > SYMBOL_SIZE) {\n          // Detect going over and swap a texture.\n          // This should in proper product be determined from some logical reel.\n          s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];\n          s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);\n          s.x = Math.round((SYMBOL_SIZE - s.width) / 2);\n        }\n      }\n    }\n  });\n} // Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.\n\n\nvar tweening = [];\n\nfunction tweenTo(object, property, target, time, easing, onchange, oncomplete) {\n  var tween = {\n    object: object,\n    property: property,\n    propertyBeginValue: object[property],\n    target: target,\n    easing: easing,\n    time: time,\n    change: onchange,\n    complete: oncomplete,\n    start: Date.now()\n  };\n  tweening.push(tween);\n  return tween;\n} // Listen for animate update.\n\n\napp.ticker.add(function (delta) {\n  var now = Date.now();\n  var remove = [];\n\n  for (var i = 0; i < tweening.length; i++) {\n    var t = tweening[i];\n    var phase = Math.min(1, (now - t.start) / t.time);\n    t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));\n    if (t.change) t.change(t);\n\n    if (phase === 1) {\n      t.object[t.property] = t.target;\n      if (t.complete) t.complete(t);\n      remove.push(t);\n    }\n  }\n\n  for (var _i3 = 0; _i3 < remove.length; _i3++) {\n    tweening.splice(tweening.indexOf(remove[_i3]), 1);\n  }\n}); // Basic lerp funtion.\n\nfunction lerp(a1, a2, t) {\n  return a1 * (1 - t) + a2 * t;\n}\n\n//# sourceURL=webpack://web-app/./src/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\n  padding: 0;\\n  margin: 0;\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web-app/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./src/index.scss":
      /*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://web-app/./src/index.scss?'
        );

        /***/
      },

    /***/ "./src/assets/images/corn.png":
      /*!************************************!*\
  !*** ./src/assets/images/corn.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "625229f0df9b7dede941.png";\n\n//# sourceURL=webpack://web-app/./src/assets/images/corn.png?'
        );

        /***/
      },

    /***/ "./src/assets/images/fruit.png":
      /*!*************************************!*\
  !*** ./src/assets/images/fruit.png ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "421eddd6f39048c17368.png";\n\n//# sourceURL=webpack://web-app/./src/assets/images/fruit.png?'
        );

        /***/
      },

    /***/ "./src/assets/images/pineapple.png":
      /*!*****************************************!*\
  !*** ./src/assets/images/pineapple.png ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "7d05b6b2cd5114081911.png";\n\n//# sourceURL=webpack://web-app/./src/assets/images/pineapple.png?'
        );

        /***/
      },

    /***/ "./src/assets/images/plum.png":
      /*!************************************!*\
  !*** ./src/assets/images/plum.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "f5f2a671b06d07b2a593.png";\n\n//# sourceURL=webpack://web-app/./src/assets/images/plum.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ if (cachedModule.error !== undefined) throw cachedModule.error;
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ loaded: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ try {
      /******/ var execOptions = {
        id: moduleId,
        module: module,
        factory: __webpack_modules__[moduleId],
        require: __webpack_require__,
      };
      /******/ __webpack_require__.i.forEach(function (handler) {
        handler(execOptions);
      });
      /******/ module = execOptions.module;
      /******/ execOptions.factory.call(
        module.exports,
        module,
        module.exports,
        execOptions.require
      );
      /******/
    } catch (e) {
      /******/ module.error = e;
      /******/ throw e;
      /******/
    }
    /******/
    /******/ // Flag the module as loaded
    /******/ module.loaded = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = __webpack_module_cache__;
  /******/
  /******/ // expose the module execution interceptor
  /******/ __webpack_require__.i = [];
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get javascript update chunk filename */
  /******/ (() => {
    /******/ // This function allow to reference all chunks
    /******/ __webpack_require__.hu = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return (
        "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js"
      );
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get update manifest filename */
  /******/ (() => {
    /******/ __webpack_require__.hmrF = () =>
      "main." + __webpack_require__.h() + ".hot-update.json";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => "a7e8d7c406a469adfb02";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/load script */
  /******/ (() => {
    /******/ var inProgress = {};
    /******/ var dataWebpackPrefix = "web-app:";
    /******/ // loadScript function to load a script via script tag
    /******/ __webpack_require__.l = (url, done, key, chunkId) => {
      /******/ if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      /******/ var script, needAttach;
      /******/ if (key !== undefined) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ for (var i = 0; i < scripts.length; i++) {
          /******/ var s = scripts[i];
          /******/ if (
            s.getAttribute("src") == url ||
            s.getAttribute("data-webpack") == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
          /******/
        }
        /******/
      }
      /******/ if (!script) {
        /******/ needAttach = true;
        /******/ script = document.createElement("script");
        /******/
        /******/ script.charset = "utf-8";
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/ script.setAttribute("data-webpack", dataWebpackPrefix + key);
        /******/ script.src = url;
        /******/
      }
      /******/ inProgress[url] = [done];
      /******/ var onScriptComplete = (prev, event) => {
        /******/ // avoid mem leaks in IE.
        /******/ script.onerror = script.onload = null;
        /******/ clearTimeout(timeout);
        /******/ var doneFns = inProgress[url];
        /******/ delete inProgress[url];
        /******/ script.parentNode && script.parentNode.removeChild(script);
        /******/ doneFns && doneFns.forEach((fn) => fn(event));
        /******/ if (prev) return prev(event);
        /******/
      };
      /******/ /******/ var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, {
          type: "timeout",
          target: script,
        }),
        120000
      );
      /******/ script.onerror = onScriptComplete.bind(null, script.onerror);
      /******/ script.onload = onScriptComplete.bind(null, script.onload);
      /******/ needAttach && document.head.appendChild(script);
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/node module decorator */
  /******/ (() => {
    /******/ __webpack_require__.nmd = (module) => {
      /******/ module.paths = [];
      /******/ if (!module.children) module.children = [];
      /******/ return module;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hot module replacement */
  /******/ (() => {
    /******/ var currentModuleData = {};
    /******/ var installedModules = __webpack_require__.c;
    /******/
    /******/ // module and require creation
    /******/ var currentChildModule;
    /******/ var currentParents = [];
    /******/
    /******/ // status
    /******/ var registeredStatusHandlers = [];
    /******/ var currentStatus = "idle";
    /******/
    /******/ // while downloading
    /******/ var blockingPromises = 0;
    /******/ var blockingPromisesWaiting = [];
    /******/
    /******/ // The update info
    /******/ var currentUpdateApplyHandlers;
    /******/ var queuedInvalidatedModules;
    /******/
    /******/ // eslint-disable-next-line no-unused-vars
    /******/ __webpack_require__.hmrD = currentModuleData;
    /******/
    /******/ __webpack_require__.i.push(function (options) {
      /******/ var module = options.module;
      /******/ var require = createRequire(options.require, options.id);
      /******/ module.hot = createModuleHotObject(options.id, module);
      /******/ module.parents = currentParents;
      /******/ module.children = [];
      /******/ currentParents = [];
      /******/ options.require = require;
      /******/
    });
    /******/
    /******/ __webpack_require__.hmrC = {};
    /******/ __webpack_require__.hmrI = {};
    /******/
    /******/ function createRequire(require, moduleId) {
      /******/ var me = installedModules[moduleId];
      /******/ if (!me) return require;
      /******/ var fn = function (request) {
        /******/ if (me.hot.active) {
          /******/ if (installedModules[request]) {
            /******/ var parents = installedModules[request].parents;
            /******/ if (parents.indexOf(moduleId) === -1) {
              /******/ parents.push(moduleId);
              /******/
            }
            /******/
          } else {
            /******/ currentParents = [moduleId];
            /******/ currentChildModule = request;
            /******/
          }
          /******/ if (me.children.indexOf(request) === -1) {
            /******/ me.children.push(request);
            /******/
          }
          /******/
        } else {
          /******/ console.warn(
            /******/ "[HMR] unexpected require(" +
              /******/ request +
              /******/ ") from disposed module " +
              /******/ moduleId
            /******/
          );
          /******/ currentParents = [];
          /******/
        }
        /******/ return require(request);
        /******/
      };
      /******/ var createPropertyDescriptor = function (name) {
        /******/ return {
          /******/ configurable: true,
          /******/ enumerable: true,
          /******/ get: function () {
            /******/ return require[name];
            /******/
          },
          /******/ set: function (value) {
            /******/ require[name] = value;
            /******/
          },
          /******/
        };
        /******/
      };
      /******/ for (var name in require) {
        /******/ if (
          Object.prototype.hasOwnProperty.call(require, name) &&
          name !== "e"
        ) {
          /******/ Object.defineProperty(
            fn,
            name,
            createPropertyDescriptor(name)
          );
          /******/
        }
        /******/
      }
      /******/ fn.e = function (chunkId) {
        /******/ return trackBlockingPromise(require.e(chunkId));
        /******/
      };
      /******/ return fn;
      /******/
    }
    /******/
    /******/ function createModuleHotObject(moduleId, me) {
      /******/ var _main = currentChildModule !== moduleId;
      /******/ var hot = {
        /******/ // private stuff
        /******/ _acceptedDependencies: {},
        /******/ _acceptedErrorHandlers: {},
        /******/ _declinedDependencies: {},
        /******/ _selfAccepted: false,
        /******/ _selfDeclined: false,
        /******/ _selfInvalidated: false,
        /******/ _disposeHandlers: [],
        /******/ _main: _main,
        /******/ _requireSelf: function () {
          /******/ currentParents = me.parents.slice();
          /******/ currentChildModule = _main ? undefined : moduleId;
          /******/ __webpack_require__(moduleId);
          /******/
        },
        /******/
        /******/ // Module API
        /******/ active: true,
        /******/ accept: function (dep, callback, errorHandler) {
          /******/ if (dep === undefined) hot._selfAccepted = true;
          /******/ else if (typeof dep === "function") hot._selfAccepted = dep;
          /******/ else if (typeof dep === "object" && dep !== null) {
            /******/ for (var i = 0; i < dep.length; i++) {
              /******/ hot._acceptedDependencies[dep[i]] =
                callback || function () {};
              /******/ hot._acceptedErrorHandlers[dep[i]] = errorHandler;
              /******/
            }
            /******/
          } else {
            /******/ hot._acceptedDependencies[dep] =
              callback || function () {};
            /******/ hot._acceptedErrorHandlers[dep] = errorHandler;
            /******/
          }
          /******/
        },
        /******/ decline: function (dep) {
          /******/ if (dep === undefined) hot._selfDeclined = true;
          /******/ else if (typeof dep === "object" && dep !== null)
            /******/ for (var i = 0; i < dep.length; i++)
              /******/ hot._declinedDependencies[dep[i]] = true;
          /******/ else hot._declinedDependencies[dep] = true;
          /******/
        },
        /******/ dispose: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ addDisposeHandler: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ removeDisposeHandler: function (callback) {
          /******/ var idx = hot._disposeHandlers.indexOf(callback);
          /******/ if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
          /******/
        },
        /******/ invalidate: function () {
          /******/ this._selfInvalidated = true;
          /******/ switch (currentStatus) {
            /******/ case "idle":
              /******/ currentUpdateApplyHandlers = [];
              /******/ Object.keys(__webpack_require__.hmrI).forEach(function (
                key
              ) {
                /******/ __webpack_require__.hmrI[key](
                  /******/ moduleId,
                  /******/ currentUpdateApplyHandlers
                  /******/
                );
                /******/
              });
              /******/ setStatus("ready");
              /******/ break;
            /******/ case "ready":
              /******/ Object.keys(__webpack_require__.hmrI).forEach(function (
                key
              ) {
                /******/ __webpack_require__.hmrI[key](
                  /******/ moduleId,
                  /******/ currentUpdateApplyHandlers
                  /******/
                );
                /******/
              });
              /******/ break;
            /******/ case "prepare":
            /******/ case "check":
            /******/ case "dispose":
            /******/ case "apply":
              /******/ (queuedInvalidatedModules =
                queuedInvalidatedModules || []).push(
                /******/ moduleId
                /******/
              );
              /******/ break;
            /******/ default: // ignore requests in error states
              /******/ /******/ break;
            /******/
          }
          /******/
        },
        /******/
        /******/ // Management API
        /******/ check: hotCheck,
        /******/ apply: hotApply,
        /******/ status: function (l) {
          /******/ if (!l) return currentStatus;
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ addStatusHandler: function (l) {
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ removeStatusHandler: function (l) {
          /******/ var idx = registeredStatusHandlers.indexOf(l);
          /******/ if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
          /******/
        },
        /******/
        /******/ //inherit from previous dispose call
        /******/ data: currentModuleData[moduleId],
        /******/
      };
      /******/ currentChildModule = undefined;
      /******/ return hot;
      /******/
    }
    /******/
    /******/ function setStatus(newStatus) {
      /******/ currentStatus = newStatus;
      /******/ var results = [];
      /******/
      /******/ for (var i = 0; i < registeredStatusHandlers.length; i++)
        /******/ results[i] = registeredStatusHandlers[i].call(null, newStatus);
      /******/
      /******/ return Promise.all(results);
      /******/
    }
    /******/
    /******/ function unblock() {
      /******/ if (--blockingPromises === 0) {
        /******/ setStatus("ready").then(function () {
          /******/ if (blockingPromises === 0) {
            /******/ var list = blockingPromisesWaiting;
            /******/ blockingPromisesWaiting = [];
            /******/ for (var i = 0; i < list.length; i++) {
              /******/ list[i]();
              /******/
            }
            /******/
          }
          /******/
        });
        /******/
      }
      /******/
    }
    /******/
    /******/ function trackBlockingPromise(promise) {
      /******/ switch (currentStatus) {
        /******/ case "ready":
          /******/ setStatus("prepare");
        /******/ /* fallthrough */
        /******/ case "prepare":
          /******/ blockingPromises++;
          /******/ promise.then(unblock, unblock);
          /******/ return promise;
        /******/ default:
          /******/ return promise;
        /******/
      }
      /******/
    }
    /******/
    /******/ function waitForBlockingPromises(fn) {
      /******/ if (blockingPromises === 0) return fn();
      /******/ return new Promise(function (resolve) {
        /******/ blockingPromisesWaiting.push(function () {
          /******/ resolve(fn());
          /******/
        });
        /******/
      });
      /******/
    }
    /******/
    /******/ function hotCheck(applyOnUpdate) {
      /******/ if (currentStatus !== "idle") {
        /******/ throw new Error("check() is only allowed in idle status");
        /******/
      }
      /******/ return setStatus("check")
        /******/ .then(__webpack_require__.hmrM)
        /******/ .then(function (update) {
          /******/ if (!update) {
            /******/ return setStatus(
              applyInvalidatedModules() ? "ready" : "idle"
            ).then(
              /******/ function () {
                /******/ return null;
                /******/
              }
              /******/
            );
            /******/
          }
          /******/
          /******/ return setStatus("prepare").then(function () {
            /******/ var updatedModules = [];
            /******/ currentUpdateApplyHandlers = [];
            /******/
            /******/ return Promise.all(
              /******/ Object.keys(__webpack_require__.hmrC).reduce(
                function (
                  /******/ promises,
                  /******/ key
                  /******/
                ) {
                  /******/ __webpack_require__.hmrC[key](
                    /******/ update.c,
                    /******/ update.r,
                    /******/ update.m,
                    /******/ promises,
                    /******/ currentUpdateApplyHandlers,
                    /******/ updatedModules
                    /******/
                  );
                  /******/ return promises;
                  /******/
                },
                /******/ []
              )
              /******/
            ).then(function () {
              /******/ return waitForBlockingPromises(function () {
                /******/ if (applyOnUpdate) {
                  /******/ return internalApply(applyOnUpdate);
                  /******/
                } else {
                  /******/ return setStatus("ready").then(function () {
                    /******/ return updatedModules;
                    /******/
                  });
                  /******/
                }
                /******/
              });
              /******/
            });
            /******/
          });
          /******/
        });
      /******/
    }
    /******/
    /******/ function hotApply(options) {
      /******/ if (currentStatus !== "ready") {
        /******/ return Promise.resolve().then(function () {
          /******/ throw new Error(
            /******/ "apply() is only allowed in ready status (state: " +
              /******/ currentStatus +
              /******/ ")"
            /******/
          );
          /******/
        });
        /******/
      }
      /******/ return internalApply(options);
      /******/
    }
    /******/
    /******/ function internalApply(options) {
      /******/ options = options || {};
      /******/
      /******/ applyInvalidatedModules();
      /******/
      /******/ var results = currentUpdateApplyHandlers.map(function (handler) {
        /******/ return handler(options);
        /******/
      });
      /******/ currentUpdateApplyHandlers = undefined;
      /******/
      /******/ var errors = results
        /******/ .map(function (r) {
          /******/ return r.error;
          /******/
        })
        /******/ .filter(Boolean);
      /******/
      /******/ if (errors.length > 0) {
        /******/ return setStatus("abort").then(function () {
          /******/ throw errors[0];
          /******/
        });
        /******/
      }
      /******/
      /******/ // Now in "dispose" phase
      /******/ var disposePromise = setStatus("dispose");
      /******/
      /******/ results.forEach(function (result) {
        /******/ if (result.dispose) result.dispose();
        /******/
      });
      /******/
      /******/ // Now in "apply" phase
      /******/ var applyPromise = setStatus("apply");
      /******/
      /******/ var error;
      /******/ var reportError = function (err) {
        /******/ if (!error) error = err;
        /******/
      };
      /******/
      /******/ var outdatedModules = [];
      /******/ results.forEach(function (result) {
        /******/ if (result.apply) {
          /******/ var modules = result.apply(reportError);
          /******/ if (modules) {
            /******/ for (var i = 0; i < modules.length; i++) {
              /******/ outdatedModules.push(modules[i]);
              /******/
            }
            /******/
          }
          /******/
        }
        /******/
      });
      /******/
      /******/ return Promise.all([disposePromise, applyPromise]).then(
        function () {
          /******/ // handle errors in accept handlers and self accepted module load
          /******/ if (error) {
            /******/ return setStatus("fail").then(function () {
              /******/ throw error;
              /******/
            });
            /******/
          }
          /******/
          /******/ if (queuedInvalidatedModules) {
            /******/ return internalApply(options).then(function (list) {
              /******/ outdatedModules.forEach(function (moduleId) {
                /******/ if (list.indexOf(moduleId) < 0) list.push(moduleId);
                /******/
              });
              /******/ return list;
              /******/
            });
            /******/
          }
          /******/
          /******/ return setStatus("idle").then(function () {
            /******/ return outdatedModules;
            /******/
          });
          /******/
        }
      );
      /******/
    }
    /******/
    /******/ function applyInvalidatedModules() {
      /******/ if (queuedInvalidatedModules) {
        /******/ if (!currentUpdateApplyHandlers)
          currentUpdateApplyHandlers = [];
        /******/ Object.keys(__webpack_require__.hmrI).forEach(function (key) {
          /******/ queuedInvalidatedModules.forEach(function (moduleId) {
            /******/ __webpack_require__.hmrI[key](
              /******/ moduleId,
              /******/ currentUpdateApplyHandlers
              /******/
            );
            /******/
          });
          /******/
        });
        /******/ queuedInvalidatedModules = undefined;
        /******/ return true;
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ __webpack_require__.p = "";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = (__webpack_require__.hmrS_jsonp =
      __webpack_require__.hmrS_jsonp || {
        /******/ main: 0,
        /******/
      });
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ var currentUpdatedModulesList;
    /******/ var waitingUpdateResolves = {};
    /******/ function loadUpdateChunk(chunkId, updatedModulesList) {
      /******/ currentUpdatedModulesList = updatedModulesList;
      /******/ return new Promise((resolve, reject) => {
        /******/ waitingUpdateResolves[chunkId] = resolve;
        /******/ // start update chunk loading
        /******/ var url =
          __webpack_require__.p + __webpack_require__.hu(chunkId);
        /******/ // create error before stack unwound to get useful stacktrace later
        /******/ var error = new Error();
        /******/ var loadingEnded = (event) => {
          /******/ if (waitingUpdateResolves[chunkId]) {
            /******/ waitingUpdateResolves[chunkId] = undefined;
            /******/ var errorType =
              event && (event.type === "load" ? "missing" : event.type);
            /******/ var realSrc = event && event.target && event.target.src;
            /******/ error.message =
              "Loading hot update chunk " +
              chunkId +
              " failed.\n(" +
              errorType +
              ": " +
              realSrc +
              ")";
            /******/ error.name = "ChunkLoadError";
            /******/ error.type = errorType;
            /******/ error.request = realSrc;
            /******/ reject(error);
            /******/
          }
          /******/
        };
        /******/ __webpack_require__.l(url, loadingEnded);
        /******/
      });
      /******/
    }
    /******/
    /******/ self["webpackHotUpdateweb_app"] = (
      chunkId,
      moreModules,
      runtime
    ) => {
      /******/ for (var moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ currentUpdate[moduleId] = moreModules[moduleId];
          /******/ if (currentUpdatedModulesList)
            currentUpdatedModulesList.push(moduleId);
          /******/
        }
        /******/
      }
      /******/ if (runtime) currentUpdateRuntime.push(runtime);
      /******/ if (waitingUpdateResolves[chunkId]) {
        /******/ waitingUpdateResolves[chunkId]();
        /******/ waitingUpdateResolves[chunkId] = undefined;
        /******/
      }
      /******/
    };
    /******/
    /******/ var currentUpdateChunks;
    /******/ var currentUpdate;
    /******/ var currentUpdateRemovedChunks;
    /******/ var currentUpdateRuntime;
    /******/ function applyHandler(options) {
      /******/ if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
      /******/ currentUpdateChunks = undefined;
      /******/ function getAffectedModuleEffects(updateModuleId) {
        /******/ var outdatedModules = [updateModuleId];
        /******/ var outdatedDependencies = {};
        /******/
        /******/ var queue = outdatedModules.map(function (id) {
          /******/ return {
            /******/ chain: [id],
            /******/ id: id,
            /******/
          };
          /******/
        });
        /******/ while (queue.length > 0) {
          /******/ var queueItem = queue.pop();
          /******/ var moduleId = queueItem.id;
          /******/ var chain = queueItem.chain;
          /******/ var module = __webpack_require__.c[moduleId];
          /******/ if (
            /******/ !module ||
            /******/ (module.hot._selfAccepted && !module.hot._selfInvalidated)
            /******/
          )
            /******/ continue;
          /******/ if (module.hot._selfDeclined) {
            /******/ return {
              /******/ type: "self-declined",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ if (module.hot._main) {
            /******/ return {
              /******/ type: "unaccepted",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ for (var i = 0; i < module.parents.length; i++) {
            /******/ var parentId = module.parents[i];
            /******/ var parent = __webpack_require__.c[parentId];
            /******/ if (!parent) continue;
            /******/ if (parent.hot._declinedDependencies[moduleId]) {
              /******/ return {
                /******/ type: "declined",
                /******/ chain: chain.concat([parentId]),
                /******/ moduleId: moduleId,
                /******/ parentId: parentId,
                /******/
              };
              /******/
            }
            /******/ if (outdatedModules.indexOf(parentId) !== -1) continue;
            /******/ if (parent.hot._acceptedDependencies[moduleId]) {
              /******/ if (!outdatedDependencies[parentId])
                /******/ outdatedDependencies[parentId] = [];
              /******/ addAllToSet(outdatedDependencies[parentId], [moduleId]);
              /******/ continue;
              /******/
            }
            /******/ delete outdatedDependencies[parentId];
            /******/ outdatedModules.push(parentId);
            /******/ queue.push({
              /******/ chain: chain.concat([parentId]),
              /******/ id: parentId,
              /******/
            });
            /******/
          }
          /******/
        }
        /******/
        /******/ return {
          /******/ type: "accepted",
          /******/ moduleId: updateModuleId,
          /******/ outdatedModules: outdatedModules,
          /******/ outdatedDependencies: outdatedDependencies,
          /******/
        };
        /******/
      }
      /******/
      /******/ function addAllToSet(a, b) {
        /******/ for (var i = 0; i < b.length; i++) {
          /******/ var item = b[i];
          /******/ if (a.indexOf(item) === -1) a.push(item);
          /******/
        }
        /******/
      }
      /******/
      /******/ // at begin all updates modules are outdated
      /******/ // the "outdated" status can propagate to parents if they don't accept the children
      /******/ var outdatedDependencies = {};
      /******/ var outdatedModules = [];
      /******/ var appliedUpdate = {};
      /******/
      /******/ var warnUnexpectedRequire = function warnUnexpectedRequire(
        module
      ) {
        /******/ console.warn(
          /******/ "[HMR] unexpected require(" +
            module.id +
            ") to disposed module"
          /******/
        );
        /******/
      };
      /******/
      /******/ for (var moduleId in currentUpdate) {
        /******/ if (__webpack_require__.o(currentUpdate, moduleId)) {
          /******/ var newModuleFactory = currentUpdate[moduleId];
          /******/ /** @type {TODO} */
          /******/ var result;
          /******/ if (newModuleFactory) {
            /******/ result = getAffectedModuleEffects(moduleId);
            /******/
          } else {
            /******/ result = {
              /******/ type: "disposed",
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ /** @type {Error|false} */
          /******/ var abortError = false;
          /******/ var doApply = false;
          /******/ var doDispose = false;
          /******/ var chainInfo = "";
          /******/ if (result.chain) {
            /******/ chainInfo =
              "\nUpdate propagation: " + result.chain.join(" -> ");
            /******/
          }
          /******/ switch (result.type) {
            /******/ case "self-declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of self decline: " +
                    /******/ result.moduleId +
                    /******/ chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of declined dependency: " +
                    /******/ result.moduleId +
                    /******/ " in " +
                    /******/ result.parentId +
                    /******/ chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "unaccepted":
              /******/ if (options.onUnaccepted) options.onUnaccepted(result);
              /******/ if (!options.ignoreUnaccepted)
                /******/ abortError = new Error(
                  /******/ "Aborted because " +
                    moduleId +
                    " is not accepted" +
                    chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "accepted":
              /******/ if (options.onAccepted) options.onAccepted(result);
              /******/ doApply = true;
              /******/ break;
            /******/ case "disposed":
              /******/ if (options.onDisposed) options.onDisposed(result);
              /******/ doDispose = true;
              /******/ break;
            /******/ default:
              /******/ throw new Error("Unexception type " + result.type);
            /******/
          }
          /******/ if (abortError) {
            /******/ return {
              /******/ error: abortError,
              /******/
            };
            /******/
          }
          /******/ if (doApply) {
            /******/ appliedUpdate[moduleId] = newModuleFactory;
            /******/ addAllToSet(outdatedModules, result.outdatedModules);
            /******/ for (moduleId in result.outdatedDependencies) {
              /******/ if (
                __webpack_require__.o(result.outdatedDependencies, moduleId)
              ) {
                /******/ if (!outdatedDependencies[moduleId])
                  /******/ outdatedDependencies[moduleId] = [];
                /******/ addAllToSet(
                  /******/ outdatedDependencies[moduleId],
                  /******/ result.outdatedDependencies[moduleId]
                  /******/
                );
                /******/
              }
              /******/
            }
            /******/
          }
          /******/ if (doDispose) {
            /******/ addAllToSet(outdatedModules, [result.moduleId]);
            /******/ appliedUpdate[moduleId] = warnUnexpectedRequire;
            /******/
          }
          /******/
        }
        /******/
      }
      /******/ currentUpdate = undefined;
      /******/
      /******/ // Store self accepted outdated modules to require them later by the module system
      /******/ var outdatedSelfAcceptedModules = [];
      /******/ for (var j = 0; j < outdatedModules.length; j++) {
        /******/ var outdatedModuleId = outdatedModules[j];
        /******/ var module = __webpack_require__.c[outdatedModuleId];
        /******/ if (
          /******/ module &&
          /******/ (module.hot._selfAccepted || module.hot._main) &&
          /******/ // removed self-accepted modules should not be required
          /******/ appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
          /******/ // when called invalidate self-accepting is not possible
          /******/ !module.hot._selfInvalidated
          /******/
        ) {
          /******/ outdatedSelfAcceptedModules.push({
            /******/ module: outdatedModuleId,
            /******/ require: module.hot._requireSelf,
            /******/ errorHandler: module.hot._selfAccepted,
            /******/
          });
          /******/
        }
        /******/
      }
      /******/
      /******/ var moduleOutdatedDependencies;
      /******/
      /******/ return {
        /******/ dispose: function () {
          /******/ currentUpdateRemovedChunks.forEach(function (chunkId) {
            /******/ delete installedChunks[chunkId];
            /******/
          });
          /******/ currentUpdateRemovedChunks = undefined;
          /******/
          /******/ var idx;
          /******/ var queue = outdatedModules.slice();
          /******/ while (queue.length > 0) {
            /******/ var moduleId = queue.pop();
            /******/ var module = __webpack_require__.c[moduleId];
            /******/ if (!module) continue;
            /******/
            /******/ var data = {};
            /******/
            /******/ // Call dispose handlers
            /******/ var disposeHandlers = module.hot._disposeHandlers;
            /******/ for (j = 0; j < disposeHandlers.length; j++) {
              /******/ disposeHandlers[j].call(null, data);
              /******/
            }
            /******/ __webpack_require__.hmrD[moduleId] = data;
            /******/
            /******/ // disable module (this disables requires from this module)
            /******/ module.hot.active = false;
            /******/
            /******/ // remove module from cache
            /******/ delete __webpack_require__.c[moduleId];
            /******/
            /******/ // when disposing there is no need to call dispose handler
            /******/ delete outdatedDependencies[moduleId];
            /******/
            /******/ // remove "parents" references from all children
            /******/ for (j = 0; j < module.children.length; j++) {
              /******/ var child = __webpack_require__.c[module.children[j]];
              /******/ if (!child) continue;
              /******/ idx = child.parents.indexOf(moduleId);
              /******/ if (idx >= 0) {
                /******/ child.parents.splice(idx, 1);
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // remove outdated dependency from module children
          /******/ var dependency;
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ for (
                  j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ dependency = moduleOutdatedDependencies[j];
                  /******/ idx = module.children.indexOf(dependency);
                  /******/ if (idx >= 0) module.children.splice(idx, 1);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
        },
        /******/ apply: function (reportError) {
          /******/ // insert new code
          /******/ for (var updateModuleId in appliedUpdate) {
            /******/ if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
              /******/ __webpack_require__.m[updateModuleId] =
                appliedUpdate[updateModuleId];
              /******/
            }
            /******/
          }
          /******/
          /******/ // run new runtime modules
          /******/ for (var i = 0; i < currentUpdateRuntime.length; i++) {
            /******/ currentUpdateRuntime[i](__webpack_require__);
            /******/
          }
          /******/
          /******/ // call accept handlers
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ var module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ var callbacks = [];
                /******/ var errorHandlers = [];
                /******/ var dependenciesForCallbacks = [];
                /******/ for (
                  var j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ var dependency = moduleOutdatedDependencies[j];
                  /******/ var acceptCallback =
                    /******/ module.hot._acceptedDependencies[dependency];
                  /******/ var errorHandler =
                    /******/ module.hot._acceptedErrorHandlers[dependency];
                  /******/ if (acceptCallback) {
                    /******/ if (callbacks.indexOf(acceptCallback) !== -1)
                      continue;
                    /******/ callbacks.push(acceptCallback);
                    /******/ errorHandlers.push(errorHandler);
                    /******/ dependenciesForCallbacks.push(dependency);
                    /******/
                  }
                  /******/
                }
                /******/ for (var k = 0; k < callbacks.length; k++) {
                  /******/ try {
                    /******/ callbacks[k].call(
                      null,
                      moduleOutdatedDependencies
                    );
                    /******/
                  } catch (err) {
                    /******/ if (typeof errorHandlers[k] === "function") {
                      /******/ try {
                        /******/ errorHandlers[k](err, {
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/
                        });
                        /******/
                      } catch (err2) {
                        /******/ if (options.onErrored) {
                          /******/ options.onErrored({
                            /******/ type: "accept-error-handler-errored",
                            /******/ moduleId: outdatedModuleId,
                            /******/ dependencyId: dependenciesForCallbacks[k],
                            /******/ error: err2,
                            /******/ originalError: err,
                            /******/
                          });
                          /******/
                        }
                        /******/ if (!options.ignoreErrored) {
                          /******/ reportError(err2);
                          /******/ reportError(err);
                          /******/
                        }
                        /******/
                      }
                      /******/
                    } else {
                      /******/ if (options.onErrored) {
                        /******/ options.onErrored({
                          /******/ type: "accept-errored",
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/ error: err,
                          /******/
                        });
                        /******/
                      }
                      /******/ if (!options.ignoreErrored) {
                        /******/ reportError(err);
                        /******/
                      }
                      /******/
                    }
                    /******/
                  }
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // Load self accepted modules
          /******/ for (
            var o = 0;
            o < outdatedSelfAcceptedModules.length;
            o++
          ) {
            /******/ var item = outdatedSelfAcceptedModules[o];
            /******/ var moduleId = item.module;
            /******/ try {
              /******/ item.require(moduleId);
              /******/
            } catch (err) {
              /******/ if (typeof item.errorHandler === "function") {
                /******/ try {
                  /******/ item.errorHandler(err, {
                    /******/ moduleId: moduleId,
                    /******/ module: __webpack_require__.c[moduleId],
                    /******/
                  });
                  /******/
                } catch (err2) {
                  /******/ if (options.onErrored) {
                    /******/ options.onErrored({
                      /******/ type: "self-accept-error-handler-errored",
                      /******/ moduleId: moduleId,
                      /******/ error: err2,
                      /******/ originalError: err,
                      /******/
                    });
                    /******/
                  }
                  /******/ if (!options.ignoreErrored) {
                    /******/ reportError(err2);
                    /******/ reportError(err);
                    /******/
                  }
                  /******/
                }
                /******/
              } else {
                /******/ if (options.onErrored) {
                  /******/ options.onErrored({
                    /******/ type: "self-accept-errored",
                    /******/ moduleId: moduleId,
                    /******/ error: err,
                    /******/
                  });
                  /******/
                }
                /******/ if (!options.ignoreErrored) {
                  /******/ reportError(err);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ return outdatedModules;
          /******/
        },
        /******/
      };
      /******/
    }
    /******/ __webpack_require__.hmrI.jsonp = function (
      moduleId,
      applyHandlers
    ) {
      /******/ if (!currentUpdate) {
        /******/ currentUpdate = {};
        /******/ currentUpdateRuntime = [];
        /******/ currentUpdateRemovedChunks = [];
        /******/ applyHandlers.push(applyHandler);
        /******/
      }
      /******/ if (!__webpack_require__.o(currentUpdate, moduleId)) {
        /******/ currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        /******/
      }
      /******/
    };
    /******/ __webpack_require__.hmrC.jsonp = function (
      /******/ chunkIds,
      /******/ removedChunks,
      /******/ removedModules,
      /******/ promises,
      /******/ applyHandlers,
      /******/ updatedModulesList
      /******/
    ) {
      /******/ applyHandlers.push(applyHandler);
      /******/ currentUpdateChunks = {};
      /******/ currentUpdateRemovedChunks = removedChunks;
      /******/ currentUpdate = removedModules.reduce(function (obj, key) {
        /******/ obj[key] = false;
        /******/ return obj;
        /******/
      }, {});
      /******/ currentUpdateRuntime = [];
      /******/ chunkIds.forEach(function (chunkId) {
        /******/ if (
          /******/ __webpack_require__.o(installedChunks, chunkId) &&
          /******/ installedChunks[chunkId] !== undefined
          /******/
        ) {
          /******/ promises.push(loadUpdateChunk(chunkId, updatedModulesList));
          /******/ currentUpdateChunks[chunkId] = true;
          /******/
        } else {
          /******/ currentUpdateChunks[chunkId] = false;
          /******/
        }
        /******/
      });
      /******/ if (__webpack_require__.f) {
        /******/ __webpack_require__.f.jsonpHmr = function (chunkId, promises) {
          /******/ if (
            /******/ currentUpdateChunks &&
            /******/ __webpack_require__.o(currentUpdateChunks, chunkId) &&
            /******/ !currentUpdateChunks[chunkId]
            /******/
          ) {
            /******/ promises.push(loadUpdateChunk(chunkId));
            /******/ currentUpdateChunks[chunkId] = true;
            /******/
          }
          /******/
        };
        /******/
      }
      /******/
    };
    /******/
    /******/ __webpack_require__.hmrM = () => {
      /******/ if (typeof fetch === "undefined")
        throw new Error("No browser support: need fetch API");
      /******/ return fetch(
        __webpack_require__.p + __webpack_require__.hmrF()
      ).then((response) => {
        /******/ if (response.status === 404) return; // no update available
        /******/ if (!response.ok)
          throw new Error(
            "Failed to fetch update manifest " + response.statusText
          );
        /******/ return response.json();
        /******/
      });
      /******/
    };
    /******/
    /******/ __webpack_require__.O.j = (chunkId) =>
      installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self["webpackChunkweb_app"] =
      self["webpackChunkweb_app"] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // module cache are used so entry inlining is disabled
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ __webpack_require__.O(
    undefined,
    [
      "vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-98b78c",
    ],
    () =>
      __webpack_require__(
        "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=1300&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"
      )
  );
  /******/ __webpack_require__.O(
    undefined,
    [
      "vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-98b78c",
    ],
    () => __webpack_require__("./node_modules/webpack/hot/dev-server.js")
  );
  /******/ var __webpack_exports__ = __webpack_require__.O(
    undefined,
    [
      "vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-98b78c",
    ],
    () => __webpack_require__("./src/index.js")
  );
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
