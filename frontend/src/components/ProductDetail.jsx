import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api/store.api";
import { useState } from "react";
import { useCart } from "../context/MyCartContext";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { addToCart, cart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await getProduct(id);

      if (data) {
        setProduct(data);
      }
    };
    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">
            {product?.title}
          </h1>
          <p className="mt-4 text-gray-600">{product?.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-800">
              ${product?.price}
            </span>
          </div>

          {/* Add to Cart Button */}
          {/* <Link to="/payment"> */}
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="btn w-full py-3 btn-accent"
            >
              Add to Cart
            </button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
