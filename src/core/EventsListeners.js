import AppInit from "./AppInit";
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
      app,
      getBodyGraphic,
      textResultAnimate,
      handleCollisionBall,
    } = this;

    Events.on(engine, "collisionStart", function (event) {
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        for (let [key, value] of Object.entries(bodies)) {
          if (value.label === "plinko") {
            value.render.fillStyle = "red";
          }
        }
      }
    });

    Events.on(engine, "collisionActive", function (event) {
      const pairs = event.pairs;
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        for (let [key, value] of Object.entries(bodies)) {
          if (value.label === "plinko") {
            value.render.fillStyle = "red";
          }
        }
      }
    });

    Events.on(engine, "collisionEnd", function (event) {
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

        let ballBody, plinkoBody;

        for (let [key, value] of Object.entries(bodies)) {
          const secondValue = pair[key === "bodyA" ? "bodyB" : "bodyA"];
          switch (value.label) {
            case "ball":
              ballBody = { ...value };
              break;
            case "plinko":
              plinkoBody = { ...value };
              break;
            case "endLine": {
              const { body, graphic } = getBodyGraphic(
                secondValue,
                "graphicKey"
              );

              app.stage.removeChild(graphic);
              World.remove(world, body);
              break;
            }
            case "separate":
              const { graphic } = getBodyGraphic(value, "id");
              const { isActiveAnimation } = graphic;
              if (!isActiveAnimation) {
                textResultAnimate(graphic);
              }
              break;
            default:
              break;
          }
        }

        if (ballBody && plinkoBody) {
          handleCollisionBall(ballBody, plinkoBody);
        }
      }
    });
  }

  getBodyGraphic = (body, key) => {
    const { app } = this;
    const bodyValue = body[key];
    const graphic = app.stage.children.find((item) => item[key] === bodyValue);

    return { body, graphic };
  };

  handleCollisionBall = (ballBody, plinkoBody) => {
    const { Body } = this;

    const angleAbsolute =
      plinkoBody.position.y - (ballBody.position.y + ballBody.circleRadius) - 4;

    if (angleAbsolute >= 0) {
      const resWays = ballBody.resWays;
      const plinkoRow = plinkoBody.rowIndex;
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
    tween.to({ y: [yPos + 10, yPos] }, 500).start();
    tween.onUpdate(function ({ x, y }) {
      graphic.position.y = y;
    });
    tween.onComplete(() => {
      graphic.isActiveAnimation = false;
    });
  };
}

export default EventsListeners;
