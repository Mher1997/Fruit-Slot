import { Bodies } from "matter-js";
import { Sprite } from "pixi.js";

const Plink = (options) => {
  const { x, y, radius, rowIndex, category, texture, graphicKey } = options;

  const body = Bodies.circle(x, y, radius, {
    isStatic: true,
    friction: 1,
    restitution: 1,
    density: 1,
    collisionFilter: {
      category,
    },
    rowIndex,
    label: "plink",
    graphicKey,
  });

  const graphics = Sprite.from(texture);
  graphics.x = x;
  graphics.y = y;
  graphics.zIndex = 1;
  graphics.graphicKey = graphicKey;
  graphics.width = radius * 2;
  graphics.height = radius * 2;
  // graphics.scale.set(1);
  graphics.anchor.set(0.5, 0.5);

  return { body, graphics };
};

export default Plink;
