import { useState } from 'react';
import Sidebar from './SideNavbar';
import DocumentHeader from './DocumentUploadScreenHeader';
import TabsSection from './DocumentUploadScreenTabsSection';
import DocumentUploadScreenTable from './DocumentuploadScreenTable';

const DocumentUploadScreen = () => {
  const [activeTab, setActiveTab] = useState('All Applications');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F2F7FF] relative overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 w-full max-w-[240px]`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 relative z-10 px-4 sm:px-6 py-6 max-w-full md:max-w-6xl mx-auto">
        <DocumentHeader />
        {/* Tabs */}
        <div className="flex-1 relative z-10 px-4 sm:px-6 py-6 max-w-full md:max-w-6xl mx-auto">
          <TabsSection />
          {/* Table */}
          <div className="flex-1 relative z-10 px-4 sm:px-6 py-6 max-w-full md:max-w-6xl mx-auto">
            <DocumentUploadScreenTable activeTab={activeTab} />
          </div>
        </div>
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

export default DocumentUploadScreen;
