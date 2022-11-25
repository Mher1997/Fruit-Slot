import * as PIXI from "pixi.js";
import "./index.scss";
import AppRoot from "./AppRoot";
import EventsListeners from "./core/services/EventsListeners";
import BallCreator from "./creators/BallCreator";
import PlinkosCreator from "./creators/PlinkosCreator";
import SeparatesCreator from "./creators/SeparatesCreator";
import CloudGraphic from "./components/cloudGraphic";
import LineSwitch from "./components/lineSwitch";

window.__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

document.addEventListener("DOMContentLoaded", async () => {
  await PIXI.Assets.init({
    manifest: require("./core/resources/manifest.json"),
  });

  await PIXI.Assets.loadBundle("fonts");
  await PIXI.Assets.loadBundle("load-screen");
  await PIXI.Assets.loadBundle("game-screen");
  await PIXI.Assets.loadBundle("separates");

  const canvasContainer = document.getElementById("game-app");
  const app = new PIXI.Application({
    resolution: 1,
    autoResize: true,
    resizeTo: window,
  });

  canvasContainer.appendChild(app.view);

  const appRoot = new AppRoot(app);
  const lineSwitch = new LineSwitch();
  const ballCreator = new BallCreator();
  const cloudGraphic = new CloudGraphic();
  const plinkosCreator = new PlinkosCreator();
  const separatesCreator = new SeparatesCreator();
  const eventsListeners = new EventsListeners();

  const updater = () => {
    appRoot.update();
    plinkosCreator.update();
    lineSwitch.update();
    separatesCreator.update();
    cloudGraphic.update();
  };

  appRoot.init();
  plinkosCreator.init();
  separatesCreator.init();
  ballCreator.init();
  cloudGraphic.init();
  lineSwitch.init(updater);

  eventsListeners.init();
});
