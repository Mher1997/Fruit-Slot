import { Bodies } from "matter-js";
import { Graphics } from "pixi.js";

const DeadLine = (options) => {
  const { x, y, width, height } = options;

  const body = Bodies.rectangle(x, y, width, height, {
    isStatic: true,
    isSensor: true,
    label: "endLine",
  });

  const graphics = new Graphics();
  graphics.beginFill(0xde3249);
  graphics.drawRect(x, y, width, height);
  graphics.endFill();

  return { body, graphics };
};

export default DeadLine;
