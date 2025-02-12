import React from "react";

const Sidebar = ({ onFilter }) => {
  const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-100 shadow-md p-4 overflow-y-auto z-40">
      <h2 className="text-lg font-semibold mb-4">Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onFilter(category.toLowerCase())}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;