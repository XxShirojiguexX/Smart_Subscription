import React from "react";

const ServiceFeature = () => {
  return (
    <div className="bg-gray-200 font-sans shadow-2xl rounded-2xl">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Enhance Your Subscription Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exclusive features that make our service truly special
          </p>
        </div>

        {/*  Sneak Peek & Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <i className="fas fa-eye text-purple-600 text-xl"></i>
                </div> */}
                <h3 className="text-2xl font-semibold text-gray-800">
                  Sneak Peek & Previews
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get exclusive early looks at upcoming boxes with
                behind-the-scenes content and spoiler alerts.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center"
              >
                Learn more
              </a>
            </div>
            <div className="bg-purple-50 p-4 border-t border-purple-100">
              <div className="flex space-x-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-purple-800 shadow-sm">
                  New
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-purple-800 shadow-sm">
                  Exclusive
                </span>
              </div>
            </div>
          </div>

          {/* Refer-a-Friend & Gifts */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-gift text-green-600 text-xl"></i>
                </div> */}
                <h3 className="text-2xl font-semibold text-gray-800">
                  Refer-a-Friend & Gifts
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Earn rewards when you refer friends or send gift subscriptions
                to your loved ones.
              </p>
              <a
                href="#"
                className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
              >
                Start sharing
              </a>
            </div>
            <div className="bg-green-50 p-4 border-t border-green-100">
              <div className="flex items-center">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-green-800 shadow-sm mr-2">
                  Bonus
                </span>
                <span className="text-sm text-green-700">
                  Get $10 credit per successful referral
                </span>
              </div>
            </div>
          </div>

          {/* Member-Only Content */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Member-Only Content
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access premium content including tutorials, live events, and
                early product releases.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
              >
                Unlock benefits
              </a>
            </div>
            <div className="bg-blue-50 p-4 border-t border-blue-100">
              <div className="flex items-center">
                <i className="fas fa-lock text-blue-500 mr-2"></i>
                <span className="text-sm text-blue-700">Subscribers only</span>
              </div>
            </div>
          </div>

          {/* Eco-Friendly Commitment */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <i className="fas fa-leaf text-teal-600 text-xl"></i>
                </div> */}
                <h3 className="text-2xl font-semibold text-gray-800">
                  Eco-Friendly Commitment
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                We use sustainable packaging and partner with eco-conscious
                brands to reduce our environmental impact.
              </p>
              <a
                href="#"
                className="text-teal-600 font-medium hover:text-teal-800 inline-flex items-center"
              >
                Our sustainability pledge{" "}
                {/* <i className="fas fa-arrow-right ml-2"></i> */}
              </a>
            </div>
            <div className="bg-teal-50 p-4 border-t border-teal-100">
              <div className="flex items-center">
                <i className="fas fa-recycle text-teal-500 mr-2"></i>
                <span className="text-sm text-teal-700">
                  100% recyclable materials
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to elevate your subscription?
          </h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeature;
