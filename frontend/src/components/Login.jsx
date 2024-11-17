import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center mx-auto mt-24 w-full container h-screen">
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
};

export default Login;
