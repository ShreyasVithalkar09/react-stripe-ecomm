// src/components/CartPage.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/MyCartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const [cartItems, setCartItems] = useState([]);

  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  const removeItem = (id) => {
    removeFromCart(id);
  };

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900">Your Cart</h1>
      {/* Cart Items List */}
      <div className="mt-8">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                {/* Product Image and Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-500 text-sm">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                {/* <div className="flex items-center space-x-4">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity > 1 ? item.quantity - 1 : 1
                      )
                    }
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div> */}

                {/* Remove Item Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className=" text-red-500 hover:text-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Total */}
      {cart.length > 0 && (
        <div className="my-8 flex  justify-between items-center">
          <span className="text-xl font-semibold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-gray-900">
            ${totalPrice}
          </span>
        </div>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <Link to="/payment" className="mt-8">
          <button className="w-full py-3 btn btn-neutral">
            Proceed to Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
