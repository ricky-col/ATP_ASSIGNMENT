import { getAllProducts,searchProducts} from './product.js';
import { 
  addToCart, 
  getCartItems, 
  getCartTotal, 
  updateQuantity,
  removeFromCart 
} from './cart.js';
import { processPayment } from './payment.js';
console.log('E-Commerce Store Simulation \n');
console.log('Step 1: Browsing Catalog ');
console.log('All Products:', getAllProducts().length, 'items available.');
const searchResult = searchProducts('phone');
console.log('Search "phone":', searchResult);
console.log('\n Step 2: Adding to Cart ');
console.log(addToCart(1, 1));  
console.log(addToCart(4, 2));  
console.log(addToCart(1, 1));  
console.log('\n--- Step 3: View Cart ---');
console.table(getCartItems()); 
console.log('Current Subtotal: ₹', getCartTotal());
console.log('\n--- Step 4: Updating Quantities ---');
console.log(updateQuantity(4, 1)); 
console.log(removeFromCart(1));    
console.log('\n--- Step 5: Final Checkout ---');
addToCart(2, 1); 
const orderSummary = processPayment('upi', 'WELCOME10');
console.log('--- ORDER SUCCESSFUL ---');
console.log(`Order ID: ${orderSummary.orderId}`);
console.log(`Final Amount Paid: ₹${orderSummary.finalTotal}`);
console.log(`Discount Applied: ₹${orderSummary.discount}`);