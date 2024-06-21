import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UnauthorizedAdminAffiliate = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/signin')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-4 bg-white shadow-lg rounded-lg">
                <h1 className="text-xl font-bold text-red-500">Unauthorized Access</h1>
                <p className="text-gray-700 mt-2 mb-4">You do not have permission to view this page.</p>
                <div className=' flex gap-2'>
                <a href='https://hamaracafe.com/' className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">
                    Go Home
                </a>
                <Link to='/adminlogin' className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">
                    Admin Login
                </Link>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedAdminAffiliate;