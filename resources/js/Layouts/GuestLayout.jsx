import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
            <div className='py-4'>
                <Link href="/">
                    <ApplicationLogo className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-48 transform transition-transform duration-300 hover:scale-105" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                {children}
            </div>
        </div>
    );
}
