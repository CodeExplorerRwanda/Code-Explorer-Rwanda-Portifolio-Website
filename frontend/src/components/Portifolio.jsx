import { 
    FaCode, FaLaptop, FaShoppingCart, FaPalette, FaServer, 
    FaRocket, FaArrowRight, FaEnvelope, FaCheckCircle, FaStar,
    FaDatabase, FaMobile, FaReact, FaNodeJs, FaCloud, FaChartLine,
    FaUsers, FaGlobe, FaCrown, FaTrophy, FaGem, FaFire
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
    const navigate = useNavigate()
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

    const projects = [
        {
            category: "Web Development",
            title: "Niyomugabo Personal Portfolio",
            description: "A modern personal portfolio built with React, showcasing projects, skills, and achievements for creative professionals.",
            tech: ["React", "Framer Motion", "Tailwind css", "Node js"],
            link: "https://niyomugaboetiene.vercel.app",
            color: "blue"
        },
        {
            category: "E-commerce",
            title: "Shop Sphere",
            description: "A modern platform for Ecommerce shop help them to buy, sell goods and service, and community support.",
            tech: ["React", "Node.js", "MongoDB", "Javascript", "Express.js"],
            link: "#",
            color: "amber"
        },
        {
            category: "E-commerce",
            title: "HomeFinder app",
            description: "A premium home e-commerce platform delivering better home for lent and sell with seamless checkout.",
            tech: ["React", "Node.js", "MongoDB", "Javascript", "Express.js"],
            link: "#",
            color: "emerald"
        },
        {
            category: "Web Development",
            title: "Net Moviess",
            description: "A movie management platform for NET featuring full movie watching with better performance and accessibility.",
            tech: ["Framer", "MongoDB", "React", "Express.js", "Node.js", "Tailwind CSS"],
            link: "#",
            color: "purple"
        },
        {
            category: "AI-based App",
            title: "Face recognation app",
            description: "A modern digital AI platform that recognize images and provide the details of the images in real-time.",
            tech: ["React", "Python & Flask", "Jupyter notebook", "MongoDB & Mongoose", "JWT", "Cloudinary", "Multer"],
            link: "#",
            color: "rose"
        },
        {
            category: "AI-based App",
            title: "House Price Prediction app",
            description: "A modern and free digital agency website engineered for Predicting house price in real time.",
            tech: ["React", "Python & Flask", "Jupyter notebook", "MongoDB & Mongoose", "JWT", "Cloudinary", "Multer"],
            link: "#",
            color: "indigo"
        },
        {
            category: "AI-Based App",
            title: "Rwanda Creditit Denial Predictor",
            description: "The RCDP is web platform serves predict if Rwandan house hold will get the goverment crediti or not based on their features.",
            tech: ["React", "Python & Flask", "Jupyter notebook", "MySQL & mysql2", "JWT", "Cloudinary", "Multer"],
            link: "#",
            color: "cyan"
        },
        {
            category: "Mobile App",
            title: "Task Remainder",
            description: "A modern, mobile digital governance system for you that will remind you the task you have to do.",
            tech: ["React-native", "Node.js", "MongoDB", "Express.js"],
            link: "#",
            color: "teal"
        },
        {
            category: "E-commerce",
            title: "SAF Ltd",
            description: "A modern Ecommerce dashboard built with React and Vite, helping SAF company to manage, sell their animals, track changes efficiently and customer buys animals in easy way.",
            tech: ["TypeScript", "Node.js", "React", "Vite"],
            link: "#",
            color: "blue"
        },
        {
            category: "E-commerce",
            title: "SAFI Linen ltd",
            description: "A modern Ecommerce dashboard built with React and Vite, helping SAFI Linen company to manage, sell their products, track changes efficiently and customer buys their products in easy way.",
            tech: ["Next js", "Typescript", "Tailwind CSS", "Amazon dynamo DB"],
            link: "#",
            color: "amber"
        },
        {
            category: "Decentralized Development",
            title: "Krypto Site",
            description: "A modern Decentralized web app for sending and receiving crypto (ex: ETH, BTC).",
            tech: ["TypeScript", "Ethers.js", "Solidity", "tailwindcss", "Web3.js"],
            link: "#",
            color: "emerald"
        },
        {
            category: "Web Development",
            title: "GTSS Chat",
            description: "A modern chat app designed for communicating the Gikonko tss leaders and the parents and sharing message between them.",
            tech: ["React", "Node.js & Express", "MongoDB & Mongoose", "tailwindcss", "socket.io"],
            link: "#",
            color: "purple"
        },
        {
            category: "Web Development",
            title: "GTTI COMPANY Ltd",
            description: "GTTI is a professional, high-density company suite designed for modern Rwandan selling platform.",
            tech: ["React", "MySQL", "Node.js", "tailwindcss"],
            link: "#",
            color: "rose"
        },
        {
            category: "Web Development",
            title: "SHIRINYOTA Company Ltd",
            description: "A modern project management dashboard built with React and modern web technologies that help SHIRINYOTA Company to sell their drinking products.",
            tech: ["React", "Vanilla CSS", "Node.js", "MongoDB"],
            link: "#",
            color: "indigo"
        },
        {
            category: "Web Development",
            title: "Ecole Primaire Sainte Anne",
            description: "Say goodbye to manual entry. Join thousands of schools experts using our best tools, templates, and insights.",
            tech: ["TypeScript", "Node.js", "React", "MySQL"],
            link: "#",
            color: "teal"
        }
    ];

    const stats = [
        { number: "80+", label: "Projects Completed" },
        { number: "5+", label: "Enterprise Clients" },
        { number: "0", label: "Industry Awards" },
        { number: "98%", label: "Client Retention Rate" }
    ];

    const featuredProjects = [
        {
            title: "Nurturing the Elite Performers of Tomorrow",
            description: "Master Your Day, One Step at a Time. The ultimate solution for high-performance management.",
            icon: FaTrophy,
            color: "amber"
        },
        {
            title: "Restoring Hope, Building Futures",
            description: "A trusted partner for digital transformation, helping businesses thrive in the digital age.",
            icon: FaFire,
            color: "emerald"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
            amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", gradient: "from-amber-500 to-amber-600" },
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
            rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", gradient: "from-rose-500 to-rose-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-500 to-cyan-600" },
            teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", gradient: "from-teal-500 to-teal-600" }
        };
        return colorMap[color] || colorMap.blue;
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
                            <span className="text-sm font-medium">Our Project Studio</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Built Digital Platforms
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">
                                for Business Growth
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Discover our portfolio of websites, e-commerce stores, corporate brands, and media campaigns created for Rwandan companies and organizations.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                            >
                                Talk to Code Explorer
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4 bg-white">
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
                                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    {stat.number}
                                </div>
                                <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {featuredProjects.map((project, index) => {
                            const IconComponent = project.icon;
                            const colors = getColorClasses(project.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className={`bg-gradient-to-r ${colors.gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                                    <div className="relative z-10">
                                        <IconComponent className="text-4xl mb-4" />
                                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-white/90 leading-relaxed">{project.description}</p>
                                    </div>
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
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-full text-sm tracking-wider">
                            OUR WORK
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Recent Projects From Our Studio
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            These cases highlight how we turn digital ideas into clear business value for Rwandan companies.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => {
                            const colors = getColorClasses(project.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-sm font-bold ${colors.text} bg-opacity-10 ${colors.bg} px-3 py-1 rounded-full`}>
                                                {project.category}
                                            </span>
                                            <FaCode className={`${colors.text} opacity-50 group-hover:opacity-100 transition`} />
                                        </div>
                                        
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, idx) => (
                                                <span key={idx} className={`text-xs px-2 py-1 ${colors.bg} ${colors.text} rounded-full font-medium`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`text-sm font-bold ${colors.text} hover:underline flex items-center group`}
                                            >
                                                Read More 
                                                <FaArrowRight className="ml-1 group-hover:translate-x-1 transition" />
                                            </motion.button>
                                            
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-bold hover:shadow-md transition-all duration-300 flex items-center`}
                                            >
                                                Launch App 
                                                <FaRocket className="ml-1 text-xs" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
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
                                    Ready to Build Your Digital Platform?
                                </h2>
                                <p className="mt-3 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                    Talk with the ByteFlow team to create a professional website, complete brand identity, or custom web application.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate('/contact')}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Contact Code Explorer
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;