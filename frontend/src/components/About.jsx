import { 
    FaBuilding, FaHandshake, FaShieldAlt, FaClock, FaUsers, 
    FaRocket, FaChartLine, FaArrowRight, FaEnvelope, FaQuoteLeft,
    FaCheckCircle, FaStar, FaTrophy, FaLightbulb, FaCrown,
    FaDatabase, FaMobile, FaServer, FaCode, FaPalette, FaCamera,
    FaVideo, FaShare, FaGem,
    FaGoodreads
} from "react-icons/fa";
import Founder from "../assets/DSC_0511.JPG";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
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

    const coreValues = [
        { 
            icon: FaGoodreads,
            title: "Better Product & Transparent",
            desc: "We create your app in modern and high security approach to provide useful, scalable, and accessible website to solve a real-world problems.",
            color: "blue"
        },
        { 
            icon: FaClock,
            title: "Guaranteed Milestone Timelines",
            desc: "We eliminate vague delivery windows. Corporate websites completed within 7-14 days, custom database apps deployed within 21 days.",
            color: "amber"
        },
        { 
            icon: FaHandshake,
            title: "Full Hand-off & Active Support",
            desc: "We provide comprehensive hand-off training sessions for your team, paired with 24/7 technical server monitoring to prevent downtime.",
            color: "emerald"
        },
        { 
            icon: FaChartLine,
            title: "Outcome-Driven Architecture",
            desc: "From secure local MTN MoMo/Airtel Money checkouts to Google SEO ranking, every element is engineered to convert visitors into buyers.",
            color: "purple"
        }
    ];

    const targetClients = [
        {
            icon: FaBuilding,
            title: "SMEs & Local Brands",
            desc: "Modern online presence, product catalogs, and service websites that build trust and online authority.",
            color: "blue"
        },
        {
            icon: FaUsers,
            title: "Corporate Teams",
            desc: "Secure hosting, internal dashboards, and polished brand communications for companies scaling operations.",
            color: "amber"
        },
        {
            icon: FaPalette,
            title: "Creative & Media Projects",
            desc: "High-impact visual campaigns, videography, and photography that drive audience engagement.",
            color: "emerald"
        },
        {
            icon: FaMobile,
            title: "Retail & E-commerce",
            desc: "Online stores with smooth checkout, product management, and payment integration for busy sellers.",
            color: "purple"
        }
    ];

    const testimonials = [
        {
            quote: "We chose Code Explorer Ltd because they are a best company that offers clear, contract-backed timelines. Our corporate platform was deployed in exactly 12 days, and their local payment integration has processed millions in MoMo transactions flawlessly.",
            author: "Samuel N.",
            role: "Teacher, GTSS"
        },
        {
            quote: "Most agencies give vague promises, but Code Explorer Rwanda provided a bulletproof technical blueprint. They merged our web architecture with premium high-end photography and commercial video assets. Their data transparency helped us scale our sales securely.",
            author: "Sinai U.",
            role: "CEO & FOunder, SAFI Linen Ltd"
        },
        {
            quote: "CodeExplorer built our custom web dashboard and automated management panel with real-time analytics. They didn't just hand over the code; they provided hands-on handoff training and 24/7 server protection that keeps us running smoothly.",
            author: "Pacey J.",
            role: "Co-Founder, Irena Tech Hub"
        },
        {
            quote: "Their combination of Digital Marketing and organic Google SEO indexing doubled our monthly qualified inquiries. They handled our local .RW domain registry and cloud emails transparently. They are easily the most reliable tech partners in Kigali.",
            author: "Nsengimana T.",
            role: "CEO and Founder, SAF ltd"
        }
    ];

    const leadership = {
        name: "NIYOMUGABO Etiene",
        title: "Founder & CEO",
        description: "The establishment of Code Explorer Rwanda Ltd was catalyzed by a vision to democratize premium tech and media infrastructure for businesses operating in Africa's rapidly growing digital economy.",
        philosophy: "Under the leadership of Niyomugabo Etiene, Code Explorer Rwanda Ltd was built on the principle of continuous digital iteration — the 'Rwanda.' The team operates on an ecosystem architecture where local companies receive contract-backed, milestone-driven support, helping founders maintain market dominance effortlessly."
    };

    const stats = [
        { number: "5+", label: "Projects Delivered" },
        { number: "12", label: "Average Days to Launch" },
        { number: "24/7", label: "Technical Support" },
        { number: "100%", label: "Client Satisfaction" }
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-gray-50">
            <section className="relative min-h-[60vh] flex items-center">
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
                            Engineering Digital Success
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                for Rwandan Businesses
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Code Explporer Rwanda Ltd is Kigali's premier digital technology agency. We engineer high-performance websites, premium brand identities, and custom business automation tools that accelerate growth and build unshakeable market credibility.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate('/contact')}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Talk to Code Explorer Rwanda
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate('/solution')}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Services
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
                            WHY CHOOSE CODE EXPLORER
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            What makes us your trusted tech partner?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We eliminate delivery risk. Here are the core parameters local business leaders evaluate before signing a contract with us.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {coreValues.map((value, index) => {
                            const IconComponent = value.icon;
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
                                    <div className={`w-16 h-16 ${bgColorMap[value.color]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className={`text-3xl ${textColorMap[value.color]}`} />
                                    </div>
                                    <h3 className="text-lg font-bold mt-6 mb-3 group-hover:text-blue-600 transition">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <div className="flex items-center mb-6">
                            <FaCrown className="text-amber-500 text-3xl mr-4" />
                            <span className="text-sm font-bold text-amber-500 tracking-wider">LEADERSHIP & STRATEGY</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet the Leadership Team</h2>
                        
                        <div className="flex items-start space-x-6 mb-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-r flex items-center justify-center font-bold flex-shrink-0">
                                <img src={Founder} className="object-cover w-full h-full rounded-full"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{leadership.name}</h3>
                                <p className="text-blue-600 font-medium">{leadership.title}</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {leadership.description}
                        </p>
                        
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-bold text-blue-600">The Founding Philosophy:</span> {leadership.philosophy}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    {stat.number}
                                </div>
                                <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
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
                        <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 font-bold rounded-full text-sm tracking-wider">
                            TARGET CLIENTS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            We serve businesses, not just founders
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Code Explorer Rwanda works with SMEs, corporate teams, creative agencies, non-profits, and professional service providers that need digital products built to convert.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {targetClients.map((client, index) => {
                            const IconComponent = client.icon;
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
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 ${bgColorMap[client.color]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className={`text-2xl ${textColorMap[client.color]}`} />
                                    </div>
                                    <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-blue-600 transition">{client.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{client.desc}</p>
                                </motion.div>
                            );
                        })}
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
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-bold rounded-full text-sm tracking-wider">
                            CLIENT TESTIMONIALS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            What our corporate partners say
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Real business results from local companies built on Code Explorer's digital infrastructure.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
                            >
                                <FaQuoteLeft className="text-blue-500 text-3xl mb-4 opacity-30" />
                                <p className="text-gray-700 leading-relaxed mb-4 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
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
                                    Ready to update your digital presence?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Talk with the Code Explorer team to build a professional website, complete brand identity, or secure cloud hosting package.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("contact")}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Contact Code Explorer Rwanda
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;