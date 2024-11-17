import axios from "axios";
import conf from "../config/conf";

export const createPayment = async (cartItems, token) => {
  return await axios.post(
    `${conf.apiUrl}/create-payment`,
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
