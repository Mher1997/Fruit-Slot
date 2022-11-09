export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getPairs = (pairs, callback) => {
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

    let ballBody, plinkoBody, endLineBody;

    for (let [key, value] of Object.entries(bodies)) {
      switch (value.label) {
        case "ball":
          ballBody = { ...value };
          break;
        case "plinko":
          plinkoBody = { ...value };
          break;
        case "endLine":
          World.remove(world, pair[key === "bodyA" ? "bodyB" : "bodyA"]);
          endLineBody = { ...value };
          break;
        default:
          break;
      }
    }

    return { ballBody, plinkoBody, endLineBody };
  }
};

export const resultAction = (() => {
  let result = "Random";
  return {
    get: () => result,
    change: (value) => (result = value),
  };
})();
