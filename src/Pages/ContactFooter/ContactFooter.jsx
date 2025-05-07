import React from "react";
import { Helmet } from "react-helmet-async";
import { FaAddressCard } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const ContactFooter = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="bg-base-300 text-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">
            Contact Us
          </h1>
          <p className="mb-6 text-lg">
            Have questions, suggestions, or feedback? We'd love to hear from
            you! Whether it's an issue with your subscription box or a general
            inquiry, the Smart.Subscription team is here to help.
          </p>

          <div className="bg-white rounded-lg p-6 shadow mb-10">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">
              Our Contact Information
            </h2>
            <p className="mb-2 flex gap-3">
              <FaAddressCard size={25} /> <strong>Address:</strong> 123 Box
              Lane, Package City, 45678
            </p>
            <p className="mb-2 flex gap-3">
              <MdAttachEmail size={20} /> <strong>Email:</strong>
              <a
                href="mailto:support@smartsubscription.com"
                className="text-indigo-600 underline"
              >
                support@smartsubscription.com
              </a>
            </p>
            <p classNameName="flex gap-3">
              <TbDeviceLandlinePhone size={20} /> <strong>Phone:</strong> +1
              (234) 567-8910
            </p>
          </div>

          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Send Us a Message
            </h2>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
