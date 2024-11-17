import React from "react";

const PageNotFound = () => {
  return (
    <div className="container flex flex-col mx-auto justify-center mt-6 text-center">
      <h2 className="text-3xl text-grey-900">404 Not Found!</h2>
      <p className="text-center my-6">
        The page you're looking for does not exist!
      </p>
    </div>
  );
};

export default PageNotFound;
