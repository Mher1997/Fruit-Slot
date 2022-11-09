import AppInit from "../AppInit";
import DeadLine from "../../components/deadLine";

class DeadLineCreator extends AppInit {
  constructor() {
    super();
    this.gapY = this.gapX * 1.125;
    this.plinkoCategory = 0x0001;
    this.polygonsStartY = this.sceneContainerHeight - 100;
    this.plinkosStartY = this.polygonsStartY - 30 - this.length * this.gapY;
  }

  init() {
    const {
      plinkoCategory,
      sceneContainerWidth,
      sceneContainerHeight,
      app,
      world,
      World,
    } = this;

    const { body, graphics } = DeadLine({
      x: 0,
      y: sceneContainerHeight,
      width: sceneContainerWidth,
      height: 1,
      category: plinkoCategory,
    });

    app.stage.addChild(graphics);
    World.addBody(world, body);
  }
}

export default DeadLineCreator;
