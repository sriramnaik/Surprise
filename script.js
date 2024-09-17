// Animate the airplane moving across the screen
gsap.to("#airplane", {
    duration: 6, 
    x: '80vw',  // Moves 80% of the screen width
    ease: "power2.inOut",  // Smooth easing
    onComplete: showText  // Once the airplane finishes moving, reveal the text
  });
  
  // Function to reveal the prom invite text
  function showText() {
    gsap.to("#prom-invite", {
      duration: 2, 
      opacity: 1,  // Makes the text visible
      y: -30  // Adds a little movement to the text
    });
  }
  