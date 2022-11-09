import { Text } from "pixi.js";
import { resultAction } from "../helpers";
import BallCreator from "./BallCreator";

class TextCreator extends BallCreator {
  constructor() {
    super();
  }

  init(x, y, height, index, callback) {
    const { length, gapX, app, world, World, Bodies } = this;

    const separateIndex = index + 1;
    const separateLabel = Math.abs(length / 2 - separateIndex);
    const textY = y + height / 2;
    const label = "text-result";

    const body = Bodies.rectangle(x, textY, gapX, 1, {
      isStatic: true,
      label,
      collisionFilter: {
        mask: true,
      },
    });

    const text = new Text(separateIndex < length ? separateLabel || 0.5 : "", {
      fontFamily: "Arial",
      fontSize: 14,
      fill:
        separateLabel < 1
          ? "#FF6464"
          : separateLabel === 1
          ? "#FDFF00"
          : separateLabel > 1 && separateLabel < 4
          ? "#9CFF2E"
          : "#38E54D",
    });

    text.x = x + 20;
    text.y = textY;
    text.anchor.set(0.5, 0.5);
    text.label = label;

    if (separateIndex < length) {
      text.interactive = true;
      text.cursor = "pointer";

      text.on("pointerdown", (e) => {
        resultAction.change(index);
        callback();
        e.target.style.fontSize = 20;
      });
    }

    app.stage.addChild(text);
    World.addBody(world, body);
  }
}

export default TextCreator;
