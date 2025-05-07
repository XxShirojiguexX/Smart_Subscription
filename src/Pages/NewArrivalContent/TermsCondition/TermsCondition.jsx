import React from "react";
import { Helmet } from "react-helmet-async";

const TermsCondition = () => {
  return (
    <div>
      <Helmet>
        <title>TermsCondition</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6 md:p-10 text-gray-800 space-y-5">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>
        <div className="bg-base-200 px-8 py-5 shadow-2xl rounded-2xl">
          <p className="mb-4 text-sm  text-gray-500">
            Effective Date: 20-20-2024
          </p>

          <p className="mb-6">
            Welcome to <strong>Smart.Subscription</strong>! These Terms and
            Conditions ("Terms") govern your access to and use of our
            subscription box services, website, and related offerings. By
            subscribing or using our services, you agree to be bound by these
            Terms.
          </p>
        </div>

        <section className="space-y-6 bg-base-300 px-8 py-8 rounded-xl shadow-2xl ">
          <div>
            <h2 className="font-semibold text-xl mb-2">Eligibility</h2>
            <p>
              To use our service, you must be at least 18 years of age or have
              parental/guardian consent. By registering, you confirm that you
              meet this requirement.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Account Registration</h2>
            <p>
              You must provide accurate and complete information during
              registration. You are responsible for maintaining the
              confidentiality of your account and password.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              Subscription & Billing
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                By subscribing, you authorize recurring billing based on the
                plan selected (e.g., monthly, quarterly).
              </li>
              <li>You agree to keep your payment information up-to-date.</li>
              <li>
                We reserve the right to change pricing with 14 days' notice.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              Cancellations & Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                You may cancel your subscription at any time through your
                account dashboard.
              </li>
              <li>
                Refunds are only issued in cases of defective or missing items,
                at our discretion.
              </li>
              <li>Cancellation will apply to the next billing cycle.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Boxes are shipped based on your selected frequency.</li>
              <li>
                We are not liable for delays caused by third-party carriers or
                incorrect shipping information.
              </li>
              <li>
                International shipping may incur additional customs or import
                duties.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Returns & Exchanges</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                We do not accept returns or exchanges unless the item is damaged
                or incorrect.
              </li>
              <li>
                Contact our support team within 7 days of receiving a box for
                assistance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">7. User Conduct</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Misuse or interfere with the platform.</li>
              <li>Post harmful, abusive, or fraudulent content.</li>
              <li>
                Attempt to gain unauthorized access to other accounts or
                systems.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              Intellectual Property
            </h2>
            <p>
              All content, branding, and materials are the property of
              Smart.Subscription and may not be used without permission.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indirect or consequential damages.</li>
              <li>
                Loss of data, profits, or personal injury resulting from use of
                the service.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
