import React from "react";
import { Helmet } from "react-helmet-async";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink, useLoaderData, useParams } from "react-router";

const NewArrivalContantCardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleId = data.find((singleData) => singleData.id === parseInt(id));

  const {
    thumbnail,
    name,
    frequency,
    price,
    tech_category,
    number_of_reviews,
    ratings,
    subscription_benefits,
    features,
    description,
    banner,
  } = singleId || {};

  return (
    <div className="bg-gray-50 text-gray-800 mt-10 mb-10">
      <Helmet>
        <title>smartNewArrivalDetails | {id}</title>
      </Helmet>
      <div className="mt-20 mb-10">
        <h1 className="text-4xl font-bold text-center">
          NewArrival Subscription Details
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Banner */}
        <div className="w-full shadow-2xl h-60 md:h-96 rounded-xl overflow-hidden mb-6">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="bg-white shadow-2xl rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Thumbnail */}
          <div className="flex justify-center">
            <img
              src={thumbnail}
              alt="Thumbnail"
              className="rounded-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">{name}</h2>
              <p className="text-gray-600 mb-2 font-bold text-xl">
                Category :
                <span className="font-semibold opacity-70 text-gray-800 px-1">
                  {tech_category}
                </span>
              </p>
              <p className="text-xl font-bold text-green-600 mb-2">
                Price : ${" "}
                <span className="text-lg font-semibold opacity-80">
                  {price}
                </span>
              </p>
              <p className="text-xl font-bold text-green-600 mb-2">
                Frequency :
                <span className="text-lg font-semibold opacity-80 px-1">
                  {frequency}
                </span>
              </p>
              <p className="mb-4 text-base font-medium opacity-75 text-gray-700">
                {description}
              </p>
            </div>

            {/* Features and Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Features :</h3>
                <ul className="list-disc list-inside text-base font-medium text-gray-600">
                  <li>{features[0]}</li>
                  <li>{features[1]}</li>
                  <li>{features[2]}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Subscription Benefits :
                </h3>
                <ul className="list-disc list-inside text-base font-medium text-gray-600">
                  <li>{subscription_benefits[0]}</li>
                  <li>{subscription_benefits[1]}</li>
                  <li>{subscription_benefits[2]}</li>
                </ul>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="mt-4 flex items-center space-x-4 text-base font-semibold text-gray-600">
              <span className="flex gap-2 ">
                <span className="text-amber-400">
                  <FaStarHalfAlt size={20} />
                </span>{" "}
                {ratings}
              </span>
              <div className="flex gap-1">
                <p>
                  <IoDocumentTextOutline size={20} />{" "}
                </p>
                <p>{number_of_reviews} Reviews</p>
              </div>
            </div>

            <NavLink
              to="/newArrival"
              type="submit"
              className="w-full mt-5 px-8 py-3 text-lg text-center font-bold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Back to Category
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalContantCardDetails;
