import { 
    FaShieldAlt, FaLock, FaUserSecret, FaDatabase, 
    FaCookie, FaEnvelope, FaRocket, FaArrowRight,
    FaCheckCircle, FaGlobe
} from "react-icons/fa";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            icon: FaUserSecret,
            title: "Information We Collect",
            content: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on our website, or otherwise when you contact us."
        },
        {
            icon: FaDatabase,
            title: "How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and updates, and to respond to your comments and questions."
        },
        {
            icon: FaCookie,
            title: "Cookies and Tracking",
            content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
        },
        {
            icon: FaShieldAlt,
            title: "Data Security",
            content: "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction."
        },
        {
            icon: FaGlobe,
            title: "Third-Party Services",
            content: "We may employ third-party companies and individuals to facilitate our services, to provide services on our behalf, or to assist us in analyzing how our services are used."
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
                            <FaShieldAlt className="mr-2" />
                            <span className="text-sm font-medium">Privacy & Security</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Privacy Policy
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                Your Data, Protected
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
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
                                ByteFlow Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our views and practices regarding your personal data.
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
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            <IconComponent className="text-2xl text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition">
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

                        {/* Contact Section */}
                        <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Contact Us</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-600">
                                <p><span className="font-medium">Email:</span> byteflowltd9@gmail.com</p>
                                <p><span className="font-medium">Phone:</span> +250 796 023 452</p>
                                <p><span className="font-medium">Address:</span> Gasabo, Kigali, Rwanda</p>
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
                        className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                        
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Have Questions About Privacy?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    We're here to help. Reach out to our team for any privacy-related concerns.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Contact Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;