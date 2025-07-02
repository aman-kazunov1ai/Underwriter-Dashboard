import AppHeader from './AppHeader';
import StatusCards from './StatusCards';
import ApplicationsTable from './ApplicationsTable';

const Dashboard = () => (
  <div className="max-w-6xl mx-auto p-6 relative">
    <div className="watermark">
      <img src="/union.svg" alt="Watermark" />
    </div>
    <AppHeader />
    <StatusCards />
    <div className="border-t border-gray-200 my-6"></div>
    <ApplicationsTable />
  </div>
);

export default Dashboard;