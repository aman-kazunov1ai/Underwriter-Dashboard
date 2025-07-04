import { useState } from 'react';
import dashboardIcon from '../assets/dashboard.svg';
import memberIcon from '../assets/member.svg';
import claimsIcon from '../assets/claims.svg';
import aiIcon from '../assets/ai.svg';
import trendsIcon from '../assets/trends.svg';
import riskIcon from '../assets/risk.svg';
import reportsIcon from '../assets/reports.svg';
import policyIcon from '../assets/policy.svg';
import modelIcon from '../assets/model.svg';
import integrationIcon from '../assets/integration.svg';
import bellIcon from '../assets/bell.svg';
import settingsIcon from '../assets/settings.svg';
import gridIcon from '../assets/grid.svg';
import helpIcon from '../assets/help.svg';
import unionIcon from '../assets/Union.svg';
import arrowExpandIcon from '../assets/arrow-expand.svg';
import arrowContractIcon from '../assets/arrow-contract.svg';

const SidebarSection = ({ title, items, isCollapsed }) => (
  <div
    className={`${isCollapsed
        ? 'flex flex-col items-center gap-[4px] w-[34px]'
        : 'flex flex-col items-start gap-2 mt-4 w-full'
      }`}
  >
    {!isCollapsed && (
      <p
        className="text-[12px] font-medium uppercase tracking-[0.03em]"
        style={{
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '18px',
        }}
      >
        {title}
      </p>
    )}
    <div
      className={`flex flex-col ${isCollapsed ? 'items-center gap-[4px]' : 'items-start gap-1'
        } w-full`}
    >
      {items.map(({ label, icon }, index) => (
        <button
          key={index}
          type="button"
          aria-label={label}
          onClick={() => console.log(`${label} clicked`)}
          className={`relative transition-all duration-200 ${isCollapsed
              ? 'w-[34px] h-[34px] flex justify-center items-center rounded-[6px] hover:bg-white/10 hover:border hover:border-white/25'
              : 'flex items-center gap-[10px] px-2 py-2 w-full rounded-[8px] hover:bg-white/10'
            }`}
        >
          <div
            className={`${isCollapsed
                ? 'absolute w-[20px] h-[20px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                : 'flex justify-center items-center w-[20px] h-[16px]'
              }`}
          >
            <img src={icon} alt="" className={`${isCollapsed ? 'w-full h-full' : 'h-[14px]'}`} />
          </div>
          {!isCollapsed && (
            <span
              title={label}
              className="text-white text-[14px] font-medium capitalize tracking-[0.03em] whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '21px' }}
            >
              {label}
            </span>
          )}
        </button>
      ))}
    </div>
  </div>
);

const SidebarDivider = ({ isCollapsed }) =>
  isCollapsed ? (
    <div className="w-[34px] h-px bg-white/20 my-[2px]" />
  ) : (
    <div className="w-full h-px bg-white/20 my-[2px]" />
  );

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <aside
        className={`h-screen overflow-hidden bg-gradient-to-b from-[#0F1522] to-[#2C64D7] text-white p-6 isolate transition-all duration-300 ${isCollapsed ? 'w-[72px]' : 'w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px]'
          }`}
      >
        <div className="flex flex-col h-full w-full">
          {/* Top: Logo + Sections */}
          <div className="flex-1 flex flex-col justify-start">
            <div
              className={`flex flex-col ${isCollapsed ? 'items-center gap-[20px] w-[34px] mx-auto' : 'items-start w-full'
                }`}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-2">
                <img src={unionIcon} alt="Kazunov Logo" className="w-[24px] h-[24px]" />
                {!isCollapsed && (
                  <span
                    className="text-white text-[14px] font-semibold leading-[16px] whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Kazunov 1AI
                  </span>
                )}
              </div>

              {/* Navigation Sections */}
              <div
                className={`mt-2 flex flex-col ${isCollapsed ? 'items-center gap-[20px]' : 'gap-3'
                  } w-full`}
              >
                <SidebarSection
                  title="Main Menu"
                  isCollapsed={isCollapsed}
                  items={[
                    { label: 'Dashboard', icon: dashboardIcon },
                    { label: 'Member', icon: memberIcon },
                    { label: 'Claims Management', icon: claimsIcon },
                    { label: 'AI Recommendations', icon: aiIcon },
                  ]}
                />
                <SidebarDivider isCollapsed={isCollapsed} />
                <SidebarSection
                  title="Analytics & Reports"
                  isCollapsed={isCollapsed}
                  items={[
                    { label: 'Health Trends Analysis', icon: trendsIcon },
                    { label: 'Risk Prediction', icon: riskIcon },
                    { label: 'Utilization Reports', icon: reportsIcon },
                  ]}
                />
                <SidebarDivider isCollapsed={isCollapsed} />
                <SidebarSection
                  title="Operations & Settings"
                  isCollapsed={isCollapsed}
                  items={[
                    { label: 'Policy Settings', icon: policyIcon },
                    { label: 'Model Management', icon: modelIcon },
                    { label: 'Integrations', icon: integrationIcon },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex flex-col justify-center items-start gap-5 w-full">
            {/* Icon Row */}
            {isCollapsed ? (
              <div className="flex-1 flex flex-col justify-center items-center w-full">
                <div className="flex flex-col items-center gap-[16px] w-[36px] ml-[-1px]">
                  {[
                    { icon: bellIcon, label: 'Notifications' },
                    { icon: settingsIcon, label: 'Settings' },
                    { icon: gridIcon, label: 'Grid' },
                    { icon: helpIcon, label: 'Help' },
                  ].map(({ icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      onClick={() => console.log(`${label} clicked`)}
                      className="w-[34px] h-[34px] flex flex-col justify-center items-center gap-[4px] rounded-[8px] hover:bg-white/10 hover:border hover:border-white/25"
                    >
                      <img src={icon} alt={label} className="w-[14px] h-[14px]" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center gap-4 w-full h-[40px]">
                {[
                  { icon: bellIcon, label: 'Notifications' },
                  { icon: settingsIcon, label: 'Settings' },
                  { icon: gridIcon, label: 'Grid' },
                  { icon: helpIcon, label: 'Help' },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    onClick={() => console.log(`${label} clicked`)}
                    className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] hover:bg-white/10 transition"
                  >
                    <img src={icon} alt={label} className="max-h-[21px]" />
                  </button>
                ))}
              </div>
            )}

            {/* Profile Row */}
            <div className="flex justify-center items-center gap-2 w-full h-[36px] rounded-[6px]">
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                <img src="./Avatar.png" alt="Shubham" className="w-full h-full object-cover" />
              </div>
              {!isCollapsed && (
                <div className="flex justify-between items-center gap-2 flex-1">
                  <span
                    title="Shubham"
                    className="text-white text-[14px] font-medium tracking-[0.03em] whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: '15px' }}
                  >
                    Shubham
                  </span>
                  <span className="text-white text-[16px] font-normal leading-[16px]">⋮</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Toggle Button on Sidebar Border */}
      <div
        className="absolute top-[52px] z-50"
        style={{
          left: isCollapsed ? '62px' : 'calc(100% - 20px)',
          transition: 'left 0.3s ease',
        }}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-10 h-10 flex justify-center items-center bg-white border border-[#E5ECFB] shadow-md rounded-full"
        >
          <img
            src={isCollapsed ? arrowContractIcon : arrowExpandIcon}
            alt="Toggle Sidebar"
            className="w-20 h-20"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
