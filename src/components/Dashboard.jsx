import { useState } from 'react';
import AppHeader from './AppHeader';
import StatusCards from './StatusCards';
import ApplicationsTable from './ApplicationsTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All Applications');

  return (
    <div className="max-w-full md:max-w-6xl mx-auto px-4 sm:px-6 py-6 relative">
      <div className="watermark">
        <img src="/union.svg" alt="Watermark" />
      </div>
      <AppHeader />
      <StatusCards activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="my-8"></div>
      <ApplicationsTable activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;
