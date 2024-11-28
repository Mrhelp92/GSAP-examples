// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

// Animate the box along a path
gsap.to(".box", {
  duration: 4,
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 200, y: 100 },
      { x: 400, y: 0 },
      { x: 600, y: 100 },
      { x: 800, y: 0 }
    ], 
    curviness: 1.5, // Curve intensity (affects smoothness)
    autoRotate: true // Auto-rotate the element along the path
  },
  ease: "power1.inOut" // Ease the animation
});
