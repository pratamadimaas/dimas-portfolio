import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Calendar, User, ArrowLeft } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Sports Field Booking Application (Laravel)",
        description: "A Laravel-based booking platform that enables tenants to reserve sports fields and administrators to manage bookings with secure payment verification.",
        image: "/projects/11.png",
        tags: ["Laravel", "PHP", "JavaScript", "TailwindCSS", "MySQL"],
        publishedAt: "2025-08-01",
        summary: "A Laravel-based booking platform that enables tenants to reserve sports fields and administrators to manage bookings with secure payment verification.",
        images: ["/images/11.png", "/images/12.png", "/images/13.png", "/images/14.png"],
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Full-Stack Developer",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/in/pratamadimaas/"
        }],
        liveLink: "https://yourservicedeskapp.com",
        githubUrl: "#",
        content: {
            overview: "The Sports Field Booking Application is a web-based platform designed to streamline sports facility reservations. It provides a seamless booking experience for tenants while equipping administrators with powerful tools to manage schedules, verify payments, and reduce manual work. The application follows a clean MVC architecture in Laravel, ensuring a scalable, reliable, and user-friendly system.",
            keyFeatures: [
                "Easy Booking for Tenants: Browse available fields, select dates and times, and make reservations in just a few clicks.",
                "Admin Dashboard: Field owners can track, approve, or reject bookings through a centralized interface.",
                "Role-Based Access: Separate experiences for tenants (end-users) and administrators (field managers).",
                "Manual Bank Transfer Verification: Tenants upload payment proof, and admins validate before confirming bookings.",
                "Responsive Design: Mobile-friendly UI built with Bootstrap 5, making it accessible on any device.",
                "Real-Time Status Updates: Tenants receive immediate notifications when their booking is confirmed or declined."
            ],
            technologies: [
                "Laravel (PHP 8.2) for business logic and authentication",
                "Bootstrap 5 for responsive and consistent UI",
                "MySQL for storing booking and user data",
                "Laragon (Apache/Nginx, MySQL, PHP) for local development"
            ],
            challenges: "One of the main challenges was ensuring clear separation between tenant and admin experiences. This was solved with role-based authentication and a carefully designed UI that prioritizes simplicity for tenants and control for admins. Another challenge was building a smooth manual payment verification process. By integrating payment proof uploads and providing admins with a dedicated verification panel, the application ensures secure and transparent transactions.",
            workflow: [
                "Tenant Booking: Tenants choose a field, date, and time slot, then submit a booking.",
                "Payment Upload: Tenants transfer payment manually and upload proof to the system.",
                "Admin Verification: Administrators review and validate payment evidence.",
                "Confirmation: Tenants receive instant updates once the booking is approved."
            ],
            outcome: "The application delivers convenience for tenants by simplifying the booking process and reducing miscommunication, and efficiency for admins with centralized tools for managing schedules and payments. Overall, the platform improves transparency, ensures reliable financial verification, and provides a modern digital solution for sports field management."
        }
    },
    {
        id: 2,
        title: "Warehouse Management System with Angular and Laravel",
        description: "A warehouse management system built with Angular and Laravel to efficiently manage products, categories, suppliers, and stock movements in real time.",
        image: "/images/2.png",
        tags: ["TypeScript", "Angular", "Laravel", "MySQL", "Tailwind CSS"],
        publishedAt: "2024-08-13",
        summary: "A warehouse management system built with Angular and Laravel to efficiently manage products, categories, suppliers, and stock movements in real time.",
        images: ["/images/2.png"],
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Full-Stack Developer",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/in/pratamadimaas/"
        }],
        liveLink: "https://example.com/",
        githubUrl: "#",
        content: {
            overview: "This project is a Warehouse Management System (WMS) designed to handle inventory, categories, suppliers, and stock movements in a seamless and organized way. Built with Angular for the front end and Laravel for the backend, it provides real-time updates and an intuitive dashboard for warehouse operations. The interface offers quick access to essential metrics such as the total number of products, categories, suppliers, and low-stock alerts, allowing warehouse staff to make informed decisions quickly.",
            keyFeatures: [
                "Dashboard Overview: Real-time statistics on total products, categories, suppliers, and low-stock items.",
                "Product Management: Add, edit, delete, and search products with support for categorization.",
                "Category Management: Organize products into categories for easier tracking.",
                "Supplier Management: Maintain supplier information for procurement and restocking.",
                "Stock Movement Tracking: Record and monitor incoming and outgoing stock.",
                "Low Stock Alerts: Automatic notifications for items that require restocking."
            ],
            technologies: [
                "Angular for building a responsive and interactive front end",
                "Laravel for backend logic, API development, and authentication",
                "MySQL for storing structured inventory and transaction data",
                "Bootstrap for consistent and responsive UI design",
                "JWT Authentication for secure login and role-based access"
            ],
            challenges: "One challenge was designing a UI that remains simple for warehouse staff while providing powerful inventory management capabilities. We also had to optimize API calls to ensure that real-time updates did not overload the system. By leveraging Angular's reactive features and Laravel's efficient backend structure, we were able to maintain fast performance even with large datasets.",
            outcome: "The system improved warehouse efficiency by centralizing product, category, and supplier data while providing accurate and real-time stock tracking. The low-stock alert feature reduced the risk of stockouts, and the intuitive dashboard streamlined daily warehouse operations."
        }
    },
    {
        id: 3,
        title: "Intrinsic Value Analyzer Stock Fair Value Calculator with Fundamental Insights",
        description: "An interactive calculator that helps retail investors analyze the fair value of a stock by comparing a target company's financial ratios with its sector average.",
        image: "/projects/15.png",
        tags: ["Python", "Streamlit", "Pandas", "Plotly", "XlsxWriter"],
        publishedAt: "2025-08-13",
        summary: "An interactive calculator that helps retail investors analyze the fair value of a stock by comparing a target company's financial ratios with its sector average.",
        images: ["/images/3.png", "/images/15.png", "/images/16.png", "/images/17.png"],
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Data & Financial Analyst",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/in/pratamadimaas/"
        }],
        liveLink: "https://fairval.streamlit.app/",
        githubUrl: "#",
        content: {
            overview: "This project is an interactive calculator I developed to simplify the process of fundamental stock analysis. The goal is to help investors, especially retail investors, determine the fair value of a stock. The calculator works by comparing a target company's key financial ratios with the average ratios of similar companies in the same sector. This approach provides investors with a more objective perspective on whether a stock is undervalued, overvalued, or at fair value.",
            keyFeatures: [
                "Excel Template & Data Upload: The application provides an easy-to-use Excel template. Users can download the template, fill in the fundamental data for their target company and comparable companies, and then upload it for processing.",
                "Automated Ratio Calculation: Automatically calculates crucial financial ratios such as P/E Ratio, P/B Ratio, Net Profit Margin, and Return on Equity (ROE) for both the target company and the sector average.",
                "Sector Comparative Analysis: Filters comparable companies based on their sector and calculates the average values for key ratios, visualized in easy-to-understand charts.",
                "Fair Value Calculation: Uses the multiplier valuation method (P/E and P/B) to estimate the stock's fair value, with results displayed in a gauge chart.",
                "Automated Investment Recommendation: Provides quick recommendations such as 'Buy', 'Hold', or 'Sell' based on analysis, with a disclaimer for further research."
            ],
            technologies: [
                "Python — Backend logic and data interaction",
                "Streamlit — Interactive web interface framework",
                "Pandas — Data processing and analysis",
                "Plotly — Interactive visualizations (bar & gauge charts)",
                "XlsxWriter — Excel template creation"
            ],
            challenges: "A major challenge was ensuring robust data validation and error handling to prevent calculation failures (e.g., division by zero). Designing an intuitive interface with Streamlit while guiding novice users to avoid misinterpretation was also key. This project improved my skills in data analysis, software engineering, and data storytelling.",
            outcome: "The calculator helps investors quickly assess a stock's intrinsic value by automating complex calculations and presenting results in a visual, easy-to-understand format. It demonstrates how financial analysis and technology can work together to empower better investment decisions."
        }
    },
    {
        id: 4,
        title: "UP TUP Smart Document Generator for Administrative Finance",
        description: "A comprehensive Python-based document generator application built with Tkinter for creating standardized UP PNBP, UP KKP, and TUP administrative documents with automated Word template processing and image integration.",
        image: "/projects/6.png",
        tags: ["Python", "Tkinter", "Python-docx", "PIL/Pillow", "OS/Shutil"],
        publishedAt: "2025-06-14",
        summary: "A comprehensive Python-based document generator application built with Tkinter for creating standardized UP PNBP, UP KKP, and TUP administrative documents with automated Word template processing and image integration.",
        images: ["/images/6.png"],
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Full-Stack Developer",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/in/pratamadimaas/"
        }],
        liveLink: "https://github.com/user/up-tup-document-generator",
        githubUrl: "#",
        content: {
            overview: "UP-TUP Document Generator is a specialized Python desktop application designed to streamline the creation of standardized administrative finance documents. Built with Tkinter for a user-friendly GUI interface, the application automates the generation of three critical document types: UP PNBP (Uang Persediaan Penerimaan Negara Bukan Pajak), UP KKP (Uang Persediaan Kartu Kredit Pemerintah), and TUP (Tambahan Uang Persediaan). The system features an intuitive tabbed interface with comprehensive form validation, automatic number formatting, image integration capabilities, and seamless Word document generation using predefined templates.",
            keyFeatures: [
                "Multi-Document Support: Generate three types of administrative documents (UP PNBP, UP KKP, TUP) from a single interface.",
                "Tabbed Interface: Clean, organized UI with separate tabs for each document type.",
                "Smart Form Validation: Comprehensive field validation with required field checking and data type validation.",
                "Automatic Number Formatting: Real-time formatting of numerical inputs with thousands separators.",
                "Currency Conversion: Automatic conversion of numerical amounts to Indonesian 'terbilang' (words) format.",
                "Image Integration: Support for multiple image uploads with automatic template insertion.",
                "Template-Based Generation: Uses pre-configured Word document templates for consistent output.",
                "File Management: Automatic directory creation and temporary file handling."
            ],
            technologies: [
                "Python: Core application logic and business rules",
                "Tkinter: Desktop GUI framework for cross-platform compatibility",
                "python-docx-template (DocxTemplate): Advanced Word document template processing",
                "python-docx: Document manipulation and image insertion capabilities",
                "PIL/Pillow: Image processing and format handling",
                "OS/Shutil: File system operations and directory management"
            ],
            challenges: "Complex Form Management: Managing multiple complex forms with dozens of fields required implementing a sophisticated widget management system with dynamic field validation and real-time formatting. Template Integration: Seamlessly integrating user data and images into pre-existing Word templates while maintaining document formatting required careful manipulation of document structure and placeholder management.",
            outcome: "The UP-TUP Document Generator successfully transformed a manual, time-intensive document creation process into an efficient, automated workflow. Key achievements include 90% time reduction in document creation, error elimination through automated validation, consistency assurance via template-based generation, and enabling non-technical staff to independently create complex financial documents."
        }
    },
    {
        id: 5,
        title: "Helpdesk Ticketing Application (Laravel)",
        description: "A comprehensive service desk application to streamline ticket management for internal teams, built with a custom Laravel backend and a responsive Bootstrap frontend.",
        image: "/projects/9.png",
        tags: ["PHP", "Laravel", "Bootstrap", "Tailwind CSS", "MySQL"],
        publishedAt: "2025-08-16",
        summary: "A comprehensive service desk application to streamline ticket management for internal teams, built with a custom Laravel backend and a responsive Bootstrap frontend.",
        images: ["/images/9.png", "/images/10.png"],
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Full-Stack Developer",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/in/your-profile/"
        }],
        liveLink: "https://yourservicedeskapp.com",
        githubUrl: "#",
        content: {
            overview: "The Service Desk Application is a custom-built platform designed to manage internal user requests and technical issues efficiently. The goal was to create a robust and user-friendly system that provides a clear and structured process for submitting, tracking, and resolving tickets. The application serves two main types of users: Users (Employees) who can submit new tickets and track the progress of their requests, and Admins & Support Staff who can manage, assign, and resolve all incoming tickets through a dedicated dashboard.",
            keyFeatures: [
                "Intuitive User Interface: A clean and simple landing page where users can easily submit tickets and monitor their status in real time.",
                "Role-Based Access Control (RBAC): User can create tickets and view the status of their own submissions, Support can view all tickets, update statuses, and assign them to team members, Admin has full system control.",
                "Comprehensive Ticket Management: Each ticket includes details such as title, description, category, priority, and current status. All changes are logged in a detailed history.",
                "Custom Authentication System: Built from scratch using Laravel's core features to ensure a lightweight and secure login/registration process.",
                "Ticket Assignment & Comments: Admins and support staff can assign tickets to specific members, while comments enable direct communication within tickets."
            ],
            technologies: [
                "Backend: PHP 8.2 & Laravel for routing, ORM (Eloquent), and backend logic",
                "Frontend: Bootstrap 5 for responsive and consistent UI design",
                "Database: MySQL for storing user data, tickets, and categories",
                "Environment: Laragon for local development with Apache/Nginx, MySQL, and PHP"
            ],
            challenges: "One of the main challenges was creating a seamless user experience that separates user-facing pages from the administrative dashboard. This required robust routing, role-based permissions, and thoughtful UI/UX design. Throughout the project, I strengthened my skills in full-stack development, authentication & authorization, and building maintainable web applications from scratch.",
            outcome: "The final application streamlines internal processes, reduces communication overhead, and improves accountability for service requests. It provides a strong foundation for expanding into more advanced internal management systems in the future."
        }
    },
    {
        id: 6,
        title: "E-Commerce Platform for UMKM: Empowering Small Businesses with Digital Sales",
        description: "A responsive e-commerce application designed to help UMKM (Usaha Mikro, Kecil, dan Menengah) showcase and sell their products online, complete with an intuitive admin dashboard and seamless checkout process.",
        image: "/projects/4.png",
        tags: ["PHP", "Laravel", "Bootstrap", "Tailwind CSS", "MySQL"],
        publishedAt: "2024-04-01",
        summary: "A responsive e-commerce application designed to help UMKM (Usaha Mikro, Kecil, dan Menengah) showcase and sell their products online, complete with an an intuitive admin dashboard and seamless checkout process.",
        images: ["/images/4.png", "/images/21.png", "/images/18.png", "/images/19.png", "/images/20.png", "/images/5.png"],
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Full-Stack Developer",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/company/pratamadimaas/"
        }],
        liveLink: "https://once-ui.com/",
        githubUrl: "#",
        content: {
            overview: "This project is an e-commerce web application built to support UMKM (Micro, Small, and Medium Enterprises) in bringing their businesses online. The platform provides a user-friendly shopping experience for customers and a powerful admin dashboard for sellers to manage their products, orders, and inventory in real-time. The main goal of this project is to help local businesses reach a broader audience, simplify the buying process, and increase sales through digital channels.",
            keyFeatures: [
                "Product Management Dashboard: Sellers can easily add, edit, and remove products, complete with images, descriptions, prices, and stock management.",
                "Responsive Design: Fully mobile-friendly layout, ensuring accessibility across all devices.",
                "Category & Search Filtering: Allows customers to quickly find products based on categories, price ranges, and keywords.",
                "Shopping Cart & Checkout: Customers can review their selected items, choose payment methods, and complete transactions seamlessly.",
                "Order Tracking: Sellers and customers can track the status of orders from purchase to delivery.",
                "WhatsApp Order Notifications: Automatic order confirmation sent to sellers or buyers via WhatsApp."
            ],
            technologies: [
                "Laravel & PHP: For robust backend logic and database management",
                "MySQL: For structured product, order, and user data storage",
                "Bootstrap: For clean, responsive UI design",
                "JavaScript (AJAX): For dynamic page updates without full page reloads",
                "WhatsApp API Integration: For real-time communication between sellers and buyers"
            ],
            challenges: "One of the main challenges was ensuring a smooth and fast checkout experience, even with varying internet speeds common in rural areas. This required optimizing database queries, image loading, and implementing caching techniques. Additionally, creating a user interface that is both simple for sellers unfamiliar with technology and modern for buyers accustomed to big e-commerce platforms was a key learning point.",
            outcome: "This project shows my capability to design, develop, and deploy end-to-end solutions tailored to specific user needs, bridging technology and local business growth."
        }
    },
    {
        id: 7,
        title: "Accounting App with MERN Stack",
        description: "A comprehensive accounting application built with the MERN stack for streamlined financial record-keeping, from general journals to financial reports.",
        images:["/images/22.png", "/images/23.png", "/images/24.png"],
        tags: ["React.js", "Express.js", "Node.js", "MongoDB"],
        image: "/images/23.png",
        publishedAt: "2025-08-23",
        summary: "A full-stack accounting application that automates financial workflows, including general journal entries, ledger management, and real-time financial reporting.",
        team: [{
            name: "Muhamad Dimas Pratama",
            role: "Full-Stack Developer",
            avatar: "/images/1.jpg",
            linkedIn: "https://www.linkedin.com/in/pratamadimaas/"
        }],
        liveLink: "https://your-accounting-app.com",
        githubUrl: "#",
        content: {
            overview: "Developed as a passion project by a PKN STAN alumnus, this accounting application leverages the power of the MERN stack to simplify and automate key financial processes. The goal is to provide a user-friendly and efficient tool for small businesses, students, and professionals to manage their books. The app ensures accurate record-keeping by automating the flow of data from journal entries to final financial statements, eliminating the risk of manual errors and saving significant time.",
            keyFeatures: [
                "General Journal: Easily record debit and credit transactions with real-time validation to ensure entries are balanced.",
                "Automatic Ledger: Transactions automatically flow from the journal to their respective ledger accounts, providing a detailed history for each account.",
                "Trial Balance: Generates an up-to-date trial balance to verify the equality of total debits and credits.",
                "Real-time Financial Reports: Automatically generates key financial statements, including the Income Statement (Laba Rugi) and Balance Sheet (Neraca).",
                "Export Functionality: Allows users to export all financial reports into Excel & PDF formats for sharing and record-keeping.",
                "Interactive Dashboards (Future Feature): Planned feature to include visual dashboards for a quick overview of financial health."
            ],
            technologies: [
                "React.js: For building a dynamic and responsive frontend UI.",
                "Express.js & Node.js: For creating a robust backend API to handle business logic and data routing.",
                "MongoDB: A NoSQL database for flexible and scalable data storage.",
                "React-Bootstrap: For pre-built UI components and a consistent design.",
                "Axios: For handling HTTP requests between the frontend and backend."
            ],
            challenges: "A key challenge was ensuring a seamless and accurate data flow from the general journal to all subsequent reports, especially maintaining the balance of debits and credits. Another challenge was designing a clean UI that simplifies complex accounting concepts for users without a strong financial background. I overcame this by implementing strong validation logic and creating a clear, intuitive user interface.",
            workflow: [
                "User records a transaction in the General Journal.",
                "The system automatically updates the corresponding Ledger accounts.",
                "The application generates an updated Trial Balance.",
                "Real-time financial reports (Income Statement and Balance Sheet) are available for viewing and export."
            ],
            outcome: "The application successfully automates the core accounting cycle, significantly reducing manual effort and potential errors. It showcases the synergy between financial knowledge and technical skills, proving that technology can effectively simplify complex financial tasks. The project is a foundation for more advanced features like budgeting, cash flow statements, and asset management."
        }
    },
];

const ProjectDetail = ({ project, onBack }) => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </button>

                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.publishedAt}
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {project.team[0].name}
                        </div>
                    </div>

                    {/* Project Title & Summary */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">{project.summary}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                        {/* Removed the GitHub button from here */}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-4xl px-4 py-12">
                {/* Images Gallery */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="rounded-lg shadow-lg w-full h-64 object-cover hover:shadow-xl transition-shadow"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Overview Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">{project.content.overview}</p>
                </div>

                {/* Key Features Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="space-y-2">
                        {project.content.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-justify">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies Detailed Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                    <ul className="space-y-2">
                        {project.content.technologies.map((tech, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{tech}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Challenges Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Challenges and Solutions</h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">{project.content.challenges}</p>
                </div>

                {/* Workflow Section (conditionally rendered) */}
                {project.content.workflow && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Usage Workflow</h2>
                        <ol className="space-y-2">
                            {project.content.workflow.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="text-muted-foreground">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {/* Outcome Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Outcome & Impact</h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">{project.content.outcome}</p>
                </div>

                {/* Team Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Team</h2>
                    <div className="flex items-center gap-4">
                        <img
                            src={project.team[0].avatar}
                            alt={project.team[0].name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold">{project.team[0].name}</h4>
                            <p className="text-sm text-muted-foreground">{project.team[0].role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    if (selectedProject) {
        return (
            <ProjectDetail
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
            />
        );
    }

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Info */}
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-110"
                                            title="View Project Details"
                                        >
                                            <ExternalLink size={20} />
                                        </button>
                                        {/* Removed the individual GitHub button from here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Link replaced with TikTok instruction */}
                <div className="text-center mt-12">
                    <p className="text-xl font-semibold mb-4 text-center">
                        Want to see the code?
                    </p>
                    <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-4">
                        For access to my GitHub repositories, please send me a DM on TikTok!
                    </p>
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/@codewithdims15"
                    >
                        DM me on TikTok <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .cosmic-button {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                }

                .cosmic-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};
