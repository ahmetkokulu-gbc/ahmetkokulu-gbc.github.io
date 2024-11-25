// Select DOM elements
const button = document.getElementById("tooltip-btn");
const tooltip = document.getElementById("tooltip");

// Function to show tooltip
function showTooltip() {
  tooltip.classList.remove("hidden");
  tooltip.classList.add("visible");
}

// Function to hide tooltip
function hideTooltip() {
  tooltip.classList.remove("visible");
  tooltip.classList.add("hidden");
}

// Attach event listeners
button.addEventListener("mouseenter", () => {
  showTooltip();
  // Add a mouseleave event dynamically
  button.addEventListener("mouseleave", hideTooltip);
});

// Remove mouseleave event when tooltip is hidden
tooltip.addEventListener("transitionend", () => {
  if (tooltip.classList.contains("hidden")) {
    button.removeEventListener("mouseleave", hideTooltip);
  }
});
