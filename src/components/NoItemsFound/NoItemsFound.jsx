import React from "react";

const NoItemsFound = ({ mode }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full p-6 rounded-lg w-full"
      style={{
        backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "rgb(245 245 245)",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <img src='/images/no-items-found.png' alt="No items found" className="w-32 h-32 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">No Items Found</h2>
      <p className="text-gray-500 text-center">
        Sorry, we couldn't find any products that match your filter. Try
        adjusting your filters or reset to see all products.
      </p>
    </div>
  );
};

export default NoItemsFound;
