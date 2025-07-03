import { useEffect, useState } from 'react';

const ApplicationsTable = ({ activeTab }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/customers');
        const data = await res.json();
        setCustomers(data);
      } catch (error) {
        console.error('❌ Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="w-full bg-white border border-[#E5ECFB] rounded-[16px] p-4 flex flex-col gap-6 shadow-sm box-border overflow-hidden">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-base sm:text-lg font-semibold">{activeTab}</h2>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center bg-white border border-[#E2EAFB] rounded-lg px-3 h-10 w-full sm:w-60">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search from table..." className="ml-2 outline-none w-full text-sm" />
          </div>

          <button className="flex items-center justify-center bg-[#E2EAFB] rounded-md px-6 h-10 w-full sm:w-40 gap-2">
            <span className="text-sm">Filter</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button className="flex items-center justify-center bg-[#E2EAFB] rounded-md px-6 h-10 w-full sm:w-28 gap-2">
            <span className="text-sm">Sort</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

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
        className="hidden sm:flex items-center px-3 h-[54px] rounded-t-lg"
        style={{
          background: 'linear-gradient(269.75deg, #7AA5FF -2.69%, #3371F2 -2.68%, #0F1522 114.27%), #D6E3FC',
          borderBottom: '1px solid rgba(15, 1, 42, 0.1)',
        }}
      >
        <div className="flex w-full gap-4">
          <div className="flex-1 text-white font-medium text-sm text-center whitespace-nowrap">Customer Proposal Number</div>
          <div className="flex-1 text-white font-medium text-sm text-center whitespace-nowrap">Customer ID</div>
          <div className="flex-[1.5] text-white font-medium text-sm text-center whitespace-nowrap">Customer Name</div>
          <div className="flex-[2] text-white font-medium text-sm text-center whitespace-nowrap">Product Name</div>
          <div className="flex-1 text-white font-medium text-sm text-center whitespace-nowrap">Date</div>
          <div className="flex-1 text-white font-medium text-sm text-center whitespace-nowrap">Action</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full">
          <tbody className="divide-y divide-gray-200">
            {customers.map((cust, index) => (
              <tr key={cust.customer_id} className="flex w-full gap-4 px-3 py-4 items-center justify-center hover:bg-gray-50">
                <td className="flex-1 text-sm text-gray-500 text-center">00{index + 1}</td>
                <td className="flex-1 text-sm text-gray-500 text-center">{cust.customer_id}</td>
                <td className="flex-[1.5] text-sm text-gray-500 text-center">{cust.customer_name}</td>
                <td className="flex-[2] text-sm text-gray-500 text-center">SecureFuture Plan</td>
                <td className="flex-1 text-sm text-gray-500 text-center">01-04-2025</td>
                <td className="flex-1 text-sm text-gray-500 text-center">
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
        {/* Items per page */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Items per page</span>
          <select className="bg-[#EAEFFB] text-sm text-blue-600 font-medium rounded-[8px] px-3 py-2 h-[43px] w-[58px]">
            <option>9</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>

        {/* Page navigation */}
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
