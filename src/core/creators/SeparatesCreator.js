import { Graphics, Text } from "pixi.js";
import Separate from "../../components/separate";
import { resultAction } from "../helpers";
import PlinkoCreator from "./PlinkosCreator";
import TextCreator from "./TextCreator";

class SeparatesCreator extends PlinkoCreator {
  init() {
    const {
      app,
      gapX,
      length,
      sceneContainerCenter,
      sceneContainerHeight,
      sceneContainerWidth,
      polygonsStartY,
      world,
      World,
    } = this;

    const resultBox = new Graphics();
    resultBox.beginFill(0xffffff);
    resultBox.drawRect(100, 100, 200, 50);
    resultBox.endFill();

    const resultText = new Text(resultAction.get());
    resultText.x = 200;
    resultText.y = 125;
    resultText.anchor.set(0.5, 0.5);

    const modeText = new Text("Mode", {
      fontFamily: "Arial",
      fill: ["#ffffff"],
      stroke: "#004620",
      fontSize: 22,
      fontWeight: "lighter",
    });
    modeText.x = 200;
    modeText.y = 70;
    modeText.anchor.set(0.5, 0.5);

    const randomModeBox = new Graphics();
    randomModeBox.beginFill(0x04293a);
    randomModeBox.lineStyle(1, 0x393e46, 1);
    randomModeBox.drawRect(
      sceneContainerWidth - 350,
      polygonsStartY + 10,
      300,
      50
    );
    randomModeBox.endFill();
    randomModeBox.interactive = true;
    randomModeBox.cursor = "pointer";

    randomModeBox.on("pointerdown", (e) => {
      resultAction.change("Random");
      resultText.text = resultAction.get();
      app.stage.children.forEach((item) => {
        if (item.label === "text-result") {
          item.style.fontSize = 14;
        }
      });
    });

    const randomModeText = new Text("Switch to random mode", {
      fontFamily: "Arial",
      dropShadowColor: "0x111111",
      fill: ["#ffffff"],
      stroke: "#0008C1",
      fontSize: 20,
      fontWeight: "lighter",
      lineJoin: "round",
      strokeThickness: 4,
    });
    randomModeText.x = sceneContainerWidth - 200;
    randomModeText.y = polygonsStartY + 35;
    randomModeText.anchor.set(0.5, 0.5);

    const chooseBoxText = new Text("Choose the box", {
      fontFamily: "Arial",
      dropShadow: true,
      dropShadowAlpha: 0.8,
      dropShadowAngle: 2.1,
      dropShadowBlur: 4,
      dropShadowColor: "0x111111",
      dropShadowDistance: 10,
      fill: ["#ffffff"],
      stroke: "#004620",
      fontSize: 40,
      fontWeight: "lighter",
      lineJoin: "round",
      strokeThickness: 12,
    });
    chooseBoxText.x = 200;
    chooseBoxText.y = polygonsStartY + 35;
    chooseBoxText.anchor.set(0.5, 0.5);

    const width = 1;
    const height = 70;

    const handleChangeResult = () => {
      const result = resultAction.get();
      app.stage.children.forEach((item) => {
        if (item.label === "text-result") {
          item.style.fontSize = 14;
        }
      });
      resultText.text = result + 1;
    };

    for (let i = 0; i < length; i++) {
      const itemX =
        i * gapX - (gapX * length) / 2 + gapX / 2 + sceneContainerCenter;

      const { body, graphics } = Separate({
        x: itemX,
        y: polygonsStartY,
        width,
        height,
      });

      new TextCreator().init(
        itemX,
        polygonsStartY,
        height,
        i,
        handleChangeResult
      );
      app.stage.addChild(graphics);
      World.addBody(world, body);
    }

    app.stage.addChild(
      resultBox,
      resultText,
      randomModeBox,
      randomModeText,
      chooseBoxText,
      modeText
    );
  }
}

export default SeparatesCreator;
