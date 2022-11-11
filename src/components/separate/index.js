import { Bodies } from "matter-js";
import { Graphics } from "pixi.js";
import { resultAction } from "../../core/helpers";

const Separate = (options, index, callback) => {
  const { x, y, width, height } = options;
  const separateIndex = index + 1;
  const label = "separate";
  const id = `result-${separateIndex}`;

  const body = Bodies.rectangle(x + width / 2, y, width, 1, {
    isStatic: true,
    isSensor: true,
    id,
    label,
  });

  const graphics = new Graphics();
  graphics.lineStyle(2, 0x374045, 1);
  graphics.beginFill(0xfffffff, 0.1);
  graphics.drawRect(x, y, width, height);

  graphics.interactive = true;
  graphics.cursor = "pointer";
  graphics.label = label;

  graphics.on("pointerdown", (e) => {
    resultAction.change(index);
    callback();
  });

  return { body, graphics };
};

export default Separate;
