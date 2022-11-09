import { Bodies } from "matter-js";
import { Graphics } from "pixi.js";

const Separate = (options) => {
  const { x, y, width, height } = options;

  const body = Bodies.rectangle(x, y, width, height, {
    isStatic: true,
  });

  const graphics = new Graphics();
  graphics.beginFill(0x374045);
  graphics.drawRect(x, y, width, height);
  graphics.endFill();
  graphics.interactive = true;

  return { body, graphics };
};

export default Separate;
