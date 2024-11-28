# GSAP-examples

# 1. ScrollTrigger plugin Example

The scrollTrigger object contains various settings to customize how the animation reacts to scrolling.

Property	        Description
trigger	            Specifies the element that triggers the animation (.box in this case).
start	            Defines when the animation begins. top 80% means the top of the .box enters at 80% of the viewport's height.
end	                Defines when the animation ends. top 50% means the animation completes when the top of the .box reaches 50% of the viewport's height.
toggleActions	    Controls animation behavior as the trigger enters and exits the viewport. play none none reverse means:
                    - play: Start animation on entering the trigger zone.
                    - none: Do nothing on leaving the trigger zone.
                    - none: Do nothing when scrolling back into the trigger zone.
                    - reverse: Reverse animation when scrolling back out of the trigger zone.
markers	            Displays visual markers in the browser to debug where the start and end points are located (remove for production).

# 2. MotionPath plugin Example
How It Works:
MotionPathPlugin:

gsap.registerPlugin(MotionPathPlugin);: Registers the MotionPathPlugin to be used.
motionPath:

path: This is an array of points that define the path the element will follow. Each point is an object with x and y values. The box will follow these points during the animation.
curviness: This affects how curved the path will be. Higher values make the path more curved.
autoRotate: This property ensures that the animated element will rotate automatically along the path to face the direction of the movement.
gsap.to():

The gsap.to(".box", {...}) function animates the .box element along the path. The duration is set to 4 seconds, and the easing function power1.inOut is used for a smoother animation.

# 3. Draggable Plugin Example
How It Works:
Draggable Plugin:

Draggable.create: Turns the selected element (.draggable) into a draggable object.
type: "x,y": Allows movement in both horizontal and vertical directions.
bounds: ".container": Limits dragging to within the .container element.
inertia: true: Adds smooth motion when you let go of the draggable item.
Events:

onDragStart, onDrag, and onDragEnd: These callbacks are triggered during the dragging process and provide hooks for custom functionality.

# 4. TextPlugin Example
How It Works:
TextPlugin:

Automatically animates from an empty string or the original text to the target string.
The text property specifies the final string to animate to.
GSAP Options:

duration: Sets how long the animation lasts.
ease: Controls the speed curve of the animation.
repeat: -1: Animates indefinitely (use 0 for no repeat).
repeatDelay: Adds a pause before repeating.
yoyo: Reverses the animation after completion when repeating.
Callbacks:

onStart: Runs when the animation starts.
onComplete: Runs when the animation ends.

# 5. Flip Plugin Example
How It Works:
Flip Plugin:

Flip.getState: Captures the current positions, sizes, and transforms of elements.
Flip.from: Animates elements from their saved state to their new layout.
Dynamic Layout Switching:

The container toggles between flex (default) and grid layout using a CSS class.
The Flip Plugin animates the transition between these layouts smoothly.
GSAP Options:

duration: Controls the animation length.
ease: Defines the easing function for smoother transitions.
stagger: Adds a delay between animations for individual elements.
Dynamic CSS Injection:

Grid styles are dynamically added to the document for the grid layout.