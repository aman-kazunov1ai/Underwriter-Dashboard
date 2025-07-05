import { useState } from 'react';

const tabs = [
  'Documents Uploaded',
  'Proposal form',
  'Telemedicine',
  'Diagnostics',
  'AI Conclusion',
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('Documents Uploaded');

  return (
    <div className="flex flex-row items-start gap-[24px] w-[672px] h-[30px] border-b border-[#534B6840] mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex flex-col items-center justify-end px-2 ${
            activeTab === tab ? 'gap-[7px] h-[29px]' : 'pb-2 h-[30px]'
          }`}
        >
          <span
            className={`text-[16px] leading-[22px] font-['Inter'] ${
              activeTab === tab
                ? 'text-[#0463FF] font-medium'
                : 'text-[#534B68] font-normal'
            }`}
          >
            {tab}
          </span>
          {activeTab === tab && (
            <div className="w-full border-b-[3px] border-[#0463FF]" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabsSection;
