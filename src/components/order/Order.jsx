import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

import Img2 from "../../assets/coffee2.png";
import cof from '../../assets/cof.png';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c15 from '../../assets/c15.png'; 
import c5 from '../../assets/c5.png';
import c6 from '../../assets/c6.png';
import c7 from '../../assets/c7.png';
import c8 from '../../assets/c8.png';

const exchangeRate = 83; // 1 USD = 83 INR

const coffeeData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description: "A pure and intense coffee shot, enjoyed by those who love the bold taste of pure coffee.",
    price: (3.00 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 2,
    img: cof,
    name: "Americano",
    description: "Espresso diluted with hot water, perfect for a smoother coffee experience.",
    price: (3.50 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 3,
    img: c1,
    name: "Cappuccino",
    description: "A blend of espresso, steamed milk, and foam, offering a creamy and rich flavor.",
    price: (4.00 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 4,
    img: c2,
    name: "Latte",
    description: "Espresso with steamed milk, providing a milder and creamier coffee experience.",
    price: (4.50 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 5,
    img: c3,
    name: "Mocha",
    description: "A chocolate-flavored variant of a latte, offering a rich mix of espresso, milk, and chocolate.",
    price: (4.75 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 6,
    img: c4,
    name: "Macchiato",
    description: "Espresso topped with a small amount of foamed milk, giving a layered and stronger taste.",
    price: (3.75 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 7,
    img: c15,
    name: "Flat White",
    description: "A creamy coffee made with espresso and velvety milk, offering a smooth texture.",
    price: (4.25 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 8,
    img: c5,
    name: "Irish Coffee",
    description: "A strong coffee with whiskey, sugar, and cream, perfect for a spirited experience.",
    price: (5.00 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 9,
    img: c6,
    name: "Affogato",
    description: "A dessert coffee made with a shot of espresso poured over vanilla ice cream.",
    price: (4.50 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 10,
    img: c7,
    name: "Doppio",
    description: "A double shot of espresso for a more intense and bold flavor.",
    price: (3.25 * exchangeRate).toFixed(2), // Convert to INR
  },
  {
    id: 11,
    img: c8,
    name: "Ristretto",
    description: "A short shot of espresso, offering a more concentrated and sweeter flavor.",
    price: (3.00 * exchangeRate).toFixed(2), // Convert to INR
  },
];

const CoffeeOrder = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
    toast.success(`${coffee.name} added to cart!`); // Show success toast message
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.info('Item removed from cart.'); // Show info toast message
  };

  const handleViewCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Order Your Favorite Coffee</h1>
          <p className="text-lg text-gray-500 mt-4">
            Choose from a variety of our best coffees to kickstart your day!
          </p>
          <button
            onClick={handleViewCart}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-200"
          >
            View Cart ({cart.length})
          </button>
        </div>

        {/* Coffee Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {coffeeData.map((coffee) => (
            <div
              key={coffee.id}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl p-6"
            >
              <div className="h-[122px]">
                <img
                  src={coffee.img}
                  alt={coffee.name}
                  className="max-w-[200px] mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">{coffee.name}</h2>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm">
                  {coffee.description}
                </p>
                <div className="mt-4">
                  <span className="text-xl font-semibold text-primary group-hover:text-white">₹{coffee.price}</span>
                </div>
                <button
                  onClick={() => addToCart(coffee)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Cart */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-11/12 h-5/6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
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
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold mb-4">Total: ₹{calculateTotal()}</h3>
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CoffeeOrder;
