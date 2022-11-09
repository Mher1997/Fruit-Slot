import { Bodies } from "matter-js";
import { Graphics } from "pixi.js";
import { shuffle } from "../../core/helpers";

let graphicKey = 1;

const PlinkoBall = (options) => {
  const { x, y, radius, resWays, mask, category } = options;

  const body = Bodies.circle(x, y, radius, {
    isStatic: false,
    type: "body",
    friction: 1,
    restitution: 0.8,
    density: 0.1,
    label: "ball",
    graphicKey,
    resWays: shuffle(resWays),
    collisionFilter: {
      mask,
      category,
    },
  });

  const graphics = new Graphics();

  graphics.graphicKey = graphicKey;
  graphics.lineStyle(0);
  graphics.beginFill(0xfaf7f0, 1);
  graphics.drawCircle(0, 0, radius);
  graphics.endFill();

  graphicKey++;

  return { body, graphics };
};

export default PlinkoBall;
