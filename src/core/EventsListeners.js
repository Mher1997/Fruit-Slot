import AppInit from "../App";
import TWEEN from "@tweenjs/tween.js";
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

    Events.on(engine, "collisionStart", function (event) {
      const pairs = event.pairs;

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
            default:
              break;
          }
        }
      }
    });

    Events.on(engine, "collisionEnd", function (event) {
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        let ballBody, plinkBody;

        for (let [key, value] of Object.entries(bodies)) {
          const secondBody = pair[key === "bodyA" ? "bodyB" : "bodyA"];
          switch (value.label) {
            case "ball":
              ballBody = { ...value };
              break;
            case "plink":
              plinkBody = { ...value };
              break;
            default:
              break;
          }
        }

        if (ballBody && plinkBody) {
          handleCollisionBall(ballBody, plinkBody);
          const plinkoGraphic = getGraphicByBodyKey(plinkBody);
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
    const { Body } = this;

    const angleAbsolute =
      plinkBody.position.y - (ballBody.position.y + ballBody.circleRadius) - 4;

    if (angleAbsolute >= 0) {
      const resWays = ballBody.resWays;
      const plinkoRow = plinkBody.rowIndex;
      if (resWays) {
        Body.setVelocity(ballBody, {
          x: resWays[plinkoRow - 2] === "+" ? 1 : -1,
          y: -2.8,
        });
      }
    }
  };

  textResultAnimate = (graphic) => {
    graphic.isActiveAnimation = true;
    const yPos = graphic.position.y;
    const tween = new TWEEN.Tween({
      x: graphic.position.x,
      y: yPos,
    });
    tween.easing(TWEEN.Easing.Bounce.Out);
    tween.to({ y: [yPos + 10, yPos] }, 300).start();
    tween.onUpdate(function ({ x, y }) {
      graphic.position.y = y;
    });
    tween.onComplete(() => {
      graphic.isActiveAnimation = false;
    });
  };
}

export default EventsListeners;
