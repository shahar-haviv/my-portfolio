// import React, { useEffect, useRef } from 'react';
// import Matter, { Bodies, Body, Composite, Engine, Mouse, MouseConstraint, Render, Runner } from 'matter-js';

// const iconTextures: string[] = [
//   new URL('../assets/tech-icons/typescript.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/typeorm.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/docker.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/postman.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/postgresql.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/git.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/github.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/mongodb.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/elastic.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/python.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/clojure.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/terraform.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/rabbitmq.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/mysql.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/kubernetes.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/bun.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/ubuntu.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/nestjs.svg', import.meta.url).href,
//   new URL('../assets/tech-icons/google_cloud-icon.svg', import.meta.url).href,
// ];

// const getRandomIcon = () => iconTextures[Math.floor(Math.random() * iconTextures.length)];

// const createIconBody = (x: number, y: number, size: number) => {
//   const radius = size / 2;
//   const body = Bodies.circle(x, y, radius, {
//     restitution: 0.25,
//     friction: 0.6,
//     frictionStatic: 0.8,
//     render: {
//       sprite: {
//         texture: getRandomIcon(),
//         xScale: size / 96,
//         yScale: size / 96,
//       },
//       strokeStyle: 'rgba(255,255,255,0.25)',
//       lineWidth: 2,
//     },
//   });
//   return body;
// };

// const addJarWalls = (world: Matter.World, width: number, height: number) => {
//   const wallThickness = Math.max(22, Math.min(46, Math.floor(width * 0.025)));
//   const jarInnerWidth = Math.max(360, Math.min(width * 0.8, 820));
//   const jarHeight = Math.max(380, Math.min(height * 0.82, 700));
//   const jarBottomY = Math.min(height - wallThickness * 0.6, height * 0.9);
//   const centerX = width / 2;

//   // Bottom base
//   const bottom = Bodies.rectangle(centerX, jarBottomY, jarInnerWidth, wallThickness, {
//     isStatic: true,
//     chamfer: { radius: wallThickness * 0.5 },
//     render: { fillStyle: 'rgba(200,230,255,0.12)', strokeStyle: 'rgba(255,255,255,0.35)', lineWidth: 2 },
//   });

//   // Left and right slanted sides (to resemble a jar)
//   const sideHeight = jarHeight * 0.92;
//   const sideOffsetX = jarInnerWidth / 2 - wallThickness / 2;
//   const sideAngle = 0.12; // radians (slightly less slanted for a wider mouth)

//   const left = Bodies.rectangle(
//     centerX - sideOffsetX,
//     jarBottomY - sideHeight / 2,
//     wallThickness,
//     sideHeight,
//     {
//       isStatic: true,
//       angle: sideAngle,
//       render: { fillStyle: 'rgba(200,230,255,0.12)', strokeStyle: 'rgba(255,255,255,0.35)', lineWidth: 2 },
//     }
//   );

//   const right = Bodies.rectangle(
//     centerX + sideOffsetX,
//     jarBottomY - sideHeight / 2,
//     wallThickness,
//     sideHeight,
//     {
//       isStatic: true,
//       angle: -sideAngle,
//       render: { fillStyle: 'rgba(200,230,255,0.12)', strokeStyle: 'rgba(255,255,255,0.35)', lineWidth: 2 },
//     }
//   );

//   // Remove top rim so tokens can easily enter the jar
//   Composite.add(world, [bottom, left, right]);
// };

// const TechStack: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const width = container.clientWidth;
//     const height = Math.max(520, Math.min(900, Math.floor(window.innerHeight * 0.8)));

//     const engine = Engine.create({ gravity: { x: 0, y: 1, scale: 0.0013 } });
//     const world = engine.world;

//     const render = Render.create({
//       element: container,
//       engine,
//       options: {
//         width,
//         height,
//         background: 'transparent',
//         wireframes: false,
//         pixelRatio: Math.min(window.devicePixelRatio, 2),
//       },
//     });

//     addJarWalls(world, width, height);

//     // Add ground/outer walls to keep anything in view if it escapes the jar
//     const boundsThickness = 100;
//     const floor = Bodies.rectangle(width / 2, height + boundsThickness / 2, width * 2, boundsThickness, { isStatic: true, render: { visible: false } });
//     const wallL = Bodies.rectangle(-boundsThickness / 2, height / 2, boundsThickness, height * 2, { isStatic: true, render: { visible: false } });
//     const wallR = Bodies.rectangle(width + boundsThickness / 2, height / 2, boundsThickness, height * 2, { isStatic: true, render: { visible: false } });
//     Composite.add(world, [floor, wallL, wallR]);

//     // Mouse interaction for fun
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse,
//       constraint: {
//         stiffness: 0.08,
//         render: { visible: false },
//       },
//     });
//     Composite.add(world, mouseConstraint);
//     (render as any).mouse = mouse;

//     Render.run(render);
//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     const spawnAreaWidth = Math.max(120, Math.floor(width * 0.45));
//     const startX = width / 2 - spawnAreaWidth / 2;

//     // Progressive filling
//     const iconSize = 64; // uniform size for all icons
//     let spawned = 0;
//     const maxSpawn = 56;
//     const interval = window.setInterval(() => {
//       if (spawned >= maxSpawn) {
//         window.clearInterval(interval);
//         return;
//       }
//       const x = startX + Math.random() * spawnAreaWidth;
//       const y = -40 - Math.random() * 60;
//       const icon = createIconBody(x, y, iconSize);
//       Composite.add(world, icon);
//       spawned += 1;
//     }, 900);

//     const handleResize = () => {
//       const newWidth = container.clientWidth;
//       render.canvas.width = newWidth;
//       render.options.width = newWidth;
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.clearInterval(interval);
//       Render.stop(render);
//       Runner.stop(runner);
//       Composite.clear(engine.world, false);
//       Engine.clear(engine);
//       if ((render.canvas as any).remove) {
//         (render.canvas as any).remove();
//       } else if (render.canvas.parentNode) {
//         render.canvas.parentNode.removeChild(render.canvas);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full">
//       <div
//         ref={containerRef}
//         className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-black/10 backdrop-blur-sm"
//         style={{ overflow: 'hidden' }}
//       />
//       <p className="mt-4 text-white/70 text-sm">Drag icons to play. They settle into the jar.</p>
//     </div>
//   );
// };

// export default TechStack;


