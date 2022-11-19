import { Assets, Text } from "pixi.js";
import PlinkoCreator from "./PlinkosCreator";
import Separate from "../../components/separate/";
import SeparateText from "../../components/separateText";
import { resultAction } from "../helpers";

class SeparatesCreator extends PlinkoCreator {
  async init() {
    const {
      Container,
      gapX,
      length,
      plinkRadius,
      cloudY,
      sceneContainerCenter,
      gapY,
      world,
      World,
    } = this;

    const resultText = new Text(resultAction.get());
    resultText.x = 200;
    resultText.y = 125;
    resultText.anchor.set(0.5, 0.5);

    const width = gapX - plinkRadius;
    const height = width / 1.32;
    const loadGameAssets = await Assets.loadBundle("separates");
    const separateY = (length - 2) * gapY + cloudY + 100;

    const handleChangeResult = () => {
      const result = resultAction.get();
      Container.children.forEach((item) => {
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

      const { body, graphics } = Separate({
        x: separateX,
        y: separateY,
        width,
        height,
        graphicKey,
        texture:
          loadGameAssets[`separateTexture${category}`] ||
          loadGameAssets.separateTexture7,
        callback: handleChangeResult,
      });

      const { graphics: separateText } = SeparateText({
        x: separateX,
        y: separateY,
        category,
        graphicKey,
        height,
      });

      Container.addChild(separateText, graphics);
      World.addBody(world, body);
    }
  }
}

export default SeparatesCreator;
