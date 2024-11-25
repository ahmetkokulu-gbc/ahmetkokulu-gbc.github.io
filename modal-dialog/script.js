const modalContainer = document.getElementById("modal-container");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");

// Open the modal
openBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

// Close the modal when clicking outside the modal
modalContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

// Close the modal when clicking the close button
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling to modalContainer
  modalContainer.style.display = "none";
});
