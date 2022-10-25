"use strict";
self["webpackHotUpdateweb_app"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/esm/pixi.mjs");
/* harmony import */ var pixi_spine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi-spine */ "./node_modules/pixi-spine/lib/all.es.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");



var app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application({
  autoResize: true,
  width: window.innerWidth,
  height: window.innerHeight - 5
});
document.body.appendChild(app.view);
var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
var background = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from("background.png");
app.loader.add("spineboy", "spineboy.json").load(onAssetsLoaded);
app.stage.addChild(background);
container.interactive = true;
container.buttonMode = true;

function onAssetsLoaded(loader, _ref) {
  var spineboy = _ref.spineboy;
  var spineBoy = new pixi_spine__WEBPACK_IMPORTED_MODULE_1__.Spine(spineboy.spineData);
  spineBoy.x = 100;
  spineBoy.y = app.screen.height;
  spineBoy.scale.set(0.8);
  container.addChild(spineBoy);
  app.stage.addChild(container);
  spineBoy.state.addListener({
    start: function start(entry) {
      console.log("animation is set at " + entry.trackIndex);
    },
    end: function end(entry) {
      var skeleton = spineBoy.skeleton;
      skeleton.setToSetupPose();
    }
  });
  var ticker = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Ticker.shared;
  ticker.autoStart = false;
  ticker.add(function (delta) {
    spineBoy.x = (spineBoy.x + delta * app.screen.width / 500) % (app.screen.width + 100);
  });
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  var isKeyDown = false;

  function onKeyDown(key) {
    if (isKeyDown) {
      return;
    }

    spineBoy.state.clearTracks();

    if (key.keyCode === 87 || key.keyCode === 38) {
      spineBoy.state.setAnimation(1, "jump", false);
    }

    if (key.keyCode === 68 || key.keyCode === 39) {
      ticker.start();
      spineBoy.state.addAnimation(0, "walk", true);
    }

    isKeyDown = true;
  }

  function onKeyUp(key) {
    if (key.keyCode === 65 || key.keyCode === 37) {
      spineBoy.state.clearTracks();
    }

    if (key.keyCode === 68 || key.keyCode === 39) {
      ticker.stop();
      spineBoy.state.clearTracks();
    }

    isKeyDown = false;
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f682340845726fa285b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6a99dc65f66605467eb1.hot-update.js.map