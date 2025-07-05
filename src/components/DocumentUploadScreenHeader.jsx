import avatar from '../assets/Avatar.png';
import checkIcon from '../assets/check-square.svg';
import calendarIcon from '../assets/calendar.svg';
import arrowDown from '../assets/arrow-down.svg';

const DocumentHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[1300px] h-[87px] px-0 gap-[215px]">
      {/* Left Section: Avatar, Name, ID, Policy Type */}
      <div className="flex flex-row items-center gap-[10px]">
        {/* Avatar */}
        <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
          <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
        </div>

        {/* Name, ID, Policy */}
        <div className="flex flex-col justify-center">
          <span className="text-[24px] font-medium leading-[16px] text-black font-['Inter']">
            Shubham Dhawan
          </span>
          <div className="flex flex-row items-center gap-4 mt-1">
            <span className="text-[16px] font-medium leading-[20px] text-[#8B8891] font-['Inter']">
              Customer ID : #56726
            </span>
            <div className="flex flex-row justify-center items-center px-6 py-2 gap-2 bg-[#E2EAFB] rounded-[6px] h-[35px]">
              <div className="w-[10px] h-[10px] bg-[#3371F2] rounded-full" />
              <span className="text-[#3371F2] text-[14px] font-medium tracking-[0.03em] capitalize font-['Inter']">
                Policy Type
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Status, Date, Button */}
      <div className="flex flex-row items-center gap-[12px]">
        {/* Status */}
        <div className="flex flex-row items-center gap-2 px-2 py-1">
          <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#E2EAFB] rounded-[3.5px]">
            <img src={checkIcon} alt="Status" className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[16px] font-medium text-[#0F012A] font-['Inter']">
            Current Status : Status here
          </span>
        </div>

        {/* Date */}
        <div className="flex flex-row items-center gap-2 px-2 py-1">
          <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#E2EAFB] rounded-[3.5px]">
            <img src={calendarIcon} alt="Calendar" className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[16px] font-medium text-[#0F012A] font-['Inter']">
            Date of submission : 22-04-2025
          </span>
        </div>

        {/* View Proposal Button */}
        <button className="flex flex-row justify-center items-center px-4 py-3 gap-2 bg-[#0463FF] rounded-[8px] h-[40px]">
          <span className="text-white text-[16px] font-medium font-['Inter']">
            View Proposal Form
          </span>
          <img src={arrowDown} alt="Dropdown" className="w-[16px] h-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default DocumentHeader;
