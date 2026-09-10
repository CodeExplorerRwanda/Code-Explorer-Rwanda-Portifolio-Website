import { 
    FaCode, FaPalette, FaServer, FaShare, FaCamera, FaVideo, 
    FaBook, FaRocket, FaArrowRight, FaEnvelope, FaWhatsapp,
    FaCheckCircle, FaClock, FaShieldAlt, FaGlobe, FaMobile,
    FaLaptop, FaDatabase, FaChartLine, FaGem, FaCrown,
    FaUserTie, FaPenFancy, FaLayerGroup, FaBullhorn, FaTimes,
    FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma, FaJs,
    FaPhp, FaPython, FaWordpress, FaNewspaper, FaBlog,
    FaLightbulb, FaSearch, FaCloud, FaLock, FaPaintBrush,
    FaChartBar, FaMailBulk, FaMoneyBillWave, FaUser, FaCalendar,
    FaTag, FaHeart, FaBookmark, FaTwitter, FaFacebook, FaLinkedin,
    FaLink, FaQuoteLeft
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Insights = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
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
            transition: { staggerChildren: 0.08 }
        }
    };

    const categories = [
        { name: "Web Development", icon: FaCode, color: "blue" },
        { name: "SEO", icon: FaSearch, color: "yellow" },
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
            id: 1,
            category: "WEB DEVELOPMENT",
            title: "Why Your Business Needs a Website in 2026",
            excerpt: "In a digital-first economy, a website is your primary office. Build 24/7 credibility and trust with a professional online presence.",
            readTime: "4 min read",
            color: "blue",
            featured: true,
            author: "Code Explorer Team",
            date: "January 15, 2026",
            fullContent: `
                <p>In today's digital-first economy, your website isn't just a nice-to-have — it's your primary office. It's the first impression you make on potential customers, the central hub for your brand, and the most powerful tool for building credibility and trust.</p>
                
                <h3>Why a Website Matters in 2026</h3>
                <p>Consumer behavior has fundamentally shifted. Before making a purchase decision, 87% of consumers research a business online. If you don't have a website, or if your website is outdated, you're losing customers to competitors who understand the digital landscape.</p>
                
                <h3>1. 24/7 Credibility and Trust</h3>
                <p>Your website works for you around the clock. It's a professional presence that reassures customers you're a legitimate business. A well-designed website signals competence, reliability, and attention to detail — qualities every customer looks for.</p>
                
                <h3>2. Own Your Online Presence</h3>
                <p>Unlike social media, your website is fully yours. You control the content, the design, and the user experience. You're not at the mercy of algorithm changes or platform policies. Your website is your digital real estate.</p>
                
                <h3>3. Generate Leads and Sales</h3>
                <p>Your website is a lead generation machine. Through contact forms, newsletter signups, and clear calls-to-action, you can capture interested visitors and convert them into paying customers. E-commerce functionality allows you to sell directly to your audience.</p>
                
                <h3>4. Showcase Your Expertise</h3>
                <p>Your website is the perfect platform to demonstrate your knowledge and expertise. Blog posts, case studies, and detailed service descriptions position you as an authority in your field.</p>
                
                <h3>5. Data-Driven Decisions</h3>
                <p>With tools like Google Analytics, your website gives you valuable insights into customer behavior. Understand what your visitors are looking for, where they're coming from, and how they interact with your content.</p>
                
                <h3>Getting Started</h3>
                <p>At Code Explorer Ltd, we specialize in building clean, professional websites that drive results. Whether you need a simple company profile or a complex e-commerce platform, we have the expertise to bring your vision to life.</p>
            `
        },
        {
            id: 2,
            category: "SEO",
            title: "How to Rank #1 on Google in Kigali",
            excerpt: "Local SEO strategies to help your business appear when people search for services in Rwanda. Dominate local search results.",
            readTime: "5 min read",
            color: "yellow",
            featured: true,
            author: "Code Explorer Team",
            date: "January 12, 2026",
            fullContent: `
                <p>Local SEO is the key to unlocking growth for businesses in Kigali and across Rwanda. When someone searches for "plumber near me" or "best restaurant in Kigali," you want your business to appear at the top of those results.</p>
                
                <h3>Understanding Local SEO</h3>
                <p>Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. Unlike traditional SEO, which focuses on broad national or international rankings, local SEO targets customers in your immediate geographic area.</p>
                
                <h3>1. Optimize Your Google Business Profile</h3>
                <p>Your Google Business Profile is the foundation of local SEO. Make sure it's complete and accurate with your business name, address, phone number, website, and hours of operation. Add high-quality photos and respond to customer reviews.</p>
                
                <h3>2. Build Local Citations</h3>
                <p>Local citations are mentions of your business name, address, and phone number on other websites. These include online directories, review sites, and local business associations. Consistent citations build trust with search engines.</p>
                
                <h3>3. Create Location-Specific Content</h3>
                <p>Create content that targets your local audience. Blog posts about local events, neighborhood guides, and location-specific service pages help you rank for local keywords.</p>
                
                <h3>4. Get Customer Reviews</h3>
                <p>Reviews are crucial for local SEO. Encourage satisfied customers to leave reviews on Google, Facebook, and other platforms. Positive reviews improve your rankings and build trust with potential customers.</p>
                
                <h3>5. Optimize for Mobile</h3>
                <p>Most local searches happen on mobile devices. Make sure your website is fast, responsive, and easy to navigate on smartphones.</p>
                
                <h3>Local Keywords for Kigali</h3>
                <p>Focus on keywords that include location modifiers like "Kigali," "Rwanda," and neighborhood names. Examples include "web development Kigali," "graphic design Rwanda," and "digital marketing Gasabo."</p>
                
                <h3>Measuring Success</h3>
                <p>Use Google Analytics and Google Search Console to track your local SEO performance. Monitor your rankings for local keywords, track website traffic, and measure conversions from local searches.</p>
            `
        },
        {
            id: 3,
            category: "HOSTING",
            title: "SSD NVMe Hosting: Why Speed Matters",
            excerpt: "Code Explorer's hosting is 20x faster than traditional HDD. Speed equals better customer retention and higher conversions.",
            readTime: "3 min read",
            color: "emerald",
            featured: true,
            author: "Code Explorer Team",
            date: "January 10, 2026",
            fullContent: `
                <p>In the digital age, speed is everything. A slow website doesn't just frustrate visitors — it costs you customers, damages your reputation, and hurts your search engine rankings.</p>
                
                <h3>The Problem with Traditional Hosting</h3>
                <p>Many web hosts still use traditional Hard Disk Drives (HDDs) to store website data. These mechanical drives have moving parts and are significantly slower than modern Solid State Drives (SSDs).</p>
                
                <h3>SSD NVMe: The Speed Revolution</h3>
                <p>At Code Explorer Ltd, we use SSD NVMe (Non-Volatile Memory Express) storage for all our hosting packages. NVMe SSDs are up to 20x faster than traditional HDDs, delivering lightning-fast page load times.</p>
                
                <h3>Why Speed Matters</h3>
                <p><strong>Customer Retention:</strong> Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load. Fast websites keep visitors engaged.</p>
                <p><strong>SEO Rankings:</strong> Google uses page speed as a ranking factor. Faster websites rank higher in search results.</p>
                <p><strong>Conversions:</strong> Every second of delay reduces conversions by 7%. Fast websites convert more visitors into customers.</p>
                
                <h3>Our Hosting Infrastructure</h3>
                <p>Our hosting infrastructure is built for performance. We combine SSD NVMe storage with optimized server configurations, content delivery networks (CDNs), and advanced caching to deliver exceptional speed.</p>
                
                <h3>Experience the Difference</h3>
                <p>Contact us today to learn more about our hosting packages and experience the speed difference for yourself.</p>
            `
        },
        {
            id: 4,
            category: "VIDEOGRAPHY",
            title: "4K Videography for High-Impact Social Ads",
            excerpt: "Professional video production can increase your engagement by over 300% on social media platforms.",
            readTime: "4 min read",
            color: "indigo",
            featured: false,
            author: "Code Explorer Team",
            date: "January 8, 2026",
            fullContent: `
                <p>Video is the most engaging content format on social media. Studies show that video content generates 300% more engagement than static images, making it an essential tool for businesses looking to grow their online presence.</p>
                
                <h3>Why 4K Matters</h3>
                <p>4K resolution (3840 x 2160 pixels) delivers four times the detail of 1080p Full HD. For businesses, this means sharper, more professional-looking videos that stand out in crowded social media feeds.</p>
                
                <h3>Types of Video Content</h3>
                <p><strong>Social Reels:</strong> Short, punchy videos designed for Instagram, TikTok, and Facebook. Perfect for showcasing products, sharing tips, or telling quick stories.</p>
                <p><strong>Product Videos:</strong> Detailed demonstrations of your products that help customers understand what you offer.</p>
                <p><strong>Corporate Videos:</strong> Professional videos that tell your company's story, showcase your team, and communicate your values.</p>
                
                <h3>The Production Process</h3>
                <p>Our videography process begins with understanding your goals and target audience. We then plan the shoot, capture high-quality footage, and edit it into a compelling final product.</p>
                
                <h3>Equipment and Expertise</h3>
                <p>We use professional-grade cameras, lighting, and audio equipment to ensure the highest quality results. Our team has years of experience in video production and post-production.</p>
                
                <h3>Get Started</h3>
                <p>Ready to elevate your social media presence with professional video content? Contact us to discuss your project.</p>
            `
        },
        {
            id: 5,
            category: "DOMAINS",
            title: "The Strategic Importance of .RW Domains",
            excerpt: "Build local trust and improve your local search presence with a country-specific domain extension.",
            readTime: "3 min read",
            color: "purple",
            featured: false,
            author: "Code Explorer Team",
            date: "January 6, 2026",
            fullContent: `
                <p>For businesses operating in Rwanda, choosing the right domain extension is more than just a technical decision — it's a strategic one. The .RW domain extension offers unique advantages for local businesses.</p>
                
                <h3>What is a .RW Domain?</h3>
                <p>.RW is the country code top-level domain (ccTLD) for Rwanda. It's managed by the Rwanda Information Society Authority (RISA) and is available to businesses and individuals with a connection to Rwanda.</p>
                
                <h3>Benefits of .RW Domains</h3>
                <p><strong>Local Trust:</strong> Customers trust local businesses more when they see a .RW domain. It signals that you're a legitimate Rwandan business.</p>
                <p><strong>SEO Advantages:</strong> Google and other search engines use country code domains as a ranking signal for local searches. A .RW domain can help you rank higher for Rwandan search queries.</p>
                <p><strong>Brand Identity:</strong> A .RW domain reinforces your commitment to the Rwandan market and helps differentiate you from international competitors.</p>
                
                <h3>When to Choose .RW</h3>
                <p>If your primary market is Rwanda, a .RW domain is an excellent choice. It's particularly valuable for businesses in industries like tourism, hospitality, and professional services where local trust is crucial.</p>
                
                <h3>Registering Your .RW Domain</h3>
                <p>At Code Explorer Ltd, we offer .RW domain registration as part of our hosting packages. We handle the entire process, from registration to DNS configuration, so you can focus on your business.</p>
            `
        },
        {
            id: 6,
            category: "DEVELOPMENT",
            title: "React vs Next.js: Choosing the Right Stack",
            excerpt: "A deep dive into why we use Next.js for high-performance e-commerce platforms and web applications.",
            readTime: "6 min read",
            color: "cyan",
            featured: false,
            author: "Code Explorer Team",
            date: "January 4, 2026",
            fullContent: `
                <p>When building modern web applications, choosing the right technology stack is crucial. React and Next.js are two of the most popular options, but they serve different purposes.</p>
                
                <h3>Understanding React</h3>
                <p>React is a JavaScript library for building user interfaces, developed by Facebook. It's component-based, which means you build your UI from reusable pieces of code.</p>
                
                <h3>Understanding Next.js</h3>
                <p>Next.js is a React framework that adds additional features like server-side rendering, static site generation, and API routes. It's built on top of React.</p>
                
                <h3>Key Differences</h3>
                <p><strong>Rendering:</strong> React is client-side rendered by default, while Next.js offers server-side rendering and static site generation out of the box.</p>
                <p><strong>SEO:</strong> Next.js is better for SEO because it can pre-render pages on the server, making them easier for search engines to crawl.</p>
                <p><strong>Performance:</strong> Next.js offers better initial page load performance due to server-side rendering and automatic code splitting.</p>
                <p><strong>Routing:</strong> Next.js has a built-in file-based routing system, while React requires additional libraries like React Router.</p>
                
                <h3>When to Use React</h3>
                <p>React is a good choice for single-page applications (SPAs) that don't require SEO, such as admin dashboards and internal tools.</p>
                
                <h3>When to Use Next.js</h3>
                <p>Next.js is ideal for e-commerce platforms, marketing websites, blogs, and any application where SEO and performance are critical.</p>
                
                <h3>Our Recommendation</h3>
                <p>At Code Explorer Ltd, we use Next.js for most client projects because of its superior performance, SEO capabilities, and developer experience. For complex applications that don't require SEO, React alone may be sufficient.</p>
            `
        },
        {
            id: 7,
            category: "DESIGN",
            title: "Psychology of Colors in Modern Branding",
            excerpt: "How choosing the right colors can influence your customers' purchasing decisions and brand perception.",
            readTime: "4 min read",
            color: "rose",
            featured: false,
            author: "Code Explorer Team",
            date: "January 2, 2026",
            fullContent: `
                <p>Color is one of the most powerful tools in branding. It can evoke emotions, influence perceptions, and even drive purchasing decisions. Understanding color psychology is essential for building a successful brand.</p>
                
                <h3>How Colors Affect Perception</h3>
                <p>Different colors evoke different emotions and associations. For example, blue is often associated with trust and reliability, while red can create a sense of urgency or excitement.</p>
                
                <h3>Color Meanings</h3>
                <p><strong>Blue:</strong> Trust, reliability, professionalism. Commonly used by banks, tech companies, and healthcare providers.</p>
                <p><strong>Red:</strong> Energy, urgency, excitement. Used by food brands and companies wanting to grab attention.</p>
                <p><strong>Green:</strong> Growth, nature, health. Popular with eco-friendly and wellness brands.</p>
                <p><strong>Yellow:</strong> Optimism, warmth, creativity. Used to create a friendly, approachable feel.</p>
                <p><strong>Purple:</strong> Luxury, creativity, wisdom. Often used by premium brands.</p>
                <p><strong>Orange:</strong> Confidence, friendliness, enthusiasm. Used to create a sense of fun and energy.</p>
                
                <h3>Cultural Considerations</h3>
                <p>Color meanings vary across cultures. For example, white symbolizes purity in Western cultures but mourning in some Asian cultures. Consider your target audience when choosing colors.</p>
                
                <h3>Building a Color Palette</h3>
                <p>A successful brand palette typically includes a primary color, one or two accent colors, and neutral tones. Consistency is key — use your colors consistently across all brand materials.</p>
                
                <h3>Testing and Iteration</h3>
                <p>Don't be afraid to test different color palettes. A/B testing can help you understand which colors resonate best with your audience.</p>
            `
        },
        {
            id: 8,
            category: "MARKETING",
            title: "Email Marketing: The Highest ROI Channel",
            excerpt: "Why building an email list is safer than relying solely on social media algorithms for business growth.",
            readTime: "3 min read",
            color: "emerald",
            featured: false,
            author: "Code Explorer Team",
            date: "December 30, 2025",
            fullContent: `
                <p>In the constantly changing world of digital marketing, email remains the most reliable and profitable channel. With an average ROI of $42 for every $1 spent, email marketing outperforms all other marketing channels.</p>
                
                <h3>Why Email Marketing Works</h3>
                <p><strong>Direct Communication:</strong> Email allows you to communicate directly with your audience without intermediaries or algorithms.</p>
                <p><strong>Ownership:</strong> Your email list is yours. Unlike social media followers, you don't lose your email subscribers if a platform changes its policies.</p>
                <p><strong>Personalization:</strong> Email allows for highly personalized communication based on customer behavior and preferences.</p>
                <p><strong>Measurability:</strong> Email marketing provides detailed analytics, allowing you to track opens, clicks, and conversions.</p>
                
                <h3>Building Your Email List</h3>
                <p><strong>Lead Magnets:</strong> Offer something valuable in exchange for email signups — a free guide, discount, or exclusive content.</p>
                <p><strong>Website Opt-ins:</strong> Place signup forms prominently on your website, particularly on high-traffic pages.</p>
                <p><strong>Social Media:</strong> Promote your newsletter on social media and include signup links in your bio.</p>
                
                <h3>Email Marketing Best Practices</h3>
                <p><strong>Segment Your List:</strong> Divide your subscribers into groups based on interests, behavior, or demographics for more targeted campaigns.</p>
                <p><strong>Personalize Your Emails:</strong> Use the subscriber's name and tailor content to their interests.</p>
                <p><strong>Mobile Optimization:</strong> Most emails are opened on mobile devices. Ensure your emails look great on smartphones.</p>
                <p><strong>Test and Optimize:</strong> A/B test subject lines, content, and send times to improve performance.</p>
                
                <h3>Getting Started</h3>
                <p>At Code Explorer Ltd, we help businesses build and manage effective email marketing campaigns. Contact us to learn more.</p>
            `
        },
        {
            id: 9,
            category: "E-COMMERCE",
            title: "Integrating MoMo Pay for Online Sales",
            excerpt: "A step-by-step guide on how we integrate local payments to boost your e-commerce sales and conversions.",
            readTime: "5 min read",
            color: "yellow",
            featured: false,
            author: "Code Explorer Team",
            date: "December 28, 2025",
            fullContent: `
                <p>For e-commerce businesses in Rwanda, integrating local payment methods is essential. MTN MoMo and Airtel Money are the most popular mobile money services in the country, and integrating them into your online store can significantly boost sales.</p>
                
                <h3>Why Local Payments Matter</h3>
                <p>Many Rwandan customers prefer mobile money over credit cards. By offering MoMo Pay and Airtel Money as payment options, you make it easier for customers to buy from you.</p>
                
                <h3>How MoMo Pay Works</h3>
                <p>MoMo Pay is MTN's mobile money API that allows businesses to accept payments directly from customers' mobile money wallets. The integration involves setting up a merchant account and connecting it to your e-commerce platform.</p>
                
                <h3>Integration Steps</h3>
                <p><strong>Step 1: Register as a Merchant</strong> — Contact MTN to register your business as a MoMo Pay merchant.</p>
                <p><strong>Step 2: Get API Credentials</strong> — MTN will provide you with API credentials to integrate MoMo Pay into your website.</p>
                <p><strong>Step 3: Integrate the API</strong> — Work with your developer to integrate the MoMo Pay API into your checkout process.</p>
                <p><strong>Step 4: Test the Integration</strong> — Test the payment flow thoroughly before going live.</p>
                <p><strong>Step 5: Go Live</strong> — Once testing is complete, you can start accepting MoMo Pay payments.</p>
                
                <h3>Benefits of Integration</h3>
                <p><strong>Increased Conversions:</strong> Offering local payment options reduces friction and increases conversions.</p>
                <p><strong>Customer Trust:</strong> Customers trust familiar payment methods.</p>
                <p><strong>Faster Checkout:</strong> Mobile money payments are quick and easy.</p>
                
                <h3>Our E-commerce Solutions</h3>
                <p>At Code Explorer Ltd, we specialize in building e-commerce platforms with integrated local payment options. Contact us to learn more about our services.</p>
            `
        },
        {
            id: 10,
            category: "SECURITY",
            title: "Cybersecurity Basics for Small Businesses",
            excerpt: "Protect your customer data and your brand reputation with essential security tips and best practices.",
            readTime: "4 min read",
            color: "purple",
            featured: false,
            author: "Code Explorer Team",
            date: "December 26, 2025",
            fullContent: `
                <p>Cybersecurity is no longer just a concern for large corporations. Small businesses are increasingly targeted by cyberattacks because they often lack robust security measures.</p>
                
                <h3>Common Cyber Threats</h3>
                <p><strong>Phishing:</strong> Fraudulent emails or messages that trick users into revealing sensitive information.</p>
                <p><strong>Malware:</strong> Malicious software that can damage your systems or steal data.</p>
                <p><strong>Ransomware:</strong> Malware that encrypts your files and demands payment for their release.</p>
                <p><strong>Data Breaches:</strong> Unauthorized access to your customer data.</p>
                
                <h3>Essential Security Measures</h3>
                <p><strong>Use Strong Passwords:</strong> Require complex passwords and change them regularly.</p>
                <p><strong>Enable Two-Factor Authentication:</strong> Add an extra layer of security to your accounts.</p>
                <p><strong>Keep Software Updated:</strong> Install security patches as soon as they're available.</p>
                <p><strong>Train Your Employees:</strong> Educate your team about security best practices.</p>
                <p><strong>Back Up Your Data:</strong> Regularly back up important data to secure locations.</p>
                
                <h3>Protecting Customer Data</h3>
                <p>If you collect customer data, you have a responsibility to protect it. Use encryption, secure storage, and access controls to safeguard sensitive information.</p>
                
                <h3>Incident Response Plan</h3>
                <p>Have a plan in place for responding to security incidents. This should include steps for containing the breach, notifying affected parties, and restoring systems.</p>
                
                <h3>How We Can Help</h3>
                <p>At Code Explorer Ltd, we offer security assessments and can help you implement robust security measures for your business.</p>
            `
        },
        {
            id: 11,
            category: "DESIGN",
            title: "UI vs UX: Designing for the User",
            excerpt: "A look into how we design interfaces that are both beautiful and easy to navigate for optimal user experience.",
            readTime: "5 min read",
            color: "rose",
            featured: false,
            author: "Code Explorer Team",
            date: "December 24, 2025",
            fullContent: `
                <p>UI (User Interface) and UX (User Experience) are often used interchangeably, but they refer to different aspects of design. Understanding the difference is crucial for creating effective digital products.</p>
                
                <h3>What is UI Design?</h3>
                <p>UI design focuses on the visual elements of a digital product — the colors, typography, buttons, icons, and layout. It's about making interfaces that are visually appealing and consistent.</p>
                
                <h3>What is UX Design?</h3>
                <p>UX design focuses on the overall experience a user has when interacting with a product. It's about understanding user needs, behaviors, and pain points to create seamless, intuitive experiences.</p>
                
                <h3>The Relationship Between UI and UX</h3>
                <p>UI and UX are closely related. A beautiful interface (UI) is worthless if the experience (UX) is frustrating. Conversely, a great experience can be undermined by a poorly designed interface.</p>
                
                <h3>Principles of Good UX</h3>
                <p><strong>Usability:</strong> The product should be easy to use and understand.</p>
                <p><strong>Accessibility:</strong> The product should be usable by people with disabilities.</p>
                <p><strong>Desirability:</strong> The product should evoke positive emotions.</p>
                <p><strong>Findability:</strong> Users should be able to find what they're looking for easily.</p>
                <p><strong>Credibility:</strong> Users should trust the product and the brand behind it.</p>
                
                <h3>Principles of Good UI</h3>
                <p><strong>Consistency:</strong> Use consistent design patterns throughout the product.</p>
                <p><strong>Hierarchy:</strong> Guide users' attention to the most important elements.</p>
                <p><strong>Feedback:</strong> Provide clear feedback for user actions.</p>
                <p><strong>Simplicity:</strong> Keep interfaces clean and uncluttered.</p>
                
                <h3>Our Design Process</h3>
                <p>At Code Explorer Ltd, we combine UI and UX principles to create digital products that are both beautiful and functional. We start with user research, create wireframes and prototypes, and iterate based on user feedback.</p>
            `
        },
        {
            id: 12,
            category: "HOSTING",
            title: "Scaling with Cloud Infrastructure",
            excerpt: "Move from shared hosting to a scalable cloud environment as your traffic grows and business expands.",
            readTime: "4 min read",
            color: "emerald",
            featured: false,
            author: "Code Explorer Team",
            date: "December 22, 2025",
            fullContent: `
                <p>As your business grows, your hosting needs change. What worked when you were starting out may not be sufficient as your traffic increases. Cloud infrastructure offers the scalability and flexibility you need to grow.</p>
                
                <h3>Signs You've Outgrown Shared Hosting</h3>
                <p><strong>Slow Page Load Times:</strong> Your website loads slowly, especially during peak traffic periods.</p>
                <p><strong>Frequent Downtime:</strong> Your site goes down regularly due to resource limitations.</p>
                <p><strong>Security Concerns:</strong> You're worried about security because you share a server with other websites.</p>
                <p><strong>Limited Customization:</strong> You can't install the software or configure the server as needed.</p>
                
                <h3>Benefits of Cloud Hosting</h3>
                <p><strong>Scalability:</strong> Scale your resources up or down based on demand.</p>
                <p><strong>Reliability:</strong> Cloud infrastructure is designed for high availability.</p>
                <p><strong>Performance:</strong> Cloud servers typically offer better performance than shared hosting.</p>
                <p><strong>Security:</strong> Cloud providers invest heavily in security.</p>
                <p><strong>Cost-Effectiveness:</strong> Pay only for the resources you use.</p>
                
                <h3>Cloud Hosting Options</h3>
                <p><strong>VPS (Virtual Private Server):</strong> A virtual server with dedicated resources.</p>
                <p><strong>Dedicated Server:</strong> A physical server dedicated entirely to your business.</p>
                <p><strong>Cloud Hosting:</strong> A network of virtual servers that work together.</p>
                
                <h3>Migration Process</h3>
                <p>Migrating to the cloud requires careful planning. At Code Explorer Ltd, we handle the entire migration process, ensuring minimal downtime and a smooth transition.</p>
                
                <h3>Getting Started</h3>
                <p>Contact us to discuss your hosting needs and find the right cloud solution for your business.</p>
            `
        },
        {
            id: 13,
            category: "INSIGHTS",
            title: "Tech Trends in Rwanda for 2026",
            excerpt: "What to expect in the local tech scene and how to stay ahead of the curve in the digital economy.",
            readTime: "5 min read",
            color: "teal",
            featured: false,
            author: "Code Explorer Team",
            date: "December 20, 2025",
            fullContent: `
                <p>Rwanda's tech scene is evolving rapidly. As we move into 2026, several trends are shaping the future of digital business in the country.</p>
                
                <h3>1. Mobile Money Integration</h3>
                <p>Mobile money is becoming the dominant payment method in Rwanda. More businesses are integrating MoMo Pay and Airtel Money into their online platforms to meet customer expectations.</p>
                
                <h3>2. E-commerce Growth</h3>
                <p>E-commerce is growing rapidly in Rwanda. More consumers are shopping online, and businesses are responding by building online stores with integrated payment and delivery options.</p>
                
                <h3>3. Cloud Adoption</h3>
                <p>Businesses are increasingly moving to the cloud for hosting, storage, and software. Cloud adoption is driven by the need for scalability, reliability, and cost-effectiveness.</p>
                
                <h3>4. AI and Automation</h3>
                <p>Artificial intelligence and automation are transforming industries. From chatbots to automated marketing, AI is helping businesses operate more efficiently.</p>
                
                <h3>5. Digital Skills Development</h3>
                <p>There's a growing focus on developing digital skills in Rwanda. Government initiatives and private programs are training the next generation of tech professionals.</p>
                
                <h3>6. Cybersecurity Awareness</h3>
                <p>As digital adoption grows, so does the need for cybersecurity. Businesses are investing in security measures to protect their data and systems.</p>
                
                <h3>Staying Ahead</h3>
                <p>To stay ahead of the curve, businesses need to embrace these trends and adapt to the changing digital landscape. At Code Explorer Ltd, we help businesses navigate these changes and leverage technology for growth.</p>
            `
        },
        {
            id: 14,
            category: "STRATEGY",
            title: "The Power of Social Proof in Digital Sales",
            excerpt: "How displaying reviews and testimonials can increase your conversion rates and build customer confidence.",
            readTime: "3 min read",
            color: "indigo",
            featured: false,
            author: "Code Explorer Team",
            date: "December 18, 2025",
            fullContent: `
                <p>Social proof is one of the most powerful tools in digital marketing. It's the psychological phenomenon where people follow the actions of others, assuming those actions reflect the correct behavior.</p>
                
                <h3>What is Social Proof?</h3>
                <p>Social proof includes customer reviews, testimonials, ratings, case studies, social media followers, and any other evidence that others have had positive experiences with your brand.</p>
                
                <h3>Why Social Proof Works</h3>
                <p><strong>Builds Trust:</strong> When customers see positive reviews from others, they trust your business more.</p>
                <p><strong>Reduces Risk:</strong> Social proof reduces the perceived risk of purchasing from you.</p>
                <p><strong>Influences Decisions:</strong> 92% of consumers read online reviews before making a purchase decision.</p>
                
                <h3>Types of Social Proof</h3>
                <p><strong>Customer Reviews:</strong> Written or video reviews from satisfied customers.</p>
                <p><strong>Testimonials:</strong> Quotes from customers about their experience with your business.</p>
                <p><strong>Case Studies:</strong> Detailed stories of how you've helped customers achieve their goals.</p>
                <p><strong>Social Media Metrics:</strong> Follower counts, likes, and shares.</p>
                <p><strong>Certifications and Awards:</strong> Industry recognition and credentials.</p>
                
                <h3>How to Use Social Proof</h3>
                <p><strong>Display Reviews Prominently:</strong> Show customer reviews on your homepage and product pages.</p>
                <p><strong>Use Video Testimonials:</strong> Video testimonials are more engaging than text reviews.</p>
                <p><strong>Include Numbers:</strong> Statistics like "10,000+ happy customers" are powerful.</p>
                <p><strong>Show Real People:</strong> Use photos and names of real customers.</p>
                
                <h3>Getting Started</h3>
                <p>At Code Explorer Ltd, we help businesses collect and display social proof effectively. Contact us to learn more.</p>
            `
        },
        {
            id: 15,
            category: "MARKETING",
            title: "Content Strategy that Actually Converts",
            excerpt: "Stop posting randomly. Learn how to create content that brings in real leads and drives business growth.",
            readTime: "4 min read",
            color: "cyan",
            featured: false,
            author: "Code Explorer Team",
            date: "December 16, 2025",
            fullContent: `
                <p>Creating content without a strategy is like throwing darts blindfolded. You might hit the target occasionally, but you're mostly wasting time and resources. A well-defined content strategy ensures every piece of content serves a purpose.</p>
                
                <h3>Why Content Strategy Matters</h3>
                <p><strong>Consistency:</strong> A strategy ensures you publish content regularly.</p>
                <p><strong>Focus:</strong> A strategy keeps you focused on topics that matter to your audience.</p>
                <p><strong>Measurability:</strong> A strategy includes metrics to measure success.</p>
                <p><strong>Alignment:</strong> A strategy aligns content with business goals.</p>
                
                <h3>Steps to Build a Content Strategy</h3>
                <p><strong>1. Define Your Goals:</strong> What do you want to achieve with content? More leads? Brand awareness? Customer retention?</p>
                <p><strong>2. Know Your Audience:</strong> Create buyer personas and understand their pain points, interests, and content preferences.</p>
                <p><strong>3. Conduct a Content Audit:</strong> Review your existing content to see what's working and what's not.</p>
                <p><strong>4. Choose Your Channels:</strong> Focus on channels where your audience spends time.</p>
                <p><strong>5. Create a Content Calendar:</strong> Plan your content in advance to ensure consistency.</p>
                <p><strong>6. Create High-Quality Content:</strong> Focus on quality over quantity. Create content that provides real value.</p>
                <p><strong>7. Promote Your Content:</strong> Creating content is only half the battle. You need to promote it to reach your audience.</p>
                <p><strong>8. Measure and Optimize:</strong> Track your results and adjust your strategy based on what's working.</p>
                
                <h3>Types of Content that Convert</h3>
                <p><strong>How-to Guides:</strong> Practical content that helps your audience solve problems.</p>
                <p><strong>Case Studies:</strong> Real examples of how you've helped customers.</p>
                <p><strong>Comparison Posts:</strong> Comparisons of products or services that help buyers make decisions.</p>
                <p><strong>Industry News:</strong> Updates on trends and developments in your industry.</p>
                <p><strong>Behind-the-Scenes:</strong> Content that humanizes your brand.</p>
                
                <h3>How We Can Help</h3>
                <p>At Code Explorer Ltd, we help businesses develop and execute effective content strategies. Contact us to learn more.</p>
            `
        },
        {
            id: 16,
            category: "DEVELOPMENT",
            title: "Mobile-First Design is No Longer Optional",
            excerpt: "80% of Rwandans browse on mobile. Is your website optimized for them? Learn why mobile-first is essential.",
            readTime: "4 min read",
            color: "blue",
            featured: false,
            author: "Code Explorer Team",
            date: "December 14, 2025",
            fullContent: `
                <p>In Rwanda, over 80% of internet users access the web on mobile devices. If your website isn't optimized for mobile, you're missing out on a massive audience.</p>
                
                <h3>What is Mobile-First Design?</h3>
                <p>Mobile-first design is an approach where you design for mobile devices first, then scale up to tablet and desktop. This ensures the mobile experience is prioritized, not an afterthought.</p>
                
                <h3>Why Mobile-First Matters</h3>
                <p><strong>Google's Mobile-First Indexing:</strong> Google primarily uses the mobile version of your site for indexing and ranking.</p>
                <p><strong>User Behavior:</strong> Most users browse on mobile, and they expect a seamless experience.</p>
                <p><strong>Conversion Rates:</strong> Mobile-optimized sites have higher conversion rates.</p>
                <p><strong>Speed:</strong> Mobile-first designs are typically faster and more efficient.</p>
                
                <h3>Key Principles of Mobile-First Design</h3>
                <p><strong>Touch-Friendly:</strong> Buttons and links should be large enough for fingers.</p>
                <p><strong>Readable Text:</strong> Font sizes should be legible without zooming.</p>
                <p><strong>Simple Navigation:</strong> Menus should be easy to use on small screens.</p>
                <p><strong>Fast Loading:</strong> Optimize images and code for fast mobile loading.</p>
                <p><strong>Vertical Scrolling:</strong> Design for vertical scrolling, not horizontal.</p>
                
                <h3>Testing Your Mobile Experience</h3>
                <p>Test your website on multiple devices and browsers. Use Google's Mobile-Friendly Test tool to identify issues.</p>
                
                <h3>Our Mobile-First Approach</h3>
                <p>At Code Explorer Ltd, every website we build is designed mobile-first. We ensure your site looks and works great on all devices.</p>
            `
        },
        {
            id: 17,
            category: "DESIGN",
            title: "Optimizing Your Logo for Digital Screens",
            excerpt: "Common mistakes when designing logos for web and social media platforms and how to avoid them.",
            readTime: "3 min read",
            color: "yellow",
            featured: false,
            author: "Code Explorer Team",
            date: "December 12, 2025",
            fullContent: `
                <p>Your logo is the face of your brand. It appears on your website, social media profiles, business cards, and more. But a logo that looks great in print may not work well on digital screens.</p>
                
                <h3>Common Logo Design Mistakes</h3>
                <p><strong>Too Much Detail:</strong> Complex logos don't work well at small sizes. Simplify your logo for digital use.</p>
                <p><strong>Thin Lines:</strong> Thin lines may disappear on low-resolution screens. Use thicker lines for better visibility.</p>
                <p><strong>Small Text:</strong> Text that's too small becomes illegible on mobile devices.</p>
                <p><strong>Poor Contrast:</strong> Low contrast between logo and background reduces visibility.</p>
                <p><strong>Wrong File Format:</strong> Using the wrong file format can result in blurry or pixelated logos.</p>
                
                <h3>Best Practices for Digital Logos</h3>
                <p><strong>Simplicity:</strong> Simple logos work best across all screen sizes.</p>
                <p><strong>Scalability:</strong> Your logo should look good at any size, from favicon to billboard.</p>
                <p><strong>Versatility:</strong> Create different versions of your logo for different backgrounds and contexts.</p>
                <p><strong>File Formats:</strong> Use SVG for scalable vector graphics, PNG for transparency, and JPG for photos.</p>
                <p><strong>Testing:</strong> Test your logo at various sizes and on different backgrounds before finalizing.</p>
                
                <h3>Responsive Logos</h3>
                <p>Consider creating a responsive logo system with different versions for different screen sizes. For example, a full logo for desktop and a simplified icon for mobile.</p>
                
                <h3>How We Can Help</h3>
                <p>At Code Explorer Ltd, we design logos that work beautifully across all digital platforms. Contact us to learn more.</p>
            `
        },
        {
            id: 18,
            category: "SECURITY",
            title: "SSL Certificates: Security and SEO",
            excerpt: "Encryption builds customer confidence and improves your Google ranking. Here's why SSL matters.",
            readTime: "3 min read",
            color: "purple",
            featured: false,
            author: "Code Explorer Team",
            date: "December 10, 2025",
            fullContent: `
                <p>SSL (Secure Sockets Layer) certificates are a fundamental security measure for any website. They encrypt data between your website and your visitors, protecting sensitive information.</p>
                
                <h3>What is an SSL Certificate?</h3>
                <p>An SSL certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection. When a website has an SSL certificate, the URL begins with "https://" instead of "http://".</p>
                
                <h3>Why SSL Matters for Security</h3>
                <p><strong>Data Encryption:</strong> SSL encrypts data transmitted between the user's browser and your server.</p>
                <p><strong>Authentication:</strong> SSL verifies that your website is who it claims to be.</p>
                <p><strong>Trust:</strong> Browsers display a padlock icon for sites with SSL, building user trust.</p>
                
                <h3>Why SSL Matters for SEO</h3>
                <p><strong>Google Ranking Factor:</strong> Google uses HTTPS as a ranking signal. Sites with SSL rank higher than those without.</p>
                <p><strong>Referral Data:</strong> HTTPS sites receive referral data from other HTTPS sites, which is important for analytics.</p>
                <p><strong>User Experience:</strong> Browsers warn users about insecure sites, which can drive visitors away.</p>
                
                <h3>Types of SSL Certificates</h3>
                <p><strong>Domain Validated (DV):</strong> Basic validation, suitable for personal sites and blogs.</p>
                <p><strong>Organization Validated (OV):</strong> Validates the organization, suitable for business sites.</p>
                <p><strong>Extended Validation (EV):</strong> Highest level of validation, suitable for e-commerce and financial sites.</p>
                
                <h3>Getting an SSL Certificate</h3>
                <p>Many hosting providers offer free SSL certificates through Let's Encrypt. At Code Explorer Ltd, we include SSL certificates with all our hosting packages.</p>
            `
        },
        {
            id: 19,
            category: "MARKETING",
            title: "Facebook vs Google Ads for Startups",
            excerpt: "Where should you spend your marketing budget for the best possible ROI? We break down both options.",
            readTime: "5 min read",
            color: "rose",
            featured: false,
            author: "Code Explorer Team",
            date: "December 8, 2025",
            fullContent: `
                <p>For startups with limited marketing budgets, choosing the right advertising platform is crucial. Facebook Ads and Google Ads are the two dominant platforms, but they serve different purposes.</p>
                
                <h3>Understanding Facebook Ads</h3>
                <p>Facebook Ads (including Instagram) are ideal for building brand awareness and reaching specific audiences based on demographics, interests, and behaviors.</p>
                
                <h3>Understanding Google Ads</h3>
                <p>Google Ads are ideal for capturing existing demand. When someone searches for a product or service, Google Ads can put your business in front of them.</p>
                
                <h3>Key Differences</h3>
                <p><strong>Intent:</strong> Google Ads target users with existing intent, while Facebook Ads create demand.</p>
                <p><strong>Targeting:</strong> Facebook offers more detailed demographic and interest targeting.</p>
                <p><strong>Cost:</strong> Google Ads can be more expensive due to higher competition.</p>
                <p><strong>Format:</strong> Facebook offers more visual ad formats, while Google focuses on text and display.</p>
                
                <h3>When to Use Facebook Ads</h3>
                <p><strong>Brand Awareness:</strong> If you're a new brand trying to get noticed.</p>
                <p><strong>Visual Products:</strong> If you sell products that look good in photos.</p>
                <p><strong>Specific Audiences:</strong> If you need to target specific demographics.</p>
                
                <h3>When to Use Google Ads</h3>
                <p><strong>High Intent:</strong> If customers are actively searching for what you offer.</p>
                <p><strong>Local Business:</strong> If you serve a specific geographic area.</p>
                <p><strong>B2B Services:</strong> If you offer business services that people search for.</p>
                
                <h3>The Best Approach</h3>
                <p>For most startups, a combination of both platforms works best. Use Facebook Ads to build awareness and Google Ads to capture demand.</p>
                
                <h3>How We Can Help</h3>
                <p>At Code Explorer Ltd, we help businesses develop and execute effective ad campaigns across both platforms. Contact us to learn more.</p>
            `
        },
        {
            id: 20,
            category: "DEVELOPMENT",
            title: "The Growth of the API Economy in Rwanda",
            excerpt: "How local businesses are connecting services to create seamless ecosystems and digital transformation.",
            readTime: "4 min read",
            color: "emerald",
            featured: false,
            author: "Code Explorer Team",
            date: "December 6, 2025",
            fullContent: `
                <p>The API economy is transforming how businesses operate in Rwanda. APIs (Application Programming Interfaces) allow different software systems to communicate with each other, enabling seamless integration of services.</p>
                
                <h3>What is an API?</h3>
                <p>An API is a set of rules and protocols that allows different software applications to communicate with each other. APIs define how different components should interact.</p>
                
                <h3>The API Economy in Rwanda</h3>
                <p>Rwanda's digital economy is growing rapidly, and APIs are playing a crucial role. From mobile money integration to e-government services, APIs are connecting services and creating new opportunities.</p>
                
                <h3>Examples of API Integration</h3>
                <p><strong>Mobile Money:</strong> APIs allow e-commerce platforms to accept MoMo Pay and Airtel Money payments.</p>
                <p><strong>E-Government:</strong> APIs enable businesses to access government services programmatically.</p>
                <p><strong>Logistics:</strong> APIs connect e-commerce platforms with delivery services.</p>
                <p><strong>Social Media:</strong> APIs allow websites to integrate social media features.</p>
                
                <h3>Benefits of API Integration</h3>
                <p><strong>Efficiency:</strong> APIs automate processes and reduce manual work.</p>
                <p><strong>Scalability:</strong> APIs make it easy to add new features and services.</p>
                <p><strong>Innovation:</strong> APIs enable businesses to build on top of existing services.</p>
                <p><strong>Customer Experience:</strong> APIs create seamless experiences across different platforms.</p>
                
                <h3>Challenges and Considerations</h3>
                <p><strong>Security:</strong> APIs can be a security risk if not properly secured.</p>
                <p><strong>Documentation:</strong> Poorly documented APIs are difficult to work with.</p>
                <p><strong>Maintenance:</strong> APIs require ongoing maintenance and updates.</p>
                
                <h3>How We Can Help</h3>
                <p>At Code Explorer Ltd, we specialize in API integration for Rwandan businesses. Contact us to learn more about how we can help you connect your systems.</p>
            `
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600", hover: "hover:bg-blue-50", light: "bg-blue-100" },
            yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", gradient: "from-yellow-500 to-yellow-600", hover: "hover:bg-yellow-50", light: "bg-yellow-100" },
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600", hover: "hover:bg-emerald-50", light: "bg-emerald-100" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600", hover: "hover:bg-purple-50", light: "bg-purple-100" },
            rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", gradient: "from-rose-500 to-rose-600", hover: "hover:bg-rose-50", light: "bg-rose-100" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600", hover: "hover:bg-indigo-50", light: "bg-indigo-100" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-500 to-cyan-600", hover: "hover:bg-cyan-50", light: "bg-cyan-100" },
            teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", gradient: "from-teal-500 to-teal-600", hover: "hover:bg-teal-50", light: "bg-teal-100" }
        };
        return colorMap[color] || colorMap.blue;
    };

    const openArticle = (post) => {
        setSelectedArticle(post);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeArticle = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedArticle(null), 300);
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
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-emerald-400">
                                for Growing Businesses
                            </span>
                        </h1>
                        
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Practical articles on websites, branding, SEO, and media strategy for companies that want measurable results.
                        </p>
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
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
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
                                        <button 
                                            onClick={() => openArticle(post)}
                                            className={`text-sm font-bold ${colors.text} hover:underline flex items-center`}
                                        >
                                            Read Article 
                                            <FaArrowRight className="ml-1 group-hover:translate-x-1 transition" />
                                        </button>
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
                                        <button 
                                            onClick={() => openArticle(post)}
                                            className={`text-sm font-bold ${colors.text} hover:underline flex items-center`}
                                        >
                                            Read Article 
                                            <FaArrowRight className="ml-1 group-hover:translate-x-1 transition text-xs" />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                    </motion.div>
                </div>
            </section>

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
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center whitespace-nowrap group"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition duration-300" />
                                Suggest a Topic
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Modal */}
            <AnimatePresence>
                {isModalOpen && selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={closeArticle}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedArticle && (
                                <div>
                                    <div className={`relative p-8 md:p-10 bg-gradient-to-r ${getColorClasses(selectedArticle.color).gradient} rounded-t-3xl`}>
                                        <button
                                            onClick={closeArticle}
                                            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                                        >
                                            <FaTimes className="text-2xl text-white" />
                                        </button>
                                        
                                        <div className={`inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold mb-4`}>
                                            {selectedArticle.category}
                                        </div>
                                        
                                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 pr-12">
                                            {selectedArticle.title}
                                        </h1>
                                        
                                        <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                                            <div className="flex items-center">
                                                <FaUser className="mr-2" />
                                                {selectedArticle.author}
                                            </div>
                                            <div className="flex items-center">
                                                <FaCalendar className="mr-2" />
                                                {selectedArticle.date}
                                            </div>
                                            <div className="flex items-center">
                                                <FaClock className="mr-2" />
                                                {selectedArticle.readTime}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-10">
                                        <div 
                                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                                                prose-headings:text-gray-800 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                                                prose-h3:text-xl prose-h3:text-gray-700
                                                prose-p:mb-4 prose-p:leading-relaxed
                                                prose-strong:text-gray-800"
                                            dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
                                        />

                                        <div className="mt-10 pt-6 border-t border-gray-200">
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-sm text-gray-500">Share:</span>
                                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferer" className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                                                        <FaFacebook />
                                                    </a>
                                                    <a href="https://x.com" target="_blank" rel="noopener noreferer" className="p-2 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-100 transition-colors">
                                                        <FaTwitter />
                                                    </a>
                                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferer" className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors">
                                                        <FaLinkedin />
                                                    </a>
                                                    <a className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                                                        <FaLink />
                                                    </a>
                                                </div>
                                                
                                                <div className="flex items-center space-x-3">
                                                    <button className="flex items-center px-4 py-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 transition-colors">
                                                        <FaHeart className="mr-2" />
                                                        Like
                                                    </button>
                                                    <button className="flex items-center px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full hover:bg-yellow-100 transition-colors">
                                                        <FaBookmark className="mr-2" />
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-200">
                                            <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {blogPosts
                                                    .filter(p => p.id !== selectedArticle.id && p.category === selectedArticle.category)
                                                    .slice(0, 2)
                                                    .map((relatedPost, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                setSelectedArticle(relatedPost);
                                                            }}
                                                            className="text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                                                        >
                                                            <span className={`text-xs font-bold ${getColorClasses(relatedPost.color).text}`}>
                                                                {relatedPost.category}
                                                            </span>
                                                            <h4 className="font-bold mt-1 group-hover:text-blue-600 transition line-clamp-2">
                                                                {relatedPost.title}
                                                            </h4>
                                                            <span className="text-xs text-gray-400 mt-2 block">
                                                                {relatedPost.readTime}
                                                            </span>
                                                        </button>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Insights;