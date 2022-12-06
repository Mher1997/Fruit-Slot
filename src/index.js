import * as PIXI from "pixi.js";
import {
    P1_BULLET_FIRE_KEY_CODE,
    BULLET_ROAD_SIZE,
    BULLET_SPEED_IN_SECOND,
    P2_LEFT_KEY_CODE,
    P1_UP_KEY_CODE,
    WINDOW_MAX_HEIGHT,
    WINDOW_MAX_WIDTH,
    P1_DOWN_KEY_CODE,
    P1_P2_LEFT_KEY_CODE,
    P1_RIGHT_KEY_CODE,
    P1_ROTATE_P2_LEFT_KEY_CODE,
    P1_ROTATE_RIGHT_KEY_CODE,
    P2_ROTATE_P2_LEFT_KEY_CODE,
    P2_ROTATE_RIGHT_KEY_CODE, P2_RIGHT_KEY_CODE, P2_DOWN_KEY_CODE, P2_UP_KEY_CODE, P2_BULLET_FIRE_KEY_CODE
} from "./constants";

connectPixiExtension();

const app = new PIXI.Application({
    width: WINDOW_MAX_WIDTH,
    height: WINDOW_MAX_HEIGHT,
    antialias: true,
})

const moveKeys = {};
let bullet;
let start;
let enemy1;
let enemy2;
let enemy3;
let enemy4;
let enemy5;
let enemy6;
let enemy7;
let enemy8;
let explosionTextures = [];
const player1 = {
    scoreText: "",
    score: 0,
    jet: null,
    bullet: null,
    bullets: [],
    bulletRoad: null
};
const player2 = {
    scoreText: "",
    score: 0,
    jet: null,
    bullet: null,
    bullets: [],
    bulletRoad: null,
};
let rules;

app.loader.add('jet', "sample.png");
app.loader.add('bullet', "bullet.png");
app.loader.add('start', "start.jpeg");
app.loader.add('enemy1', "enemy1.png");
app.loader.add('explosion', "mc.json");

app.loader.onProgress.add(onProgress)

app.loader.load((loader, resources) => {
    player1.jet = { tint: 0.03 * 0xFFFFFF, img: new PIXI.Sprite.from(resources.jet.texture), x: app.view.width / 4, y: app.view.height / 2 + 200, scaleX: 0.5, scaleY: 0.5};
    player2.jet = { tint: 0.7 * 0xFFFFFF,img: new PIXI.Sprite.from(resources.jet.texture), x: app.view.width * 3 / 4, y: app.view.height / 2 + 200, scaleX: 0.5, scaleY: 0.5};
    bullet = resources.bullet.texture;
    start = new PIXI.Sprite.from(resources.start.texture);
    enemy1 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (-10 - 300) - 300, y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: 1};
    enemy2 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (-10 - 300) - 300, y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: 1};
    enemy3 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (-10 - 300) - 300, y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: 1};
    enemy4 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (-10 - 300) - 300, y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: 1};
    enemy5 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (WINDOW_MAX_WIDTH + 300 - WINDOW_MAX_WIDTH) + WINDOW_MAX_WIDTH,
        y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: -1};
    enemy6 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (WINDOW_MAX_WIDTH + 300 - WINDOW_MAX_WIDTH) + WINDOW_MAX_WIDTH,
        y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: -1};
    enemy7 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (WINDOW_MAX_WIDTH + 300 - WINDOW_MAX_WIDTH) + WINDOW_MAX_WIDTH,
        y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: -1};
    enemy8 = {img: new PIXI.Sprite.from(resources.enemy1.texture),
        x: Math.random() * (WINDOW_MAX_WIDTH + 300 - WINDOW_MAX_WIDTH) + WINDOW_MAX_WIDTH,
        y: Math.random() * (290 - 50) + 50, scaleX: 0.1, scaleY: 0.1, direction: -1};
    handleExplosionSpriteData();

    init();
});

function init() {
    showRules();
    createStartButton();
}

function createStartButton() {
    start.anchor.set(0.5)
    start.interactive = true;
    start.cursor = 'pointer';
    start.on("pointerdown", () => {
        app.stage.removeChild(rules);
        app.stage.removeChild(start);
        startGame();
    })
    start.scale.x = 0.2;
    start.scale.y = 0.2;
    start.x = WINDOW_MAX_WIDTH / 2;
    start.y = WINDOW_MAX_HEIGHT / 2 + rules.height;


    app.stage.addChild(start);
}

function showRules() {
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 2000,
        lineJoin: 'round',
    });

    rules = new PIXI.Text('               Player 1                                                                              Player 2\n' +
        '1. To move jet use A, W, S, D buttons                          1. To move jet use arrow buttons \n' +
        '2. To fire use G button                                                   2. To fire use 5 button \n' +
        '3. To rotate jet use F and H buttons                             3. To rotate jet use 4 and 6 buttons \n' +
        '                           \n                                  4. !ATTENTION!!!  THE GAME IS ENDLESS', style);
    rules.anchor.set(0.5)
    rules.x = WINDOW_MAX_WIDTH / 2;
    rules.y = WINDOW_MAX_HEIGHT / 2;
    app.stage.addChild(rules);
}

function handleExplosionSpriteData () {
    for (let i = 0; i < 26; ++i) {
        const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);
        explosionTextures.push(texture);
    }
}

function playExplosion (x, y) {
    const explosion = new PIXI.AnimatedSprite(explosionTextures);

    explosion.x = x;
    explosion.y = y;
    explosion.anchor.set(0.5);
    explosion.rotation = Math.random() * Math.PI;
    explosion.scale.set(0.18 + Math.random() * 0.5);
    explosion.gotoAndPlay(1);
    explosion.onComplete = () => {
        app.stage.removeChild(explosion)
    }
    explosion.loop = false;
    app.stage.addChild(explosion);
}

function onProgress (e) {
    console.log(">>>>>>>  loading  ", e.progress)
}

function startGame () {
    createPlayer(player1);
    createPlayer(player2, true);

    [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8].forEach(i => createEnemy(i));

    addListeners();

    app.ticker.add(removeOutOfScreenBullets);
    app.ticker.add(keepEnemiesInScreen);
    app.ticker.add(player1Movement);
    app.ticker.add(player2Movement);
    app.ticker.add(() => checkCollisions(player1));
    app.ticker.add(() => checkCollisions(player2));
}

function createPlayer(player, isPlayer2) {
    const { img, x, y, scaleX,  scaleY, tint } = player.jet;
    img.x = x;
    img.y = y;
    img.scale.x = scaleX;
    img.scale.y = scaleY;
    img.tint = tint;
    img.visible = true
    img.anchor.set(0.5);

    createBulletGrafRoad(player, x, y);
    createScoreContainer(player, isPlayer2);

    app.stage.addChild(img);
}

function createBulletGrafRoad(player, x, y) {
    player.bulletRoad = new PIXI.Graphics();
    player.bulletRoad.lineStyle(0.3);
    player.bulletRoad.x = x;
    player.bulletRoad.y = y;
    player.bulletRoad.lineTo(0, BULLET_ROAD_SIZE * -1);
    player.bulletRoad.endFill();
    app.stage.addChild(player.bulletRoad);
}

function createEnemy (el) {
    const { img, x, y, scaleX,  scaleY } = el;
    img.x = x;
    img.y = y;
    img.scale.x = scaleX;
    img.scale.y = scaleY;
    img.visible = true
    img.anchor.set(0);

    app.stage.addChild(img);
}

function createScoreContainer(player, isPlayer2) {
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
        lineJoin: 'round',
    });

    player.scoreText = new PIXI.Text(`P${isPlayer2 ? 2 : 1}Score: `, style);
    player.scoreText.x = WINDOW_MAX_WIDTH - player.scoreText.width - 80;
    if (isPlayer2) {
        player.scoreText.y = WINDOW_MAX_HEIGHT - player.scoreText.height - 50;
    } else {
        player.scoreText.y = WINDOW_MAX_HEIGHT - player.scoreText.height - 100;
    }


    player.score = new PIXI.Text(player.score, style);

    player.score.x = WINDOW_MAX_WIDTH - player.score.width - 50;
    if (isPlayer2) {
        player.score.y = WINDOW_MAX_HEIGHT - player.scoreText.height - 50;
    } else {
        player.score.y = WINDOW_MAX_HEIGHT - player.scoreText.height - 100;
    }

    app.stage.addChild(player.scoreText);
    app.stage.addChild(player.score);
}

function addListeners () {
    // keyboard events
    window.addEventListener("keydown", keyDownHandler)
    window.addEventListener("keyup", keyUpHandler)
}

function fireBullet(player) {
    const newBullet = new PIXI.Sprite.from(bullet);
    newBullet.anchor.set(0.5);
    newBullet.x = player.bulletRoad.x;
    newBullet.y = player.bulletRoad.y;
    newBullet.scale.x = 0.01;
    newBullet.scale.y = 0.01;

    const vert = player.bulletRoad.vertexData;
    const vertexData = {
        startX: vert[0],
        startY: vert[1],
        finishX: vert[4],
        finishY: vert[5]
    }

    const xDiff = Math.abs(vertexData.startX - vertexData.finishX);
    const yDiff = Math.abs(vertexData.startY - vertexData.finishY);

    const zTiksCount = BULLET_ROAD_SIZE / BULLET_SPEED_IN_SECOND * 60;

    let yDirection = vertexData.finishY < newBullet.y ? -1 : 1;
    let xDirection = vertexData.finishX < newBullet.x ? -1 : 1;

    const xDiffInTiks = (xDiff / zTiksCount) * xDirection;
    const yDiffInTiks = (yDiff / zTiksCount) * yDirection;

    newBullet.roadCoordinates = {
        xDiffInTiks,
        yDiffInTiks
    }

    player.bullets.push(newBullet);
    app.stage.addChild(newBullet)
}

function keyDownHandler (e) {
    console.log(">>>>>> key code  ", e.keyCode)
    if (e.keyCode === P1_BULLET_FIRE_KEY_CODE) {
        fireBullet(player1);
    } else if (e.keyCode === P2_BULLET_FIRE_KEY_CODE) {
        fireBullet(player2);
    } else {
        moveKeys[e.keyCode] = true;
    }
}

function keyUpHandler (e) {
    moveKeys[e.keyCode] = false;
}

function keepEnemiesInScreen () {
    [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8].filter(i => i.img).forEach(enemy => {
        if (enemy?.img) {
            if (app.screen.width - enemy.img.x < 50 && enemy.direction === 1) {
                enemy.direction = -1;
            } else if (app.screen.width - enemy.img.x > WINDOW_MAX_WIDTH - 10 && enemy.direction === -1) {
                enemy.direction = 1;
            }
            enemy.img.x += (2 * enemy.direction);
        }
    })
}

function checkCollisions (player) {
    let prevBullets = [...player.bullets];
    prevBullets.forEach((bullet, bulletIndex) => {
        if (bullet.visible) {
            [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8].filter(i => i.img).forEach(enemy => {
                if (enemy.img.visible) {
                    const {x, y, width, height} = enemy.img;
                    if ((bullet.x >= x && bullet.x < x + width) && (bullet.y >= y && bullet.y < y + height)) {
                        enemy.img.visible = false;
                        app.stage.removeChild(enemy.img)
                        bullet.visible = false;
                        app.stage.removeChild(bullet)
                        playExplosion(x + width / 2, y + height / 2);
                        player.score.text = Number(player.score.text) + 1;
                        // enemy.img = null;
                        player.bullets = player.bullets.filter((i, index) => bulletIndex !== index);

                        setTimeout(() => {
                            console.log(">>>>>>>>>>>  enemy  ", enemy)
                            createEnemy(enemy)
                        }, 1000);
                    }
                }
            })
        }
    })
}

function removeBallets({bullets}) {
    let prevBullets = [...bullets];
    prevBullets.forEach((i, bulletIndex) => {
        if (i.y < 0 || i.y > WINDOW_MAX_HEIGHT || i.x > WINDOW_MAX_WIDTH || i.x < 0) {
            app.stage.removeChild(i);
            bullets = player1.bullets.filter((i, index) => bulletIndex !== index);
        }
    })
}

function removeOutOfScreenBullets () {
    removeBallets(player1);
    removeBallets(player2);
}

function player1Movement() {
    if (moveKeys[P1_UP_KEY_CODE]) {
        player1.jet.img.y -= 3;
        player1.bulletRoad.y -= 3;
    }

    if (moveKeys[P1_DOWN_KEY_CODE]) {
        player1.jet.img.y += 3;
        player1.bulletRoad.y += 3;
    }

    if (moveKeys[P1_P2_LEFT_KEY_CODE]) {
        player1.jet.img.x -= 3;
        player1.bulletRoad.x -= 3;
    }

    if (moveKeys[P1_RIGHT_KEY_CODE]) {
        player1.jet.img.x += 3;
        player1.bulletRoad.x += 3;
    }

    if (moveKeys[P1_ROTATE_RIGHT_KEY_CODE]) {
        player1.jet.img.rotation += 0.04;
        player1.bulletRoad.rotation += 0.04
    }

    if (moveKeys[P1_ROTATE_P2_LEFT_KEY_CODE]) {
        player1.jet.img.rotation -= 0.04;
        player1.bulletRoad.rotation -= 0.04;
    }

    player1.bullets.forEach(i => {
        i.x += i.roadCoordinates.xDiffInTiks;
        i.y += i.roadCoordinates.yDiffInTiks;
    })
}

function player2Movement () {
    if (moveKeys[P2_UP_KEY_CODE]) {
        player2.jet.img.y -= 3;
        player2.bulletRoad.y -= 3;
    }

    if (moveKeys[P2_DOWN_KEY_CODE]) {
        player2.jet.img.y += 3;
        player2.bulletRoad.y += 3;
    }

    if (moveKeys[P2_LEFT_KEY_CODE]) {
        player2.jet.img.x -= 3;
        player2.bulletRoad.x -= 3;
    }

    if (moveKeys[P2_RIGHT_KEY_CODE]) {
        player2.jet.img.x += 3;
        player2.bulletRoad.x += 3;
    }

    if (moveKeys[P2_ROTATE_RIGHT_KEY_CODE]) {
        player2.jet.img.rotation += 0.04;
        player2.bulletRoad.rotation += 0.04
    }

    if (moveKeys[P2_ROTATE_P2_LEFT_KEY_CODE]) {
        player2.jet.img.rotation -= 0.04;
        player2.bulletRoad.rotation -= 0.04;
    }

    player2.bullets.forEach(i => {
        i.x += i.roadCoordinates.xDiffInTiks;
        i.y += i.roadCoordinates.yDiffInTiks;
    })
}

function connectPixiExtension () {
    window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
}

document.body.appendChild(app.view)