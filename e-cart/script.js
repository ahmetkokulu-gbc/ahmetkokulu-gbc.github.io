const cart = [
  { productName: "Laptop", price: 1000, quantity: 1 },
  { productName: "Headphones", price: 200, quantity: 1 },
];

const cartList = document.getElementById("cart-list");
const addItemButton = document.getElementById("add-item");

// Function to render the cart
function renderCart() {
  cartList.innerHTML = ""; // Clear current list
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.productName} - $${item.price} x ${item.quantity}`;
    cartList.appendChild(listItem);
  });
}

// Add a random item
addItemButton.addEventListener("click", () => {
  const newItem = { productName: "Mouse", price: 50, quantity: 1 };
  cart.push(newItem);
  renderCart();
});

// Initial render
renderCart();
