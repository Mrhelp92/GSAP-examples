// 1. ScrollTrigger Plugin
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate each ".box" element as it scrolls into view
gsap.utils.toArray(".box").forEach(box => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box, // Each box triggers its own animation
      start: "top 80%", // Start animation when box top reaches 80% of the viewport height
      end: "top 50%", // End animation when box top reaches 50% of the viewport height
      toggleActions: "play none none reverse", // Play on enter, reverse on leave
      markers: true, // Show markers for debugging (remove in production)
    },
    opacity: 1, // Fade to full opacity
    y: 0, // Move to normal position
    duration: 1,
    stagger: 0.3, // Stagger animations for multiple boxes
  });
});
