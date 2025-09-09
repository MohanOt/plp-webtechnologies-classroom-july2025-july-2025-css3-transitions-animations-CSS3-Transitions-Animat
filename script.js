// === GLOBAL STATE ===
let cart = [];

// === FUNCTION: Add to Cart ===
function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} added to cart!`);
}

// === FUNCTION: Calculate Total ===
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// === FUNCTION: Render Cart ===
function renderCart() {
  const cartList = document.getElementById("cartList");
  const totalPrice = document.getElementById("totalPrice");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalPrice.textContent = "";
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} — $${item.price}`;
    cartList.appendChild(li);
  });

  totalPrice.textContent = "Total: $" + calculateTotal(cart);
}

// === MODAL CONTROLS ===
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeModal = document.getElementById("closeModal");

cartBtn.addEventListener("click", () => {
  renderCart();
  cartModal.classList.remove("hidden");
  cartModal.style.opacity = "1";
  cartModal.style.pointerEvents = "all";
});

closeModal.addEventListener("click", () => {
  cartModal.style.opacity = "0";
  setTimeout(() => {
    cartModal.classList.add("hidden");
  }, 400);
});

// === EXTRA: Close modal when clicking outside ===
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.opacity = "0";
    setTimeout(() => {
      cartModal.classList.add("hidden");
    }, 400);
  }
});
