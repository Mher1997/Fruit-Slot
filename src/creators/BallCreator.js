import { Graphics, Text, TextStyle } from "pixi.js";
import AppRoot from "../AppRoot";
import PlinkoBall from "../components/plinkoBall";
import appConstants from "../core/constants";
import { getAsset, resultAction } from "../core/helpers";
import { store } from "../core/store";

const { ballCategory, plinkoCategory } = appConstants.categories;

class BallCreator extends AppRoot {
  async init() {
    this.renderButton();
  }

  handlePlink = async () => {
    const { length, cloudHeight, ballRadius } = store.get();
    const {
      sceneContainer,
      sceneContainerCenter,
      world,
      World,
      addSceneObject,
    } = this;

    const ways = length - 2;
    const ballType = Math.floor(Math.random() * 3) + 1;
    const ball = await getAsset(`ballTexture-${ballType}`);
    let resWays = [];
    // let result =
    //   resultAction.get() === "Random"
    //     ? Math.floor(Math.random(0, ways) * 10)
    //     : resultAction.get();

    let result = 2;

    for (let i = 0; i < ways; i++) {
      resWays.push(i < result ? "+" : "-");
    }

    const { body, graphics } = PlinkoBall({
      x: sceneContainerCenter,
      y: cloudHeight * 0.7,
      resWays,
      texture: ball,
      radius: ballRadius,
      category: ballCategory,
      mask: plinkoCategory,
    });

    sceneContainer.addChild(graphics);
    World.addBody(world, body);

    addSceneObject({
      body,
      sprite: graphics,
    });
  };

  renderButton = () => {
    const { sceneContainer, handlePlink } = this;

    const button = new Graphics();
    const [x, y] = [sceneContainer.x + 100, sceneContainer.y + 180];

    button.beginFill(0xde3249);
    button.drawCircle(x, y, 20);
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

    // setInterval(handlePlink, 2000);
    sceneContainer.addChild(button, buttonText);
  };
}

export default BallCreator;
