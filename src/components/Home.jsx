import React, { useEffect, useState } from 'react'
import './animating.js'
import FAQ from './Ui/FAQ.jsx';
import FeaturesSection from './FeaturedSection.jsx';
import Abcd from '@/utils/Abcd.jsx';
import { useLoader } from '@/context/useLoader.jsx';


// import {features} from './'

const Home = () => {
    const {isLoading, setIsLoading}=useLoader()
    

    useEffect(() => {

        document.querySelectorAll(".ion-animation-control button").forEach((button) => {
            button.addEventListener("click", () => {
                const wrapper = document.querySelector(".navya-overview-hero__animating-headlines-wrapper");
                wrapper.style.animationPlayState =
                    wrapper.style.animationPlayState === "paused" ? "running" : "paused";
            });
        });



        const faders = document.querySelectorAll('.fade-in-up');

        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                appearOnScroll.unobserve(entry.target);
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
        // --------------------------animtions--------------------

        const words = ["NEET PG - NExT", "FMGE", "MBBS Exams", "Online Test Series"];
        let currentWordIndex = 0;
        let letterIndex = 0;
        let isErasing = false;
        const typingSpeed = 150;
        const erasingSpeed = 100;
        const pauseBeforeErase = 1500; // Pause before starting to erase
        const typewriterElement = document.querySelector('.typewriter-text');
        console.log(typewriterElement);
        function typeWriterEffect() {

            const currentWord = words[currentWordIndex];

            // Typing effect
            if (!isErasing && letterIndex < currentWord.length) {
                const span = document.createElement('span');
                span.textContent = currentWord.charAt(letterIndex);
                typewriterElement.appendChild(span);  // Append span to apply gradient
                letterIndex++;
                setTimeout(typeWriterEffect, typingSpeed);
            }
            // Erase effect
            else if (isErasing && letterIndex > 0) {
                typewriterElement.removeChild(typewriterElement.lastChild); // Remove last span
                letterIndex--;
                setTimeout(typeWriterEffect, erasingSpeed);
            }
            // Transition to erasing after typing the full word
            else if (!isErasing && letterIndex === currentWord.length) {
                isErasing = true;
                setTimeout(typeWriterEffect, pauseBeforeErase);
            }
            // Move to the next word after erasing is complete
            else if (isErasing && letterIndex === 0) {
                isErasing = false;
                currentWordIndex = (currentWordIndex + 1) % words.length; // Loop through words
                setTimeout(typeWriterEffect, typingSpeed);
            }
        }

        typeWriterEffect();





        // Toggle Mobile Menu
        const hamburgerButton = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('mobile-menu');

        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Dropdown functionality for "Courses"
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownArrow = dropdown.querySelector('.dropdown-arrow');

        dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle('hidden');
            dropdownArrow.textContent = dropdownMenu.classList.contains('hidden') ? '▼' : '▲';
        });
    }, [])

    // useEffect(() => {
    //     const featureList = document.querySelectorAll(".feature-item");
    //     const imagePlaceholder = document.querySelector(".image-container");

    //     let currentFeatureIndex = 0;
    //     console.log(featureList);
    //     function updateFeatureImage(index) {
    //         imagePlaceholder.innerHTML = features[index].imageCode;


    //         featureList.forEach(item => {
    //             item.querySelector("span").classList.remove("highlighted");
    //         });

    //         featureList[index].querySelector("span").classList.add("highlighted");
    //     }

    //     featureList.forEach((item, index) => {
    //         item.addEventListener("click", () => {
    //             currentFeatureIndex = index;
    //             updateFeatureImage(index);
    //         });
    //     });

    //     function autoRotateFeatures() {
    //         currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
    //         updateFeatureImage(currentFeatureIndex);
    //     }

    //     // Initial setup
    //     updateFeatureImage(currentFeatureIndex);
    //     // setInterval(autoRotateFeatures, 4000);
    // }, [])


    return (
        <div>

            {/* Floating circles */}
            <div className="floating-circle circle1" />
            <div className="floating-circle circle2" />
            <div className="floating-circle circle3" />
            {/* Header Section */}
            <header />
            {/* Hero Section with Typewriter Effect */}
            <section className="flex flex-col items-center justify-center h-screen text-black text-center bg-gray-100 px-4 sm:px-6 lg:px-8">
                <section id="gift-banner">
                    <div className="bg-blue-100 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:px-8 md:py-6 rounded-3xl shadow-md max-w-5xl mx-auto">
                        <span className="bg-blue-200 text-blue-600 text-lg font-bold py-2 px-4 rounded-lg">
                            ₹5,000
                        </span>
                        <div className="text-center md:text-left flex-1 md:px-4 mt-4 md:mt-0">
                            <p className="text-gray-900 text-sm md:text-base">
                                Welcome to NavyaEdu - Explore Our Online Test Series Specially Curated for Medical Exam Aspirants
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                                The first 1,000 applicants will receive a welcome kit worth ₹5,000.*
                            </p>
                        </div>
                        <a href="#claim" className="mt-4 md:mt-0 bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700">
                            Grab Now
                        </a>
                    </div>
                </section>
                <div className="max-w-4xl mt-24 mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Empower Your Medical Journey with
                        <span className="text-green-700 font-Comfortaa">NavyaEdu</span>
                    </h1>
                </div>
                {/* Typewriter Animation */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    Top Rankers' Choice for <span className="typewriter-text" />
                </h2>
                {/* Buttons */}
                <div className="sticky-buttons flex justify-center space-x-4 mt-8">
                    <a href="#features" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg btn-hover transition-transform duration-200">
                        Explore Features
                    </a>
                    <a href="#join" className="bg-blue-600 px-6 py-3 rounded-full font-bold text-white shadow-lg btn-hover transition-transform duration-200">
                        Get Started
                    </a>
                </div>
            </section>
    
            <section className="min-h-screen flex flex-col items-start justify-center p-6">
                {/* Main Content */}
                {/* <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                    <section className="p-6 md:order-1 order-2">
                        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
                            Discover <span className="text-blue-500 font-Comfortaa">NavyaEdu</span> Features
                        </h1>
                        <ul id="feature-list" className="space-y-4">
                            <li className="feature-item p-4 cursor-pointer" data-feature="Audio Sessions">
                                <span className="text-xl font-semibold text-gray-800">Audio Sessions</span>
                                <p className="text-sm text-gray-600 mt-1">Listen to expert-guided sessions anytime.</p>
                            </li>
                            <li className="feature-item p-4 cursor-pointer" data-feature="Video Sessions">
                                <span className="text-xl font-semibold text-gray-800">Video Sessions</span>
                                <p className="text-sm text-gray-600 mt-1">High-quality video lectures for detailed understanding.</p>
                            </li>
                            <li className="feature-item p-4 cursor-pointer" data-feature="Test Series">
                                <span className="text-xl font-semibold text-gray-800">Test Series</span>
                                <p className="text-sm text-gray-600 mt-1">Prepare for exams with our comprehensive test series.</p>
                            </li>
                            <li className="feature-item p-4 cursor-pointer" data-feature="Multilingual Options">
                                <span className="text-xl font-semibold text-gray-800">Multilingual Options</span>
                                <p className="text-sm text-gray-600 mt-1">Access content in your preferred language.</p>
                            </li>
                        </ul>
                    </section>
           
                    <section id="image-placeholder" className="relative p-6 bg-transparent border-0 rounded-lg md:order-2 order-1">
                        <div className="image-container">
                           
                        </div>
                    </section>
                </section> */}

                <FeaturesSection/>
            </section>
            {/* Contact & Join Now Button */}
            <section id="contact" className="py-16 text-white text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Download the NavyaEdu App Now – It's Free!</h2>
                <p className="text-lg text-gray-600 mb-6">Start your journey with NavyaEdu and redefine your medical career.</p>
                {/* App Download Links */}
                <div className="flex justify-center mt-6 space-x-4">
                    <a href="https://play.google.com/store/apps/details?id=com.navyaedu"><img src="https://shtheme.com/demosd/sanbi/wp-content/uploads/2023/08/google-play.png" alt="Download on Google Play" className="h-12" /></a>
                    <a href="#"><img src="https://shtheme.com/demosd/sanbi/wp-content/uploads/2023/08/app-store.png" alt="Download on the App Store" className="h-12" /></a>
                </div>
            </section>
            {/* Pricing Plans Section */}
            <section className="bg-gray-100 text-gray-800">
                <section id="pricing" className="py-16 px-4 sm:px-8 lg:px-36">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-Roboto font-semibold mb-12 text-gray-600 text-center">
                        Pricing Plans
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Basic Plan */}
                        <div className="relative fade-in-up hover-scale transition-transform bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-xl border-2 border-blue-200 overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-300 to-transparent rounded-full" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-t from-blue-100 to-transparent rounded-full" />
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-blue-600 mb-4 group-hover:text-blue-800 transition-colors">
                                Basic Plan
                            </h3>
                            <p className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6">$49/mo</p>
                            <ul className="text-gray-700 space-y-3 sm:space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                                    </svg>
                                    Online Test Series
                                </li>
                            </ul>
                            <a href="#join" className="mt-6 inline-block px-6 py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition-all transform group-hover:scale-105">
                                Join Now
                            </a>
                        </div>
                        {/* Standard Plan */}
                        <div className="relative fade-in-up hover-scale transition-transform bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-xl border-2 border-blue-200 overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-300 to-transparent rounded-full" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-t from-blue-100 to-transparent rounded-full" />
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-blue-600 mb-4 group-hover:text-blue-800 transition-colors">
                                Standard Plan
                            </h3>
                            <p className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6">$79/mo</p>
                            <ul className="text-gray-700 space-y-3 sm:space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                                    </svg>
                                    Audio Sessions (Multilingual Availability)
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                                    </svg>
                                    Video Sessions (Multilingual Availability)
                                </li>
                            </ul>
                            <a href="#join" className="mt-6 inline-block px-6 py-2 sm:py-3 bg-gray-300 text-white font-medium rounded-full hover:bg-gray-400 focus:ring-2 focus:ring-blue-300 transition-all transform group-hover:scale-105">
                                Coming Soon
                            </a>
                        </div>
                        {/* Premium Plan */}
                        <div className="relative fade-in-up hover-scale transition-transform bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-xl border-2 border-blue-400 overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-300 to-transparent rounded-full" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-t from-blue-100 to-transparent rounded-full" />
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-blue-600 mb-4 group-hover:text-blue-800 transition-colors">
                                Premium Plan
                            </h3>
                            <p className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6">$99/mo</p>
                            <ul className="text-gray-700 space-y-3 sm:space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                                    </svg>
                                    Online Test Series
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                                    </svg>
                                    Audio Sessions (Multilingual Availability)
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                                    </svg>
                                    Video Sessions (Multilingual Availability)
                                </li>
                            </ul>
                            <a href="#join" className="mt-6 inline-block px-6 py-2 sm:py-3 bg-gray-300 text-white font-medium rounded-full hover:bg-gray-400 focus:ring-2 focus:ring-blue-300 transition-all transform group-hover:scale-105">
                                Coming Soon
                            </a>
                        </div>
                    </div>
                </section>
            </section>
            {/* Course Screenshots with Scroll Animations */}
            <section id="courses" className="py-16 px-4 sm:px-8 lg:px-36 bg-transparent text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-Roboto mb-12 text-gray-800 tracking-tight">
                    <span className="text-blue-600">Courses</span> We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {/* Medical Course */}
                    <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-100 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="flex items-center justify-center bg-blue-50 rounded-lg mb-4 w-full h-48">
                            <img src="https://via.placeholder.com/400" alt="Medical Courses" className="w-24 h-24 object-contain" />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Medical Courses</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Explore NEET PG, FMGE, and other medical excellence courses curated for your success.</p>
                        <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">Learn More →</a>
                    </div>
                    {/* Engineering Course */}
                    <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-green-100 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="flex items-center justify-center bg-green-50 rounded-lg mb-4 w-full h-48">
                            <img src="https://via.placeholder.com/400" alt="Engineering Courses" className="w-24 h-24 object-contain" />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Engineering Courses</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Ace your engineering exams with our expert-curated technical content and practice sessions.</p>
                        <a href="#" className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium">Learn More →</a>
                    </div>
                </div></section>
            <section id="awareness-program" className="py-16 px-4 sm:px-8 lg:px-36 bg-transparent text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-Roboto font-bold text-gray-800 mb-6">
                        Join <span className="text-green-600">NavyaEdu's</span> Awareness Program
                    </h2>
                    <p className="text-gray-700 text-lg sm:text-xl mb-8">
                        Empower yourself with the right knowledge and resources. Our awareness program is tailored for students, professionals, and institutions aiming to stay ahead in the ever-changing educational landscape.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4">
                                <img src="https://via.placeholder.com/80" alt="Expert Sessions" className="w-16 h-16" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert-Led Sessions</h3>
                            <p className="text-gray-600 text-sm">Interact with industry leaders and subject matter experts in engaging workshops and webinars.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4">
                                <img src="https://via.placeholder.com/80" alt="Resource Access" className="w-16 h-16" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Resources</h3>
                            <p className="text-gray-600 text-sm">Access curated materials, tools, and practice tests designed to help you succeed in your academic journey.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4">
                                <img src="https://via.placeholder.com/80" alt="Networking Opportunities" className="w-16 h-16" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Networking Opportunities</h3>
                            <p className="text-gray-600 text-sm">Connect with peers, mentors, and professionals from diverse backgrounds to expand your horizons.</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <a href="#register" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                            Register Now
                        </a>
                    </div>
                </div>
            </section>
            <FAQ />
            {/* Footer */}
            <footer />
        </div>

    )
}

export default Home