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
var category1 = 0x0001;
var category2 = 0x0002;
var circles = [];
var startFromX = 1002;
var startFromY = 200;
var gapY = 45;
var gapX = 37.5;
var plinkos = 13;
var ways = plinkos - 2;

for (var i = 0; i < plinkos; i++) {
  var item = Bodies.rectangle(775 + i * 38, 850, 70, 1, {
    isStatic: true,
    angle: Math.PI * 0.5
  });
  polygons.push(item);
} // polygons.push(
//   Bodies.rectangle(windowCenter, window.innerHeight, windowCenter, 1, {
//     isStatic: true,
//   })
// );
// plinkos


for (var _i = 0; _i < plinkos; _i++) {
  var startY = _i * gapY + startFromY;

  if (_i !== 0) {
    var startCountFromX = -_i / 2;

    for (var j = 0; j <= _i; j++) {
      var _item = Bodies.circle((startCountFromX + j) * gapX + startFromX, startY, 5, {
        isStatic: true,
        friction: 1,
        restitution: 1,
        density: 1,
        collisionFilter: {
          category: category1
        },
        rowIndex: _i,
        label: "plinko",
        render: {
          fillStyle: "white",
          lineWidth: 0
        }
      });

      circles.push(_item);
    }
  }
}

Composite.add(world, circles);
Composite.add(world, polygons); // Composite.add(world, stack);

var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2
  }
});

var handlePlink = function handlePlink() {
  var resWays = [];
  var result = 6;

  for (var _i2 = 0; _i2 < ways; _i2++) {
    resWays.push(_i2 < result ? "+" : "-");
  }

  Composite.add(world, Bodies.circle(1000, 200, 14, {
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
    var bodyA = pair.bodyA,
        bodyB = pair.bodyB;
    var ballBody = void 0,
        plinko = void 0;

    if (bodyA.label === "ball") {
      ballBody = bodyA;
    }

    if (bodyA.label === "plinko") {
      plinko = bodyA;
    }

    if (bodyB.label === "ball") {
      ballBody = bodyB;
    }

    if (bodyB.label === "plinko") {
      plinko = bodyB;
    }

    if (ballBody && plinko) {
      var angleAbsolute = plinko.position.y - (ballBody.position.y + ballBody.circleRadius) - 3;

      if (angleAbsolute >= 0) {
        var resWays = ballBody.resWays;
        var plinkoRow = plinko.rowIndex;

        if (resWays) {
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Body.setVelocity(ballBody, {
            x: resWays[plinkoRow - 2] === "+" ? 1.5 : -1.5,
            y: -2
          });
        }
      }

      plinko.render.fillStyle = "white";
    }
  }
});
Render.lookAt(render, Composite.allBodies(world));
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
/******/ 	__webpack_require__.h = () => ("e3513b8fe85c91f4ffe4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fda0035271e67f25fe4a.hot-update.js.map