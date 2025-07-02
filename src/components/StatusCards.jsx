const StatusCards = ({ activeTab, setActiveTab }) => {
  const statusItems = [
    'All Applications',
    'Approved And Processed',
    'Processed By AI, Approval Pending',
    'Rejected By AI, Approval Pending',
    'Rejected And Processed',
  ];

  return (
    <div className="flex gap-6 w-full border-b border-[#534B68]/40 px-4 overflow-x-auto whitespace-nowrap">
      {statusItems.map((status) => {
        const isActive = activeTab === status;
        return (
          <div
            key={status}
            onClick={() => setActiveTab(status)}
            className={`flex flex-col justify-end items-center cursor-pointer ${
              isActive ? 'pb-0' : 'pb-2'
            }`}
            style={{
              padding: isActive ? '0px 8px' : '0px 8px 8px',
              gap: isActive ? '6px' : '4px',
              height: '30px',
              minWidth: 'fit-content',
            }}
          >
            <span
              className={`text-[14px] leading-[20px] font-${
                isActive ? 'medium' : 'normal'
              } truncate`}
              style={{
                color: isActive ? '#0463FF' : '#534B68',
                fontFamily: 'PP Neue Montreal, sans-serif',
              }}
              title={status}
            >
              {status}
            </span>
            {isActive && (
              <div
                style={{
                  width: '100%',
                  borderBottom: '3px solid #0463FF',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatusCards;
