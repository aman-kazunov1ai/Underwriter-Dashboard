import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MagnifyingGlass from '../assets/magnifying-glass.svg';
import cheverdown from '../assets/chevron-down.svg';
import plus from '../assets/plus.svg';
import arrowleft from '../assets/arrow-left.svg';
import arrowright from '../assets/arrow-right.svg';
import EllipsisOutlined from '../assets/Vector.svg';

const ApplicationsTable = ({ activeTab }) => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [showOptions, setShowOptions] = useState(null);

  const filterRef = useRef(null);
  const sortRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/customers');
        const data = await res.json();
        setCustomers(data);
        setFilteredCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilterDropdown(false);
        setShowDatePicker(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSortDropdown(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setShowOptions(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    let filtered = [...customers];

    if (selectedFilter === 'Date' && selectedDate) {
      const selected = new Date(selectedDate).toDateString();
      filtered = filtered.filter((c) => new Date(c.date).toDateString() === selected);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((c) =>
        c.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.customer_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSort) {
      switch (selectedSort) {
        case 'Date':
          filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'Name A-Z':
          filtered.sort((a, b) => a.customer_name.localeCompare(b.customer_name));
          break;
        case 'Name Z-A':
          filtered.sort((a, b) => b.customer_name.localeCompare(a.customer_name));
          break;
        case 'Status':
          break;
        default:
          break;
      }
    }

    setFilteredCustomers(filtered);
    setCurrentPage(1);
  }, [selectedFilter, selectedDate, selectedSort, searchTerm, customers]);

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setShowSortDropdown(false);
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

  const paginatedData = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOptionsToggle = (customerId) => {
    setShowOptions(showOptions === customerId ? null : customerId);
  };

  const handleEdit = (customerId) => {
    alert(`Edit customer with ID: ${customerId}`);
    // Add edit logic here
    setShowOptions(null);
  };

  const handleDelete = (customerId) => {
    if (window.confirm(`Are you sure you want to delete customer with ID: ${customerId}?`)) {
      setCustomers(customers.filter((c) => c.customer_id !== customerId));
      setShowOptions(null);
    }
  };

  return (
    <div className="w-full relative rounded-[16px] bg-white border-[1px] border-[#E5ECFB] box-border overflow-hidden flex flex-col items-start justify-start p-6 gap-6 text-left text-base text-black font-['PP Neue Montreal']">
      {/* Top Bar */}
      <div className="self-stretch flex flex-row items-center justify-between gap-0">
        <div className="relative leading-[150%] font-medium text-2xl">{activeTab}</div>
        <div className="flex flex-row items-center justify-start gap-[11px] text-base text-[#3371F2]">
          <div className="w-[247px] rounded-lg bg-white border-[1px] border-[#E2EAFB] box-border h-10 flex flex-row items-center justify-start p-3 gap-4">
            <img src={MagnifyingGlass} alt="search" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search from table..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 outline-none w-full text-sm"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="w-[120px] rounded-md bg-[#E2EAFB] h-10 flex flex-row items-center justify-center py-3 px-4 box-border gap-2"
            >
              <span className="tracking-[0.03em] leading-[110%] capitalize font-medium">
                Filter {selectedFilter && `: ${selectedFilter}`}
              </span>
              <img src={cheverdown} alt="dropdown" className="w-4 h-4" />
            </button>
            {showFilterDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md w-40 z-50 border">
                {['Date', 'Status', 'Policy Type'].map((item) => (
                  <div
                    key={item}
                    onClick={() => handleFilterSelect(item)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
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

          {/* Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="w-[120px] rounded-md bg-[#E2EAFB] h-10 flex flex-row items-center justify-center py-3 px-4 box-border gap-2"
            >
              <span className="tracking-[0.03em] leading-[110%] capitalize font-medium">
                Sort {selectedSort && `: ${selectedSort}`}
              </span>
              <img src={cheverdown} alt="dropdown" className="w-4 h-4" />
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

          <button className="flex items-center bg-[#0463FF] rounded-lg px-4 h-10 gap-2">
            <img src={plus} alt="add" className="w-4 h-4" />
            <span className="text-white text-sm">Add New Customer</span>
          </button>
        </div>
      </div>
      <div className="self-stretch rounded-[12px] overflow-hidden flex flex-col items-start justify-start gap-3">
        <div className="self-stretch rounded-[12px] [background:linear-gradient(269.75deg,_#7AA5FF,_#3371F2_0.01%,_#0F1522),_#D6E3FC] border-[1px] border-[#0F012A1A] overflow-hidden flex flex-row items-center justify-start py-0 px-3">
          <div className="border-r-[1px] border-[#7BA3F6] flex flex-row items-center justify-start py-4 px-3 gap-4">
            <div className="w-4 relative rounded bg-white h-4" />
            <div className="w-[206px] relative leading-[140%] font-medium text-white text-sm">Customer Proposal Number</div>
          </div>
          <div className="border-r-[1px] border-[#7BA3F6] flex flex-row items-center justify-center py-4 px-5">
            <div className="w-[132px] relative leading-[140%] font-medium text-white text-sm">Customer ID</div>
          </div>
          <div className="flex-1 border-r-[1px] border-[#7BA3F6] flex flex-row items-center justify-center py-4 px-5">
            <div className="flex-1 relative leading-[140%] font-medium text-white text-sm">Customer Name</div>
          </div>
          <div className="flex-1 border-r-[1px] border-[#7BA3F6] flex flex-row items-center justify-center py-4 px-5">
            <div className="flex-1 relative leading-[140%] font-medium text-white text-sm">Product Name</div>
          </div>
          <div className="flex-1 border-r-[1px] border-[#7BA3F6] flex flex-row items-center justify-center py-4 px-5">
            <div className="w-[156px] relative leading-[140%] font-medium text-white text-sm">Date</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0 px-3">
            <div className="flex-1 relative leading-[140%] font-medium text-white text-sm">View Details</div>
          </div>
        </div>
        <div className="self-stretch rounded-[12px] border-[1px] border-[#D3D3D3] overflow-hidden flex flex-col items-start justify-start text-[#2F2F2F]">
          {customers.map((cust, index) => (
            <div
              key={cust.customer_id}
              className={`self-stretch flex flex-row items-center justify-start py-0 px-3 ${
                index % 2 === 0 ? 'bg-[#EAEFFB]' : 'bg-white'
              } border-b-[1px] border-[#D3D3D3]`}
            >
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-3 gap-4">
                <div className="w-4 relative rounded bg-white border-[1px] border-[#D3D3D3] h-4 overflow-hidden shrink-0" />
                <div className="w-[206px] relative leading-[140%] font-medium text-sm">00{index + 1}</div>
              </div>
              <div className="flex flex-row items-center justify-center py-4 px-5">
                <div className="w-[132px] relative leading-[140%] text-sm">{cust.customer_id}</div>
              </div>
              <div className="w-[196px] flex flex-row items-center justify-center py-4 px-5 box-border">
                <div className="flex-1 relative leading-[140%] text-sm">{cust.customer_name}</div>
              </div>
              <div className="self-stretch w-[196px] flex flex-row items-center justify-center py-4 px-5 box-border">
                <div className="flex-1 relative leading-[140%] text-sm">{cust.product_name}</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
                <div className="w-[156px] relative leading-[140%] text-sm">{cust.date}</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-center py-0 px-3 text-sm text-[#F4A460]">
                <div className="w-[74px] rounded-md border-[#F4A460] border-[1px] box-border h-9 flex flex-row items-center justify-center py-px px-2">
                  <div className="relative leading-5 font-medium">Review</div>
                </div>
              </div>
              <div className="w-[38px] border-b-[1px] border-[#D3D3D3] box-border h-[54px] flex flex-row items-center justify-center py-2 px-4 gap-1 relative">
                <button
                  onClick={() => handleOptionsToggle(cust.customer_id)}
                  className="w-3 h-3"
                  aria-label={`Options for customer ${cust.customer_id}`}
                >
                  <img src={EllipsisOutlined} alt="Options" className="w-full h-full" />
                </button>
                {showOptions === cust.customer_id && (
                  <div
                    ref={optionsRef}
                    className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-32 z-50 border"
                  >
                    <div
                      onClick={() => handleEdit(cust.customer_id)}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => handleDelete(cust.customer_id)}
                      className="px-4 py-2 hover:bg-red-100 cursor-pointer text-sm text-red-600"
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-3 gap-0">
        <div className="flex flex-row items-center justify-start gap-4">
          <div className="relative">Items per page</div>
          <div className="rounded-lg bg-[#EAEFFB] flex flex-row items-center justify-start p-3 gap-2 text-[#3371F2]">
            <div className="relative">9</div>
            <div className="relative"><img src={cheverdown} alt="magnifying-glass" className="w-4 h-4" /></div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="rounded-lg flex flex-row items-center justify-start p-3 gap-2">
            <div className="relative"><img src={arrowleft} alt="magnifying-glass" className="w-4 h-4" /></div>
            <div className="relative font-medium text-[#808080]">Previous</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-[#3371F2]">
            <div className="w-8 rounded-md bg-[#EAEFFB] h-8 flex flex-row items-center justify-center p-3 box-border">
              <div className="relative font-medium">1</div>
            </div>
            <div className="w-8 rounded-md border-[1px] border-[#3371F2] box-border h-8 flex flex-row items-center justify-center p-3">
              <div className="relative">2</div>
            </div>
            <div className="w-8 rounded-md border-[1px] border-[#3371F2] box-border h-8 flex flex-row items-center justify-center p-3">
              <div className="relative">3</div>
            </div>
            <div className="w-8 rounded-md border-[1px] border-[#3371F2] box-border h-8 flex flex-row items-center justify-center p-3">
              <div className="relative">4</div>
            </div>
            <div className="w-8 rounded-md border-[1px] border-[#3371F2] box-border h-8 flex flex-row items-center justify-center p-3">
              <div className="relative">...</div>
            </div>
            <div className="w-8 rounded-md border-[1px] border-[#3371F2] box-border h-8 flex flex-row items-center justify-center p-3">
              <div className="relative">9</div>
            </div>
            <div className="w-8 rounded-md border-[1px] border-[#3371F2] box-border h-8 flex flex-row items-center justify-center p-3">
              <div className="relative">10</div>
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-center justify-start p-3 gap-2 text-[#3371F2]">
            <div className="relative font-medium">Next</div>
            <div className="relative"><img src={arrowright} alt="magnifying-glass" className="w-4 h-4" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsTable;