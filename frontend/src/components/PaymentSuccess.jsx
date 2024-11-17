import { useEffect } from "react";
import { useCart } from "../context/MyCartContext";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { clearCart } = useCart();

  const naviagte = useNavigate();
  useEffect(() => {
    clearCart();

    setTimeout(() => {
      naviagte("/", { replace: true });
    }, 2000);
  }, []);
  return (
    <h1 className="font-bold text-center my-8 text-xl">
      Your Payment is successful !
    </h1>
  );
};

export default PaymentSuccess;
