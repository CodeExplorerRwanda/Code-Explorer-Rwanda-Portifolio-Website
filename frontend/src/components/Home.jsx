import { 
    FaCode, FaPalette, FaShare, FaServer, FaRocket, FaUsers, 
    FaLightbulb, FaArrowRight, FaEnvelope, FaQuestion, FaArrowDown,
    FaLaptop, FaMobile, FaTablet, FaCheckCircle, FaStar, FaHeart,
    FaGem, FaCrown, FaChartLine, FaClock, FaShieldAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    // Animation variants
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

    const cardHover = {
        hover: { 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
        }
    };

    const serviceCards = [
        { icon: FaCode, title: "Modern Websites", desc: "Clean, responsive websites that work beautifully on every device and screen size.", color: "blue" },
        { icon: FaPalette, title: "Brand Design", desc: "Distinctive logos, visual identity systems, and marketing materials that make your brand memorable.", color: "amber" },
        { icon: FaShare, title: "Digital Growth", desc: "SEO optimization, content strategy, and targeted ads to expand your online reach.", color: "emerald" },
        { icon: FaServer, title: "Cloud Hosting", desc: "Fast, secure hosting with daily backups and 24/7 support for total peace of mind.", color: "purple" }
    ];

    const processSteps = [
        { number: "01", title: "Share Your Vision", desc: "We start with a deep conversation about your goals, audience, and what makes your business unique." },
        { number: "02", title: "Design & Develop", desc: "Our team crafts tailored solutions that align with your brand identity and budget perfectly." },
        { number: "03", title: "Launch & Grow", desc: "We deliver polished results, provide training, and support your continued growth journey." }
    ];

    const pricingTiers = [
        { 
            tier: "Starter", 
            price: "250,000", 
            features: ["Landing Page", "Mobile Responsive", "Basic SEO", "Contact Form"],
            icon: FaGem,
            color: "blue"
        },
        { 
            tier: "Professional", 
            price: "450,000", 
            features: ["Business Website", "E-commerce Ready", "Advanced SEO", "Blog Integration"],
            icon: FaCrown,
            color: "amber"
        },
        { 
            tier: "Enterprise", 
            price: "800,000", 
            features: ["Web Application", "Dashboard", "Analytics", "Priority Support"],
            icon: FaRocket,
            color: "emerald"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center">
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
                            <span className="text-sm font-medium">Digital Innovation Since 2023</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                            We Build Clear Websites,
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                Polished Branding
                            </span>
                            and Smart Marketing.
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Code Explorer Rwanda crafts exceptional digital experiences — from stunning websites to powerful branding and results-driven marketing strategies.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Start Your Project
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Solutions
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            WHAT WE DO
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Clear Services That Make Your Brand Shine
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {serviceCards.map((service, index) => {
                            const IconComponent = service.icon;
                            const colorMap = {
                                blue: "from-blue-500 to-blue-600",
                                amber: "from-amber-500 to-amber-600",
                                emerald: "from-emerald-500 to-emerald-600",
                                purple: "from-purple-500 to-purple-600"
                            };
                            const bgColorMap = {
                                blue: "bg-blue-50",
                                amber: "bg-amber-50",
                                emerald: "bg-emerald-50",
                                purple: "bg-purple-50"
                            };
                            const textColorMap = {
                                blue: "text-blue-600",
                                amber: "text-amber-600",
                                emerald: "text-emerald-600",
                                purple: "text-purple-600"
                            };

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`w-16 h-16 ${bgColorMap[service.color]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className={`text-3xl ${textColorMap[service.color]}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                    <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 font-bold rounded-full text-sm tracking-wider">
                            HOW IT WORKS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Simple Steps From Idea to Launch
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="relative group"
                            >
                                <div className="text-6xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                                        <FaArrowRight className="text-3xl text-blue-200" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-bold rounded-full text-sm tracking-wider">
                            PRICING
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Choose the Perfect Plan For Your Goals
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {pricingTiers.map((tier, index) => {
                            const IconComponent = tier.icon;
                            const colorMap = {
                                blue: "from-blue-500 to-blue-600",
                                amber: "from-amber-500 to-amber-600",
                                emerald: "from-emerald-500 to-emerald-600"
                            };
                            const borderMap = {
                                blue: "border-blue-200",
                                amber: "border-amber-200",
                                emerald: "border-emerald-200"
                            };

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${borderMap[tier.color]} relative overflow-hidden`}
                                >
                                    {index === 1 && (
                                        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="flex items-center mb-6">
                                        <IconComponent className={`text-3xl text-${tier.color}-500 mr-3`} />
                                        <h3 className="text-2xl font-bold">{tier.tier}</h3>
                                    </div>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        <span className="text-gray-500"> FRW</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 bg-gradient-to-r ${colorMap[tier.color]} text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                                    >
                                        Get Started
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 font-bold rounded-full text-sm tracking-wider">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Common Questions Answered
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 space-y-4"
                    >
                        {[
                            { q: "What businesses do you work with?", a: "We work with startups, established businesses, schools, nonprofits, and creative professionals across all industries. Every project is customized to your unique needs." },
                            { q: "Can I start with just one service?", a: "Absolutely! Many clients start with a website or logo design and gradually add more services as they grow. We're flexible and scale with you." },
                            { q: "Are your websites mobile-friendly?", a: "Yes! Every site we build is fully responsive and optimized for all devices — from smartphones to desktops." },
                            { q: "How long does a typical project take?", a: "Timelines vary based on scope. Simple websites can launch in 5-7 days, while complex web applications may take 3-4 weeks." },
                            { q: "Do you offer ongoing support?", a: "Yes! We provide maintenance packages, hosting services, and continuous support to ensure your digital presence stays fresh and secure." }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
                            >
                                <div className="flex items-start justify-between cursor-pointer group">
                                    <div className="flex items-start">
                                        <FaQuestion className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <FaArrowDown className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-4" />
                                </div>
                                <p className="mt-3 text-gray-600 pl-10">{faq.a}</p>
                            </motion.div>
                        ))}
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
                        className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                        
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Ready to Build Something Exceptional?
                                </h2>
                                <p className="mt-4 text-lg text-blue-100 max-w-2xl">
                                    Let's create a digital experience that captures your vision and connects with your audience.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap"
                            >
                                <FaEnvelope className="mr-2" />
                                Start a Conversation
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;