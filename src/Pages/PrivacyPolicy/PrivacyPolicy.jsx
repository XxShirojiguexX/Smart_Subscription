import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>PrivacyPolicy</title>
      </Helmet>
      <div class="bg-gray-50 text-gray-800 font-sans leading-relaxed">
        <div class="max-w-4xl  mx-auto px-6 py-12 space-y-5">
          <div className="bg-base-200 shadow-2xl rounded-2xl px-8 py-5">
            <h1 class="text-3xl font-bold mb-4 text-indigo-700">
              Privacy Policy
            </h1>
            <p class="text-sm text-gray-500 mb-8">
              Effective Date: [Insert Date]
            </p>

            <p class="mb-6">
              <strong>Smart.Subscription</strong> ("we", "us", or "our") values
              your privacy. This Privacy Policy describes how we collect, use,
              and share your information when you interact with our subscription
              box services, website, and related features.
            </p>
          </div>

          <div className="bg-base-300 shadow-2xl rounded-2xl px-8 py-5">
            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              Information We Collect
            </h2>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Personal Information:</strong> Name, email, address,
                phone number
              </li>
              <li>
                <strong>Payment Details:</strong> Billing address and payment
                method (processed via secure third-party services)
              </li>
              <li>
                <strong>Account Data:</strong> Login credentials, purchase
                history, preferences
              </li>
              <li>
                <strong>Device & Usage Info:</strong> Browser type, IP address,
                device ID, cookies, and usage patterns
              </li>
            </ul>

            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              How We Use Your Information
            </h2>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Process orders and deliver subscription boxes</li>
              <li>
                Communicate with you regarding your account, orders, or updates
              </li>
              <li>Personalize your user experience</li>
              <li>Analyze trends and improve our services</li>
              <li>Comply with legal or regulatory obligations</li>
            </ul>

            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              Sharing of Information
            </h2>
            <p class="mb-4">
              We do <strong>not sell</strong> your personal data. However, we
              may share your data with:
            </p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Service Providers:</strong> Such as payment processors,
                shipping partners, or email providers
              </li>
              <li>
                <strong>Legal Authorities:</strong> If required by law or to
                protect our rights
              </li>
              <li>
                <strong>Analytics & Marketing Tools:</strong> To improve website
                functionality and outreach
              </li>
            </ul>

            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              Cookies and Tracking
            </h2>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Store preferences</li>
              <li>Track user behavior</li>
              <li>Serve relevant content</li>
            </ul>

            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              Your Choices & Rights
            </h2>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Update or correct your personal information</li>
              <li>Opt out of marketing emails anytime</li>
              <li>Request deletion of your account</li>
            </ul>

            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              Data Security
            </h2>
            <p class="mb-6">
              We use encryption, secure servers, and best practices to safeguard
              your data. However, no system is 100% secure, so we cannot
              guarantee absolute protection.
            </p>

            <h2 class="text-2xl font-semibold text-indigo-600 mt-10 mb-2">
              Changes to This Policy
            </h2>
            <p class="mb-6">
              We may update this Privacy Policy as needed. Changes will be
              posted on this page with the new effective date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
