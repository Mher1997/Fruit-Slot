import Matter, { Body, World } from "matter-js";
import "./index.scss";

const windowCenter = window.innerWidth / 2;

// module aliases
const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint;

// create an engine
const engine = Engine.create();
const world = engine.world;

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight - 10,
    wireframes: false,
  },
});

world.gravity.y = 1.6;

// run the renderer
Render.run(render);

const runner = Runner.create();
Runner.run(runner, engine);

const polygons = [];
const category1 = 0x0001;
const category2 = 0x0002;
const circles = [];
const startFromX = 1002;
const startFromY = 200;
const gapY = 45;
const gapX = 37.5;

const plinkos = 13;
const ways = plinkos - 2;

for (let i = 0; i < plinkos; i++) {
  const item = Bodies.rectangle(775 + i * 38, 850, 70, 1, {
    isStatic: true,
    angle: Math.PI * 0.5,
  });

  polygons.push(item);
}

// polygons.push(
//   Bodies.rectangle(windowCenter, window.innerHeight, windowCenter, 1, {
//     isStatic: true,
//   })
// );

// plinkos
for (let i = 0; i < plinkos; i++) {
  const startY = i * gapY + startFromY;
  if (i !== 0) {
    const startCountFromX = -i / 2;
    for (let j = 0; j <= i; j++) {
      const item = Bodies.circle(
        (startCountFromX + j) * gapX + startFromX,
        startY,
        5,
        {
          isStatic: true,
          friction: 1,
          restitution: 1,
          density: 1,
          collisionFilter: {
            category: category1,
          },
          rowIndex: i,
          label: "plinko",
          render: {
            fillStyle: "white",
            lineWidth: 0,
          },
        }
      );

      circles.push(item);
    }
  }
}

Composite.add(world, circles);
Composite.add(world, polygons);
// Composite.add(world, stack);

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
  },
});

const handlePlink = () => {
  let resWays = [];

  let result = 6;

  for (let i = 0; i < ways; i++) {
    resWays.push(i < result ? "+" : "-");
  }

  Composite.add(
    world,
    Bodies.circle(1000, 200, 14, {
      isStatic: false,
      type: "body",
      friction: 1,
      restitution: 0.8,
      density: 0.1,
      label: "ball",
      resWays: shuffle(resWays),
      collisionFilter: {
        mask: category1,
        category: category2,
      },
      render: {
        fillStyle: "#13bccf",
        lineWidth: 0,
      },
    })
  );
};

Events.on(mouseConstraint, "mousedown", handlePlink);

Events.on(engine, "collisionStart", function (event) {
  const pairs = event.pairs;
  const { bodyA } = pairs[0];

  bodyA.render.fillStyle = "#13bccf";
});

Events.on(engine, "collisionActive", function (event) {
  const pairs = event.pairs;
  const { bodyA } = pairs[0];

  bodyA.render.fillStyle = "#13bccf";
});

Events.on(engine, "collisionEnd", function (event) {
  const pairs = event.pairs;

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const { bodyA, bodyB } = pair;
    let ballBody, plinko;

    if (bodyA.label === "ball") {
      ballBody = bodyA;
    }
    if (bodyA.label === "plinko") {
      plinko = bodyA;
    }
    if (bodyB.label === "ball") {
      ballBody = bodyB;
    }
    if (bodyB.label === "plinko") {
      plinko = bodyB;
    }

    if (ballBody && plinko) {
      const angleAbsolute =
        plinko.position.y - (ballBody.position.y + ballBody.circleRadius) - 3;

      if (angleAbsolute >= 0) {
        const resWays = ballBody.resWays;
        const plinkoRow = plinko.rowIndex;
        if (resWays) {
          Body.setVelocity(ballBody, {
            x: resWays[plinkoRow - 2] === "+" ? 1.5 : -1.5,
            y: -2,
          });
        }
      }
      plinko.render.fillStyle = "white";
    }
  }
});

Render.lookAt(render, Composite.allBodies(world));

Composite.add(world, mouseConstraint);

render.mouse = mouse;

function shuffle(array) {
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
}
