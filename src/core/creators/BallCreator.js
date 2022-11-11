import PlinkoBall from "../../components/plinkoBall";
import PlinkoCreator from "./PlinkosCreator";
import { Graphics, Text, TextStyle } from "pixi.js";
import { resultAction } from "../helpers";

class BallCreator extends PlinkoCreator {
  constructor() {
    super();
    this.ballCategory = 0x0002;
    this.ways = this.length - 2;
    this.ballRadius = this.gapX / 2.678;
  }

  handlePlink = () => {
    const {
      app,
      ways,
      world,
      ballRadius,
      ballCategory,
      plinkosStartY,
      plinkoCategory,
      sceneContainerCenter,
      addSceneObject,
      World,
    } = this;

    let resWays = [];
    let result =
      resultAction.get() === "Random"
        ? Math.floor(Math.random(0, ways) * 10)
        : resultAction.get();

    for (let i = 0; i < ways; i++) {
      resWays.push(i < result ? "+" : "-");
    }

    const { body, graphics } = PlinkoBall({
      x: sceneContainerCenter,
      y: plinkosStartY + 50,
      resWays,
      radius: ballRadius,
      category: ballCategory,
      mask: plinkoCategory,
    });

    app.stage.addChild(graphics);
    World.addBody(world, body);

    addSceneObject({
      body,
      sprite: graphics,
    });
  };

  renderButton = () => {
    const { app, plinkosStartY, handlePlink } = this;

    const button = new Graphics();
    const [x, y] = [this.sceneContainerCenter, plinkosStartY - 50];

    button.beginFill(0xde3249);
    button.drawCircle(x, y, 50);
    button.endFill();
    button.interactive = true;
    button.cursor = "pointer";

    const style = new TextStyle({
      fontFamily: "Arial",
      fontSize: 28,
      fontStyle: "italic",
      fontWeight: "bold",
      fill: ["#ffffff", "#00ff99"], // gradient
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: "round",
    });

    const buttonText = new Text("Plink", style);
    buttonText.x = x;
    buttonText.y = y;
    buttonText.anchor.set(0.5, 0.5);

    button.on("pointerdown", () => {
      handlePlink();
    });

    app.stage.addChild(button, buttonText);
  };

  init() {
    this.renderButton();
  }
}

export default BallCreator;
