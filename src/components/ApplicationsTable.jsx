import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ApplicationsTable = ({ activeTab }) => {
  const [customers, setCustomers] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/customers');
        const data = await res.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  // Handle click outside for closing dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilterDropdown(false);
        setShowDatePicker(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSortDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setShowSortDropdown(false);
    // You can sort customers array here based on selection if needed
  };

  const handleFilterSelect = (option) => {
    setSelectedFilter(option);
    if (option === 'Date') {
      setShowDatePicker(true);
    } else {
      setShowFilterDropdown(false);
      setShowDatePicker(false);
    }
  };

  return (
    <div className="w-full bg-white border border-[#E5ECFB] rounded-[16px] p-9 flex flex-col gap-3 shadow-sm box-border overflow-hidden">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-base sm:text-lg font-semibold">{activeTab}</h2>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto relative">
          {/* Search Box */}
          <div className="flex items-center bg-white border border-[#E2EAFB] rounded-lg px-3 h-10 w-full sm:w-60">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search from table..." className="ml-2 outline-none w-full text-sm" />
          </div>

          {/* Filter Button */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="relative w-auto sm:w-40 min-w-[150px] flex items-center justify-center bg-[#E2EAFB] rounded-md px-4 h-10 gap-2"
            >
              <span className="text-sm text-[#3371F2] font-pp font-medium tracking-wider3 leading-tight110 capitalize whitespace-nowrap">Filter {selectedFilter && `: ${selectedFilter}`}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {/* <ChevronDown className="h-4 w-4 text-[#3371F2]" /> */}
            </button>

            {showFilterDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md w-40 z-50 border">
                {['Date', 'Status', 'Policy Type'].map((item) => (
                  <div
                    key={item}
                    onMouseEnter={() => item === 'Date' && setShowDatePicker(true)}
                    onClick={() => handleFilterSelect(item)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}

            {/* Calendar */}
            {showDatePicker && (
              <div className="absolute top-12 left-44 z-50 bg-white border rounded-md shadow-lg p-2">
                <DatePicker
                  inline
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setShowDatePicker(false);
                    setShowFilterDropdown(false);
                  }}
                />
              </div>
            )}
          </div>

          {/* Sort Button */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="frelative w-auto sm:w-40 min-w-[150px] flex items-center justify-center bg-[#E2EAFB] rounded-md px-4 h-10 gap-2"
            >
              <span className="text-sm text-[#3371F2] font-pp font-medium tracking-wider3 leading-tight110 capitalize whitespace-nowrap">Sort {selectedSort && `: ${selectedSort}`}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showSortDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md w-44 z-50 border">
                {['Date', 'Name A-Z', 'Name Z-A', 'Status'].map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Button */}
          <button className="flex items-center bg-[#0463FF] rounded-lg px-3 h-10 w-full sm:w-44 gap-2">
            <span className="text-white text-sm">Add New Customer</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div
        className="hidden sm:flex items-center h-[54px] rounded-[12px] w-full"
        style={{
          background: 'linear-gradient(269.75deg, #7AA5FF -2.69%, #3371F2 -2.68%, #0F1522 114.27%), #D6E3FC',
          borderBottom: '1px solid rgba(15, 1, 42, 0.1)',
        }}
      >
        <div className="flex w-full h-full">
          <div className="flex-0.5 px-4 py-2 text-left text-white text-sm font-medium border-r border-[#7BA3F6]">
  Customer Proposal Number
</div>
          <div className="flex-1 px-1 py-2 text-left text-white text-sm font-medium border-r border-[#7BA3F6]">
            Customer ID
          </div>
          <div className="flex-1 px-1 py-2 text-left text-white text-sm font-medium border-r border-[#7BA3F6]">
            Customer Name
          </div>
          <div className="flex-1 px-4 py-2 text-left text-white text-sm font-medium border-r border-[#7BA3F6]">
            Product Name
          </div>
          <div className="flex-1 px-4 py-2 text-left text-white text-sm font-medium border-r border-[#7BA3F6]">
            Date
          </div>
          <div className="flex-1 px-4 py-2 text-left text-white text-sm font-medium ">
            View Details
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full">
          <tbody>
            {customers.map((cust, index) => (
              <tr
                key={cust.customer_id}
                className="flex w-full gap-4 px-3 py-4 items-center justify-center"
                style={{
                  backgroundColor: index % 2 === 0 ? 'rgba(234, 239, 251, 0.5)' : '#FFFFFF',
                }}
              >
                <td className="flex-1 text-sm text-gray-700 text-left">00{index + 1}</td>
                <td className="flex-[1] text-sm text-gray-700 text-left">{cust.customer_id}</td>
                <td className="flex-[.8] text-sm text-gray-700 text-left">{cust.customer_name}</td>
                <td className="flex-[1] text-sm text-gray-700 text-left">SecureFuture Plan</td>
                <td className="flex-[0.5] text-sm text-gray-700 text-left">01-04-2025</td>
                <td className="flex-1 text-sm text-gray-700 text-center">
                  <button className="px-4 py-1 text-sm font-medium text-[#FFD700] border border-[#FFD700] bg-white rounded-md hover:opacity-90 transition">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-3 w-full mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Items per page</span>
          <select className="bg-[#EAEFFB] text-sm text-blue-600 font-medium rounded-[8px] px-3 py-2 h-[43px] w-[58px]">
            <option>9</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>

        <div className="flex items-center gap-2 h-[43px] flex-wrap justify-center sm:justify-end">
          <button className="flex items-center px-3 py-2 gap-2 text-sm text-black rounded-[8px] hover:bg-[#EAEFFB]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex gap-2">
            {[1, 2, 3, 4, "...", 9, 10].map((item, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded-[8px] border text-sm ${
                  item === 1 ? 'bg-[#EAEFFB] text-blue-600 border-blue-600 font-semibold' : 'border-gray-300 text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="flex items-center px-3 py-2 gap-2 text-sm text-blue-600 rounded-[8px] hover:bg-[#EAEFFB]">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsTable;
