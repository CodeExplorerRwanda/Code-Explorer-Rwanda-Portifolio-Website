import { 
    FaCode, FaPalette, FaShare, FaServer, FaRocket, FaUsers, 
    FaLightbulb, FaArrowRight, FaEnvelope, FaQuestion, FaArrowDown,
    FaLaptop, FaMobile, FaTablet, FaCheckCircle, FaStar, FaHeart,
    FaGem, FaCrown, FaChartLine, FaClock, FaShieldAlt, FaAddressBook,
    FaCamera, FaVideo, FaBook, FaGamepad, FaInternetExplorer
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

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

    const serviceCards = [
        { 
            icon: FaCode, 
            title: "Modern Websites", 
            desc: "Professional websites and AI-based project that explain your business clearly and work beautifully on every screen.", 
            color: "blue" 
        },
        { 
            icon: FaPalette, 
            title: "Brand Design", 
            desc: "Logos, visuals, and social assets that make your brand feel trustworthy and contemporary.", 
            color: "yellow" 
        },
        { 
            icon: FaShare, 
            title: "Digital Growth", 
            desc: "SEO, ads, and content strategies that help more people discover your business online.", 
            color: "emerald" 
        },
        { 
            icon: FaServer, 
            title: "Cloud Hosting", 
            desc: "Domains, secure hosting, and reliable support to keep your website online and protected.", 
            color: "purple" 
        }
    ];

    const processSteps = [
        { number: "01", title: "Share your vision", desc: "We begin with a conversation about your business, audience, and what you want people to do." },
        { number: "02", title: "We craft the solution", desc: "We design a website, brand, or marketing plan that matches your needs and budget perfectly." },
        { number: "03", title: "Launch with confidence", desc: "We deliver polished results, guide you through everything, and support your growth journey." }
    ];

    const whoWeServe = [
        { 
            icon: FaUsers,
            title: "For businesses",
            desc: "Shops, clinics, agencies, and service providers wanting a strong online presence.",
            color: "purple"
        },
        { 
            icon: FaRocket,
            title: "For startups",
            desc: "New brands that need a professional platform to appear credible and attract clients.",
            color: "blue"
        },
        { 
            icon: FaStar,
            title: "For creators",
            desc: "Freelancers, coaches, and content makers who want a simple digital home.",
            color: "emerald"
        }
    ];

    const pricingTiers = [
        {
            tier: "Web Development",
            icon: FaCode,
            color: "blue",
            price: "250,000",
            subtitle: "Websites & Web Apps",
            features: [
                { name: "Mobile App", price: "400,000 FRW" },
                { name: "Business Website", price: "450,000 FRW" },
                { name: "E-commerce store", price: "500,000 FRW" },
                { name: "Web app/ dashboard", price: "800,000 FRW" }
            ],
            description: "Modern websites and web-based tools that help your business look credible and perform smoothly."
        },
        {
            tier: "AI based projects",
            icon: FaCode,
            color: "cyan",
            price: "80,000",
            subtitle: "AI & Modern",
            features: [
                { name: "ML-based project", price: "250,000 FRW" },
                { name: "DL-based project", price: "300,000 FRW" },
                { name: "AI-based project", price: "350,000 FRW" },
                { name: "Face recognation website", price: "250,000 FRW" }
            ],
            description: "Professional logos, branded visuals, and print materials that make your business look polished."
        },
        
        {
            tier: "Graphic Design",
            icon: FaAddressBook,
            color: "yellow",
            price: "80,000",
            subtitle: "Branding & Visuals",
            features: [
                { name: "Logo Design", price: "40,000 FRW" },
                { name: "Brand kit", price: "100,000 FRW" },
                { name: "Business cards", price: "25,000 FRW" },
                { name: "Flayers & brochures", price: "10,000 FRW" }
            ],
            description: "Professional logos, branded visuals, and print materials that make your business look polished."
        },
        {
            tier: "Photography",
            icon: FaCamera,
            color: "emerald",
            price: "10,000",
            subtitle: "Product & Business photos",
            features: [
                { name: "Product photos", price: "10,000 FRW" },
                { name: "Corporate portraits", price: "20,000 FRW" },
                { name: "Event coverage", price: "80,000 FRW" },
                { name: "Photo editing", price: "included" }
            ],
            description: "Clear image editing, you just give us your image and we transform it into high-quality visuals."
        },
        {
            tier: "Videography",
            icon: FaVideo,
            color: "purple",
            price: "150,000",
            subtitle: "Reels & Promo video",
            features: [
                { name: "Social reel", price: "30,000 FRW" },
                { name: "Product video", price: "100,000 FRW" },
                { name: "Corporate video", price: "100,000 FRW" },
                { name: "Editing & delivery", price: "included" }
            ],
            description: "Short promotional videos and storytelling content that help people connect with your brand quickly."
        },
        {
            tier: "Digital Marketing",
            icon: FaShare,
            color: "rose",
            price: "250,000",
            subtitle: "Growth & Visibility",
            features: [
                { name: "SEO setup", price: "150,000 FRW/mo" },
                { name: "Website copy", price: "70,000 FRW" },
                { name: "Social content plan", price: "60,000 FRW" },
                { name: "Ads Support", price: "170,000 FRW" }
            ],
            description: "SEO, content support, and online visibility services that help more people find your business."
        },
        {
            tier: "Corporate Office",
            icon: FaBook,
            color: "indigo",
            price: "50,000",
            subtitle: "Admin & professional docs",
            features: [
                { name: "Business profile", price: "50,000 FRW" },
                { name: "Proposal & report design", price: "40,000 FRW" },
                { name: "Company documents", price: "50,000 FRW" },
                { name: "Document formatting", price: "included" }
            ],
            description: "Professional business documents, reports, and formal materials that help your company look organized."
        },
        {
            tier: "Cloud Hosting",
            icon: FaServer,
            color: "cyan",
            price: "15,000",
            subtitle: "Secure online presence",
            features: [
                { name: "Domain registration", price: "15,000 RWF / year" },
                { name: "Hosting package", price: "40,000 RWF / year" },
                { name: "Business email", price: "25,000 RWF / year" },
                { name: "Backup support", price: "20,000 RWF / year" }
            ],
            description: "Reliable domains, hosting, business emails, and backups that keep your website active and protected."
        }
    ];

    const faqs = [
        { q: "What kind of businesses do you help?", a: "We support small businesses, startups, schools, shops, and creative professionals who want a modern and trustworthy online presence." },
        { q: "Can I start with just one service?", a: "Yes. Many clients begin with a website or logo and later add marketing, hosting, or more design support as they grow." },
        { q: "Do you help with mobile-friendly websites?", a: "Absolutely — every website we build is designed to look clear and easy to use on mobile, tablet, and desktop." },
        { q: "How long does a project typically take?", a: "Simple projects can be ready in a few days, while larger builds may take a couple of weeks — it depends on the scope." },
        { q: "Do you offer ongoing support?", a: "Yes! We provide maintenance, hosting, and continuous support to ensure your digital presence stays fresh and secure." }
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50">
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
                            We build clear websites,
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-emerald-400">
                                polished branding
                            </span>
                            and smart marketing.
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Code Explorer Rwanda crafts clean websites, better AI based applications,strong branding, and straightforward digital marketing for businesses and creators who want to grow with confidence.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                onClick={() => navigate('/contact')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Start your Project
                            </motion.button>
                            
                            <motion.button 
                                onClick={() => navigate('/portfolio')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Our Services
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
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            WHAT WE DO
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Clear services that help your brand stand out.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
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
                                yellow: "from-yellow-500 to-yellow-600",
                                emerald: "from-emerald-500 to-emerald-600",
                                purple: "from-purple-500 to-purple-600"
                            };
                            const bgColorMap = {
                                blue: "bg-blue-50",
                                yellow: "bg-yellow-50",
                                emerald: "bg-emerald-50",
                                purple: "bg-purple-50"
                            };
                            const textColorMap = {
                                blue: "text-blue-600",
                                yellow: "text-yellow-600",
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
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

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
                            Simple steps from concept to launch.
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
                                <div className="text-6xl font-bold text-emerald-100 group-hover:text-emerald-200 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-emerald-600 transition">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                                        <FaArrowRight className="text-3xl text-emerald-200" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
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
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 font-bold rounded-full text-sm tracking-wider">
                            WHO WE SERVE
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Built for people who want to be trusted online.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {whoWeServe.map((item, index) => {
                            const IconComponent = item.icon;
                            const bgColorMap = {
                                purple: "bg-purple-50",
                                blue: "bg-blue-50",
                                emerald: "bg-emerald-50"
                            };
                            const textColorMap = {
                                purple: "text-yellow-600",
                                blue: "text-blue-600",
                                emerald: "text-emerald-600"
                            };

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div className={`w-16 h-16 ${bgColorMap[item.color]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className={`text-3xl ${textColorMap[item.color]}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-yellow-600 transition">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 font-bold rounded-full text-sm tracking-wider">
                            CHOOSE A TIER
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Pick a service tier that fits your goals and budget.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Choose one service or build a complete digital package with clear options, transparent pricing, and a straightforward path to order.
                        </p>
                    </motion.div>

                    <div className="mt-8 flex justify-center">
                        <div className="bg-blue-600 px-8 py-3 rounded-full shadow-md">
                            <p className="text-center font-bold text-white tracking-wider">FLEXIBLE PACKAGES</p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-lg">
                        <div>
                            <h3 className="font-bold text-lg">Need a full digital launch?</h3>
                            <p className="text-gray-600 leading-relaxed">We can combine branding, design, growth, and support into one focused package that feels simple and professional.</p>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex bg-black text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg group whitespace-nowrap mt-4 md:mt-0"
                        >
                            Build a complete package 
                            <FaArrowRight className="ms-3 mt-1 group-hover:translate-x-2 transition duration-300" />
                        </motion.button>
                    </div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {pricingTiers.map((tier, index) => {
                            const IconComponent = tier.icon;
                            const colorMap = {
                                blue: "from-blue-500 to-blue-600",
                                yellow: "from-yellow-500 to-yellow-600",
                                emerald: "from-emerald-500 to-emerald-600",
                                purple: "from-purple-500 to-purple-600",
                                rose: "from-rose-500 to-rose-600",
                                indigo: "from-indigo-500 to-indigo-600",
                                cyan: "from-cyan-500 to-cyan-600"
                            };
                            const bgColorMap = {
                                blue: "bg-blue-50",
                                yellow: "bg-yellow-50",
                                emerald: "bg-emerald-50",
                                purple: "bg-purple-50",
                                rose: "bg-rose-50",
                                indigo: "bg-indigo-50",
                                cyan: "bg-cyan-50"
                            };
                            const textColorMap = {
                                blue: "text-blue-600",
                                yellow: "text-yellow-600",
                                emerald: "text-emerald-600",
                                purple: "text-purple-600",
                                rose: "text-rose-600",
                                indigo: "text-indigo-600",
                                cyan: "text-cyan-600"
                            };
                            const borderMap = {
                                blue: "border-blue-200",
                                yellow: "border-yellow-200",
                                emerald: "border-emerald-200",
                                purple: "border-purple-200",
                                rose: "border-rose-200",
                                indigo: "border-indigo-200",
                                cyan: "border-cyan-200"
                            };

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${borderMap[tier.color]} relative`}
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className={`${bgColorMap[tier.color]} p-3 rounded-xl`}>
                                            <IconComponent className={`text-2xl ${textColorMap[tier.color]}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{tier.tier}</h3>
                                            <span className={`text-sm font-medium ${textColorMap[tier.color]}`}>{tier.subtitle}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{tier.description}</p>

                                    <div className="mb-4">
                                        <span className="text-2xl font-bold">{tier.price}</span>
                                        <span className="text-gray-500 text-sm"> FRW</span>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {tier.features.map((feature, idx) => (
                                            <div key={idx} className="flex justify-between items-center border-b border-dashed border-gray-200 py-2 hover:bg-gray-50 px-2 rounded transition">
                                                <span className="text-gray-700">{feature.name}</span>
                                                <span className="text-gray-600 font-medium">{feature.price}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>  navigate('/contact')}
                                        className={`w-full py-3 bg-gradient-to-r ${colorMap[tier.color]} text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                                    >
                                        Get Started
                                        <FaArrowRight className="ms-2 group-hover:translate-x-2 transition duration-300" />
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

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
                            Helpful answers for first-time visitors.
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
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group"
                            >
                                <div className="flex items-start justify-between cursor-pointer">
                                    <div className="flex items-start">
                                        <FaQuestion className="text-pink-500 mt-1 mr-3 flex-shrink-0 group-hover:rotate-12 transition duration-300" />
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <FaArrowDown className="text-gray-400 group-hover:text-pink-500 transition-colors flex-shrink-0 ml-4 group-hover:translate-y-1 transition duration-300" />
                                </div>
                                <p className="mt-3 text-gray-600 pl-10 leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
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
                                    Ready to build something clear and professional?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Let's create a website and digital experience that helps your audience understand your business quickly.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Talk to us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;