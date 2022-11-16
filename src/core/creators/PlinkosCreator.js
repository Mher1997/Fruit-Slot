import { Assets } from "pixi.js";
import AppInit from "../../App";
import Plink from "../../components/plink";

class PlinkosCreator extends AppInit {
  constructor() {
    super();
    this.gapY = this.gapX * 1.125;
    this.plinkoCategory = 0x0001;
    this.polygonsStartY = this.sceneContainerHeight;
    this.plinkosStartY = this.polygonsStartY - 30 - this.length * this.gapY;
  }

  async init() {
    const {
      gapX,
      gapY,
      length,
      plinkoCategory,
      plinkosStartY,
      sceneContainerCenter,
      Container,
      world,
      World,
    } = this;

    // World.remove(world, world.bodies);
    // while (app.stage.children[0]) {
    //   app.stage.removeChild(app.stage.children[0]);
    // }

    const loadGameAssets = await Assets.loadBundle("game-screen");
    const { plinkTexture } = loadGameAssets;

    for (let i = 0; i < length; i++) {
      if (i > 1) {
        const itemY = i * gapY + plinkosStartY;
        const startCountFromX = -i / 2;

        for (let j = 0; j <= i; j++) {
          const itemX = (startCountFromX + j) * gapX + sceneContainerCenter;

          const { body, graphics } = Plink({
            x: itemX,
            y: itemY,
            radius: 5,
            rowIndex: i,
            category: plinkoCategory,
            texture: plinkTexture,
          });

          Container.addChild(graphics);
          World.addBody(world, body);
        }
      }
    }
  }
}

export default PlinkosCreator;
