import { Text } from "pixi.js";

const SeparateText = (options) => {
  const { x, y, length, graphicKey } = options;

  const separateLabel = Math.abs(length / 2);

  const text = new Text(separateLabel || 0.5, {
    fontFamily: "Arial",
    fontSize: 16,
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
