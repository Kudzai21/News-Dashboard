import React from "react";

const Banner = ({ message, cta }) => {
  return (
    <div className="w-full fixed top-24 z-20 bg-gray-100 text-center py-3">
      <span className="text-gray-700">{message} </span>
      <button className="text-blue-600 font-semibold underline cursor-pointer">{cta}</button>
    </div>
  );
};

export default Banner;
