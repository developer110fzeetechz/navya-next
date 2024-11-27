import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const contactus = () => {
  return (
    <div className="container mx-auto py-10 px-6 md:flex">
  <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch with Us</h2>
    <form className="space-y-6">
      <input type="text" name="full_name" id="full_name" placeholder="Enter your full name" className="w-full py-2 px-4 border border-gray-300 rounded-md" required />
      <div className="flex items-center space-x-4">
        {/* Country Code Dropdown */}
        <select id="country-code" className="w-1/4 py-2 px-4 border border-gray-300 rounded-md">
          <option value={+1}>+1</option>
          <option value={+91} selected>+91</option>
          <option value={+44}>+44</option>
          {/* Add more countries here */}
        </select>
        <input type="tel" name="mobile_number" id="mobile_number" className="w-3/4 py-2 px-4 border border-gray-300 rounded-md" placeholder="Enter your mobile number" required />
      </div>
      <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full py-2 px-4 border border-gray-300 rounded-md" required />
      <textarea name="message" id="message" rows={4} placeholder="Enter your message" className="w-full py-2 px-4 border border-gray-300 rounded-md" required defaultValue={""} />
      <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Let's Connect Together</button>
    </form>
  </div>
  <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6">
  
    <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
    <p className="text-gray-600 mb-4">support@navyaedu.com</p>
    <p className="text-gray-600 mb-4">60, 1st Floor, Tonk Rd, opposite Jaipur Hospital, Gopalpura Mode, Jai Ambey Nagar, Jaipur, Rajasthan 302018</p>
    <div className="flex space-x-4 mb-4">
    <Link href={'' } className="text-blue-800 hover:text-blue-600">
    <FaFacebook />
  </Link> 
   <Link href={''} className="text-blue-800 hover:text-blue-600">
   <FaTwitter />
  {/* <AiFillAlert /> */}
  </Link>
    <Link  href={''} className="text-blue-800 hover:text-blue-600">
    <FaInstagram />
  </Link> 
   <Link href={''} className="text-blue-800 hover:text-blue-600">
   <FaLinkedin />
  </Link>
      <a href="#" className="text-blue-800 hover:text-blue-600"><i className="fab fa-facebook" /></a>
      <a href="#" className="text-blue-800 hover:text-blue-600"><i className="fab fa-twitter" /></a>
      <a href="#" className="text-blue-800 hover:text-blue-600"><i className="fab fa-instagram" /></a>
      <a href="#" className="text-blue-800 hover:text-blue-600"><i className="fab fa-linkedin" /></a>
    </div>
    <div className="mb-4">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.4650247483366!2d75.79037391436475!3d26.853121183235637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2757b3856f3%3A0x2ee1f4f157463507!2sNavyaEdu!5e0!3m2!1sen!2sin!4v1699765061384!5m2!1sen!2sin" width="100%" height={200} frameBorder={0} style={{border: 0}} allowFullScreen />
    </div>
  </div>
</div>

  )
}

export default contactus