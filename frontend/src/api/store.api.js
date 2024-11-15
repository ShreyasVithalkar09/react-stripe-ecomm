import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (error) {
    console.log("ERROR:: ", error);
  }
};

export const getProduct = async (productId) => {
  try {
    return await axios.get(`${BASE_URL}/${productId}`);
  } catch (error) {
    console.log("ERROR:: ", error);
  }
};
