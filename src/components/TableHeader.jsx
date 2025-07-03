// // TableHeader.jsx
// import React from 'react';

// const TableHeader = () => (
//   <div className="w-full">
//     {/* Top Action Bar */}
//     <div className="flex justify-between items-center w-full h-10 mb-4">
//       <h2 className="text-lg font-semibold">All Applications</h2>

//       <div className="flex items-center gap-4">
//         {/* Search Box */}
//         <div className="flex items-center bg-white border border-[#E2EAFB] rounded-lg px-3 h-10 w-60">
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input type="text" placeholder="Search from table..." className="ml-2 outline-none w-full text-sm" />
//         </div>

//         {/* Filter Button */}
//         <button className="flex items-center justify-center bg-[#E2EAFB] rounded-md px-8 h-10 w-40 gap-2">
//           <span className="text-sm">Filters: Date</span>
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//         {/* Sort Button */}
//         <button className="flex items-center justify-center bg-[#E2EAFB] rounded-md px-8 h-10 w-28 gap-2">
//           <span className="text-sm">Sort</span>
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//         {/* Add New Button */}
//         <button className="flex items-center bg-[#0463FF] rounded-lg px-3 h-10 w-44 gap-2">
//           <span className="text-white text-sm">Add New Customer</span>
//           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//           </svg>
//         </button>
//       </div>
//     </div>

//     {/* Table Header Row */}
//     <div className="flex items-center px-3 w-full h-[54px] rounded-t-lg"
//       style={{
//         background: 'linear-gradient(269.75deg, #7AA5FF -2.69%, #3371F2 -2.68%, #0F1522 114.27%), #D6E3FC',
//         borderBottom: '1px solid rgba(15, 1, 42, 0.1)'
//       }}
//     >
//       <div className="flex w-full">
//         <div className="w-[15%] flex items-center">
//           <span className="text-white font-medium text-sm">Customer Proposal Number</span>
//         </div>
//         <div className="w-[10%] flex items-center">
//           <span className="text-white font-medium text-sm">Customer ID</span>
//         </div>
//         <div className="w-[20%] flex items-center">
//           <span className="text-white font-medium text-sm">Customer Name</span>
//         </div>
//         <div className="w-[25%] flex items-center">
//           <span className="text-white font-medium text-sm">Product Name</span>
//         </div>
//         <div className="w-[15%] flex items-center">
//           <span className="text-white font-medium text-sm">Date</span>
//         </div>
//         <div className="w-[15%] flex items-center justify-end">
//           <span className="text-white font-medium text-sm">Action</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default TableHeader;