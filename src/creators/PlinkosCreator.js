import AppInit from "../AppRoot";
import Plink from "../components/plink";
import appConstants from "../core/constants";
import { getAsset } from "../core/helpers";
import { store } from "../core/store";

const { plinkoCategory } = appConstants.categories;

class PlinkosCreator extends AppInit {
  async init() {
    if (!PlinkosCreator.asset) {
      PlinkosCreator.asset = await getAsset(`plinkTexture`);
    }

    this.render();
  }

  update() {
    const { sceneContainer, world, World, graphics, bodies } = this;

    bodies?.forEach((item) => World.remove(world, item));
    graphics?.forEach((item) => sceneContainer.removeChild(item));

    this.render();
  }

  render() {
    const { gapY, gapX, length, plinkRadius, cloudHeight } = store.get();
    const { sceneContainerCenter, sceneContainer, world, World } = this;

    const texture = PlinkosCreator.asset;

    this.bodies = [];
    this.graphics = [];

    for (let i = 0; i < length; i++) {
      if (i > 1) {
        const itemY = (i - 2) * gapY + cloudHeight;
        const startCountFromX = -i / 2;
        for (let j = 0; j <= i; j++) {
          const itemX = (startCountFromX + j) * gapX + sceneContainerCenter;

          const { body, graphics } = Plink({
            x: itemX,
            y: itemY,
            rowIndex: i,
            radius: plinkRadius,
            graphicKey: `${i}-${j}`,
            category: plinkoCategory,
            texture,
          });

          this.graphics.push(graphics);
          this.bodies.push(body);

          sceneContainer.addChild(graphics);
          World.addBody(world, body);
        }
      }
    }
  }
}

export default PlinkosCreator;
