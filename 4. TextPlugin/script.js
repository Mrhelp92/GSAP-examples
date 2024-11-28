// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

// Animate the text
gsap.to("#animated-text", {
  duration: 3, // Duration of the animation in seconds
  text: "Welcome to GSAP TextPlugin!", // Target text to animate
  ease: "power2.inOut", // Smooth easing
  repeat: -1, // Loop the animation infinitely
  repeatDelay: 2, // Pause between repeats
  yoyo: true, // Reverse animation on repeat
  onStart: () => console.log("Animation Started"),
  onComplete: () => console.log("Animation Completed"),
});
