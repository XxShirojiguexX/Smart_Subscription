import React from "react";
import { NavLink } from "react-router";

const ServiceContentCard = ({ data }) => {
  //   console.log(data);
  const { id, thumbnail, name, frequency, price, tech_category } = data || {};
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden
         hover:shadow-lg transition duration-300"
    >
      <img
        src={thumbnail}
        alt="Smart Home Box"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">ServiceName : {name}</h3>
        <p className="text-base text-gray-600">
          <span className="font-bold">Category :</span> {tech_category}.
        </p>
        <div className="mt-2">
          <p className=" font-semibold text-lg">
            <span className="font-bold">ServiceCost :</span>{" "}
            <span className="font-bold text-indigo-500">$ {price}</span>
          </p>
          <p className="text-base text-gray-600">
            {" "}
            <span className="font-bold">ServiceDuration :</span> {frequency}
          </p>
        </div>
        <NavLink to={`/serviceContainerDetails/${id}`}>
          <button className=" mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
            View More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceContentCard;
