import { 
    FaCode, FaPalette, FaServer, FaShare, FaCamera, FaVideo, 
    FaBook, FaRocket, FaArrowRight, FaEnvelope, FaWhatsapp,
    FaCheckCircle, FaClock, FaShieldAlt, FaGlobe, FaMobile,
    FaLaptop, FaDatabase, FaChartLine, FaGem, FaCrown,
    FaUserTie, FaPenFancy, FaLayerGroup, FaBullhorn, FaTimes,
    FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma, FaJs,
    FaPhp, FaPython, FaWordpress
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Solution = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const services = [
        {
            id: "web-development",
            icon: FaCode,
            title: "Website Development",
            price: "250,000 RWF",
            description: "We build clean and professional websites for your business. We make sure your site looks beautiful on mobile phones and computers so you can get more clients.",
            fullDescription: "We build clean and professional websites for your business. We make sure your site looks beautiful on mobile phones and computers so you can get more clients. From landing pages to complex web applications, we deliver solutions that drive results.",
            features: [
                "Company Profile Websites",
                "Personal Blogs & Portfolios",
                "Online E-commerce Stores",
                "Custom Dashboards & Apps"
            ],
            tools: ["HTML & CSS", "React.js", "Node.js", "Figma Design"],
            color: "blue",
            orderLink: "#",
            deliveryTime: "7 Days"
        },
        {
            id: "graphic-design",
            icon: FaPalette,
            title: "Graphic Design",
            price: "80,000 RWF",
            description: "Professional logos, branded visuals, and print materials that make your business look polished and trustworthy.",
            fullDescription: "Professional logos, branded visuals, and print materials that make your business look polished and trustworthy. We create visual identities that capture your brand's essence and resonate with your target audience.",
            features: [
                "Logo Design",
                "Brand Identity Kits",
                "Business Cards",
                "Flyers & Brochures"
            ],
            tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro"],
            color: "amber",
            orderLink: "#",
            deliveryTime: "5 Days"
        },
        {
            id: "web-hosting",
            icon: FaServer,
            title: "Web Hosting",
            price: "80,000 RWF/month",
            description: "Reliable cloud hosting with daily backups, security monitoring, and 24/7 technical support for your website.",
            fullDescription: "Reliable cloud hosting with daily backups, security monitoring, and 24/7 technical support for your website. We ensure your site stays online, fast, and secure with enterprise-grade infrastructure.",
            features: [
                "Secure Cloud Hosting",
                "Daily Backups",
                "24/7 Monitoring",
                "SSL Certificate Included"
            ],
            tools: ["AWS", "DigitalOcean", "cPanel", "Cloudflare"],
            color: "emerald",
            orderLink: "#",
            deliveryTime: "24 Hours"
        },
        {
            id: "domain-name",
            icon: FaGlobe,
            title: "Website Domain Name",
            price: "25,000 RWF/year",
            description: "Professional domain registration for your business with easy management and renewal options.",
            fullDescription: "Professional domain registration for your business with easy management and renewal options. Get your perfect .rw domain or any other TLD with our hassle-free registration service.",
            features: [
                ".RW, .com, .org Domain Registration",
                "Domain Management",
                "Email Setup",
                "DNS Management"
            ],
            tools: ["Namecheap", "GoDaddy", "Cloudflare DNS"],
            color: "purple",
            orderLink: "#",
            deliveryTime: "Same Day"
        },
        {
            id: "digital-marketing",
            icon: FaShare,
            title: "Digital Marketing & SEO",
            price: "250,000 RWF",
            description: "SEO optimization, content strategy, and targeted ads to expand your online reach and attract more customers.",
            fullDescription: "SEO optimization, content strategy, and targeted ads to expand your online reach and attract more customers. We help you rank higher on Google and convert visitors into loyal customers.",
            features: [
                "SEO Setup",
                "Content Marketing",
                "Social Media Management",
                "Google Ads Management"
            ],
            tools: ["Google Analytics", "SEO Tools", "Meta Business Suite", "Google Ads"],
            color: "rose",
            orderLink: "#",
            deliveryTime: "14 Days"
        },
        {
            id: "videography",
            icon: FaVideo,
            title: "Videography",
            price: "150,000 RWF",
            description: "Short promotional videos and storytelling content that help people connect with your brand quickly.",
            fullDescription: "Short promotional videos and storytelling content that help people connect with your brand quickly. From social media reels to corporate documentaries, we bring your brand stories to life.",
            features: [
                "Social Reels",
                "Product Videos",
                "Corporate Videos",
                "Event Coverage"
            ],
            tools: ["Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "After Effects"],
            color: "indigo",
            orderLink: "#",
            deliveryTime: "10 Days"
        },
        {
            id: "photography",
            icon: FaCamera,
            title: "Photography",
            price: "10,000 RWF",
            description: "Professional photography services including product photos, corporate portraits, and event coverage.",
            fullDescription: "Professional photography services including product photos, corporate portraits, and event coverage. We capture stunning images that showcase your products, people, and brand in the best light.",
            features: [
                "Product Photography",
                "Corporate Portraits",
                "Event Coverage",
                "Photo Editing"
            ],
            tools: ["Canon EOS", "Sony Alpha", "Lightroom", "Photoshop"],
            color: "cyan",
            orderLink: "#",
            deliveryTime: "7 Days"
        },
        {
            id: "documentation",
            icon: FaBook,
            title: "Office & Documentation",
            price: "50,000 RWF",
            description: "Professional business documents, reports, and formal materials that help your company look organized.",
            fullDescription: "Professional business documents, reports, and formal materials that help your company look organized. From business profiles to proposal designs, we ensure your documentation reflects professionalism.",
            features: [
                "Business Profiles",
                "Proposal Design",
                "Document Formatting",
                "Company Reports"
            ],
            tools: ["Microsoft Office", "Google Workspace", "Adobe Acrobat", "LaTeX"],
            color: "teal",
            orderLink: "#",
            deliveryTime: "4 Days"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600", hover: "hover:bg-blue-50", light: "bg-blue-100" },
            amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", gradient: "from-amber-500 to-amber-600", hover: "hover:bg-amber-50", light: "bg-amber-100" },
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600", hover: "hover:bg-emerald-50", light: "bg-emerald-100" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600", hover: "hover:bg-purple-50", light: "bg-purple-100" },
            rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", gradient: "from-rose-500 to-rose-600", hover: "hover:bg-rose-50", light: "bg-rose-100" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600", hover: "hover:bg-indigo-50", light: "bg-indigo-100" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-500 to-cyan-600", hover: "hover:bg-cyan-50", light: "bg-cyan-100" },
            teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", gradient: "from-teal-500 to-teal-600", hover: "hover:bg-teal-50", light: "bg-teal-100" }
        };
        return colorMap[color] || colorMap.blue;
    };

    const openServiceDetail = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeServiceDetail = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedService(null), 300);
    };

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50">
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
                            Hit the service you need
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                and we'll build it
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Choose from website design, graphic work, video, or document help. Each option explains what we do for you.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate('/portfolio')}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Explore Services
                            </motion.button>
                            
                            <motion.button 
                                onClick={() => navigate('/contact')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                            >
                                Talk to Code Explorer
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
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            SERVICES
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Choose the service you need
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Click any service to see full details, features, tools used, and pricing information.
                        </p>
                    </motion.div>

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
                                    onClick={() => openServiceDetail(service)}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
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
                                    
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                    
                                    <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Click to see details 
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={closeServiceDetail}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedService && (
                                <div className="p-8 md:p-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-16 h-16 ${getColorClasses(selectedService.color).bg} rounded-2xl flex items-center justify-center`}>
                                                <selectedService.icon className={`text-3xl ${getColorClasses(selectedService.color).text}`} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                                                <p className="text-lg font-bold text-gray-500">{selectedService.price}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={closeServiceDetail}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <FaTimes className="text-2xl text-gray-500" />
                                        </button>
                                    </div>

                                    <div className={`inline-flex items-center px-4 py-2 ${getColorClasses(selectedService.color).bg} ${getColorClasses(selectedService.color).text} rounded-full text-sm font-bold mb-6`}>
                                        <FaClock className="mr-2" />
                                        Delivery in {selectedService.deliveryTime}
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold mb-2">What We Do</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedService.fullDescription}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold mb-3">What We Do Exactly:</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedService.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700">
                                                    <FaCheckCircle className={`${getColorClasses(selectedService.color).text} mr-2 flex-shrink-0`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold mb-3">Tools & Technologies Used:</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedService.tools.map((tool, idx) => (
                                                <span key={idx} className={`px-4 py-2 ${getColorClasses(selectedService.color).bg} ${getColorClasses(selectedService.color).text} rounded-full text-sm font-medium`}>
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className={`flex-1 py-4 bg-gradient-to-r ${getColorClasses(selectedService.color).gradient} text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                                        >
                                            Order This Service
                                            <FaArrowRight className="inline ml-2" />
                                        </motion.button>
                                        
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                        >
                                            <FaWhatsapp className="mr-2 text-xl" />
                                            Order via WhatsApp
                                        </motion.button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
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
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                        >
                            <div className="text-5xl font-bold text-emerald-100 group-hover:text-emerald-200 transition-colors mb-4">
                                Step 1
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition">
                                Hit the service you need
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Choose from website design, graphic work, video, or document help. Each option explains what we do for you.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                        >
                            <div className="text-5xl font-bold text-emerald-100 group-hover:text-emerald-200 transition-colors mb-4">
                                Step 2
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition">
                                Click order and write us
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Open the order form, type your name and phone, then explain what you want in simple words.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                        >
                            <div className="text-5xl font-bold text-emerald-100 group-hover:text-emerald-200 transition-colors mb-4">
                                Step 3
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition">
                                We reply fast on WhatsApp
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our team answers quickly, confirms your price, and starts work so you can relax and follow the simple plan.
                            </p>
                        </motion.div>
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

            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 font-bold rounded-full text-sm tracking-wider">
                            EXECUTION MODEL
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Our Guaranteed 1-Week Delivery Pipeline
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto rounded-full"></div>
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
                        {[
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
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-500 group hover:-translate-x-1"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-yellow-600">
                                        {step.title}
                                    </h3>
                                    <span className="text-sm font-bold bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full">
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
                        className="mt-12 bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8 border border-yellow-200"
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
                            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Schedule a Consultation
                        </motion.button>
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
                                    Ready to Get Started?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Talk with the ByteFlow team to choose the right service for your business and start building your online presence today.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Talk to Code Explorer
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Solution;