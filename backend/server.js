import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import express from "express";
import cors from "cors";
import Stripe from "stripe";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const app = express();

const port = process.env.PORT || 4001;

const stripe = Stripe(process.env.STRIPE_API_KEY);

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

const calculateTotalOrderAmount = (items) => {
  let totalPrice = 0;
  items?.forEach((item) => {
    totalPrice += item.price * 100;
  });
  return totalPrice;
};

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Working!!",
  });
});

app.post("/create-payment", ClerkExpressRequireAuth(), async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateTotalOrderAmount(items),
    currency: "usd",
    description: "This is for Stripe API Demo",
    payment_method_types: ["card"],
  });

  res.status(201).json({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => console.log(`Server running on port:: ${port}`));
