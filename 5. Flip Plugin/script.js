// Register the Flip Plugin
gsap.registerPlugin(Flip);

// Select elements
const container = document.querySelector(".container");
const toggleButton = document.querySelector("#toggle-layout");

// Toggle layout on button click
toggleButton.addEventListener("click", () => {
  // Save the current state
  const state = Flip.getState(".box");

  // Toggle layout
  if (container.classList.contains("grid")) {
    container.classList.remove("grid");
  } else {
    container.classList.add("grid");
  }

  // Animate to the new state
  Flip.from(state, {
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1, // Add a staggered animation effect
    onComplete: () => console.log("Flip animation completed!"),
  });
});

// Add grid styles dynamically
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>
    .container.grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  </style>
  `
);
