import React from "react";
import { useEffect } from "react";
import { getProducts } from "../api/store.api";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts();
      if (data || data.length > 0) {
        setProducts(data);
      }
    };

    fetchProducts();

    window.history.replaceState(null, "", window.location.href);
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="h2 text-3xl text-start font-bold my-5">Products</div>

        <div className="flex flex-wrap justify-between ">
          {/* render products */}
          {products &&
            products?.map((product, index) => (
              <div
                key={index}
                className="card card-compact bg-base-100 w-96 
                max-h-80  border-gray-500 border-[3px] mb-6
                shadow-xl"
              >
                <figure className="w-full h-48">
                  <img className="w-full" src={product.image} alt="products" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base">{product.title}</h2>

                  <p className="my-4 font-semibold text-xl">${product.price}</p>
                  <div className="card-actions justify-end">
                    <Link to={`products/${product.id}`}>
                      <button className="btn btn-primary">View</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
