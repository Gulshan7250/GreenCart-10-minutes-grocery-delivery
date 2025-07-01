import User from "../models/User.js"

// Update User CartData : /api/cart/update



// Update Cart: /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body; // ✅ Only cartItems sent from frontend

    req.user.cartItems = cartItems; // ✅ Directly set on logged-in user
    await req.user.save();          // ✅ Save changes to DB

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};