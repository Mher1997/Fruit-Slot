import AppInit from "../AppInit";
import Plinko from "../../components/plinko";

class PlinkosCreator extends AppInit {
  constructor() {
    super();
    this.gapY = this.gapX * 1.125;
    this.plinkoCategory = 0x0001;
    this.polygonsStartY = this.sceneContainerHeight;
    this.plinkosStartY = this.polygonsStartY - 30 - this.length * this.gapY;
  }

  init() {
    const {
      gapX,
      gapY,
      length,
      plinkoCategory,
      plinkosStartY,
      sceneContainerCenter,
      app,
      world,
      World,
    } = this;

    World.remove(world, world.bodies);
    while (app.stage.children[0]) {
      app.stage.removeChild(app.stage.children[0]);
    }

    for (let i = 0; i < length; i++) {
      if (i > 1) {
        const itemY = i * gapY + plinkosStartY;
        const startCountFromX = -i / 2;

        for (let j = 0; j <= i; j++) {
          const itemX = (startCountFromX + j) * gapX + sceneContainerCenter;

          const { body, graphics } = Plinko({
            x: itemX,
            y: itemY,
            radius: 5,
            rowIndex: i,
            category: plinkoCategory,
          });

          app.stage.addChild(graphics);
          World.addBody(world, body);
        }
      }
    }
  }
}

export default PlinkosCreator;
