import { Text } from "pixi.js";
import BallCreator from "./BallCreator";

class ResultTextCreator extends BallCreator {
  init(x, y, index) {
    const { length, app } = this;

    const separateIndex = index + 1;
    const separateLabel = Math.abs(length / 2 - separateIndex);
    const id = `result-${separateIndex}`;

    const text = new Text(separateLabel || 0.5, {
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

    text.x = x;
    text.y = y;
    text.anchor.set(0.5, 0.5);
    text.id = id;

    app.stage.addChild(text);
  }
}

export default ResultTextCreator;
