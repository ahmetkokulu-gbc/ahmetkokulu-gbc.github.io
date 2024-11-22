const button = document.getElementById("increment-btn");
const counterValue = document.getElementById("counter-value");
let count = 0;

// Add event listener for click
button.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;

  // Add a temporary animation class
  counterValue.classList.add("pulse");
  setTimeout(() => counterValue.classList.remove("pulse"), 300);
});
