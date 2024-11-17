import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api/store.api";
import { useState } from "react";
import { useCart } from "../context/MyCartContext";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [redirecting, setRedirecting] = useState(false);
  const { id } = useParams();

  const { isSignedIn, user } = useUser();

  const { addToCart } = useCart();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const { data } = await getProduct(id);

      if (data) {
        setProduct(data);
      }
    };
    fetchProduct();
    return setRedirecting(false), setIsLoading(false);
  }, []);

  const handleAddToCart = () => {
    if (isSignedIn) {
      addToCart(product);
    } else {
      setRedirecting(true);
    }
  };

  if (!product || product === null) {
    return <p className="text-center text-xl text-grey-900 ">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {redirecting && <RedirectToSignIn />}
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
