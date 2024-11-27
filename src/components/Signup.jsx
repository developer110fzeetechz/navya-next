import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const maxDate = new Date().toISOString().split("T")[0]; // Set max DOB to today
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-roboto min-h-screen">
      {/* Main Content */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Create Your NavyaEdu Account
        </h2>

        <form id="signup-form" className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="full-name"
              className="text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter your full name"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <label
              htmlFor="mobile-number"
              className="text-sm font-medium text-gray-600"
            >
              Mobile Number
            </label>
            <div className="flex items-center space-x-4">
              <select
                id="country-code"
                className="w-1/4 py-2 px-4 border border-gray-300 rounded-md"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="mobile-number"
                name="mobile-number"
                placeholder="Enter your mobile number"
                className="w-3/4 py-2 px-4 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label
              htmlFor="gender"
              className="text-sm font-medium text-gray-600"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label
              htmlFor="dob"
              className="text-sm font-medium text-gray-600"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              max={maxDate}
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Referral Code */}
          <div className="space-y-2">
            <label
              htmlFor="referral-code"
              className="text-sm font-medium text-gray-600"
            >
              Referral Code (Optional)
            </label>
            <input
              type="text"
              id="referral-code"
              name="referral-code"
              placeholder="Enter referral code (if any)"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Signup
          </button>
        </form>

        {/* Social Login Options */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Or sign up with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <i className="fab fa-google"></i>
              <span>Google</span>
            </button>
            <button
              className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </button>
          </div>
        </div>

        {/* Already Have an Account */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
