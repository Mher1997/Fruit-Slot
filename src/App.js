import * as PIXI from "pixi.js";
import Matter from "matter-js";
import "./index.scss";

const Engine = Matter.Engine,
  World = Matter.World,
  Body = Matter.Body,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

const sceneContainer = document.body;
const app = new PIXI.Application({
  autoResize: true,
  resizeTo: window,
  width: sceneContainer.clientWidth,
  height: sceneContainer.clientHeight,
  // backgroundColor: 0x000d27,
});

const engine = Engine.create();
const sceneObjects = [];

const container = new PIXI.Container();
container.sortableChildren = true;

// const render = Render.create({
//   element: sceneContainer,
//   engine: engine,
//   options: {
//     width: sceneContainer.clientWidth,
//     height: sceneContainer.clientHeight,
//   },
// });

// Render.run(render);

class AppInit {
  constructor(gapX, length, result) {
    if (AppInit._instance && (gapX || length || result)) {
      AppInit._instance.gapX = gapX;
      AppInit._instance.length = length;
      AppInit._instance.result = result;
    }
    this.gapX = AppInit?._instance?.gapX || gapX;
    this.length = AppInit?._instance?.length || length;
    this.result = AppInit?._instance?.result || result;
    this.sceneContainerWidth = sceneContainer.clientWidth;
    this.sceneContainerHeight = sceneContainer.clientHeight;
    this.sceneContainerCenter = this.sceneContainerWidth / 2;
    this.app = app;
    this.engine = engine;
    this.world = engine.world;
    this.Body = Body;
    this.World = World;
    this.Mouse = Mouse;
    this.Bodies = Bodies;
    this.Events = Events;
    this.MouseConstraint = MouseConstraint;
    this.Container = container;

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
      Container,
      sceneContainerWidth,
      sceneContainerHeight,
      handleAddTicker,
    } = this;

    AppInit._instance = this;
    this.world.gravity.y = 1.6;

    sceneContainer.appendChild(app.view);
    Runner.run(engine);

    handleAddTicker();

    await PIXI.Assets.init({ manifest: require("./core/manifest.json") });
    await PIXI.Assets.loadBundle("fonts");
    const loadScreenAssets = await PIXI.Assets.loadBundle("load-screen");

    const background = PIXI.Sprite.from(loadScreenAssets.background);
    background.width = sceneContainerWidth;
    background.height = sceneContainerHeight;

    Container.addChild(background);
    app.stage.addChild(Container);
  }
}

export default AppInit;
