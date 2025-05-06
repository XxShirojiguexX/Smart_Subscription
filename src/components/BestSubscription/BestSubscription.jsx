import React from "react";

const BestSubscription = () => {
  return (
    <div className="mt-20 mb-20">
      <h1 className="text-4xl font-bold text-center">
        Most Popular Subscription
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-10">
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden
       hover:shadow-lg transition duration-300"
        >
          <img
            src="https://i.ibb.co.com/Jw44NZH5/smart-home.jpg"
            alt="Smart Home Box"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">ServiceName : Smart Home Box</h3>
            <p className="text-base text-gray-600">
              <span className="font-bold">Category :</span> Smart Home.
            </p>
            <div className="mt-2">
              <p className=" font-semibold text-lg">
                <span className="font-bold">ServiceCost :</span>{" "}
                <span className="font-bold text-indigo-500">$ 199.99</span>
              </p>
              <p className="text-base text-gray-600">
                {" "}
                <span className="font-bold">ServiceDuration :</span> Yearly
              </p>
            </div>
            <button className="mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
              View More
            </button>
          </div>
        </div>

        <div
          className="bg-white rounded-xl shadow-md overflow-hidden
       hover:shadow-lg transition duration-300"
        >
          <img
            src="https://i.ibb.co.com/4Z73mvTN/codeth.png"
            alt="Coding Care Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">
              ServiceName : Coding Care Package
            </h3>
            <p className="text-base text-gray-600">
              <span className="font-bold">Category :</span> Software
              Development.
            </p>
            <div className="mt-2">
              <p className=" font-semibold text-lg">
                <span className="font-bold">ServiceCost :</span>{" "}
                <span className="font-bold text-indigo-500">$ 34.99</span>
              </p>
              <p className="text-base text-gray-600">
                {" "}
                <span className="font-bold">ServiceDuration :</span> Monthly
              </p>
            </div>
            <button className="mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
              View More
            </button>
          </div>
        </div>

        <div
          className="bg-white rounded-xl shadow-md overflow-hidden
       hover:shadow-lg transition duration-300"
        >
          <img
            src="https://i.ibb.co.com/qYqSds2w/vrth.jpg"
            alt="Smart Home Box"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">ServiceName : VR Explorer</h3>
            <p className="text-base text-gray-600">
              <span className="font-bold">Category :</span> Virtual Reality.
            </p>
            <div className="mt-2">
              <p className=" font-semibold text-lg">
                <span className="font-bold">ServiceCost :</span>{" "}
                <span className="font-bold text-indigo-500">$ 99.99</span>
              </p>
              <p className="text-base text-gray-600">
                {" "}
                <span className="font-bold">ServiceDuration :</span> Quarterly
              </p>
            </div>
            <button className="mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
              View More
            </button>
          </div>
        </div>

        <div
          className="bg-white rounded-xl shadow-md overflow-hidden
       hover:shadow-lg transition duration-300"
        >
          <img
            src="https://i.ibb.co.com/Q3ddyVkj/homeoffice.jpg"
            alt="Home Office Tech Box"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">
              ServiceName : Home Office Tech Box
            </h3>
            <p className="text-base text-gray-600">
              <span className="font-bold">Category :</span> Office Tech.
            </p>
            <div className="mt-2">
              <p className=" font-semibold text-lg">
                <span className="font-bold">ServiceCost :</span>{" "}
                <span className="font-bold text-indigo-500">$ 54.99</span>
              </p>
              <p className="text-base text-gray-600">
                {" "}
                <span className="font-bold">ServiceDuration :</span> Monthly
              </p>
            </div>
            <button className="mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSubscription;
