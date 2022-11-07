import Matter, { Body, World } from "matter-js";
import { shuffle } from "./helpers";
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

let result = 9;
const polygons = [];
const circles = [];
const category1 = 0x0001;
const category2 = 0x0002;
const gapX = 40;
const gapY = gapX * 1.125;
const plinkos = 14;
const ballWidth = gapX / 2.678;
const ways = plinkos - 2;
const polygonsStartY = window.innerHeight - 100;
const plinkosStartY = polygonsStartY - 30 - plinkos * gapY;

// plinkos
for (let i = 0; i < plinkos; i++) {
  if (i > 1) {
    const itemY = i * gapY + plinkosStartY;
    const startCountFromX = -i / 2;
    for (let j = 0; j <= i; j++) {
      const itemX = (startCountFromX + j) * gapX + windowCenter;
      const item = Bodies.circle(itemX, itemY, 5, {
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
      });

      circles.push(item);
    }
  }
}

// polygons
for (let i = 0; i < plinkos; i++) {
  const itemX = i * gapX - (gapX * plinkos) / 2 + gapX / 2 + windowCenter;

  const item = Bodies.rectangle(itemX, polygonsStartY, 70, 3, {
    isStatic: true,
    angle: Math.PI * 0.5,
  });

  polygons.push(item);
}

polygons.push(
  Bodies.rectangle(windowCenter, window.innerHeight, window.innerWidth, 1, {
    isStatic: true,
    isSensor: true,
    label: "endLine",
  })
);

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

  for (let i = 0; i < ways; i++) {
    resWays.push(i < result ? "+" : "-");
  }

  Composite.add(
    world,
    Bodies.circle(windowCenter, plinkosStartY + 50, ballWidth, {
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

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

    for (let [key, value] of Object.entries(bodies)) {
      if (value.label === "plinko") {
        value.render.fillStyle = "red";
      }
    }
  }
});

Events.on(engine, "collisionActive", function (event) {
  const pairs = event.pairs;
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

    for (let [key, value] of Object.entries(bodies)) {
      if (value.label === "plinko") {
        value.render.fillStyle = "red";
      }
    }
  }
});

Events.on(engine, "collisionEnd", function (event) {
  const pairs = event.pairs;

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const bodies = { bodyA: { ...pair.bodyA }, bodyB: { ...pair.bodyB } };

    let ballBody, plinkoBody;

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
          break;
        default:
          break;
      }
    }

    if (ballBody && plinkoBody) {
      const angleAbsolute =
        plinkoBody.position.y -
        (ballBody.position.y + ballBody.circleRadius) -
        4;

      if (angleAbsolute >= 0) {
        const resWays = ballBody.resWays;
        const plinkoRow = plinkoBody.rowIndex;
        if (resWays) {
          Body.setVelocity(ballBody, {
            x: resWays[plinkoRow - 2] === "+" ? 1 : -1,
            y: -2.8,
          });
        }
      }
      plinkoBody.render.fillStyle = "white";
    }
  }
});

Render.lookAt(render, Composite.allBodies(world));

Composite.add(world, mouseConstraint);

render.mouse = mouse;
