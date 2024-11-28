import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import useAxios from "@/Hooks/useAxios";
import { api_login } from "@/Helper/apiEndPoint";
import toast from "react-hot-toast";
import { customToast, errorToast, successToast } from "@/Helper/hotToast";
import { useData } from "@/context/useData";
import { useRouter } from "next/router";


const Login = () => {
  const [isMobileForm, setIsMobileForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const axios = useAxios()
  const { setUserToken } = useData()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone_no: '',

  })

  const handleInputChange = (e) => {
    if (e.target.name === "phone_no") {
      let phone = e.target.value.replace(/[^0-9]/g, '');

      setFormData({ ...formData, [e.target.name]: phone });
      return

    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const submit = async (e) => {
    e.preventDefault()


    let payload
    if (!isMobileForm) {
      payload = {
        email: formData.email,
        password: formData.password
      }
    } else {
      payload = {
        country_code: 91,
        phone_no: formData.phone_no,
        password: formData.password
      }
    }


    try {
      // console.log(payload);
      const { data } = await axios.post(api_login, payload)
      console.log(data);
      setUserToken(data.token)
      successToast(data?.message)
      router.replace('/')
    } catch (error) {
      console.log({ error });
      errorToast(error?.data?.message || error?.data?.msg)
    }
  }


  //   payload = {
  //     email,
  //     password,
  //     deviceFcmToken: fcmToken
  // }
  // payload = {
  //   country_code: 91,
  //   phone_no: phone,
  //   password,
  //   deviceFcmToken: fcmToken
  // }

  return (
    <>

      <div className="bg-gray-50 text-gray-900 font-roboto min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Login to Your NavyaEdu Account
          </h2>

          {/* Form Toggle Buttons */}
          <div className="flex justify-center mb-4">
            <button
              className={`w-1/2 py-2 text-lg font-medium focus:outline-none focus:ring-2 ${isMobileForm ? "text-blue-600" : "text-gray-600"
                }`}
              onClick={() => setIsMobileForm(true)}
            >
              Mobile Number
            </button>
            <button
              className={`w-1/2 py-2 text-lg font-medium focus:outline-none focus:ring-2 ${!isMobileForm ? "text-blue-600" : "text-gray-600"
                }`}
              onClick={() => setIsMobileForm(false)}
            >
              Email
            </button>
          </div>

          <form className="space-y-6" onSubmit={submit}>
            {/* Mobile Number Form */}
            {isMobileForm && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <select
                    id="country-code"
                    className="w-1/4 py-2 px-4 border border-gray-300 rounded-md"
                  >
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                    <option value="+44">+44</option>
                    {/* Add more countries */}
                  </select>
                  <input
                    type="tel"
                    className="w-3/4 py-2 px-4 border border-gray-300 rounded-md"
                    placeholder="Enter your mobile number"
                    required
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleInputChange}
                    maxLength={10}
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
            )}

            {/* Email Form */}
            {!isMobileForm && (
              <div className="space-y-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                  required
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* Password Form */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-between">
              <a
                href="#forgot-password"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          {/* Social Login Options */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or sign up with</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <i className="fab fa-google"></i>
                <span>Google</span>
              </button>
              <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
