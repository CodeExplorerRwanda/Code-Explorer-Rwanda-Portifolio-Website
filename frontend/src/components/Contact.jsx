import { 
    FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaWhatsapp,
    FaRocket, FaArrowRight, FaCheckCircle, FaGlobe, FaShieldAlt,
    FaUsers, FaStar, FaGem, FaCrown
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
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

    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/sendEmail', formData);
            alert(res?.data?.message || "Message sent successfully");
        } catch (err) {
            alert(err.response?.data?.error || "Failed to send message")
        }
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: "Visit Us",
            detail: "Nyamata, Bugesera, Rwanda",
            color: "blue"
        },
        {
            icon: FaEnvelope,
            title: "Email Us",
            detail: "codeexplorerrwanda@gmail.com",
            color: "yellow"
        },
        {
            icon: FaPhone,
            title: "Call Us",
            detail: "+250 728 184 299",
            color: "emerald"
        },
        {
            icon: FaClock,
            title: "Working Hours",
            detail: "Mon - Sun: 8:00 AM - 9:00 PM",
            color: "purple"
        }
    ];

    const features = [
        {
            icon: FaGlobe,
            title: "Global Standards",
            description: "We apply international best practices to every project we deliver.",
            color: "blue"
        },
        {
            icon: FaUsers,
            title: "Local Expertise",
            description: "Deep understanding of the Rwandan market and business environment.",
            color: "yellow"
        },
        {
            icon: FaShieldAlt,
            title: "Precision Engineering",
            description: "Every detail is crafted with precision to ensure optimal performance.",
            color: "emerald"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600", hover: "hover:bg-blue-50", light: "bg-blue-100" },
            yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", gradient: "from-yellow-500 to-yellow-600", hover: "hover:bg-yellow-50", light: "bg-yellow-100" },
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600", hover: "hover:bg-emerald-50", light: "bg-emerald-100" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600", hover: "hover:bg-purple-50", light: "bg-purple-100" }
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50">
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
                            <FaRocket className="mr-2" />
                            <span className="text-sm font-medium">Get in Touch</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Let's Start a Project
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-emerald-400">
                                Together
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Ready to transform your vision into a digital reality? Reach out to our team today.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Get Started
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm flex items-center"
                            >
                                <FaWhatsapp className="mr-2 text-xl" />
                                Chat on WhatsApp
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            CONTACT US
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Let's Build Something Great Together
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <motion.div 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                const colors = getColorClasses(info.color);
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-x-1`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                                <IconComponent className={`text-2xl ${colors.text}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">{info.title}</h3>
                                                <p className="text-lg font-medium text-gray-800 mt-1">{info.detail}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                variants={fadeInUp}
                                className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <button className="w-full flex items-center justify-center text-white font-bold text-lg">
                                    <FaWhatsapp className="mr-3 text-2xl" />
                                    Chat on WhatsApp
                                </button>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="e.g. Website Development"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                            How can we help?
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project goals..."
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                                    >
                                        Send Message
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                                    </motion.button>
                                </form>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-bold rounded-full text-sm tracking-wider">
                            WHY Code Explorer
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Global Standards, Local Expertise
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Serving clients in Kigali and beyond with precision engineering.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            const colors = getColorClasses(feature.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                                >
                                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6`}>
                                        <IconComponent className={`text-3xl ${colors.text}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="h-[400px] bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center relative">
                            <div className="text-center">
                                <FaMapMarkerAlt className="text-6xl text-blue-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-700">Find Us Here</h3>
                                <p className="text-gray-500 mt-2">Nyamata, Bugesera, Rwanda</p>
                                <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                                    <FaGlobe className="mr-2" />
                                    View on Google Maps
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

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
                                    Ready to Transform Your Vision?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Let's create something remarkable together. Our team is ready to bring your ideas to life.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                                >
                                    <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                    Contact Us
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                                >
                                    <FaWhatsapp className="mr-2 text-xl group-hover:scale-110 transition duration-300" />
                                    WhatsApp
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;