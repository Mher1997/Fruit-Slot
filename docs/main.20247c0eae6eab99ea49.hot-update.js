"use strict";
self["webpackHotUpdateweb_app"]("main",{

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

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39c362c9071fe432e445")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.20247c0eae6eab99ea49.hot-update.js.map