// Register the Draggable Plugin
gsap.registerPlugin(Draggable);

// Make the element draggable
Draggable.create(".draggable", {
  type: "x,y", // Allow dragging in both x and y directions
  bounds: ".container", // Restrict dragging within the container
  edgeResistance: 0.5, // Add resistance near the edges of the bounds
  inertia: true, // Enable inertia for smooth motion
  onDragStart: function () {
    console.log("Drag started!");
  },
  onDrag: function () {
    console.log("Dragging...");
  },
  onDragEnd: function () {
    console.log("Drag ended!");
  }
});
