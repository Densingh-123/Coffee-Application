import React from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; // Get cart items from location state or default to empty array

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <span className="text-lg font-semibold text-primary">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4">Total: ₹{calculateTotal()}</h3>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
