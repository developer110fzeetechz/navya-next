
'use-client'
import React from 'react'

const Footer = () => {
  return (

 <footer className="bg-gray-300 text-gray-300 py-8 mt-10">
  <div className="container mx-auto text-center">
    <img src="https://backend.navyaedu.com/public/images/file.png" alt="NavyaEdu Logo" className="h-12 mx-auto mb-4" />
    <p className="mt-4 text-sm text-gray-800">Email: support@navyaedu.com | Phone: +91 861 933 7885</p>
    <p className="mt-4 text-sm text-gray-800">Address: 112/07, Madhyam Marg, Mansarovar, Jaipur, Rajasthan, 302020, IN</p>
    <div className="mt-4 text-sm text-gray-800">
      <a href="https://navyaedu.com/privacy-policy" className="text-gray-800 hover:text-white mx-2">Privacy Policy</a> |
      <a href="https://navyaedu.com/setting?page=termservice" className="text-gray-800 hover:text-white mx-2">Terms &amp; Conditions</a>
    </div>
    <nav className="mt-4 space-x-4">
      <a href="#" className="text-blue-800 hover:underline">Facebook</a>
      <a href="#" className="text-blue-800 hover:underline">Twitter</a>
      <a href="#" className="text-blue-800 hover:underline">Instagram</a>
      <a href="#" className="text-blue-800 hover:underline">LinkedIn</a>
      <a href="mailto:support@navyaedu.com" className="text-blue-800 hover:underline">Contact Us</a>
    </nav>
    <p className="mt-4 text-sm text-gray-800">Copyright © 2024, iAlpha EdTech Private Limited. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer