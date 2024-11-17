const conf = {
  stripePublishableKey: String(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY),
  clerkPublishableKey: String(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY),
};

export default conf;
