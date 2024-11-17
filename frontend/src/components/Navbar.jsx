import React from "react";
import { useCart } from "../context/MyCartContext";
import { Link } from "react-router-dom";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

const Navbar = () => {
  const { cart } = useCart();
  const { isSignedIn, user } = useUser();

  const cartItemsCount = cart?.length || 0;
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex justify-between w-full">
          <div className="">
            <a className="btn btn-ghost text-xl">Store~</a>
          </div>

          <div className="flex w-2/3 space-x-4 justify-end ">
            {!isSignedIn && (
              <div className="">
                {/* <button className="btn btn-neutral">Login</button> */}
                <SignInButton className="btn btn-neutral" />
              </div>
            )}

            {isSignedIn && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <Link to="/cart" className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {cartItemsCount > 0 ? (
                      <span className="badge bg-red-600 text-white badge-sm indicator-item">
                        {cartItemsCount}
                      </span>
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
              </div>
            )}
            <div className=" flex justify-center items-center w-10 ">
              <UserButton className=" rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
