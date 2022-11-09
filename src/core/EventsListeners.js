import AppInit from "./AppInit";

class EventsListeners extends AppInit {
  constructor() {
    super();
  }

  init() {
    const {
      Events,
      World,
      world,
      engine,
      app,
      getBodyGraphic,
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
          switch (value.label) {
            case "ball":
              ballBody = { ...value };
              break;
            case "plinko":
              plinkoBody = { ...value };
              break;
            case "endLine": {
              const { body, graphic } = getBodyGraphic(key, pair, "graphicKey");

              app.stage.removeChild(graphic);
              World.remove(world, body);
              break;
            }
            case "text4":
              const { graphic } = getBodyGraphic(key, pair, "label");
              app.stage.removeChild(graphic);
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

  getBodyGraphic = (pairBodyKey, pair, key) => {
    const { app } = this;
    const body = pair[pairBodyKey === "bodyA" ? "bodyB" : "bodyA"];
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
}

export default EventsListeners;
