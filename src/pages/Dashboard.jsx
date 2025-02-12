import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import NewsDashboard from "../components/NewsDashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Banner message="Latest News" cta="Read More" />
      <Navbar />
      <div className="flex flex-grow pt-16">
        <Sidebar />
        <div className="flex-grow ml-64">
          <NewsDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
