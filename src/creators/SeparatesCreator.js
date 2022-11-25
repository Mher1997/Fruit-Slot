import { Text } from "pixi.js";
import PlinkoCreator from "./PlinkosCreator";
import Separate from "../components/separate";
import SeparateText from "../components/separateText";
import { getAsset, resultAction } from "../core/helpers";
import { store } from "../core/store";

class SeparatesCreator extends PlinkoCreator {
  async init(updater) {
    this.updater = updater;

    this.render();
  }

  update() {
    const { sceneContainer, world, World, graphics, bodies } = this;

    bodies?.forEach((item) => World.remove(world, item));
    graphics?.forEach((item) => sceneContainer.removeChild(item));

    this.render();
  }

  async render() {
    this.bodies = [];
    this.graphics = [];

    const { length, gapX, plinkRadius, cloudHeight, gapY } = store.get();
    const { sceneContainer, sceneContainerCenter, world, World } = this;

    const resultText = new Text(resultAction.get());
    resultText.x = 200;
    resultText.y = 125;
    resultText.anchor.set(0.5, 0.5);

    const width = gapX - plinkRadius;
    const height = width / 1.32;
    const separateY = (length - 2) * gapY + cloudHeight;

    const handleChangeResult = () => {
      const result = resultAction.get();

      sceneContainer.children.forEach((item) => {
        if (item.label === "text-result") {
          item.style.fontSize = 14;
        }
      });
      resultText.text = result + 1;
    };

    for (let i = 0; i < length - 1; i++) {
      const graphicKey = `result-${i + 1}`;
      const separateX =
        i * gapX + sceneContainerCenter - (gapX * length) / 2 + gapX;

      const category = Math.abs(Math.ceil(i + 1 - length / 2)) || 1;
      const texture = await getAsset(`separateTexture${category}`);
      const defaultTexture = await getAsset("separateTexture1");

      const { body, graphics } = Separate({
        x: separateX,
        y: separateY,
        width,
        height,
        graphicKey,
        texture: texture || defaultTexture,
        callback: handleChangeResult,
      });

      const { graphics: separateText } = SeparateText({
        x: separateX,
        y: separateY,
        category,
        graphicKey,
        height,
      });

      this.graphics.push(graphics);
      this.graphics.push(separateText);
      this.bodies.push(body);

      sceneContainer.addChild(separateText, graphics);
      World.addBody(world, body);
    }
  }
}

export default SeparatesCreator;
