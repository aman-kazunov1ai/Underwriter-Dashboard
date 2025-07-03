import { useState } from 'react';
import AppHeader from './AppHeader';
import StatusCards from './StatusCards';
import ApplicationsTable from './ApplicationsTable';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All Applications');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F3F5F9] relative overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out lg:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-full max-w-[240px]`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10 px-4 sm:px-6 py-6 max-w-full md:max-w-6xl mx-auto">
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden mb-4 text-blue-600 font-semibold"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰ Menu
        </button>

        <AppHeader />
        <StatusCards activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="my-8"></div>
        <ApplicationsTable activeTab={activeTab} />
      </div>

      {/* Watermark */}
      <img
        src="/watermark.svg"
        alt="Watermark"
        className="fixed bottom-0 right-0 w-64 sm:w-80 opacity-20 pointer-events-none select-none z-0"
      />
    </div>
  );
};

export default Dashboard;
