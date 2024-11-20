import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const PAYMENT_SUCESS_URL = "https://react-stripe-ecomm.onrender.com/success";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage("Payment in Progress");

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: PAYMENT_SUCESS_URL,
      },
    });

    if (response?.error) setMessage("Some Error Occurred !!");
    setIsLoading(false);
  };

  return (
    <div>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
            <div className="card-body p-8">
              <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Complete Your Payment
              </h1>

              {/* Stripe Payment Element */}
              <div className="mb-6">
                <PaymentElement />
              </div>

              {/* Payment Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-neutral w-full"
                  disabled={isLoading || !stripe || !elements}
                >
                  {isLoading ? "Loading..." : "Pay Now"}
                </button>
              </div>

              {/* Error or Success Message */}
              {message && (
                <div className="mt-4 text-center text-sm text-red-500">
                  {message}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
