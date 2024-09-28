import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  const { mode } = useContext(myContext);
  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundColor:
            mode === "dark" ? "rgb(46, 49, 55)" : "rgb(245, 245, 245)",
          color: mode === "dark" ? "white" : "rgb(31, 41, 55)",
        }}
      >
        <h1
          className="text-6xl font-bold mb-4"
          style={{
            color: mode === "dark" ? "#FF577F" : "#D6336C",
          }}
        >
          404
        </h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg transition duration-300 font-medium"
          style={{
            backgroundColor: mode === "dark" ? "#FF577F" : "#D6336C", 
          }}
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NoPageFound;
