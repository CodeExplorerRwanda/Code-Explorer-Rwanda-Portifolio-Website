import { 
    FaGavel, FaFileContract, FaUserCheck, FaCreditCard,
    FaShieldAlt, FaBan, FaRocket, FaArrowRight,
    FaEnvelope, FaCheckCircle, FaGlobe
} from "react-icons/fa";
import { motion } from "framer-motion";

const TermsOfService = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const sections = [
        {
            icon: FaFileContract,
            title: "Acceptance of Terms",
            content: "By using our website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services."
        },
        {
            icon: FaCreditCard,
            title: "Payments and Billing",
            content: "We offer various service tiers with transparent pricing. All payments are processed securely. You agree to pay all charges associated with your selected services in accordance with the applicable pricing terms."
        },
        {
            icon: FaShieldAlt,
            title: "Intellectual Property",
            content: "All content, trademarks, logos, and intellectual property displayed on our website are the property of Code Explorer Rwanda Ltd. You may not reproduce, distribute, or create derivative works without our express written consent."
        },
        {
            icon: FaBan,
            title: "Prohibited Activities",
            content: "You agree not to engage in any activity that interferes with the proper working of our services, including but not limited to: attempting to gain unauthorized access, transmitting malware, or violating any applicable laws."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center mix-blend-overlay"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-400 mb-6">
                            <FaGavel className="mr-2" />
                            <span className="text-sm font-medium">Legal Terms</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Terms of Service
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-emerald-400">
                                Know Your Rights
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Understand the terms and conditions that govern your use of our website and services.
                        </p>
                        
                        <div className="mt-6 text-sm text-gray-400">
                            Last Updated: January 2026
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Introduction */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms of Service ("Terms") govern your use of Code Explorer Rwanda Ltd's website and services. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully before using our services.
                            </p>
                        </motion.div>

                        {/* Main Sections */}
                        {sections.map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            <IconComponent className="text-2xl text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition">
                                                {section.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Additional Terms */}
                        <motion.div variants={fadeInUp} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Service Modifications</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Code Explorer Rwanda Ltd reserves the right to modify, suspend, or discontinue any part of our services at any time. We will notify users of significant changes through our website or via email.
                            </p>
                            <div className="text-gray-600">
                                <p className="font-medium text-gray-800">Contact Information:</p>
                                <p>Email: codeexplorerrwanda@gmail.com</p>
                                <p>Phone: +250 728 184 299</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                        
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Need Legal Clarification?
                                </h2>
                                <p className="mt-3 text-lg text-orange-100 max-w-2xl leading-relaxed">
                                    Our team is available to answer any questions about our terms and policies.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-yellow-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Contact Legal Team
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;