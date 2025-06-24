import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 text-slate-100 px-4">
    <h1 className="text-7xl font-extrabold mb-4 text-blue-400 drop-shadow-lg">
      404
    </h1>
    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Page Not Found</h2>
    <p className="mb-8 text-lg text-slate-300 text-center max-w-md">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg shadow transition-colors"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
