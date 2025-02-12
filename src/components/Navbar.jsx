import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-10 py-7 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-xl font-bold">📰 News</div>
      <input 
        type="text" 
        placeholder="Search news..." 
        className="border px-4 py-2 rounded-md w-1/3"
      />
    </nav>
  );
};

export default Navbar;
