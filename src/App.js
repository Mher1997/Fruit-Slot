import * as PIXI from "pixi.js";
import Matter from "matter-js";
import "./index.scss";

const Engine = Matter.Engine,
  World = Matter.World,
  Body = Matter.Body,
  Runner = Matter.Runner,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

//PIXI app
const canvasContainer = document.getElementById("game-app");
const app = new PIXI.Application({
  resolution: 1,
  autoResize: true,
  resizeTo: window,
});

const sceneObjects = [];
const engine = Engine.create();

const AppRoot = new PIXI.Container();
const Container = new PIXI.Container();

AppRoot.name = "root";
Container.sortableChildren = true;
Container.name = "main";

const ratio = 672 / 444;
let w, h;

const resize = () => {
  if (canvasContainer.clientHeight / canvasContainer.clientWidth > 1) {
    h = canvasContainer.clientWidth / ratio;
    w = canvasContainer.clientWidth;
  } else {
    h = canvasContainer.clientHeight / ratio;
    w = canvasContainer.clientHeight;
  }
};

resize();

class AppInit {
  constructor(length) {
    this.length = length || AppInit?._instance?.length;
    this.gapX = (w * 0.7) / this.length;
    this.gapY = this.gapX * 1.2;
    this.plinkRadius = this.gapX / (4.3 * 2); // * 2 for matter and pixi bodies
    this.cloudY = 200;
    this.sceneContainerWidth = canvasContainer.clientWidth;
    this.sceneContainerHeight = canvasContainer.clientHeight;
    this.sceneContainerCenter = this.sceneContainerWidth / 2;
    this.app = app;
    this.engine = engine;
    this.world = engine.world;
    this.Container = Container;
    this.Body = Body;
    this.World = World;
    this.Mouse = Mouse;
    this.Bodies = Bodies;
    this.Events = Events;
    this.MouseConstraint = MouseConstraint;

    if (!AppInit._instance) {
      this.init();
    }
  }

  addSceneObject = (scene) => {
    sceneObjects.push(scene);
  };

  handleAddTicker = () => {
    this.app.ticker.add(() => {
      sceneObjects.forEach((object) => {
        object.sprite.position = object.body.position;
        // object.sprite.rotation = object.body.angle * 0.1 * delta;
      });
    });
  };

  async init() {
    const {
      sceneContainerWidth,
      sceneContainerHeight,
      plinkRadius,
      handleAddTicker,
    } = this;

    AppInit._instance = this;

    engine.gravity.y = 1.6;
    engine.gravity.scale = (plinkRadius / 4) * 0.001;

    await PIXI.Assets.init({
      manifest: require("./core/resources/manifest.json"),
    });

    const loadScreenAssets = await PIXI.Assets.loadBundle("load-screen");
    await PIXI.Assets.loadBundle("fonts");

    canvasContainer.appendChild(app.view);
    Runner.run(engine);

    handleAddTicker();

    const background = PIXI.Sprite.from(loadScreenAssets.background);
    const backgroundDetail = PIXI.Sprite.from(
      loadScreenAssets.backgroundDetail
    );
    background.width = sceneContainerWidth;
    background.height = sceneContainerHeight;
    backgroundDetail.width = sceneContainerWidth;
    backgroundDetail.height = sceneContainerHeight;
    Container.cacheAsBitmapResolution = 1;

    AppRoot.addChild(background, backgroundDetail, Container);
    app.stage.addChild(AppRoot);

    const resizeContainer = () => {
      background.width = sceneContainerWidth;
      background.height = sceneContainerHeight;
      backgroundDetail.width = sceneContainerWidth;
      backgroundDetail.height = sceneContainerHeight;
    };

    window.addEventListener("resize", () => {
      resize();
      resizeContainer();
    });
  }
}

export default AppInit;
