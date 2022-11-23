import { Assets, Sprite } from "pixi.js";
import BallCreator from "../../core/creators/BallCreator";

class CloudGraphic extends BallCreator {
  async init() {
    const { Container, sceneContainerCenter, cloudHeight } = this;

    const loadGameAssets = await Assets.loadBundle("game-screen");
    const { cloudTexture } = loadGameAssets;

    const graphics = Sprite.from(cloudTexture);
    graphics.width = cloudHeight * 1.41;
    graphics.height = cloudHeight;
    graphics.y = 0;
    graphics.x = sceneContainerCenter;
    graphics.anchor.set(0.5, 0);
    graphics.zIndex = 2;

    Container.addChild(graphics);
  }
}

export default CloudGraphic;
