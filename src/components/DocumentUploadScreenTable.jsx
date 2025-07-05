import { useState } from 'react';
import MagnifyingGlass from '../assets/magnifying-glass.svg';
import cheverdown from '../assets/chevron-down.svg';
import plus from '../assets/plus.svg';
import swap from '../assets/swap_vert.svg';

const DocumentUploadScreenTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mt-2 ml-[-25px] w-[1280px] bg-white rounded-[16px] border border-[#E5ECFB] p-6 shadow-sm font-['Inter']">
      {/* Header Row */}
      <div className="flex flex-row justify-between items-center h-[40px]">
        {/* Title */}
        <h2 className="text-[24px] font-medium leading-[36px] text-black whitespace-nowrap">
          All Documents
        </h2>

        {/* Controls */}
        <div className="flex flex-row items-center gap-[11px] h-[40px]">
          {/* Search */}
          <div className="flex flex-row items-center px-4 py-2 gap-4 w-[247px] h-[40px] bg-white border border-[#E5ECFB] rounded-[8px]">
            <img src={MagnifyingGlass} alt="Search" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search from table..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-[#534B68] text-[16px] leading-[19px] font-normal outline-none w-full bg-transparent"
            />
          </div>

          {/* Filter */}
          <button
            onClick={() => console.log('Filter clicked')}
            className="flex flex-row justify-center items-center px-6 py-2 gap-4 w-[140px] h-[40px] bg-[#E2EAFB] rounded-[6px]"
          >
            {/* Filter icon (3 lines) */}
            <div className="relative w-[20px] h-[10px]">
              <div className="absolute w-[19px] border-t-2 border-[#0463FF] top-0 left-0" />
              <div className="absolute w-[13px] border-t-2 border-[#0463FF] top-[5px] left-[3px]" />
              <div className="absolute w-[3px] border-t-2 border-[#0463FF] top-[10px] left-[8px]" />
            </div>
            <span className="text-[#3371F2] text-[16px] font-medium tracking-[0.03em] capitalize whitespace-nowrap">
              Filter
            </span>
            <img src={cheverdown} alt="Chevron" className="w-4 h-4" />
          </button>

          {/* Sort */}
          <button
            onClick={() => console.log('Sort clicked')}
            className="flex flex-row justify-center items-center px-6 py-2 gap-2 w-[130px] h-[40px] bg-[#E2EAFB] rounded-[6px]"
          >
            <img src={swap} alt="Sort Icon" className="w-5 h-5" />
            <span className="text-[#3371F2] text-[16px] font-medium tracking-[0.03em] capitalize whitespace-nowrap">
              Sort
            </span>
            <img src={cheverdown} alt="Chevron" className="w-4 h-4" />
          </button>

          {/* Add New Row */}
          <button
            onClick={() => console.log('Add New Row clicked')}
            className="flex flex-row items-center px-4 py-3 gap-2 w-[148px] h-[40px] bg-[#0463FF] rounded-[8px]"
          >
            <img src={plus} alt="Plus" className="w-[14px] h-[16px]" />
            <span className="text-white text-[16px] font-medium leading-[19px] whitespace-nowrap">
              Add New Row
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadScreenTable;
