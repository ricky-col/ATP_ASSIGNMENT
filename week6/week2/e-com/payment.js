import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
export function processPayment(method, coupon = null) {
  const items = getCartItems();
  const total = getCartTotal();
  if (items.length === 0) return { status: 'failed', message: 'Cart is empty' };
  const discountInfo = coupon ? applyDiscount(total, coupon, items) : { originalTotal: total, discount: 0, finalTotal: total };
  items.forEach(item => reduceStock(item.id, item.quantity));
  const summary = {
    orderId: 'ORD' + Date.now(),
    items: [...items],
    ...discountInfo,
    paymentMethod: method,
    status: 'success'
  };
  clearCart();
  return summary;
}