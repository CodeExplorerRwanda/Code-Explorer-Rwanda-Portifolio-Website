import { 
    FaCode, FaPalette, FaServer, FaShare, FaCamera, FaVideo, 
    FaBook, FaRocket, FaArrowRight, FaEnvelope, FaWhatsapp,
    FaCheckCircle, FaClock, FaShieldAlt, FaGlobe, FaMobile,
    FaLaptop, FaDatabase, FaChartLine, FaGem, FaCrown,
    FaUserTie, FaPenFancy, FaLayerGroup, FaBullhorn
} from "react-icons/fa";
import { motion } from "framer-motion";

const Solution = () => {
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

    // Services from images
    const services = [
        {
            icon: FaCode,
            title: "Website Development",
            price: "220,000 RWF",
            description: "We build clean and professional websites for your business. We make sure your site looks beautiful on mobile phones and computers so you can get more clients.",
            features: ["Company Profile Websites", "Personal Blogs & Portfolios"],
            color: "blue",
            orderLink: "#"
        },
        {
            icon: FaPalette,
            title: "Graphic Design",
            price: "From 80,000 RWF",
            description: "Professional logos, branded visuals, and print materials that make your business look polished and trustworthy.",
            features: ["Logo Design", "Brand Identity Kits", "Business Cards"],
            color: "amber",
            orderLink: "#"
        },
        {
            icon: FaServer,
            title: "Web Hosting",
            price: "80,000 RWF/month",
            description: "Reliable cloud hosting with daily backups, security monitoring, and 24/7 technical support for your website.",
            features: ["Secure Cloud Hosting", "Daily Backups", "24/7 Monitoring"],
            color: "emerald",
            orderLink: "#"
        },
        {
            icon: FaGlobe,
            title: "Website Domain Name",
            price: "25,000 RWF/year",
            description: "Professional domain registration for your business with easy management and renewal options.",
            features: [".RW Domain Registration", "Domain Management", "Email Setup"],
            color: "purple",
            orderLink: "#"
        },
        {
            icon: FaShare,
            title: "Digital Marketing & SEO",
            price: "110,000 RWF",
            description: "SEO optimization, content strategy, and targeted ads to expand your online reach and attract more customers.",
            features: ["SEO Setup", "Content Marketing", "Social Media Management"],
            color: "rose",
            orderLink: "#"
        },
        {
            icon: FaVideo,
            title: "Videography",
            price: "150,000 RWF",
            description: "Short promotional videos and storytelling content that help people connect with your brand quickly.",
            features: ["Social Reels", "Product Videos", "Corporate Videos"],
            color: "indigo",
            orderLink: "#"
        },
        {
            icon: FaCamera,
            title: "Photography",
            price: "120,000 RWF",
            description: "Professional photography services including product photos, corporate portraits, and event coverage.",
            features: ["Product Photography", "Corporate Portraits", "Event Coverage"],
            color: "cyan",
            orderLink: "#"
        },
        {
            icon: FaBook,
            title: "Office & Documentation",
            price: "70,000 RWF",
            description: "Professional business documents, reports, and formal materials that help your company look organized.",
            features: ["Business Profiles", "Proposal Design", "Document Formatting"],
            color: "teal",
            orderLink: "#"
        }
    ];

    // Execution model steps
    const executionSteps = [
        {
            day: "Day 1",
            title: "Target & Briefing",
            description: "Place your order instantly via our system form. We establish an active WhatsApp channel within 4 hours to review your project files."
        },
        {
            day: "Days 2-4",
            title: "Creative Construction",
            description: "Our project studio crafts your interface designs, high-end content layout, or document parameters. We present clean prototypes for review."
        },
        {
            day: "Days 5-7",
            title: "Systems Launch",
            description: "We deploy secure servers, map domain records, and configure Google SEO indexing. Your team receives direct operational hands-on training."
        }
    ];

    // Order steps
    const orderSteps = [
        {
            step: "Step 1",
            title: "Hit the service you need",
            description: "Choose from website design, graphic work, video, or document help. Each option explains what we do for you."
        },
        {
            step: "Step 2",
            title: "Click order and write us",
            description: "Open the order form, type your name and phone, then explain what you want in simple words."
        },
        {
            step: "Step 3",
            title: "We reply fast on WhatsApp",
            description: "Our team answers quickly, confirms your price, and starts work so you can relax and follow the simple plan."
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600", hover: "hover:bg-blue-50" },
            amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", gradient: "from-amber-500 to-amber-600", hover: "hover:bg-amber-50" },
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600", hover: "hover:bg-emerald-50" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600", hover: "hover:bg-purple-50" },
            rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", gradient: "from-rose-500 to-rose-600", hover: "hover:bg-rose-50" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600", hover: "hover:bg-indigo-50" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-500 to-cyan-600", hover: "hover:bg-cyan-50" },
            teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", gradient: "from-teal-500 to-teal-600", hover: "hover:bg-teal-50" }
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center">
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
                            <span className="text-sm font-medium">Our Service Offerings</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Services Made Easy
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                for Every Business
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Choose the service you need, send a short message, and our team will start building your online presence in 7 days.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Explore Services
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                            >
                                Talk to ByteFlow
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Service Guide */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            QUICK SERVICE GUIDE
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Find your service fast
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Each service is explained in plain words so anyone can understand what to order and how it helps the business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            const colors = getColorClasses(service.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6`}>
                                        <IconComponent className={`text-3xl ${colors.text}`} />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-sm font-bold text-gray-500 mb-3">
                                        {service.price}
                                    </p>
                                    
                                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                        {service.description}
                                    </p>
                                    
                                    <div className="space-y-2 mb-4">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-700">
                                                <FaCheckCircle className={`${colors.text} mr-2 flex-shrink-0`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                                    >
                                        Order Now
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* How to Order Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 font-bold rounded-full text-sm tracking-wider">
                            HOW TO ORDER
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Order in 3 simple steps
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {orderSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                            >
                                <div className="text-5xl font-bold text-emerald-100 group-hover:text-emerald-200 transition-colors mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
                        >
                            <FaWhatsapp className="mr-2 text-2xl" />
                            Order via WhatsApp
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Execution Model Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-bold rounded-full text-sm tracking-wider">
                            EXECUTION MODEL
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Our Guaranteed 1-Week Delivery Pipeline
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We respect your corporate timelines. From the moment you place an order to full production hand-off, we execute inside a fixed 7-day milestone architecture.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {executionSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 group hover:-translate-x-1"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-purple-600">
                                        {step.title}
                                    </h3>
                                    <span className="text-sm font-bold bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
                                        {step.day}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Have a Special Requirement?
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We provide custom packages tailored to your unique business goals.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Schedule a Consultation
                        </motion.button>
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
                                    Ready to Get Started?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Talk with the ByteFlow team to choose the right service for your business and start building your online presence today.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Talk to ByteFlow
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Solution;