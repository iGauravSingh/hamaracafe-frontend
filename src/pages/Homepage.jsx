import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Hamaracafe Control Pannel</h1>
      <h1 className="text-4xl font-bold mb-8 text-red-500 hover:text-red-800"><a href="https://hamaracafe.com/">HOMEPAGE</a></h1>
      <div className="flex flex-col space-y-4">
        <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/adminlogin" className="btn">Admin Login</Link>
        <Link to="/job" className="btn">Job</Link>
        <Link to="/franchisesignin" className="btn">Franchise Login</Link>
        <Link to="/franchisesignup" className="btn">Franchise Signup</Link>

      </div>
    </div>
  );
};

export default Homepage;