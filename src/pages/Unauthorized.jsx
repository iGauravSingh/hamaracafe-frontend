import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/signin')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-4 bg-white shadow-lg rounded-lg">
                <h1 className="text-xl font-bold text-red-500">Unauthorized Access</h1>
                <p className="text-gray-700 mt-2">You do not have permission to view this page.</p>
                <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default Unauthorized;