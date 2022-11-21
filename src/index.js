import * as PIXI from "pixi.js";
import App from "./App";
import EventsListeners from "./core/services/EventsListeners";
import BallCreator from "./core/creators/BallCreator";
import PlinkosCreator from "./core/creators/PlinkosCreator";
import SeparatesCreator from "./core/creators/SeparatesCreator";
import CloudGraphic from "./components/cloudGraphic";

window.__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

document.addEventListener("DOMContentLoaded", () => {
  new App(16, 3);
  new PlinkosCreator().init();
  new SeparatesCreator().init();
  new BallCreator().init();
  new CloudGraphic().init();
  new EventsListeners().init();
});
