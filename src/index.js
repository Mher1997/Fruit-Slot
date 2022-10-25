import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import "./index.scss";

const app = new PIXI.Application({
  autoResize: true,
  width: window.innerWidth,
  height: window.innerHeight - 5,
});

document.body.appendChild(app.view);

const container = new PIXI.Container();
const background = new PIXI.Sprite.from("background.png");

app.loader.add("spineboy", "spineboy.json").load(onAssetsLoaded);
app.stage.addChild(background);

container.interactive = true;
container.buttonMode = true;

function onAssetsLoaded(loader, { spineboy }) {
  const spineBoy = new Spine(spineboy.spineData);

  spineBoy.x = 100;
  spineBoy.y = app.screen.height;
  spineBoy.scale.set(0.8);

  container.addChild(spineBoy);
  app.stage.addChild(container);

  spineBoy.state.addListener({
    start: function (entry) {
      console.log("animation is set at " + entry.trackIndex);
    },
    end: function (entry) {
      const skeleton = spineBoy.skeleton;
      skeleton.setToSetupPose();
    },
  });

  const ticker = PIXI.Ticker.shared;
  ticker.autoStart = false;

  ticker.add((delta) => {
    spineBoy.x =
      (spineBoy.x + (delta * app.screen.width) / 500) %
      (app.screen.width + 100);
  });

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  let isKeyDown = false;

  function onKeyDown(key) {
    if (isKeyDown) {
      return;
    }
    spineBoy.state.clearTracks();
    if (key.keyCode === 87 || key.keyCode === 38) {
      spineBoy.state.setAnimation(1, "jump", false);
    }

    if (key.keyCode === 68 || key.keyCode === 39) {
      ticker.start();
      spineBoy.state.addAnimation(0, "walk", true);
    }
    isKeyDown = true;
  }

  function onKeyUp(key) {
    if (key.keyCode === 65 || key.keyCode === 37) {
      spineBoy.state.clearTracks();
    }

    if (key.keyCode === 68 || key.keyCode === 39) {
      ticker.stop();
      spineBoy.state.clearTracks();
    }
    isKeyDown = false;
  }
}
