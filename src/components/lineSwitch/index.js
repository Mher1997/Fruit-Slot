import { Sprite, Container, Text, TextStyle } from "pixi.js";
import AppInit from "../../AppRoot";
import { getAssets } from "../../core/helpers";
import { store } from "../../core/store";

class LineSwitch extends AppInit {
  async init(updater) {
    this.updater = updater;

    if (!LineSwitch.assets) {
      LineSwitch.assets = await getAssets(
        "lineChangeBoxTexture",
        "minusTexture",
        "plusTexture"
      );
    }

    this.render();
  }

  update() {
    this.sceneContainer.removeChild(this.graphics);
    this.render();
  }

  render() {
    const { lineChangeBoxTexture, minusTexture, plusTexture } =
      LineSwitch.assets;

    const { sceneContainer, sceneContainerHeight, updater } = this;

    const { length } = store.get();
    const text = textCreator(length);

    const plusGraphic = Sprite.from(plusTexture);
    const minusGraphic = Sprite.from(minusTexture);
    const lineChangeBoxGraphic = Sprite.from(lineChangeBoxTexture);

    const containerPositions = { x: 100, y: sceneContainerHeight / 2 - 200 };

    plusGraphic.interactive = true;
    plusGraphic.cursor = "pointer";
    plusGraphic.anchor.set(0.5, 0.5);
    plusGraphic.y = -plusGraphic.height + 6;
    plusGraphic.on("pointerdown", () => {
      store.setLength(length + 1);
      updater();
    });

    minusGraphic.interactive = true;
    minusGraphic.cursor = "pointer";
    minusGraphic.anchor.set(0.5, 0.5);
    minusGraphic.y = minusGraphic.height + 10;
    minusGraphic.on("pointerdown", () => {
      store.setLength(length - 1);
      updater();
    });

    lineChangeBoxGraphic.anchor.set(0.5, 0.5);

    const graphics = new Container();
    graphics.x = containerPositions.x;
    graphics.y = containerPositions.y;

    graphics.addChild(lineChangeBoxGraphic, plusGraphic, minusGraphic, text);

    this.graphics = graphics;
    sceneContainer.addChild(graphics);
  }
}

const textCreator = (value) => {
  const style = new TextStyle({
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 400,
    fill: "#FFFFFF",
  });

  const text = new Text(value, style);
  text.y = 3;
  text.anchor.set(0.5, 0.5);
  text.zIndex = 5;

  return text;
};

export default LineSwitch;
