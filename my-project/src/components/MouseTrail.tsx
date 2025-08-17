// import { useEffect, useRef } from "react";

// const MouseTrail = () => {
//   const trailRef = useRef<HTMLDivElement[]>([]);
//   const lastTimeRef = useRef<number>(0);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const now = performance.now();

//       // Limit creation to ~15 dots per 0.5s
//       if (now - lastTimeRef.current < 33) return; // 500ms / 15 ≈ 33ms per dot
//       lastTimeRef.current = now;

//       // Create dot
//       const dot = document.createElement("div");
//       dot.className = "rounded-full pointer-events-none absolute";
//       dot.style.width = "6px";
//       dot.style.height = "6px";
//       dot.style.backgroundColor = "rgba(0,0,0,0.3)"; // shadow effect
//       dot.style.left = e.clientX + "px";
//       dot.style.top = e.clientY + "px";
//       dot.style.transform = "translate(-50%, -50%)";
//       dot.style.transition = "width 0.5s ease-out, height 0.5s ease-out, opacity 0.5s ease-out";

//       document.body.appendChild(dot);
//       trailRef.current.push(dot);

//       // Animate shrink and fade
//       requestAnimationFrame(() => {
//         dot.style.width = "2px";
//         dot.style.height = "2px";
//         dot.style.opacity = "0";
//       });

//       // Remove after 0.5s
//       setTimeout(() => {
//         dot.remove();
//         trailRef.current.shift();
//       }, 500);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       trailRef.current.forEach((dot) => dot.remove());
//     };
//   }, []);

//   return null;
// };

// export default MouseTrail;
