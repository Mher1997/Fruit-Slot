import { Sprite } from "pixi.js";
import { getAsset } from "../../core/helpers";
import { store } from "../../core/store";
import BallCreator from "../../creators/BallCreator";

class CloudGraphic extends BallCreator {
  async init() {
    if (!CloudGraphic.asset) {
      CloudGraphic.asset = await getAsset(`cloudTexture`);
    }

    this.render();
  }

  update() {
    this.sceneContainer.removeChild(this.graphics);
    this.render();
  }

  render() {
    const texture = CloudGraphic.asset;
    const { cloudHeight } = store.get();
    const { sceneContainer, sceneContainerCenter } = this;

    const graphics = Sprite.from(texture);
    graphics.width = cloudHeight * 1.41;
    graphics.height = cloudHeight;
    graphics.y = 0;
    graphics.x = sceneContainerCenter;
    graphics.anchor.set(0.5, 0);
    graphics.zIndex = 2;

    this.graphics = graphics;
    sceneContainer.addChild(graphics);
  }
}

export default CloudGraphic;
