import { Bodies } from "matter-js";
import { Sprite } from "pixi.js";
import { shuffle } from "../../core/helpers";

let graphicKey = 1;

const PlinkoBall = (options) => {
  const { x, y, radius, resWays, mask, category, texture } = options;

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

  const graphics = Sprite.from(texture);
  graphics.width = radius * Math.PI + 6;
  graphics.height = radius * Math.PI + 6;
  graphics.graphicKey = graphicKey;
  graphics.anchor.set(0.5);
  graphics.zIndex = 1;

  graphicKey++;

  return { body, graphics };
};

export default PlinkoBall;
