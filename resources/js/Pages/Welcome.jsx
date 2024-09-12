import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // Menu Icon

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Testimonial
    const testimonials = [
        {
            icon: "bx bxs-group",
            text: "I feel more knowledgeable and empowered.",
            image: "https://i.ibb.co/DtGzSt4/profile-bg.jpg", // Placeholder for user image
            name: "Peace D.",
            role: "Administrator",
        },
        {
            icon: "bx bxs-quote-alt-left",
            text: "This platform revolutionized our learning.",
            image: "https://i.ibb.co/tXfdWyb/person-1.png",
            name: "Ryan M.",
            role: "Tech Enthusiast",
        },
        {
            icon: "bx bxs-quote-alt-right",
            text: "Education is my passion.",
            image: "https://i.ibb.co/stztN5J/about.jpg",
            name: "Emily L.",
            role: "Educator",
        },
        {
            icon: "bx bxs-quote-alt-right",
            text: "Knowledge is power. I feel more confident!",
            image: "https://i.ibb.co/F3grNV8/hero-2.png",
            name: "Oliver R.",
            role: "Academic Coordinator",
        },
    ];

    // Featured Courses

    const courses = [
        {
            title: "Web Development Basics",
            description:
                "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
            image: "https://i.ibb.co/CJbg6wz/secure-coding.png", // Placeholder for course image
        },
        {
            title: "Data Science Essentials",
            description:
                "Explore the key concepts and techniques in data science and machine learning.",
            image: "https://i.ibb.co/yh9x0CR/network-defense.png",
        },
        {
            title: "Digital Marketing",
            description:
                "Master the skills needed to create and execute effective digital marketing campaigns.",
            image: "https://i.ibb.co/2jsSfwm/digital-marketing-1433427-1280.jpg",
        },
    ];

    // Event/News Data
    const eventsData = [
        {
            title: "AI Conference 2023",
            description:
                "Join us for the AI Conference 2023 to explore the latest advancements in artificial intelligence.",
            date: "June 15, 2023",
            imageUrl: "https://i.ibb.co/tQtGFdn/hero-4.png",
        },
        {
            title: "Cybersecurity Workshop",
            description:
                "Enhance your cybersecurity skills with our hands-on workshop. Limited spots available!",
            date: "July 10, 2023",
            imageUrl: "https://i.ibb.co/Kwz9m97/cybersecurity-intro.png",
        },
        {
            title: "Techrave Hackathon",
            description:
                "Participate in our annual hackathon and showcase your innovative tech solutions.",
            date: "August 22, 2023",
            imageUrl: "https://i.ibb.co/f19w5Vm/pen-testing.png",
        },
        // {
        //     title: "Cloud Computing Symposium",
        //     description:
        //         "Discuss the future of cloud computing with industry experts.",
        //     date: "September 12, 2023",
        //     imageUrl: "/path/to/image4.jpg",
        // },
        // {
        //     title: "Quantum Computing Workshop",
        //     description:
        //         "Dive into the world of quantum computing with this introductory workshop.",
        //     date: "October 5, 2023",
        //     imageUrl: "/path/to/image5.jpg",
        // },
        // {
        //     title: "IoT Innovations",
        //     description:
        //         "Explore the latest innovations in the Internet of Things (IoT) at this exclusive event.",
        //     date: "November 18, 2023",
        //     imageUrl: "/path/to/image6.jpg",
        // },
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="relative bg-gray-50 min-h-screen">
                {/* Background Image */}
                <img
                    alt="Background Decoration"
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />

                {/* Main Content Container */}
                <div className="relative flex flex-col items-center justify-center min-h-screen px-4 lg:px-8 selection:bg-[#FF2D20] selection:text-white">
                    <div className="w-full max-w-7xl">
                        {/* Top Bar */}
                        <div className="text-center text-white font-extrabold text-lg md:text-xl">
                            <div className="bg-gradient-to-r from-[#FF2D20] to-gray-50 py-3 px-4 rounded-sm shadow-lg text-white">
                                Register for free access!
                            </div>
                        </div>

                        {/* Header */}
                        <header className="flex justify-between items-start text-black py-4 px-4 md:px-8 lg:px-16 bg-white drop-shadow-md relative z-20">
                            {/* Logo and Menu Icon Container */}
                            <div className="flex items-center justify-between w-full">
                                {/* Logo */}
                                <a href="#" className="flex items-center">
                                    <img
                                        className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56  hover:scale-105 transition-all "
                                        src="https://i.ibb.co/Q92M4Vk/Techrave-logo.png"
                                    />
                                </a>

                                {/* Desktop Navigation */}
                                <nav className="hidden xl:flex items-center gap-12 font-semibold text-base">
                                    {auth.user ? (
                                        <Link
                                            href={route("dashboard")}
                                            className="px-4 py-2 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-300"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="px-4 py-2 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-300"
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                href={route("login")}
                                                className="px-4 py-2 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-300"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="px-4 py-2 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-300"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </nav>

                                {/* Desktop Login Button */}
                                <div className="hidden md:flex justify-center items-start ml-4">
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus:ring-2 focus:ring-[#FF2D20]"
                                    >
                                        <button className="flex items-center gap-1 px-4 py-1.5 text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent transition-colors duration-300">
                                            Login
                                            <svg
                                                className="w-6 h-6 stroke-current group-hover:text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                                />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>

                                {/* Mobile Menu Icon */}
                                <button
                                    className="xl:hidden block text-4xl sm:text-5xl lg:text-6xl cursor-pointer focus:outline-none"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    aria-label="Toggle Menu"
                                >
                                    <i className="bx bx-menu"></i>
                                </button>
                            </div>

                            {/* Mobile Navigation Menu */}
                            <div
                                className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-opacity duration-300 ${
                                    isMenuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-4 pointer-events-none"
                                }`}
                            >
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="w-full text-center py-3 hover:bg-red-400 hover:text-white transition-colors duration-300"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="w-full text-center py-3 hover:bg-red-400 hover:text-white transition-colors duration-300"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            href={route("login")}
                                            className="w-full text-center py-3 hover:bg-red-400 hover:text-white transition-colors duration-300"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="w-full text-center py-3 hover:bg-red-400 hover:text-white transition-colors duration-300"
                                        >
                                            Register
                                        </Link>
                                        <Link
                                            href={route("login")}
                                            className="w-full flex justify-center items-center text-center py-3 md:hidden hover:bg-red-400 hover:text-white transition-colors duration-300"
                                        >
                                            <button className="flex items-center justify-center gap-1 px-4 text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent transition-colors duration-300">
                                                Login
                                                <svg
                                                    className="w-6 h-6 stroke-current group-hover:text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                                    />
                                                </svg>
                                            </button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </header>

                        <main className="">
                            {/* Hero Section */}
                            <div className="relative  bg-white dark:bg-gray-900 h-[500px] flex flex-col items-center justify-center py-12">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url(https://i.ibb.co/JKD8yGf/hero-1.png)",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black opacity-50"></div>
                                </div>

                                <div className="relative z-10 max-w-3xl text-center text-white">
                                    <h1 className="text-4xl md:text-6xl font-extrabold">
                                        Welcome to Techrave
                                    </h1>
                                    <p className="mt-4 p-2 text-lg md:text-xl">
                                        Empowering Your Digital Experience with
                                        Cutting-Edge Technology Solutions.
                                    </p>
                                    <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                                        <Link
                                            href={route("register")}
                                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                                        >
                                            <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
                                                Get Started
                                                <i className="bx bx-right-arrow-alt text-lg sm:text-xl md:text-2xl"></i>
                                            </button>
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                                        >
                                            <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold rounded-full flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
                                                Learn More
                                                <i className="bx bx-info-circle text-lg sm:text-xl md:text-2xl"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Section */}
                            <div className="bg-red-100 py-8 px-4 md:px-8 lg:px-16">
                                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Professional Development */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="text-4xl text-gray-700 mb-4">
                                            {/* Gear Icon (bx-cog) */}
                                            <i className="bx bx-cog"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            Professional Development
                                        </h3>
                                        <p className="text-gray-600">
                                            Discover cutting-edge courses and
                                            advance your career.
                                        </p>
                                    </div>

                                    {/* Time Management */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="text-4xl text-gray-700 mb-4">
                                            {/* Clock Icon (bx-time) */}
                                            <i className="bx bx-time"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            Time Management
                                        </h3>
                                        <p className="text-gray-600">
                                            Master time allocation and increase
                                            productivity.
                                        </p>
                                    </div>

                                    {/* Innovation */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="text-4xl text-gray-700 mb-4">
                                            {/* Lightbulb Icon (bx-bulb) */}
                                            <i className="bx bx-bulb"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            Innovation
                                        </h3>
                                        <p className="text-gray-600">
                                            Stay ahead with innovative
                                            strategies and solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Testimonials Section */}
                            <div className="bg-red-100 py-8 px-4 md:px-8 lg:px-16">
                                <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
                                    Join Techrave community and connect with
                                    like-minded students
                                </h2>
                                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
                                        >
                                            <div className="text-4xl text-gray-700 mb-4">
                                                <i
                                                    className={testimonial.icon}
                                                ></i>
                                            </div>
                                            <p className="text-gray-800 text-center mb-4">
                                                {testimonial.text}
                                            </p>
                                            <div className="flex items-center mt-auto">
                                                <img
                                                    src={testimonial.image}
                                                    alt="User"
                                                    className="w-10 h-10 rounded-full mr-4"
                                                />
                                                <div>
                                                    <p className="text-gray-900 font-bold">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-gray-600 text-sm">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/*  Courses Section  */}
                            <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
                                <h2 className="text-left text-2xl font-bold text-gray-800 mb-8">
                                    Featured Courses
                                </h2>
                                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {courses.map((course, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-md rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-6">
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {course.title}
                                                </h3>
                                                <p className="text-gray-700 mt-2">
                                                    {course.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

{/* why choose us  */}
<div className="flex flex-col md:flex-row items-center md:items-start py-12 md:px-8 bg-gray-50">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-left p-8">
                <h3 className="text-sm text-red-600 font-semibold">Why Choose Us?</h3>
                <h2 className="mt-2 text-3xl font-bold text-gray-800">Benefits Of Learning From Zilom</h2>
                <p className="mt-4 text-gray-600">
                    There are many reasons to learn with Zilom. Find out more below.
                    Whether you are a new learner or looking to advance your skills,
                    Zilom is the perfect platform for your journey.
                </p>
                <ul className="mt-6 space-y-4 text-gray-600">
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10S17.52 2 12 2z"></path>
                        </svg>
                        <span className="ml-3">Start learning from our experts and enhance your skills.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10S17.52 2 12 2z"></path>
                        </svg>
                        <span className="ml-3">Making the first move can be the hardest.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10S17.52 2 12 2z"></path>
                        </svg>
                        <span className="ml-3">Learn at your own pace and on your own schedule.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10S17.52 2 12 2z"></path>
                        </svg>
                        <span className="ml-3">If you are going to use a passage of Lorem Ipsum.</span>
                    </li>
                </ul>
            </div>

            {/* Right Image with Animation */}
            <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
                <img 
                    src="https://i.ibb.co/tQtGFdn/hero-4.png" 
                    alt="Benefits of Learning"
                    className="w-full h-auto max-w-[932px] max-h-[550px] object-cover rounded-lg shadow-lg transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-2"
                />
            </div>
        </div>


                            {/* Event/News Section */}
                            <div className="w-full max-w-5xl mx-auto mt-8">
                            <h2 className="text-left text-2xl font-bold text-gray-800 mb-8">
                                    News & Event
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {eventsData.map((event, index) => (
                                        <div
                                            key={index}
                                            className="w-full sm:w-[48%] md:w-[30%] p-2"
                                        >
                                            <div className="p-4 bg-red-100 rounded-lg shadow-lg">
                                                <div className="p-4 bg-white rounded-lg shadow-lg">
                                                    <img
                                                        src={event.imageUrl}
                                                        alt={event.title}
                                                        className="w-full h-48 object-cover rounded-lg"
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <h3 className="text-xl font-semibold">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-gray-600 mt-2 text-sm">
                                                        {event.description}
                                                    </p>
                                                    <p className="text-gray-400 mt-2 text-xs">
                                                        {event.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="py-12 bg-gray-50">
            <div className="text-center">
                <h3 className="text-sm text-red-600 font-semibold">Directly from the Blog</h3>
                <h2 className="mt-2 text-3xl font-bold text-gray-800">Latest Tech Articles</h2>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                {/* Article 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs md:max-w-sm transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="bg-gray-300 h-48 flex items-center justify-center">
                        <img src="https://i.ibb.co/tQtGFdn/hero-4.png" alt="Tech Image 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 7h10M7 12h10m-6 5h6M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path>
                                </svg>
                                <span className="ml-1">30 Aug</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 7h10M7 12h10m-6 5h6M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path>
                                </svg>
                                <span className="ml-1">Admin</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 7v13H3V7h18zM3 5h18V4a1 1 0 00-1-1H4a1 1 0 00-1 1v1zm18 2v13H3V7h18zm-9 11h-2v-5h2v5z"></path>
                                </svg>
                                <span className="ml-1">Comments</span>
                            </div>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-800">The Future of AI in Tech</h3>
                        <p className="mt-2 text-gray-600">Exploring how AI is revolutionizing the tech industry and what to expect in the coming years.</p>
                    </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs md:max-w-sm transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="bg-gray-300 h-48 flex items-center justify-center">
                        <img src="https://i.ibb.co/tQtGFdn/hero-4.png" alt="Tech Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 7h10M7 12h10m-6 5h6M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path>
                                </svg>
                                <span className="ml-1">28 Aug</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 7h10M7 12h10m-6 5h6M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path>
                                </svg>
                                <span className="ml-1">Admin</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 7v13H3V7h18zM3 5h18V4a1 1 0 00-1-1H4a1 1 0 00-1 1v1zm18 2v13H3V7h18zm-9 11h-2v-5h2v5z"></path>
                                </svg>
                                <span className="ml-1">Comments</span>
                            </div>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-800">Understanding Quantum Computing</h3>
                        <p className="mt-2 text-gray-600">A beginner's guide to the world of quantum computing and its potential to change technology.</p>
                    </div>
                </div>

                {/* Article 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs md:max-w-sm transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="bg-gray-300 h-48 flex items-center justify-center">
                        <img src="https://i.ibb.co/tQtGFdn/hero-4.png" alt="Tech Image 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 7h10M7 12h10m-6 5h6M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path>
                                </svg>
                                <span className="ml-1">25 Aug</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 7h10M7 12h10m-6 5h6M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path>
                                </svg>
                                <span className="ml-1">Admin</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 7v13H3V7h18zM3 5h18V4a1 1 0 00-1-1H4a1 1 0 00-1 1v1zm18 2v13H3V7h18zm-9 11h-2v-5h2v5z"></path>
                                </svg>
                                <span className="ml-1">Comments</span>
                            </div>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-800">The Impact of 5G on IoT</h3>
                        <p className="mt-2 text-gray-600">How 5G technology is transforming the Internet of Things (IoT) and its applications.</p>
                    </div>
                </div>
            </div>
        </div>
                        </main>

                        {/* Footer Section */}
                        <footer className="bg-gray-100 py-8 mt-12 shadow-md">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-wrap justify-between items-start">
                                    {/* Connect With Us Section */}
                                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                                        <h3 className="text-lg font-semibold mb-4">
                                            Connect With Us
                                        </h3>
                                        <div className="flex space-x-4">
                                            <a
                                                href="#"
                                                aria-label="Facebook"
                                                className="text-gray-600 hover:text-gray-900"
                                            >
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                            <a
                                                href="#"
                                                aria-label="Twitter"
                                                className="text-gray-600 hover:text-gray-900"
                                            >
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                            <a
                                                href="#"
                                                aria-label="LinkedIn"
                                                className="text-gray-600 hover:text-gray-900"
                                            >
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                            <a
                                                href="#"
                                                aria-label="Instagram"
                                                className="text-gray-600 hover:text-gray-900"
                                            >
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Contact Information Section */}
                                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
                                        <h3 className="text-lg font-semibold mb-4">
                                            Contact Information
                                        </h3>
                                        <p>
                                            123 Techrave Avenue, Suite 100
                                            <br />
                                            San Francisco, CA 94102
                                        </p>
                                        <p className="mt-2">
                                            Email:{" "}
                                            <a
                                                href="mailto:info@techrave.com"
                                                className="text-blue-600 hover:underline"
                                            >
                                                info@techrave.com
                                            </a>
                                            <br />
                                            Phone: (123) 456-7890
                                        </p>
                                    </div>

                                    {/* Additional Resources Section */}
                                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-right">
                                        <h3 className="text-lg font-semibold mb-4">
                                            Additional Resources
                                        </h3>
                                        <ul>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li className="mt-2">
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Terms of Service
                                                </a>
                                            </li>
                                            <li className="mt-2">
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    FAQs
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
