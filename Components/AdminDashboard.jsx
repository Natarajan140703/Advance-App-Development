

import React, { useState } from 'react';
// import './AdminDashboard.css'; 
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';

const AdminDashboard = () => {
  // Sample data for statistical information
  const data = [
    { name: 'Jan', users: 400, events: 240 },
    { name: 'Feb', users: 300, events: 456 },
    { name: 'Mar', users: 500, events: 980 },
    { name: 'Apr', users: 600, events: 760 },
    { name: 'May', users: 800, events: 900 },
    { name: 'Jun', users: 700, events: 600 }
  ];

  // State variable to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-profile">
        {/* Your admin profile details */}
        <h2>Admin Profile</h2>
        <p>Name: Admin</p>
        <p>Email: admin@example.com</p>
        {/* Add any other profile details here */}
      </div>
      {isSidebarOpen && <Sidebar />}
      <div className="main-content">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
        <h2>Admin Dashboard</h2>
        <div className="charts-container">
          <div className="bar-chart">
            <h3>Events vs Users</h3>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="events" fill="#8884d8" />
              <Bar dataKey="users" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="line-chart">
            <h3>Events Over Time</h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="events" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href='adminProfile'>Myself</a></li>
        <li><a href='/admindash'>Dashboard</a></li>
        <li><a href='/appointments'>Users</a></li>
        <li><a href='/appointments'>Events</a></li>
        <li><a href='/appointments'>Settings</a></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;