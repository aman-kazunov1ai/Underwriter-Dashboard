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

const SidebarSection = ({ title, items }) => (
  <div className="flex flex-col items-start gap-2 mt-4 w-full">
    <p
      className="text-[12px] font-medium uppercase tracking-[0.03em]"
      style={{
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'PP Neue Montreal',
        lineHeight: '18px',
      }}
    >
      {title}
    </p>
    <div className="flex flex-col items-start gap-1 w-full">
      {items.map(({ label, icon, isActive }, index) => (
        <button
          key={index}
          type="button"
          aria-label={label}
          onClick={() => console.log(`${label} clicked`)}
          className={`flex items-center gap-[10px] px-2 py-2 rounded-[8px] w-full transition-all duration-200 ease-in-out ${
            isActive
              ? 'bg-white/10 border border-white/25 rounded-[6px]'
              : 'opacity-80 hover:bg-white/10'
          }`}
          style={{ height: '34px' }}
        >
          <div className="flex justify-center items-center p-[1px] w-[20px] h-[16px]">
            <img src={icon} alt="" className="h-[14px]" />
          </div>
          <span
            title={label}
            className="text-white text-[14px] font-medium capitalize tracking-[0.03em] whitespace-nowrap"
            style={{ fontFamily: 'PP Neue Montreal', lineHeight: '21px' }}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] h-screen overflow-y-auto bg-gradient-to-b from-[#0F1522] to-[#2C64D7] text-white p-6 isolate relative">
      <div className="flex flex-col justify-between h-full w-full">
        {/* Top: Logo + Sections */}
        <div className="flex flex-col items-start w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            <img src={unionIcon} alt="Kazunov Logo" className="w-[24px] h-[24px]" />
            <span
              className="text-white text-[14px] font-semibold leading-[16px] whitespace-nowrap"
              style={{ fontFamily: 'PP Neue Montreal' }}
            >
              Kazunov 1AI
            </span>
          </div>

          {/* Navigation Sections */}
          <div className="mt-2 flex flex-col gap-3 w-full">
            <SidebarSection
              title="Main Menu"
              items={[
                { label: 'Dashboard', icon: dashboardIcon },
                { label: 'Member', icon: memberIcon },
                { label: 'Claims Management', icon: claimsIcon },
                { label: 'AI Recommendations', icon: aiIcon },
              ]}
            />
            <SidebarSection
              title="Analytics & Reports"
              items={[
                { label: 'Health Trends Analysis', icon: trendsIcon },
                { label: 'Risk Prediction', icon: riskIcon },
                { label: 'Utilization Reports', icon: reportsIcon },
              ]}
            />
            <SidebarSection
              title="Operations & Settings"
              items={[
                { label: 'Policy Settings', icon: policyIcon },
                { label: 'Model Management', icon: modelIcon },
                { label: 'Integrations', icon: integrationIcon },
              ]}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex flex-col justify-center items-start gap-5 mt-auto"
          style={{ width: '100%', height: '96px', margin: '0 auto', zIndex: 2 }}
        >
          {/* Icon Row */}
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
                <img src={icon} alt="" className="max-h-[21px]" />
              </button>
            ))}
          </div>

          {/* Profile Row */}
          <div className="flex justify-center items-center gap-2 w-full h-[36px] rounded-[6px]">
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
              <img src="./Avatar.png" alt="Shubham" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center gap-2 flex-1">
              <span
                title="Shubham"
                className="text-white text-[14px] font-medium tracking-[0.03em] whitespace-nowrap"
                style={{ fontFamily: 'PP Neue Montreal', lineHeight: '15px' }}
              >
                Shubham
              </span>
              <span className="text-white text-[16px] font-normal leading-[16px]">⋮</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
