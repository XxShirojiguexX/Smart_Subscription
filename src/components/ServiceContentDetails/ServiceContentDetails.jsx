import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink, useLoaderData, useParams } from "react-router";

const ServiceContentDetails = () => {
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

  // State for reviews
  const [reviewText, setReviewText] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [userReviews, setUserReviews] = useState([]);

  const handleAddReview = () => {
    if (!reviewText || !ratingValue || ratingValue < 1 || ratingValue > 5) {
      alert("Please enter a review and rating between 1 and 5.");
      return;
    }

    const newReview = {
      text: reviewText,
      rating: ratingValue,
    };

    setUserReviews([...userReviews, newReview]);
    setReviewText("");
    setRatingValue("");
  };

  return (
    <div className="bg-gray-50 text-gray-800 mt-10 mb-10">
      <Helmet>
        <title>smartServiceDetails | {id}</title>
      </Helmet>
      <div className="mt-20 mb-10">
        <h1 className="text-4xl font-bold text-center">
          Subscription Services Details
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

            {/* Review Form */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Add Your Review</h3>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Write your review"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="p-2 border rounded-md w-full sm:w-2/3"
                />
                <input
                  type="number"
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  value={ratingValue}
                  onChange={(e) => setRatingValue(e.target.value)}
                  className="p-2 border rounded-md w-full sm:w-1/3"
                />
                <button
                  onClick={handleAddReview}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Review
                </button>
              </div>
            </div>

            {/* Display User Reviews */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">User Reviews</h3>
              {userReviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
              ) : (
                <ul className="space-y-2">
                  {userReviews.map((review, index) => (
                    <li
                      key={index}
                      className="p-3 bg-gray-100 rounded-md shadow-sm"
                    >
                      <p className="font-medium">{review.text}</p>
                      <p className="text-sm text-gray-600 flex gap-2 items-center">
                        Rating:{" "}
                        <span className="text-amber-400">
                          <FaStarHalfAlt />
                        </span>{" "}
                        {review.rating}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <NavLink
              to="/"
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

export default ServiceContentDetails;
