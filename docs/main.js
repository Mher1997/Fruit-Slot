/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BULLET_ROAD_SIZE": () => (/* binding */ BULLET_ROAD_SIZE),
/* harmony export */   "BULLET_SPEED_IN_SECOND": () => (/* binding */ BULLET_SPEED_IN_SECOND),
/* harmony export */   "P1_BULLET_FIRE_KEY_CODE": () => (/* binding */ P1_BULLET_FIRE_KEY_CODE),
/* harmony export */   "P1_DOWN_KEY_CODE": () => (/* binding */ P1_DOWN_KEY_CODE),
/* harmony export */   "P1_P2_LEFT_KEY_CODE": () => (/* binding */ P1_P2_LEFT_KEY_CODE),
/* harmony export */   "P1_RIGHT_KEY_CODE": () => (/* binding */ P1_RIGHT_KEY_CODE),
/* harmony export */   "P1_ROTATE_P2_LEFT_KEY_CODE": () => (/* binding */ P1_ROTATE_P2_LEFT_KEY_CODE),
/* harmony export */   "P1_ROTATE_RIGHT_KEY_CODE": () => (/* binding */ P1_ROTATE_RIGHT_KEY_CODE),
/* harmony export */   "P1_UP_KEY_CODE": () => (/* binding */ P1_UP_KEY_CODE),
/* harmony export */   "P2_BULLET_FIRE_KEY_CODE": () => (/* binding */ P2_BULLET_FIRE_KEY_CODE),
/* harmony export */   "P2_DOWN_KEY_CODE": () => (/* binding */ P2_DOWN_KEY_CODE),
/* harmony export */   "P2_LEFT_KEY_CODE": () => (/* binding */ P2_LEFT_KEY_CODE),
/* harmony export */   "P2_RIGHT_KEY_CODE": () => (/* binding */ P2_RIGHT_KEY_CODE),
/* harmony export */   "P2_ROTATE_P2_LEFT_KEY_CODE": () => (/* binding */ P2_ROTATE_P2_LEFT_KEY_CODE),
/* harmony export */   "P2_ROTATE_RIGHT_KEY_CODE": () => (/* binding */ P2_ROTATE_RIGHT_KEY_CODE),
/* harmony export */   "P2_UP_KEY_CODE": () => (/* binding */ P2_UP_KEY_CODE),
/* harmony export */   "WINDOW_MAX_HEIGHT": () => (/* binding */ WINDOW_MAX_HEIGHT),
/* harmony export */   "WINDOW_MAX_WIDTH": () => (/* binding */ WINDOW_MAX_WIDTH)
/* harmony export */ });
var BULLET_SPEED_IN_SECOND = 600;
var BULLET_ROAD_SIZE = 50;
var WINDOW_MAX_WIDTH = window.innerWidth - 19;
var WINDOW_MAX_HEIGHT = window.innerHeight - 19; // player 1

var P1_UP_KEY_CODE = 87;
var P1_RIGHT_KEY_CODE = 68;
var P1_DOWN_KEY_CODE = 83;
var P1_P2_LEFT_KEY_CODE = 65;
var P1_ROTATE_P2_LEFT_KEY_CODE = 70;
var P1_ROTATE_RIGHT_KEY_CODE = 72;
var P1_BULLET_FIRE_KEY_CODE = 71; // player 2

var P2_LEFT_KEY_CODE = 37;
var P2_UP_KEY_CODE = 38;
var P2_RIGHT_KEY_CODE = 39;
var P2_DOWN_KEY_CODE = 40;
var P2_ROTATE_RIGHT_KEY_CODE = 54;
var P2_ROTATE_P2_LEFT_KEY_CODE = 52;
var P2_BULLET_FIRE_KEY_CODE = 53;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/esm/pixi.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



connectPixiExtension();
var app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application({
  width: _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH,
  height: _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT,
  antialias: true
});
var moveKeys = {};
var bullet;
var start;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var explosionTextures = [];
var player1 = {
  scoreText: "",
  score: 0,
  jet: null,
  bullet: null,
  bullets: [],
  bulletRoad: null
};
var player2 = {
  scoreText: "",
  score: 0,
  jet: null,
  bullet: null,
  bullets: [],
  bulletRoad: null
};
var rules;
app.loader.add('jet', "sample.png");
app.loader.add('bullet', "bullet.png");
app.loader.add('start', "start.jpeg");
app.loader.add('enemy1', "enemy1.png");
app.loader.add('explosion', "mc.json");
app.loader.onProgress.add(onProgress);
app.loader.load(function (loader, resources) {
  player1.jet = {
    tint: 0.03 * 0xFFFFFF,
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.jet.texture),
    x: app.view.width / 4,
    y: app.view.height / 2 + 200,
    scaleX: 0.5,
    scaleY: 0.5
  };
  player2.jet = {
    tint: 0.7 * 0xFFFFFF,
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.jet.texture),
    x: app.view.width * 3 / 4,
    y: app.view.height / 2 + 200,
    scaleX: 0.5,
    scaleY: 0.5
  };
  bullet = resources.bullet.texture;
  start = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.start.texture);
  enemy1 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (-10 - 300) - 300,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: 1
  };
  enemy2 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (-10 - 300) - 300,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: 1
  };
  enemy3 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (-10 - 300) - 300,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: 1
  };
  enemy4 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (-10 - 300) - 300,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: 1
  };
  enemy5 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (_constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH + 300 - _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH) + _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: -1
  };
  enemy6 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (_constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH + 300 - _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH) + _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: -1
  };
  enemy7 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (_constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH + 300 - _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH) + _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: -1
  };
  enemy8 = {
    img: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(resources.enemy1.texture),
    x: Math.random() * (_constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH + 300 - _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH) + _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH,
    y: Math.random() * (290 - 50) + 50,
    scaleX: 0.1,
    scaleY: 0.1,
    direction: -1
  };
  handleExplosionSpriteData();
  init();
});

function init() {
  showRules();
  createStartButton();
}

function createStartButton() {
  start.anchor.set(0.5);
  start.interactive = true;
  start.cursor = 'pointer';
  start.on("pointerdown", function () {
    app.stage.removeChild(rules);
    app.stage.removeChild(start);
    startGame();
  });
  start.scale.x = 0.2;
  start.scale.y = 0.2;
  start.x = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH / 2;
  start.y = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT / 2 + rules.height;
  app.stage.addChild(start);
}

function showRules() {
  var style = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'],
    // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 2000,
    lineJoin: 'round'
  });
  rules = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text('               Player 1                                                                              Player 2\n' + '1. To move jet use A, W, S, D buttons                          1. To move jet use arrow buttons \n' + '2. To fire use G button                                                   2. To fire use 5 button \n' + '3. To rotate jet use F and H buttons                             3. To rotate jet use 4 and 6 buttons \n' + '                           \n                                  4. !ATTENTION!!!  THE GAME IS ENDLESS', style);
  rules.anchor.set(0.5);
  rules.x = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH / 2;
  rules.y = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT / 2;
  app.stage.addChild(rules);
}

function handleExplosionSpriteData() {
  for (var i = 0; i < 26; ++i) {
    var texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from("Explosion_Sequence_A ".concat(i + 1, ".png"));
    explosionTextures.push(texture);
  }
}

function playExplosion(x, y) {
  var explosion = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.AnimatedSprite(explosionTextures);
  explosion.x = x;
  explosion.y = y;
  explosion.anchor.set(0.5);
  explosion.rotation = Math.random() * Math.PI;
  explosion.scale.set(0.18 + Math.random() * 0.5);
  explosion.gotoAndPlay(1);

  explosion.onComplete = function () {
    app.stage.removeChild(explosion);
  };

  explosion.loop = false;
  app.stage.addChild(explosion);
}

function onProgress(e) {
  console.log(">>>>>>>  loading  ", e.progress);
}

function startGame() {
  createPlayer(player1);
  createPlayer(player2, true);
  [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8].forEach(function (i) {
    return createEnemy(i);
  });
  addListeners();
  app.ticker.add(removeOutOfScreenBullets);
  app.ticker.add(keepEnemiesInScreen);
  app.ticker.add(player1Movement);
  app.ticker.add(player2Movement);
  app.ticker.add(function () {
    return checkCollisions(player1);
  });
  app.ticker.add(function () {
    return checkCollisions(player2);
  });
}

function createPlayer(player, isPlayer2) {
  var _player$jet = player.jet,
      img = _player$jet.img,
      x = _player$jet.x,
      y = _player$jet.y,
      scaleX = _player$jet.scaleX,
      scaleY = _player$jet.scaleY,
      tint = _player$jet.tint;
  img.x = x;
  img.y = y;
  img.scale.x = scaleX;
  img.scale.y = scaleY;
  img.tint = tint;
  img.visible = true;
  img.anchor.set(0.5);
  createBulletGrafRoad(player, x, y);
  createScoreContainer(player, isPlayer2);
  app.stage.addChild(img);
}

function createBulletGrafRoad(player, x, y) {
  player.bulletRoad = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics();
  player.bulletRoad.lineStyle(0.3);
  player.bulletRoad.x = x;
  player.bulletRoad.y = y;
  player.bulletRoad.lineTo(0, _constants__WEBPACK_IMPORTED_MODULE_1__.BULLET_ROAD_SIZE * -1);
  player.bulletRoad.endFill();
  app.stage.addChild(player.bulletRoad);
}

function createEnemy(el) {
  var img = el.img,
      x = el.x,
      y = el.y,
      scaleX = el.scaleX,
      scaleY = el.scaleY;
  img.x = x;
  img.y = y;
  img.scale.x = scaleX;
  img.scale.y = scaleY;
  img.visible = true;
  img.anchor.set(0);
  app.stage.addChild(img);
}

function createScoreContainer(player, isPlayer2) {
  var style = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'],
    // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round'
  });
  player.scoreText = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text("P".concat(isPlayer2 ? 2 : 1, "Score: "), style);
  player.scoreText.x = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH - player.scoreText.width - 80;

  if (isPlayer2) {
    player.scoreText.y = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT - player.scoreText.height - 50;
  } else {
    player.scoreText.y = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT - player.scoreText.height - 100;
  }

  player.score = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text(player.score, style);
  player.score.x = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH - player.score.width - 50;

  if (isPlayer2) {
    player.score.y = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT - player.scoreText.height - 50;
  } else {
    player.score.y = _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT - player.scoreText.height - 100;
  }

  app.stage.addChild(player.scoreText);
  app.stage.addChild(player.score);
}

function addListeners() {
  // keyboard events
  window.addEventListener("keydown", keyDownHandler);
  window.addEventListener("keyup", keyUpHandler);
}

function fireBullet(player) {
  var newBullet = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(bullet);
  newBullet.anchor.set(0.5);
  newBullet.x = player.bulletRoad.x;
  newBullet.y = player.bulletRoad.y;
  newBullet.scale.x = 0.01;
  newBullet.scale.y = 0.01;
  var vert = player.bulletRoad.vertexData;
  var vertexData = {
    startX: vert[0],
    startY: vert[1],
    finishX: vert[4],
    finishY: vert[5]
  };
  var xDiff = Math.abs(vertexData.startX - vertexData.finishX);
  var yDiff = Math.abs(vertexData.startY - vertexData.finishY);
  var zTiksCount = _constants__WEBPACK_IMPORTED_MODULE_1__.BULLET_ROAD_SIZE / _constants__WEBPACK_IMPORTED_MODULE_1__.BULLET_SPEED_IN_SECOND * 60;
  var yDirection = vertexData.finishY < newBullet.y ? -1 : 1;
  var xDirection = vertexData.finishX < newBullet.x ? -1 : 1;
  var xDiffInTiks = xDiff / zTiksCount * xDirection;
  var yDiffInTiks = yDiff / zTiksCount * yDirection;
  newBullet.roadCoordinates = {
    xDiffInTiks: xDiffInTiks,
    yDiffInTiks: yDiffInTiks
  };
  player.bullets.push(newBullet);
  app.stage.addChild(newBullet);
}

function keyDownHandler(e) {
  console.log(">>>>>> key code  ", e.keyCode);

  if (e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__.P1_BULLET_FIRE_KEY_CODE) {
    fireBullet(player1);
  } else if (e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__.P2_BULLET_FIRE_KEY_CODE) {
    fireBullet(player2);
  } else {
    moveKeys[e.keyCode] = true;
  }
}

function keyUpHandler(e) {
  moveKeys[e.keyCode] = false;
}

function keepEnemiesInScreen() {
  [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8].filter(function (i) {
    return i.img;
  }).forEach(function (enemy) {
    if (enemy !== null && enemy !== void 0 && enemy.img) {
      if (app.screen.width - enemy.img.x < 50 && enemy.direction === 1) {
        enemy.direction = -1;
      } else if (app.screen.width - enemy.img.x > _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH - 10 && enemy.direction === -1) {
        enemy.direction = 1;
      }

      enemy.img.x += 2 * enemy.direction;
    }
  });
}

function checkCollisions(player) {
  var prevBullets = _toConsumableArray(player.bullets);

  prevBullets.forEach(function (bullet, bulletIndex) {
    if (bullet.visible) {
      [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8].filter(function (i) {
        return i.img;
      }).forEach(function (enemy) {
        if (enemy.img.visible) {
          var _enemy$img = enemy.img,
              x = _enemy$img.x,
              y = _enemy$img.y,
              width = _enemy$img.width,
              height = _enemy$img.height;

          if (bullet.x >= x && bullet.x < x + width && bullet.y >= y && bullet.y < y + height) {
            enemy.img.visible = false;
            app.stage.removeChild(enemy.img);
            bullet.visible = false;
            app.stage.removeChild(bullet);
            playExplosion(x + width / 2, y + height / 2);
            player.score.text = Number(player.score.text) + 1; // enemy.img = null;

            player.bullets = player.bullets.filter(function (i, index) {
              return bulletIndex !== index;
            });
            setTimeout(function () {
              console.log(">>>>>>>>>>>  enemy  ", enemy);
              createEnemy(enemy);
            }, 1000);
          }
        }
      });
    }
  });
}

function removeBallets(_ref) {
  var bullets = _ref.bullets;

  var prevBullets = _toConsumableArray(bullets);

  prevBullets.forEach(function (i, bulletIndex) {
    if (i.y < 0 || i.y > _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_HEIGHT || i.x > _constants__WEBPACK_IMPORTED_MODULE_1__.WINDOW_MAX_WIDTH || i.x < 0) {
      app.stage.removeChild(i);
      bullets = player1.bullets.filter(function (i, index) {
        return bulletIndex !== index;
      });
    }
  });
}

function removeOutOfScreenBullets() {
  removeBallets(player1);
  removeBallets(player2);
}

function player1Movement() {
  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P1_UP_KEY_CODE]) {
    player1.jet.img.y -= 3;
    player1.bulletRoad.y -= 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P1_DOWN_KEY_CODE]) {
    player1.jet.img.y += 3;
    player1.bulletRoad.y += 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P1_P2_LEFT_KEY_CODE]) {
    player1.jet.img.x -= 3;
    player1.bulletRoad.x -= 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P1_RIGHT_KEY_CODE]) {
    player1.jet.img.x += 3;
    player1.bulletRoad.x += 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P1_ROTATE_RIGHT_KEY_CODE]) {
    player1.jet.img.rotation += 0.04;
    player1.bulletRoad.rotation += 0.04;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P1_ROTATE_P2_LEFT_KEY_CODE]) {
    player1.jet.img.rotation -= 0.04;
    player1.bulletRoad.rotation -= 0.04;
  }

  player1.bullets.forEach(function (i) {
    i.x += i.roadCoordinates.xDiffInTiks;
    i.y += i.roadCoordinates.yDiffInTiks;
  });
}

function player2Movement() {
  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P2_UP_KEY_CODE]) {
    player2.jet.img.y -= 3;
    player2.bulletRoad.y -= 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P2_DOWN_KEY_CODE]) {
    player2.jet.img.y += 3;
    player2.bulletRoad.y += 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P2_LEFT_KEY_CODE]) {
    player2.jet.img.x -= 3;
    player2.bulletRoad.x -= 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P2_RIGHT_KEY_CODE]) {
    player2.jet.img.x += 3;
    player2.bulletRoad.x += 3;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P2_ROTATE_RIGHT_KEY_CODE]) {
    player2.jet.img.rotation += 0.04;
    player2.bulletRoad.rotation += 0.04;
  }

  if (moveKeys[_constants__WEBPACK_IMPORTED_MODULE_1__.P2_ROTATE_P2_LEFT_KEY_CODE]) {
    player2.jet.img.rotation -= 0.04;
    player2.bulletRoad.rotation -= 0.04;
  }

  player2.bullets.forEach(function (i) {
    i.x += i.roadCoordinates.xDiffInTiks;
    i.y += i.roadCoordinates.yDiffInTiks;
  });
}

function connectPixiExtension() {
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({
    PIXI: pixi_js__WEBPACK_IMPORTED_MODULE_0__
  });
}

document.body.appendChild(app.view);

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("39c362c9071fe432e445")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "web-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateweb_app"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ddc793"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=1300&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ddc793"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ddc793"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map