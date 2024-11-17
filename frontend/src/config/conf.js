const conf = {
  stripePublishableKey: String(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY),
  clerkPublishableKey: String(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY),
  apiUrl: String(import.meta.env.VITE_BACKEND_API_URL),
};

export default conf;
