import { FaHome, FaInfoCircle, FaServicestack, FaBriefcase, FaNewspaper, FaEnvelope, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo.jpeg";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center group cursor-pointer">
                    <img 
                        src={logo}  
                        alt="Code Explorer Rwanda Logo" 
                        className="w-14 h-14 rounded-full object-cover shadow-md hover:scale-110 transition-all duration-300 ease-in-out"
                    />
                    <div className="ms-3">
                        <h1 className="text-2xl font-bold tracking-tight">
                            <span className="text-blue-600 hover:text-blue-700 transition-colors">Code</span>
                            <span className="text-yellow-500 hover:text-yyellow-600 transition-colors">Explorer</span>
                            <span className="text-emerald-600 hover:text-emerald-700 transition-colors">Rwanda</span>
                            <span className="text-gray-600"> Ltd</span>
                        </h1>
                        <p className="text-xs text-gray-500 font-medium tracking-wider">ENGINEERING DIGITAL SUCCESS</p>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-1">
                    <Link 
                        to="/" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                        <FaHome className="me-2 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Home</span>
                    </Link>
                    
                    <Link 
                        to="/solution" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                        <FaServicestack className="me-2 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Solutions</span>
                    </Link>
                    
                    <Link 
                        to="/portfolio" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                        <FaBriefcase className="me-2 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Portfolio</span>
                    </Link>
                    
                    <Link 
                        to="/about" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                        <FaInfoCircle className="me-2 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">About</span>
                    </Link>
                    
                    <Link 
                        to="/insights" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                        <FaNewspaper className="me-2 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Insights</span>
                    </Link>
                    
                    <Link 
                        to="/contact" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                        <FaEnvelope className="me-2 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Connect</span>
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <Link 
                        to="/get-started" 
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Launch Project
                    </Link>
                </div>

                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 py-2 space-y-1 bg-white border-t border-gray-100">
                    <Link to="/" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <FaHome className="me-3 text-lg" />
                        <span className="font-medium">Home</span>
                    </Link>
                    <Link to="/services" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <FaServicestack className="me-3 text-lg" />
                        <span className="font-medium">Solutions</span>
                    </Link>
                    <Link to="/portfolio" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <FaBriefcase className="me-3 text-lg" />
                        <span className="font-medium">Portfolio</span>
                    </Link>
                    <Link to="/about" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <FaInfoCircle className="me-3 text-lg" />
                        <span className="font-medium">About</span>
                    </Link>
                    <Link to="/blog" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <FaNewspaper className="me-3 text-lg" />
                        <span className="font-medium">Insights</span>
                    </Link>
                    <Link to="/contact" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <FaEnvelope className="me-3 text-lg" />
                        <span className="font-medium">Connect</span>
                    </Link>
                    <Link to="/get-started" className="flex items-center justify-center px-4 py-3 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <FaRocket className="me-2" />
                        <span className="font-bold">Launch Project</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;