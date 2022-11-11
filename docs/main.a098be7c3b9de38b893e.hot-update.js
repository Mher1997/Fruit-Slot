"use strict";
self["webpackHotUpdateweb_app"]("main",{

/***/ "./src/core/EventsListeners.js":
/*!*************************************!*\
  !*** ./src/core/EventsListeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppInit */ "./src/core/AppInit.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var EventsListeners = /*#__PURE__*/function (_AppInit) {
  _inherits(EventsListeners, _AppInit);

  var _super = _createSuper(EventsListeners);

  function EventsListeners() {
    var _this;

    _classCallCheck(this, EventsListeners);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "getBodyGraphic", function (body, key) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          app = _assertThisInitialize.app;

      var bodyValue = body[key];
      var graphic = app.stage.children.find(function (item) {
        return item[key] === bodyValue;
      });
      return {
        body: body,
        graphic: graphic
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleCollisionBall", function (ballBody, plinkoBody) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          Body = _assertThisInitialize2.Body;

      var angleAbsolute = plinkoBody.position.y - (ballBody.position.y + ballBody.circleRadius) - 4;

      if (angleAbsolute >= 0) {
        var resWays = ballBody.resWays;
        var plinkoRow = plinkoBody.rowIndex;

        if (resWays) {
          Body.setVelocity(ballBody, {
            x: resWays[plinkoRow - 2] === "+" ? 1 : -1,
            y: -2.8
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "textResultAnimate", function (graphic) {
      graphic.isActiveAnimation = true;
      var yPos = graphic.position.y;
      var tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__["default"].Tween({
        x: graphic.position.x,
        y: yPos
      });
      tween.easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__["default"].Easing.Bounce.Out);
      tween.to({
        y: [yPos + 10, yPos]
      }, 500).start();
      tween.onUpdate(function (_ref) {
        var x = _ref.x,
            y = _ref.y;
        graphic.position.y = y;
      });
      tween.onComplete(function () {
        graphic.isActiveAnimation = false;
      });
    });

    _this.app.ticker.add(function () {
      _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    });

    return _this;
  }

  _createClass(EventsListeners, [{
    key: "init",
    value: function init() {
      var Events = this.Events,
          World = this.World,
          world = this.world,
          engine = this.engine,
          app = this.app,
          getBodyGraphic = this.getBodyGraphic,
          textResultAnimate = this.textResultAnimate,
          handleCollisionBall = this.handleCollisionBall;
      Events.on(engine, "collisionStart", function (event) {
        var pairs = event.pairs;

        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];
          var bodies = {
            bodyA: _objectSpread({}, pair.bodyA),
            bodyB: _objectSpread({}, pair.bodyB)
          };

          for (var _i = 0, _Object$entries = Object.entries(bodies); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (value.label === "plinko") {
              value.render.fillStyle = "red";
            }
          }
        }
      });
      Events.on(engine, "collisionActive", function (event) {
        var pairs = event.pairs;

        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];
          var bodies = {
            bodyA: _objectSpread({}, pair.bodyA),
            bodyB: _objectSpread({}, pair.bodyB)
          };

          for (var _i2 = 0, _Object$entries2 = Object.entries(bodies); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];

            if (value.label === "plinko") {
              value.render.fillStyle = "red";
            }
          }
        }
      });
      Events.on(engine, "collisionEnd", function (event) {
        var pairs = event.pairs;

        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];
          var bodies = {
            bodyA: _objectSpread({}, pair.bodyA),
            bodyB: _objectSpread({}, pair.bodyB)
          };
          var ballBody = void 0,
              plinkoBody = void 0;

          for (var _i3 = 0, _Object$entries3 = Object.entries(bodies); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                key = _Object$entries3$_i[0],
                value = _Object$entries3$_i[1];

            var secondValue = pair[key === "bodyA" ? "bodyB" : "bodyA"];

            switch (value.label) {
              case "ball":
                ballBody = _objectSpread({}, value);
                break;

              case "plinko":
                plinkoBody = _objectSpread({}, value);
                break;

              case "endLine":
                {
                  var _getBodyGraphic = getBodyGraphic(secondValue, "graphicKey"),
                      body = _getBodyGraphic.body,
                      _graphic = _getBodyGraphic.graphic;

                  app.stage.removeChild(_graphic);
                  World.remove(world, body);
                  break;
                }

              case "separate":
                var _getBodyGraphic2 = getBodyGraphic(value, "id"),
                    graphic = _getBodyGraphic2.graphic;

                var isActiveAnimation = graphic.isActiveAnimation;

                if (!isActiveAnimation) {
                  textResultAnimate(graphic);
                }

                break;

              default:
                break;
            }
          }

          if (ballBody && plinkoBody) {
            handleCollisionBall(ballBody, plinkoBody);
          }
        }
      });
    }
  }]);

  return EventsListeners;
}(_AppInit__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsListeners);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("837ed3b7b186a3b60bc1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a098be7c3b9de38b893e.hot-update.js.map