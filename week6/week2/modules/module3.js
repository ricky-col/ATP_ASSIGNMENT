const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];


// 1. Merge cart with courses
const mergedCart = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return { ...item, ...course };
});

// 2. Calculate total cart amount
const totalCartAmount = mergedCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

// 3. Increase quantity immutably
const increaseQty = courseId =>
  cart.map(item =>
    item.courseId === courseId ? { ...item, qty: item.qty + 1 } : item
  );

// 4. Remove course from cart immutably
const removeFromCart = courseId =>
  cart.filter(item => item.courseId !== courseId);

// 5. Check if all cart items are paid (published) courses
const allPaid = cart.every(item =>
  courses.find(c => c.id === item.courseId)?.published === true
);


export {mergedCart,totalCartAmount,increaseQty,removeFromCart,allPaid};