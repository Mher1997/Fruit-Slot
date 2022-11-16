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

//PIXI app
const sceneContainer = document.body;
const app = new PIXI.Application({
  autoResize: true,
  resizeTo: window,
  width: sceneContainer.clientWidth,
  height: sceneContainer.clientWidth * 1.04,
  // backgroundColor: 0x000d27,
});

const engine = Engine.create();
const sceneObjects = [];

const container = new PIXI.Container();
container.sortableChildren = true;

//Matter app
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

    this.plinkWidth = 5;

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

    await PIXI.Assets.init({
      manifest: require("./core/resources/manifest.json"),
    });

    const loadScreenAssets = await PIXI.Assets.loadBundle("load-screen");
    await PIXI.Assets.loadBundle("fonts");

    sceneContainer.appendChild(app.view);
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

    Container.addChild(background);
    Container.addChild(backgroundDetail);
    app.stage.addChild(Container);

    window.addEventListener("resize", () => {
      Container.width = sceneContainer.clientWidth;
      Container.height = sceneContainer.clientWidth * 1.04;
    });
  }
}

export default AppInit;
