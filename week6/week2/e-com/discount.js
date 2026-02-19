const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
export function validateCoupon(code, total, items) {
  const c = coupons[code];
  if (!c) return { valid: false, message: "Invalid Coupon" };
  if (total < c.minAmount) return { valid: false, message: `Min amount ₹${c.minAmount} required.` };
  return { valid: true, message: "Coupon applied!" };
}
export function calculateDiscount(code, total) {
  const c = coupons[code];
  return c.type === 'percentage' ? (total * c.value) / 100 : c.value;
}
export function applyDiscount(total, code, items) {
  const validation = validateCoupon(code, total, items);
  if (!validation.valid) return { originalTotal: total, discount: 0, finalTotal: total, message: validation.message };
  
  const discountVal = calculateDiscount(code, total);
  return { originalTotal: total, discount: discountVal, finalTotal: total - discountVal, message: "Success" };
}