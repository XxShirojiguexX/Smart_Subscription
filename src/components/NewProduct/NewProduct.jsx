import React from "react";
import { NavLink } from "react-router";

const NewProduct = () => {
  return (
    <div className="space-y-4 mt-20 mb-10 bg-base-300 py-10 rounded-2xl shadow-2xl">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-center">New Product Arrival</h1>
        <p className="text-base font-semibold opacity-70 text-center">
          Explore the latest additions to our subscription lineup! Handpicked
          for quality and innovation, these new arrivals bring fresh experiences
        </p>
      </div>
      <div>
        <img
          className="mt-10 h-[200px] w-full rounded-2xl shadow-2xl"
          src="https://i.ibb.co.com/Sw6qDM1N/newproduct-6.jpg"
          alt="newProduct"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <NavLink
          to="/newArrival"
          className="btn px-10 py-7 text-lg font-semibold rounded-2xl  btn-primary"
        >
          View More Details
        </NavLink>
      </div>
    </div>
  );
};

export default NewProduct;
