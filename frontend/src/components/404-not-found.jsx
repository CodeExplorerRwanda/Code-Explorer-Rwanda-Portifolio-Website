import { 
    FaRocket, FaHome, FaArrowRight, FaEnvelope,
    FaSearch, FaFrown, FaCompass
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const commonLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Insights", path: "/insights" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="relative inline-block mb-8">
                        <div className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-emerald-500">
                            404
                        </div>
                        <div className="absolute -top-4 -right-4 animate-bounce">
                            <FaCompass className="text-4xl text-blue-400 opacity-50" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 animate-bounce delay-100">
                            <FaFrown className="text-4xl text-yellow-400 opacity-50" />
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Oops! Page Not Found
                    </h1>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        The page you're looking for seems to have wandered off. Don't worry, we'll help you find your way back.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                            Quick Navigation
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {commonLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                        >
                            <Link to="/" className="flex items-center">
                                <FaHome className="mr-2" />
                                Return Home
                            </Link>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center border border-gray-200"
                        >
                            <Link to="/contact" className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                Contact Support
                            </Link>
                        </motion.button>
                    </div>

                    <div className="mt-16 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaRocket className="text-blue-500" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-gray-800 mb-1">Lost? Let's Get You Back</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    The page you were looking for might have been moved, renamed, or is temporarily unavailable. 
                                    Try using the search bar or navigate to one of our main pages above.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;