import * as PIXI from "pixi.js";
import Matter from "matter-js";
import { getAssets } from "./core/helpers";
import { store } from "./core/store";

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

const sceneObjects = [];
const engine = Engine.create();

const rootContainer = new PIXI.Container();
const sceneContainer = new PIXI.Container();

rootContainer.name = "root";
sceneContainer.sortableChildren = true;
sceneContainer.name = "scene-container";

class AppRoot {
  sceneContainerWidth = canvasContainer.clientWidth;
  sceneContainerHeight = canvasContainer.clientHeight;
  sceneContainerCenter = this.sceneContainerWidth / 2;
  engine = engine;
  world = engine.world;
  sceneContainer = sceneContainer;
  Body = Body;
  World = World;
  Mouse = Mouse;
  Bodies = Bodies;
  Events = Events;
  MouseConstraint = MouseConstraint;

  constructor(app) {
    if (!AppRoot._instance) {
      AppRoot._instance = this;
    }

    this.app = AppRoot._instance?.app || app;
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

  createStageRoot = async () => {
    const { sceneContainerWidth, sceneContainerHeight } = this;

    const { backgroundTexture, backgroundDetailTexture } = await getAssets(
      "backgroundTexture",
      "backgroundDetailTexture"
    );

    const background = PIXI.Sprite.from(backgroundTexture);
    const backgroundDetail = PIXI.Sprite.from(backgroundDetailTexture);

    background.width = sceneContainerWidth;
    background.height = sceneContainerHeight;
    backgroundDetail.width = sceneContainerWidth;
    backgroundDetail.height = sceneContainerHeight;

    rootContainer.addChild(background, backgroundDetail, sceneContainer);
    this.app.stage.addChild(rootContainer);

    const resizeContainer = () => {
      background.width = sceneContainerWidth;
      background.height = sceneContainerHeight;
      backgroundDetail.width = sceneContainerWidth;
      backgroundDetail.height = sceneContainerHeight;
    };

    window.addEventListener("resize", resizeContainer);
  };

  async init() {
    Runner.run(engine);
    this.update();
    this.handleAddTicker();
    this.createStageRoot();
  }

  update() {
    const { gravityScale } = store.get();
    engine.gravity.y = 1;
    engine.gravity.scale = gravityScale;
  }
}

export default AppRoot;
