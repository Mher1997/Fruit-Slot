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
      plinkWidth,
      sceneContainerCenter,
      polygonsStartY,
      world,
      World,
    } = this;

    const resultText = new Text(resultAction.get());
    resultText.x = 200;
    resultText.y = 125;
    resultText.anchor.set(0.5, 0.5);

    const width = 36;
    const height = 20;

    const handleChangeResult = () => {
      const result = resultAction.get();
      Container.children.forEach((item) => {
        if (item.label === "text-result") {
          item.style.fontSize = 14;
        }
      });
      resultText.text = result + 1;
    };

    const loadGameAssets = await Assets.loadBundle("separates");

    for (let i = 0; i < length - 1; i++) {
      const graphicKey = `result-${i + 1}`;
      const x =
        i * gapX +
        sceneContainerCenter -
        (gapX * length) / 2 +
        gapX +
        plinkWidth / 2;
      const y = polygonsStartY - height / 2 - 30;
      const category = Math.abs(Math.ceil(i + 1 - length / 2)) || 1;

      const { body, graphics } = Separate({
        x,
        y,
        width,
        height,
        graphicKey,
        texture: loadGameAssets[`separateTexture${category}`],
        callback: handleChangeResult,
      });

      const { graphics: separateText } = SeparateText({
        x: x,
        y: y,
        category,
        graphicKey,
      });

      Container.addChild(separateText, graphics);
      World.addBody(world, body);
    }
  }
}

export default SeparatesCreator;
