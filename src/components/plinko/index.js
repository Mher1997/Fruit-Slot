import { Bodies } from "matter-js";
import { Graphics } from "pixi.js";

const Plinko = (options) => {
  const { x, y, radius, rowIndex, category } = options;

  const body = Bodies.circle(x, y, radius, {
    isStatic: true,
    friction: 1,
    restitution: 1,
    density: 1,
    collisionFilter: {
      category,
    },
    rowIndex,
    label: "plinko",
  });

  const graphics = new Graphics();
  graphics.lineStyle(0);
  graphics.beginFill(0x99feff, 1);
  graphics.drawCircle(x, y, radius);

  return { body, graphics };
};

export default Plinko;
