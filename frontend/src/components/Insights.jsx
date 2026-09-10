import { 
    FaCode, FaPalette, FaServer, FaShare, FaCamera, FaVideo, 
    FaBook, FaRocket, FaArrowRight, FaEnvelope, FaWhatsapp,
    FaCheckCircle, FaClock, FaShieldAlt, FaGlobe, FaMobile,
    FaLaptop, FaDatabase, FaChartLine, FaGem, FaCrown,
    FaUserTie, FaPenFancy, FaLayerGroup, FaBullhorn, FaTimes,
    FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma, FaJs,
    FaPhp, FaPython, FaWordpress, FaNewspaper, FaBlog,
    FaLightbulb, FaSearch, FaCloud, FaLock, FaPaintBrush,
    FaChartBar, FaMailBulk, FaMoneyBillWave
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Insights = () => {
    const navigate = useNavigate();
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const categories = [
        { name: "Web Development", icon: FaCode, color: "blue" },
        { name: "SEO", icon: FaSearch, color: "amber" },
        { name: "Hosting", icon: FaServer, color: "emerald" },
        { name: "Security", icon: FaLock, color: "purple" },
        { name: "Design", icon: FaPaintBrush, color: "rose" },
        { name: "Strategy", icon: FaChartBar, color: "indigo" },
        { name: "Marketing", icon: FaBullhorn, color: "cyan" },
        { name: "Insights", icon: FaLightbulb, color: "teal" },
        { name: "Development", icon: FaCode, color: "blue" }
    ];

    const blogPosts = [
        {
            category: "WEB DEVELOPMENT",
            title: "Why Your Business Needs a Website in 2026",
            excerpt: "In a digital-first economy, a website is your primary office. Build 24/7 credibility and trust with a professional online presence.",
            readTime: "4 min read",
            color: "blue",
            featured: true
        },
        {
            category: "SEO",
            title: "How to Rank #1 on Google in Kigali",
            excerpt: "Local SEO strategies to help your business appear when people search for services in Rwanda. Dominate local search results.",
            readTime: "5 min read",
            color: "amber",
            featured: true
        },
        {
            category: "HOSTING",
            title: "SSD NVMe Hosting: Why Speed Matters",
            excerpt: "ByteFlow's hosting is 20x faster than traditional HDD. Speed equals better customer retention and higher conversions.",
            readTime: "3 min read",
            color: "emerald",
            featured: true
        },

        {
            category: "VIDEOGRAPHY",
            title: "4K Videography for High-Impact Social Ads",
            excerpt: "Professional video production can increase your engagement by over 300% on social media platforms.",
            readTime: "4 min read",
            color: "indigo",
            featured: false
        },
        {
            category: "DOMAINS",
            title: "The Strategic Importance of .RW Domains",
            excerpt: "Build local trust and improve your local search presence with a country-specific domain extension.",
            readTime: "3 min read",
            color: "purple",
            featured: false
        },
        {
            category: "DEVELOPMENT",
            title: "React vs Next.js: Choosing the Right Stack",
            excerpt: "A deep dive into why we use Next.js for high-performance e-commerce platforms and web applications.",
            readTime: "6 min read",
            color: "cyan",
            featured: false
        },
        {
            category: "DESIGN",
            title: "Psychology of Colors in Modern Branding",
            excerpt: "How choosing the right colors can influence your customers' purchasing decisions and brand perception.",
            readTime: "4 min read",
            color: "rose",
            featured: false
        },
        {
            category: "MARKETING",
            title: "Email Marketing: The Highest ROI Channel",
            excerpt: "Why building an email list is safer than relying solely on social media algorithms for business growth.",
            readTime: "3 min read",
            color: "emerald",
            featured: false
        },
        {
            category: "E-COMMERCE",
            title: "Integrating MoMo Pay for Online Sales",
            excerpt: "A step-by-step guide on how we integrate local payments to boost your e-commerce sales and conversions.",
            readTime: "5 min read",
            color: "amber",
            featured: false
        },

        {
            category: "SECURITY",
            title: "Cybersecurity Basics for Small Businesses",
            excerpt: "Protect your customer data and your brand reputation with essential security tips and best practices.",
            readTime: "4 min read",
            color: "purple",
            featured: false
        },
        {
            category: "DESIGN",
            title: "UI vs UX: Designing for the User",
            excerpt: "A look into how we design interfaces that are both beautiful and easy to navigate for optimal user experience.",
            readTime: "5 min read",
            color: "rose",
            featured: false
        },
        {
            category: "HOSTING",
            title: "Scaling with Cloud Infrastructure",
            excerpt: "Move from shared hosting to a scalable cloud environment as your traffic grows and business expands.",
            readTime: "4 min read",
            color: "emerald",
            featured: false
        },
        {
            category: "INSIGHTS",
            title: "Tech Trends in Rwanda for 2026",
            excerpt: "What to expect in the local tech scene and how to stay ahead of the curve in the digital economy.",
            readTime: "5 min read",
            color: "teal",
            featured: false
        },
        {
            category: "STRATEGY",
            title: "The Power of Social Proof in Digital Sales",
            excerpt: "How displaying reviews and testimonials can increase your conversion rates and build customer confidence.",
            readTime: "3 min read",
            color: "indigo",
            featured: false
        },
        {
            category: "MARKETING",
            title: "Content Strategy that Actually Converts",
            excerpt: "Stop posting randomly. Learn how to create content that brings in real leads and drives business growth.",
            readTime: "4 min read",
            color: "cyan",
            featured: false
        },

        {
            category: "DEVELOPMENT",
            title: "Mobile-First Design is No Longer Optional",
            excerpt: "80% of Rwandans browse on mobile. Is your website optimized for them? Learn why mobile-first is essential.",
            readTime: "4 min read",
            color: "blue",
            featured: false
        },
        {
            category: "DESIGN",
            title: "Optimizing Your Logo for Digital Screens",
            excerpt: "Common mistakes when designing logos for web and social media platforms and how to avoid them.",
            readTime: "3 min read",
            color: "amber",
            featured: false
        },
        {
            category: "SECURITY",
            title: "SSL Certificates: Security and SEO",
            excerpt: "Encryption builds customer confidence and improves your Google ranking. Here's why SSL matters.",
            readTime: "3 min read",
            color: "purple",
            featured: false
        },
        {
            category: "MARKETING",
            title: "Facebook vs Google Ads for Startups",
            excerpt: "Where should you spend your marketing budget for the best possible ROI? We break down both options.",
            readTime: "5 min read",
            color: "rose",
            featured: false
        },
        {
            category: "DEVELOPMENT",
            title: "The Growth of the API Economy in Rwanda",
            excerpt: "How local businesses are connecting services to create seamless ecosystems and digital transformation.",
            readTime: "4 min read",
            color: "emerald",
            featured: false
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

    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

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
                            <span className="text-sm font-medium">Insights & Knowledge</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Actionable Digital Insights
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                for Growing Businesses
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Practical articles on websites, branding, SEO, and media strategy for companies that want measurable results.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/portfolio')}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Explore Articles
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-8 px-4 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="text-sm font-bold text-gray-500 mr-2">Categories:</span>
                        {categories.map((category, index) => {
                            const IconComponent = category.icon;
                            const colors = getColorClasses(category.color);
                            return (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 flex items-center`}
                                >
                                    <IconComponent className="mr-1 text-xs" />
                                    {category.name}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            FEATURED ARTICLES
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Handpicked for You
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {featuredPosts.map((post, index) => {
                            const colors = getColorClasses(post.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                                >
                                    <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-bold mb-4`}>
                                        {post.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm text-gray-400">{post.readTime}</span>
                                        <span className={`text-sm font-bold ${colors.text} hover:underline flex items-center`}>
                                            Read Article 
                                            <FaArrowRight className="ml-1 group-hover:translate-x-1 transition" />
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* All Posts Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-bold rounded-full text-sm tracking-wider">
                            LATEST ARTICLES
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            All Insights & Updates
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {regularPosts.map((post, index) => {
                            const colors = getColorClasses(post.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                                >
                                    <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-bold mb-3`}>
                                        {post.category}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm mb-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-xs text-gray-400">{post.readTime}</span>
                                        <span className={`text-sm font-bold ${colors.text} hover:underline flex items-center`}>
                                            Read Article 
                                            <FaArrowRight className="ml-1 group-hover:translate-x-1 transition text-xs" />
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Load More */}
                    <motion.div 
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
                        >
                            Load More Articles
                            <FaArrowRight className="ml-2" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center"
                    >
                        <FaNewspaper className="text-5xl text-blue-500 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
                            Get the latest insights, tips, and strategies delivered straight to your inbox. No spam, just value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                            >
                                Subscribe
                            </motion.button>
                        </div>
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
                                    Have a Topic You'd Like Us to Cover?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Let us know what you'd like to learn about. We're always creating content that helps businesses grow.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Suggest a Topic
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Insights;