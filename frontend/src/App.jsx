import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import PaymentSuccess from "./components/PaymentSuccess";
import StripePayment from "./components/StripePayment";
import Cart from "./components/Cart";
import { MyCartProvider } from "./context/MyCartContext";

const App = () => {
  return (
    <>
      <MyCartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/payment" element={<StripePayment />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </MyCartProvider>
    </>
  );
};

export default App;
