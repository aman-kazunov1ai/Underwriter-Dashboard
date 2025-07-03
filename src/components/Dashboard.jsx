import { useState } from 'react';
import AppHeader from './AppHeader';
import StatusCards from './StatusCards';
import ApplicationsTable from './ApplicationsTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All Applications');

  return (
    <div className="max-w-full md:max-w-6xl mx-auto px-4 sm:px-6 py-6 relative">
      <AppHeader />
      <StatusCards activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="my-8"></div>
      <ApplicationsTable activeTab={activeTab} />

      {/* Watermark */}
      <img
        src="/Union.svg"
        alt="Watermark"
        className="fixed bottom-0 right-0 w-64 sm:w-80 opacity-20 pointer-events-none select-none z-0"
      />
    </div>
  );
};

export default Dashboard;
