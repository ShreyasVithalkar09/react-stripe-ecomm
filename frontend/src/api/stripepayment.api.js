import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const createPayment = async (cartItems, token) => {
  return await axios.post(
    `${BASE_URL}/create-payment`,
    {
      items: cartItems,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
