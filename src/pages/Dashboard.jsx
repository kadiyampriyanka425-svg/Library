import React from "react";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Total Books</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">50</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Issued Books</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">30</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Returned Books</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">20</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;