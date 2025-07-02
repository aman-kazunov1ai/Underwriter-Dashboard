import { useState } from "react";

const StatusCards = () => {
  const statusItems = [
    'All Applications',
    'Approved And Processed',
    'Processed By AI, Approval Pending',
    'Rejected By AI, Approval Pending',
    'Rejected And Processed',
  ];

  const [active, setActive] = useState('All Applications');

  return (
    <div className="flex items-start gap-6 w-full h-[30px] border-b border-[#534B68]/40">
      {statusItems.map((status) => (
        <button
          key={status}
          onClick={() => setActive(status)}
          className={`relative pb-1 text-sm font-medium transition-colors duration-200 ${
            active === status
              ? 'text-[#1A73E8]'
              : 'text-[#534B68]/70 hover:text-[#1A73E8]'
          }`}
        >
          {status}
          {active === status && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1A73E8] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};

export default StatusCards;
