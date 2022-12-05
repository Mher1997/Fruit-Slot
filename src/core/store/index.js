const canvasContainer = document.getElementById("game-app");
const ratio = 702 / 670;
let w, h;

if (canvasContainer.clientHeight / canvasContainer.clientWidth > 1) {
  h = canvasContainer.clientWidth / ratio;
  w = canvasContainer.clientWidth;
} else {
  h = canvasContainer.clientHeight / ratio;
  w = canvasContainer.clientHeight;
}

const plinkosContainerRatio = 702 / 550;
const plinkContainerHeight = h / plinkosContainerRatio;

const defaultParams = {
  length: 20,
};

const setStateByLength = (length) => {
  const state = { length };

  const gapAbs = plinkContainerHeight / (length - 2);
  const gap = gapAbs - gapAbs / (length * 2);

  state.gapX = gap;
  state.gapY = gap;
  state.cloudHeight = h / 4;
  state.plinkRadius = gap / 4.3 / 2; // "/2" for matter and pixi bodies
  state.ballRadius = state.gapX / 2 - state.plinkRadius;
  state.gravity = state.ballRadius / 6;
  state.plinkContainerHeight = plinkContainerHeight;
  state.gravityScale = gap * 0.00005;
  console.log(gap, "gap");
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
