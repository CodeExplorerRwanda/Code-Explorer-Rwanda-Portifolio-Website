import { 
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, 
    FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
    FaGlobe, FaRocket
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {/* Brand Section */}
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <div className="ml-3">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-blue-400">Byte</span>
                                    <span className="text-amber-400">Flow</span>
                                    <span className="text-gray-400"> Ltd</span>
                                </h2>
                                <p className="text-gray-400 text-sm">ENGINEERING DIGITAL SUCCESS</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Digital engineering and business growth for modern teams. We build websites, branding, and marketing that drive results.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                                <FaFacebook className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform">
                                <FaYoutube className="text-xl" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Explore Section */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-bold mb-4 text-white relative">
                            EXPLORE
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></span>
                        </h3>
                        <ul className="space-y-3 pt-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/insights" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Insights
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-bold mb-4 text-white relative">
                            SERVICES
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mt-1"></span>
                        </h3>
                        <ul className="space-y-3 pt-3">
                            <li>
                                <Link to="/services#web-development" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#graphic-design" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Brand Design
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#digital-marketing" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#web-hosting" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Support & Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#photography" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Photography & Video
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact & Newsletter Section */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-bold mb-4 text-white relative">
                            CONTACT
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mt-1"></span>
                        </h3>
                        <ul className="space-y-3 pt-3">
                            <li className="flex items-start text-gray-400 hover:text-white transition-colors duration-300">
                                <FaMapMarkerAlt className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                                <span>Gasabo, Kigali, Rwanda</span>
                            </li>
                            <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                                <FaPhone className="text-emerald-400 mr-3 flex-shrink-0" />
                                <a href="tel:+250796023452" className="hover:text-white transition-colors">+250 796 023 452</a>
                            </li>
                            <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                                <FaEnvelope className="text-emerald-400 mr-3 flex-shrink-0" />
                                <a href="mailto:byteflowltd9@gmail.com" className="hover:text-white transition-colors">byteflowltd9@gmail.com</a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-gray-300 mb-2">NEWSLETTER</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                Subscribe for updates on design, strategy, and new launches.
                            </p>
                            <form onSubmit={handleSubmit} className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 pr-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300"
                                >
                                    <FaArrowRight />
                                </button>
                            </form>
                        </div>

                        {/* Talk to ByteFlow Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        >
                            <FaRocket className="mr-2" />
                            Talk to ByteFlow!
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} ByteFlow Ltd. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <span className="text-gray-700">|</span>
                            <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <span className="text-gray-700">|</span>
                            <Link to="/contact" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                                Contact
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <FaGlobe className="text-gray-600" />
                            <span>ENGINEERING DIGITAL SUCCESS</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;