import { Graphics } from "pixi.js";
import BallCreator from "../../core/creators/BallCreator";

class BallCircle extends BallCreator {
  constructor() {
    super();
  }

  init() {
    const { app, plinkosStartY, sceneContainerCenter, gapY, ballRadius } = this;
    const graphics = new Graphics();

    const y = plinkosStartY + gapY;
    const x = sceneContainerCenter;

    graphics.lineStyle(0);
    graphics.beginFill(0x000000, 1);
    graphics.drawCircle(x, y, ballRadius + 3);

    app.stage.addChild(graphics);
  }
}

export default BallCircle;
