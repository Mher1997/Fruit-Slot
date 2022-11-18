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

let h, w;
const size = [1000, 670];
const ratio = size[0] / size[1];

const detectResolution = () => {
  if (window.innerWidth / window.innerHeight >= ratio) {
    w = window.innerHeight * ratio;
    h = window.innerHeight;
  } else {
    w = window.innerWidth;
    h = window.innerWidth / ratio;
  }
};

detectResolution();

//PIXI app
const sceneContainer = document.body;
const app = new PIXI.Application({
  autoResize: true,
  resizeTo: sceneContainer,
  width: window.innerWidth,
  height: window.innerHeight,
});

const engine = Engine.create();
const sceneObjects = [];

const container = new PIXI.Container();
container.sortableChildren = true;

// Matter app
const render = Render.create({
  element: sceneContainer,
  engine: engine,
  options: {
    width: sceneContainer.clientWidth,
    height: sceneContainer.clientHeight,
    showAngleIndicator: true,
    showDebug: true,
    showBroadphase: true,
    showBounds: true,
    showVelocity: true,
    showCollisions: true,
    showSeparations: true,
    // showAxes: true,
    // showPositions: true,
    showIds: false,
    showShadows: false,
    showVertexNumbers: false,
    showConvexHulls: false,
    showInternalEdges: false,
    showMousePosition: false,
  },
});
Render.run(render);

class AppInit {
  constructor(length, result) {
    this.cloudY = 80;
    this.length = length || AppInit?._instance?.length;
    this.result = result || AppInit?._instance?.result;
    this.plinkWidth = window.innerWidth / (this.length * 10);
    this.gapX =
      (window.innerWidth - length * this.plinkWidth - 230) /
        (this.length - 1) || AppInit?._instance?.gapX;

    this.gapY = this.gapX * 1.2;
    this.sceneContainerWidth = sceneContainer.clientWidth;
    this.sceneContainerHeight = sceneContainer.clientHeight;
    this.sceneContainerCenter = this.sceneContainerWidth / 2;
    this.app = app;
    this.engine = engine;
    this.world = engine.world;
    this.Container = container;
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
      Container,
      sceneContainerWidth,
      sceneContainerHeight,
      handleAddTicker,
    } = this;

    AppInit._instance = this;
    this.world.gravity.y = 1.8;

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
      detectResolution();
      // Container.width = w;
      // Container.height = h;
    });
  }
}

export default AppInit;
