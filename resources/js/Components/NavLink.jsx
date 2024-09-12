import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-gray-900 focus:border-red-700 '
                    : 'border-transparent text-red-500 hover:text-red-700 hover:border-red-300 focus:text-red-700 focus:border-red-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
