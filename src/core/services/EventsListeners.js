import TWEEN from "@tweenjs/tween.js";
import AppInit from "../../AppRoot";
import { getAsset } from "../helpers";

class EventsListeners extends AppInit {
  constructor() {
    super();
    this.app.ticker.add(() => {
      TWEEN.update();
    });
  }

  async init() {
    const {
      Events,
      World,
      world,
      engine,
      sceneContainer,
      getGraphicByBodyKey,
      textResultAnimate,
      handleCollisionBall,
    } = this;

    const plinkTexture = await getAsset("plinkTexture");
    const plinkActiveTexture = await getAsset("plinkActiveTexture");

    const plinkosContainer = sceneContainer.children.find(
      (item) => item.name === "plinkos-container"
    );

    Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        for (let [key, value] of Object.entries(bodies)) {
          const secondBody = pair[key === "bodyA" ? "bodyB" : "bodyA"];

          switch (value.label) {
            case "separate":
              const ballBody = secondBody;
              const separateGraphic = getGraphicByBodyKey({ body: value });
              const ballGraphic = getGraphicByBodyKey({ body: ballBody });

              sceneContainer.removeChild(ballGraphic);
              World.remove(world, ballBody);

              if (!separateGraphic?.isActiveAnimation) {
                textResultAnimate(separateGraphic);
              }
              break;
            case "plink":
              const plinkoGraphic = getGraphicByBodyKey({
                body: value,
                container: plinkosContainer,
              });

              if (plinkoGraphic) {
                plinkoGraphic.texture = plinkActiveTexture;
              }
            default:
              break;
          }
        }
      }
    });

    Events.on(engine, "collisionEnd", (event) => {
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        for (let [key, value] of Object.entries(bodies)) {
          const secondBody = pair[key === "bodyA" ? "bodyB" : "bodyA"];
          switch (value.label) {
            case "ball":
              secondBody.label === "plink" &&
                handleCollisionBall(value, secondBody);
              break;
            case "plink":
              const plinkoGraphic = getGraphicByBodyKey({
                body: value,
                container: plinkosContainer,
              });
              if (plinkoGraphic) {
                plinkoGraphic.texture = plinkTexture;
              }
              break;
            default:
              break;
          }
        }
      }
    });
  }

  getGraphicByBodyKey = (option) => {
    const { sceneContainer } = this;

    const { body } = option;
    const key = option.key || "graphicKey";
    const container = option.container || sceneContainer;
    const bodyValue = body[key];

    return container.children.find((item) => item[key] === bodyValue);
  };

  handleCollisionBall = (ballBody, plinkBody) => {
    const { Body } = this;

    const radToDeg = 180 / Math.PI;
    const differenceY = plinkBody.position.y - ballBody.position.y;
    const differenceX = plinkBody.position.x - ballBody.position.x;

    if (differenceY > 0) {
      const collisionDeg =
        Math.atan(Math.abs(differenceX) / differenceY) * radToDeg;

      if (collisionDeg < 45) {
        const resWays = ballBody.resWays;
        const plinkoRow = plinkBody.rowIndex;
        const directionToRight = resWays[plinkoRow - 2] === "+";
        const distanceX = plinkBody.circleRadius / 5;
        const distanceY = -ballBody.circleRadius / 4.5;
        // const isNastyDirection =
        //   (directionToRight && differenceX >= 0) ||
        //   (!directionToRight && differenceX <= 0);
        // const collision = collisionDeg / radToDeg;

        // const velocityX = collision > 0.4 ? collision : ballRadius / 15;

        if (resWays) {
          Body.setVelocity(ballBody, {
            x: directionToRight ? distanceX : -distanceX,
            y: distanceY,
          });
        }
      }
    }
  };

  textResultAnimate = (graphic) => {
    graphic.isActiveAnimation = true;
    const yPos = graphic.position.y;

    const tween = new TWEEN.Tween({
      x: graphic.position.x,
      y: yPos,
    })
      .easing(TWEEN.Easing.Bounce.Out)
      .to({ y: [yPos + 10, yPos] }, 300)
      .start();

    tween.onUpdate(({ y }) => {
      graphic.position.y = y;
    });
    tween.onComplete(() => {
      graphic.isActiveAnimation = false;
    });
  };
}

export default EventsListeners;
