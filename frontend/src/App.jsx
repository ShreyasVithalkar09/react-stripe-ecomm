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
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <MyCartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/sign-in" element={<Login />} />

            <Route path="/products/:id" element={<ProductDetail />} />
            <Route
              path="/payment"
              element={
                <>
                  <ProtectedRoute>
                    <StripePayment />
                  </ProtectedRoute>
                </>
              }
            />
            <Route
              path="/success"
              element={
                <>
                  <ProtectedRoute>
                    <PaymentSuccess />
                  </ProtectedRoute>
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MyCartProvider>
    </>
  );
};

export default App;
