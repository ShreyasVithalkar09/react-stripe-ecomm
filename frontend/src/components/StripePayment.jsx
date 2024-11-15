import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { createPayment } from "../api/stripepayment.api";
import PaymentForm from "./PaymentForm";
import { useCart } from "../context/MyCartContext";
import conf from "../config/conf";

const stripe = loadStripe(conf.stripePublishableKey);

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState(null);

  const { cart } = useCart();

  useEffect(() => {
    const getPayment = async () => {
      const { data } = await createPayment(cart);
      setClientSecret(data?.clientSecret);
    };

    getPayment();
  }, []);

  const options = {
    clientSecret,
    theme: "stripe",
  };

  return (
    clientSecret && (
      <Elements options={options} stripe={stripe}>
        <PaymentForm />
      </Elements>
    )
  );
};

export default StripePayment;
