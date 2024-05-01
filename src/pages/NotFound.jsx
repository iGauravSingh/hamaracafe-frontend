import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
        </div>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;