import { Bodies } from "matter-js";
import { Sprite } from "pixi.js";

const Separate = (options) => {
  const { x, y, width, graphicKey, texture } = options;
  const label = "separate";

  const body = Bodies.rectangle(x, y, width - 10, 1, {
    isStatic: true,
    isSensor: true,
    graphicKey,
    label,
  });

  const graphics = Sprite.from(texture);
  graphics.x = x;
  graphics.y = y;
  graphics.anchor.set(0.5);
  graphics.width = width;
  graphics.zIndex = 2;

  return { body, graphics };
};

export default Separate;
