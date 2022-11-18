import { Assets, Graphics, Text, TextStyle } from "pixi.js";
import PlinkoBall from "../../components/plinkoBall";
import PlinkoCreator from "./PlinkosCreator";
import { resultAction } from "../helpers";

class BallCreator extends PlinkoCreator {
  constructor() {
    super();
    console.log(this.gapX, "this.gapX");
    this.ballCategory = 0x0002;
    this.ways = this.length - 2;
    this.ballRadius = this.gapX / 2.78;
  }

  handlePlink = () => {
    const {
      Container,
      ways,
      world,
      ballRadius,
      ballCategory,
      cloudY,
      plinkoCategory,
      sceneContainerCenter,
      addSceneObject,
      World,
    } = this;

    const ballType = Math.floor(Math.random() * 3) + 1;
    const ball = Assets.get(`ballTexture-${ballType}`);

    let resWays = [];
    // let result =
    //   resultAction.get() === "Random"
    //     ? Math.floor(Math.random(0, ways) * 10)
    //     : resultAction.get();

    let result = 0;

    for (let i = 0; i < ways; i++) {
      resWays.push(i < result ? "+" : "-");
    }

    const { body, graphics } = PlinkoBall({
      x: sceneContainerCenter,
      y: cloudY + 20,
      resWays,
      texture: ball,
      radius: ballRadius,
      category: ballCategory,
      mask: plinkoCategory,
    });

    Container.addChild(graphics);
    World.addBody(world, body);

    addSceneObject({
      body,
      sprite: graphics,
    });
  };

  renderButton = () => {
    const { Container, handlePlink } = this;

    const button = new Graphics();
    const [x, y] = [this.sceneContainerCenter + 300, 100];

    button.beginFill(0xde3249);
    button.drawCircle(x, y, 50);
    button.endFill();
    button.interactive = true;
    button.cursor = "pointer";
    button.zIndex = 1;

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

    const buttonText = new Text("Bet", style);
    buttonText.x = x;
    buttonText.y = y;
    buttonText.anchor.set(0.5, 0.5);
    buttonText.zIndex = 5;

    button.on("pointerdown", () => {
      handlePlink();
    });

    Container.addChild(button, buttonText);
  };

  async init() {
    setInterval(this.handlePlink, 500);
    // this.renderButton();
  }
}

export default BallCreator;
