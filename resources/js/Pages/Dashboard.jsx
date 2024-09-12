import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-600 leading-tight">Student Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Welcome Message */}
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg transform hover:scale-105 transition duration-300">
                            <div className="p-6 text-gray-800">
                                <h3 className="text-lg font-semibold text-red-600 mb-2">Welcome, {auth.user.name}!</h3>
                                <p className="text-sm text-gray-600">
                                    Ready to start learning? Explore your courses, track your progress, and stay updated with the latest announcements.
                                </p>
                            </div>
                        </div>

                        {/* Latest Articles */}
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg transform hover:scale-105 transition duration-300">
                            <div className="p-6">
                                <h4 className="font-semibold text-red-600 mb-2">Latest Tech Articles</h4>
                                <div className="space-y-4">
                                    <a href="#" className="block flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-md transition duration-200">
                                        <img src="path-to-thumbnail" alt="Article" className="w-16 h-16 object-cover rounded-md"/>
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-700">The Future of AI in Education</h5>
                                            <p className="text-xs text-gray-500">20 June, Admin</p>
                                        </div>
                                    </a>
                                    <a href="#" className="block flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-md transition duration-200">
                                        <img src="path-to-thumbnail" alt="Article" className="w-16 h-16 object-cover rounded-md"/>
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-700">5 Web Technologies to Watch in 2024</h5>
                                            <p className="text-xs text-gray-500">18 June, Admin</p>
                                        </div>
                                    </a>
                                    <a href="#" className="block flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-md transition duration-200">
                                        <img src="path-to-thumbnail" alt="Article" className="w-16 h-16 object-cover rounded-md"/>
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-700">Cybersecurity Tips for Students</h5>
                                            <p className="text-xs text-gray-500">15 June, Admin</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Course Progress */}
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg transform hover:scale-105 transition duration-300">
                            <div className="p-6">
                                <h4 className="font-semibold text-red-600 mb-2">Your Course Progress</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-700">Web Development Bootcamp</span>
                                        <span className="text-sm font-semibold text-gray-600">80%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-sm text-gray-700">Cybersecurity Basics</span>
                                        <span className="text-sm font-semibold text-gray-600">50%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-sm text-gray-700">UI/UX Design Principles</span>
                                        <span className="text-sm font-semibold text-gray-600">30%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Announcements */}
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg transform hover:scale-105 transition duration-300">
                            <div className="p-6">
                                <h4 className="font-semibold text-red-600 mb-2">Latest Announcements</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    <li>New course materials have been added for Web Development Bootcamp.</li>
                                    <li>Next Cybersecurity exam will be held on 25th September.</li>
                                    <li>Join the upcoming webinar on Advanced JavaScript Techniques.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg transform hover:scale-105 transition duration-300">
                            <div className="p-6">
                                <h4 className="font-semibold text-red-600 mb-2">Upcoming Events</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    <li>26 June: React Native Workshop</li>
                                    <li>30 June: AI in Education Seminar</li>
                                    <li>10 July: Hackathon 2024</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-100 mt-6 p-4 text-center text-sm text-gray-600">
                    <div className="flex justify-center space-x-4">
                        <a href="/about" className="hover:text-red-600 transition duration-200">About Us</a>
                        <a href="/contact" className="hover:text-red-600 transition duration-200">Contact</a>
                        <a href="/privacy" className="hover:text-red-600 transition duration-200">Privacy Policy</a>
                    </div>
                    <p className="mt-4">&copy; 2024 TechRave. All rights reserved.</p>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
