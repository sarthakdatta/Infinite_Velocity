"use client"

import Image from "next/image";
import { FaYoutube, FaBook, FaTiktok, FaChevronDown, FaArrowUp} from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-purple-900/10' : ''}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              
              <a 
                href="/" 
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent hover:from-purple-100 hover:to-purple-300 transition-all duration-300"
              >
                Infinite Velocity
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button 
                
                className="text-purple-200 text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-900/30 hover:text-purple-100 transition-all duration-300"
              >
                About Us
              </button>
              <button 
                
                className="text-purple-200 text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-900/30 hover:text-purple-100 transition-all duration-300"
              >
                What We Do
              </button>
              <button 
                
                className="text-purple-200 text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-900/30 hover:text-purple-100 transition-all duration-300"
              >
                Contact
              </button>
              <button 
                className="ml-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium px-6 py-2 rounded-lg hover:from-purple-500 hover:to-purple-300 transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Navigation - Hamburger Icon (Add functionality as needed) */}
            <div className="md:hidden">
              <button className="text-purple-200 p-2 hover:bg-purple-900/30 rounded-lg transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

       
      </header>

      <div 
        id="hero"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50"></div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20 relative z-1">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              <span className="block">Pushing</span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Beyond Limits</span>
            </h1>
            
            <p className="text-xl mb-8 text-purple-100 font-light">
              Your personal launchpad for space exploration, propulsion knowledge, and rocketry inspiration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                
                className="bg-purple-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center group"
              >
                Explore Now
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-6 mt-2 sm:mt-0 sm:ml-4">
                <a
                  href="https://www.youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube Channel"
                >
                  <FaYoutube size={32} />
                </a>
                <a
                  href="https://www.tiktok.com/@yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  aria-label="TikTok Profile"
                >
                  <FaTiktok size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated stars/particles effect - simulated with dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-3/4 w-4 h-4 rounded-full bg-purple-300 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-purple-300 opacity-50 animate-pulse"></div>
          <div className="absolute top-2/3 left-1/2 w-3 h-3 rounded-full bg-purple-300 opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-purple-300 opacity-60 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/4 w-4 h-4 rounded-full bg-purple-300 opacity-30 animate-pulse"></div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            
            className="flex flex-col items-center text-purple-200 hover:text-purple-400 transition-colors duration-300 animate-bounce"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaChevronDown />
          </button>
        </div>
      </div>
    
      <div id="what-we-do" className="bg-gray-900 py-20 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-500 hover:scale-105">
              <h2 className="inline-block text-4xl font-bold text-white mb-6 relative">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">What We Do</span>
                
              </h2>
              
              <p className="text-purple-200 text-xl leading-relaxed mb-8">
                At Infinite Velocity, we aim to inspire and educate the next generation of space enthusiasts. 
                Our platform provides the tools and resources to help you understand the complexities of space travel, 
                propulsion systems, and rocketry.
              </p>
              
            
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/50 to-purple-300/50 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-xl transform transition-all duration-500 hover:-rotate-2 hover:scale-105">
                <Image
                  src="/whatwedo2.png"
                  width={600}
                  height={400} 
                  alt="What We Do at Infinite Velocity" 
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section: Features */}
      <div id="features" className="bg-gray-800 py-20 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-center text-4xl font-bold mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Our Features</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-purple-500/10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/10 hover:border-purple-500/30">
              <div className="inline-flex items-center justify-center bg-purple-600/20 rounded-full p-3 mb-4">
              <FaBook className="text-purple-300 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-3">Propulsion Education</h3>
              <p className="text-gray-300">Learn about the latest advancements in rocket propulsion systems with our interactive resources and articles.</p>

              <button className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-purple-600/20 mt-10">
                Explore Our Resources
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-purple-500/10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/10 hover:border-purple-500/30">
              <div className="inline-flex items-center justify-center bg-purple-600/20 rounded-full p-3 mb-4">
              <IoIosRocket className="text-purple-300 h-6 w-6" />

              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-3">Rocket Builds</h3>
              <p className="text-gray-300">Watch our team as we build and launch model rockets to showcase propulsion technology in action.</p>

              <button className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-purple-600/20 mt-15">
                See Our Latest Launch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-purple-500/10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/10 hover:border-purple-500/30">
              <div className="inline-flex items-center justify-center bg-purple-600/20 rounded-full p-3 mb-4">
              <MdPerson className="text-purple-300 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-3">Inspiring Stories</h3>
              <p className="text-gray-300">Discover the stories behind the individuals pushing the boundaries of space exploration.</p>
              <button className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-purple-600/20 mt-15">
                Read Their Stories
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

     

      {/* Footer */}
      <footer className="bg-gray-950 text-purple-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <IoIosRocket className="text-purple-400 mr-2 h-6 w-6" />
              <span className="text-xl font-bold">Infinite Velocity</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Infinite Velocity. All rights reserved.</p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition-all duration-300 z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Add this to your global CSS or Tailwind config for the animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        
        .scroll-mt-20 {
          scroll-margin-top: 5rem;
        }
        
        /* For smooth scrolling on the whole page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}