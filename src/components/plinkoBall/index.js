import { Bodies } from "matter-js";
import { Sprite } from "pixi.js";
import { shuffle } from "../../core/helpers";

let graphicKey = 1;

const PlinkoBall = (options) => {
  const { x, y, radius, resWays, mask, category, texture } = options;
  const shuffledWays = shuffle(resWays);

  const body = Bodies.circle(x, y, radius, {
    isStatic: false,
    type: "body",
    friction: 1, // lprcun
    density: 1, // xtutyun
    restitution: 0.3, //bouncing
    label: "ball",
    graphicKey,
    resWays: shuffledWays,
    collisionFilter: {
      mask,
      category,
    },
  });

  const graphics = Sprite.from(texture);
  graphics.width = radius * 2;
  graphics.height = radius * 2;
  graphics.graphicKey = graphicKey;
  graphics.zIndex = 1;
  graphics.anchor.set(0.5, 0.5);

  graphicKey++;

  return { body, graphics };
};

export default PlinkoBall;
