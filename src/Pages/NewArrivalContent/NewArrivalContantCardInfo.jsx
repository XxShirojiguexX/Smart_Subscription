import React from "react";

const NewArrivalContantCardInfo = ({ data }) => {
  const { thumbnail, name, frequency, price, tech_category } = data || {};

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
        <button className="mt-4 w-full bg-[#78a106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default NewArrivalContantCardInfo;
