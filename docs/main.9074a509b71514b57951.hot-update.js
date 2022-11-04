"use strict";
self["webpackHotUpdateweb_app"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var windowCenter = window.innerWidth / 2; // module aliases

var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),
    Render = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),
    Runner = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),
    Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),
    Events = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events),
    Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),
    Composite = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),
    Composites = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composites),
    MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint); // create an engine

var engine = Engine.create();
var world = engine.world; // create a renderer

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight - 10,
    wireframes: false
  }
});
world.gravity.y = 1.6; // run the renderer

Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);
var polygons = [];
var circles = [];
var category1 = 0x0001;
var category2 = 0x0002;
var gapY = 45;
var gapX = 37.5;
var polygonWidth = 37.5;
var plinkos = 13;
var ways = plinkos - 2;
var polygonsStartY = window.innerHeight - 100;
var plinkosStartY = polygonsStartY - 50 - plinkos * gapY; // plinkos

for (var i = 0; i < plinkos; i++) {
  if (i > 1) {
    var itemY = i * gapY + plinkosStartY;
    var startCountFromX = -i / 2;

    for (var j = 0; j <= i; j++) {
      var itemX = (startCountFromX + j) * gapX + windowCenter;
      var item = Bodies.circle(itemX, itemY, 5, {
        isStatic: true,
        friction: 1,
        restitution: 1,
        density: 1,
        collisionFilter: {
          category: category1
        },
        rowIndex: i,
        label: "plinko",
        render: {
          fillStyle: "white",
          lineWidth: 0
        }
      });
      circles.push(item);
    }
  }
} // polygons


for (var _i = 0; _i < plinkos; _i++) {
  var _itemX = _i * polygonWidth - polygonWidth * plinkos / 2 + polygonWidth / 2 + windowCenter;

  var _item = Bodies.rectangle(_itemX, polygonsStartY, 70, 5, {
    isStatic: true,
    angle: Math.PI * 0.5,
    render: {
      fillStyle: _i === Math.floor(plinkos / 2) ? "red" : "white"
    }
  });

  polygons.push(_item);
}

polygons.push(Bodies.rectangle(windowCenter, window.innerHeight, window.innerWidth, 1, {
  isStatic: true,
  label: "endLine"
}));
Composite.add(world, circles);
Composite.add(world, polygons); // Composite.add(world, stack);

var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2
  }
}); // setInterval(() => {
//   handlePlink();
// }, 100);

var handlePlink = function handlePlink() {
  var resWays = [];
  var result = 6;

  for (var _i2 = 0; _i2 < ways; _i2++) {
    resWays.push(_i2 < result ? "+" : "-");
  }

  Composite.add(world, Bodies.circle(windowCenter, plinkosStartY + 50, 14, {
    isStatic: false,
    type: "body",
    friction: 1,
    restitution: 0.8,
    density: 0.1,
    label: "ball",
    resWays: shuffle(resWays),
    collisionFilter: {
      mask: category1,
      category: category2
    },
    render: {
      fillStyle: "#13bccf",
      lineWidth: 0
    }
  }));
};

Events.on(mouseConstraint, "mousedown", handlePlink);
Events.on(engine, "collisionStart", function (event) {
  var pairs = event.pairs;
  var bodyA = pairs[0].bodyA;
  bodyA.render.fillStyle = "#13bccf";
});
Events.on(engine, "collisionActive", function (event) {
  var pairs = event.pairs;
  var bodyA = pairs[0].bodyA;
  bodyA.render.fillStyle = "#13bccf";
});
Events.on(engine, "collisionEnd", function (event) {
  var pairs = event.pairs;

  for (var _i3 = 0; _i3 < pairs.length; _i3++) {
    var pair = pairs[_i3];
    var bodies = {
      bodyA: _objectSpread({}, pair.bodyA),
      bodyB: _objectSpread({}, pair.bodyB)
    };
    var ballBody = void 0,
        plinkoBody = void 0;

    for (var _i4 = 0, _Object$entries = Object.entries(bodies); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      switch (value.label) {
        case "ball":
          ballBody = _objectSpread({}, value);
          break;

        case "plinko":
          plinkoBody = _objectSpread({}, value);
          break;

        default:
          break;
      }
    }

    if (ballBody && plinkoBody) {
      var angleAbsolute = plinkoBody.position.y - (ballBody.position.y + ballBody.circleRadius) - 4;

      if (angleAbsolute >= 0) {
        var resWays = ballBody.resWays;
        var plinkoRow = plinkoBody.rowIndex;

        if (resWays) {
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Body.setVelocity(ballBody, {
            x: resWays[plinkoRow - 2] === "+" ? 1 : -1,
            y: -2.8
          });
        }
      }

      plinkoBody.render.fillStyle = "white";
    }
  }
}); // Render.lookAt(render, Composite.allBodies(world));

Composite.add(world, mouseConstraint);
render.mouse = mouse;

function shuffle(array) {
  var currentIndex = array.length,
      randomIndex; // While there remain elements to shuffle.

  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; // And swap it with the current element.

    var _ref = [array[randomIndex], array[currentIndex]];
    array[currentIndex] = _ref[0];
    array[randomIndex] = _ref[1];
  }

  return array;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("59778cccec880b146967")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9074a509b71514b57951.hot-update.js.map