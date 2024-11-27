'use-client'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
  <div className="container mx-auto flex items-center justify-between py-4 px-6">
    <div className="flex items-center space-x-3">
      <img src="https://backend.navyaedu.com/public/images/file.png" alt="NavyaEdu Logo" className="h-8" />
    </div>
    {/* Navigation Menu */}
    <nav id="mobile-menu" className="hidden md:flex items-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-200">Home</Link>
      <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-200">Dashboard</a>
      <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-200">Pricing</a>
      {/* Courses Dropdown */}
      <div className="relative dropdown">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-200">Courses
          <span className="dropdown-arrow">▼</span>
        </a>
        <div className="dropdown-menu bg-white shadow-md rounded-lg mt-2 absolute left-0 hidden w-40">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">NEET PG - NExT</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">INI CET</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">FMGE</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">MBBS 1st Year</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">MBBS 2nd Year</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">SS</a>
        </div>
      </div>
      <a href="/#news" className="text-gray-700 hover:text-blue-600 transition duration-200">News</a>
      <a href="/#community" className="text-gray-700 hover:text-blue-600 transition duration-200">Community</a>
      <Link href="/contactus" className="text-gray-700 hover:text-blue-600 transition duration-200">Contact us</Link>
      <Link href="/login" className="text-white bg-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-200">Login/Signup</Link>
    </nav>
    {/* Hamburger Button */}
    <button id="hamburger-button" className="md:hidden text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>
</header>

  )
}

export default Header