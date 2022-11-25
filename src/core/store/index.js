const canvasContainer = document.getElementById("game-app");
const ratio = 672 / 444;
let w, h;

if (canvasContainer.clientHeight / canvasContainer.clientWidth > 1) {
  h = canvasContainer.clientWidth / ratio;
  w = canvasContainer.clientWidth;
} else {
  h = canvasContainer.clientHeight / ratio;
  w = canvasContainer.clientHeight;
}

const defaultParams = {
  length: 12,
};

const setStateByLength = (length) => {
  const state = { length };
  state.gapX = (w * 0.7) / state.length;
  state.gapY = state.gapX * 1.2;
  state.plinkRadius = state.gapX / 2 / 4.3; // "/2" for matter and pixi bodies
  state.ballRadius = state.gapX / 2 - state.plinkRadius;
  state.cloudHeight = state.gapX * 2.8 + 50;
  state.gravity = state.ballRadius * 0.2;
  state.gravityScale = state.ballRadius * 0.00014;

  return state;
};

export const store = (() => {
  let state = { ...setStateByLength(defaultParams.length) };

  return {
    get: () => ({ ...state }),
    set: (payload) => {
      state = {
        ...state,
        ...payload,
      };
    },
    setLength: (payload) => {
      state = {
        ...state,
        ...setStateByLength(payload),
      };
    },
  };
})();
