import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found.";
  if (!checkStock(productId, quantity)) return "Insufficient stock.";
  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ ...product, quantity });
  }
  return "Item added to cart.";
}
export const getCartItems = () => cartItems;
export const getCartTotal = () => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
export const removeFromCart = (id) => {
  cartItems = cartItems.filter(item => item.id !== id);
  return "Item removed.";
};
export const clearCart = () => cartItems = [];
export function updateQuantity(id, qty) {
  if (!checkStock(id, qty)) return "Stock limit exceeded.";
  const item = cartItems.find(i => i.id === id);
  if (item) item.quantity = qty;
  return "Quantity updated.";
}