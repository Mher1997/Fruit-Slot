import { Text } from "pixi.js";

const SeparateText = (options) => {
  const { x, y, graphicKey, category, height } = options;

  const text = new Text(category - 0.5, {
    fontFamily: "Arial",
    fontSize: height / 1.6,
    fill: "#FFFFFF",
    fontWeight: 500,
    fontFamily: "Rubik Medium",
  });

  text.x = x;
  text.y = y;
  text.anchor.set(0.5, 0.5);
  text.graphicKey = graphicKey;
  text.zIndex = 3;

  return { graphics: text };
};

export default SeparateText;
