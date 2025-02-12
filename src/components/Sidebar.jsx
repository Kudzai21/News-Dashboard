import React from "react";

const Sidebar = ({ onFilter }) => {
  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 shadow-md px-4 pt-28 overflow-y-auto z-10">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onFilter(category.toLowerCase())}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;