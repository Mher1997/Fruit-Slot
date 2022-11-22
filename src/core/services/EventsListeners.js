import AppInit from "../../App";
import TWEEN from "@tweenjs/tween.js";
import { Assets } from "pixi.js";

class EventsListeners extends AppInit {
  constructor() {
    super();
    this.app.ticker.add(() => {
      TWEEN.update();
    });
  }
  init() {
    const {
      Events,
      World,
      world,
      engine,
      Container,
      getGraphicByBodyKey,
      textResultAnimate,
      handleCollisionBall,
    } = this;

    Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      const plinkActiveTexture = Assets.get("plinkActiveTexture");

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        for (let [key, value] of Object.entries(bodies)) {
          const secondBody = pair[key === "bodyA" ? "bodyB" : "bodyA"];

          switch (value.label) {
            case "separate":
              const ballBody = secondBody;
              const separateGraphic = getGraphicByBodyKey(value);
              const ballGraphic = getGraphicByBodyKey(ballBody);

              Container.removeChild(ballGraphic);
              World.remove(world, ballBody);

              if (!separateGraphic?.isActiveAnimation) {
                textResultAnimate(separateGraphic);
              }
              break;
            case "plink":
              const plinkoGraphic = getGraphicByBodyKey(value);
              plinkoGraphic.texture = plinkActiveTexture;
            // plinkoGraphic.scale.set(1);
            default:
              break;
          }
        }
      }
    });

    Events.on(engine, "collisionEnd", (event) => {
      const pairs = event.pairs;
      const plinkTexture = Assets.get("plinkTexture");

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
              const plinkoGraphic = getGraphicByBodyKey(value);
              plinkoGraphic.texture = plinkTexture;
              break;
            default:
              break;
          }
        }
      }
    });
  }

  getGraphicByBodyKey = (body, key = "graphicKey") => {
    const { Container } = this;
    const bodyValue = body[key];
    const graphic = Container.children.find((item) => item[key] === bodyValue);
    return graphic;
  };

  handleCollisionBall = (ballBody, plinkBody) => {
    const radToDeg = 180 / Math.PI;
    const { Body, gapX } = this;

    const differenceY = plinkBody.position.y - ballBody.position.y;
    const differenceX = plinkBody.position.x - ballBody.position.x;

    // console.log(ballBody);

    if (differenceY > 0) {
      const collisionDeg =
        Math.atan(Math.abs(differenceX) / differenceY) * radToDeg;

      if (collisionDeg < 45) {
        const resWays = ballBody.resWays;
        const plinkoRow = plinkBody.rowIndex;
        const directionToRight = resWays[plinkoRow - 2] === "+";
        const distanceX = gapX / 40;
        const distanceY = -gapX / 13;
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
