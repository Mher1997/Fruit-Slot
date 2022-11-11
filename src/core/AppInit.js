import * as PIXI from "pixi.js";
import Matter from "matter-js";
import "../index.scss";

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
  resizeTo: sceneContainer,
  backgroundColor: 0x04293a,
  autoResize: true,
});

const engine = Engine.create();
const sceneObjects = [];

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

    if (!AppInit._instance) {
      AppInit._instance = this;
      sceneContainer.appendChild(app.view);
      this.world.gravity.y = 1.6;
      Runner.run(engine);

      this.handleAddTicker();
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
}

export default AppInit;
