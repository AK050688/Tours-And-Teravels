import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens or session storage here
    // localStorage.removeItem('token'); // Example
    // Redirect to login or home
    navigate('/login');
  };

  return (
    <aside className="w-64 h-screen flex shadow flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold mb-8  text-blue-400 text-center">Begin Yatar</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            Dashboard
          </Link>
          <Link to="/leads" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            My Leads
          </Link>
          <Link to="/plans" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            Plans
          </Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 border-red-600 border hover:bg-red-700 text-red-500 px-4 py-2 hover:text-white rounded transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
