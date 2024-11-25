document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent parent event
  alert("Edit action triggered!");
});

document.getElementById("delete").addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent parent event
  alert("Delete action triggered!");
});

document.getElementById("parent").addEventListener("click", () => {
  alert("Parent container clicked!");
});
