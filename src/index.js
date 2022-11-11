import AppInit from "./core/AppInit";
import EventsListeners from "./core/EventsListeners";
import DeadLineCreator from "./core/creators/DeadLineCreator";
import BallCreator from "./core/creators/BallCreator";
import PlinkosCreator from "./core/creators/PlinkosCreator";
import SeparatesCreator from "./core/creators/SeparatesCreator";
import * as PIXI from "pixi.js";
import BallCircle from "./components/ballCircle";

window.__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

document.addEventListener("DOMContentLoaded", () => {
  new AppInit(40, 11, 3);
  new PlinkosCreator().init();
  new SeparatesCreator().init();
  new DeadLineCreator().init();
  new BallCreator().init();
  new BallCircle().init();
  new EventsListeners().init();
});
