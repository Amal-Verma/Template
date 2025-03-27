// "use client"

// import React, { useState, useEffect } from 'react';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';

// // Remove the global worker configuration
// // We'll set it up in a useEffect instead

// const LibraryPage = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadError, setLoadError] = useState(null);
//   const pdfPath = '/pdfs/Amal_Verma_Resume-1.pdf';

//   // Set up the worker in useEffect to ensure it runs only in browser
//   useEffect(() => {
//     // This ensures the worker is only loaded in the browser
//     pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//       'pdfjs-dist/build/pdf.worker.min.js',
//       import.meta.url,
//     ).toString();
//   }, []);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//     setIsLoading(false);
//     setLoadError(null);
//   };

//   const onDocumentLoadError = (error) => {
//     console.error('PDF failed to load:', error);
//     setIsLoading(false);
//     setLoadError('Failed to load PDF. Please try again later.');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
//       <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
//           Library
//         </h1>
//         <div className="flex justify-center mb-4">
//           {isLoading && (
//             <div className="text-center py-10">
//               <p className="text-gray-600 dark:text-gray-400">Loading PDF...</p>
//             </div>
//           )}
          
//           {loadError && (
//             <div className="text-center py-10">
//               <p className="text-red-500">{loadError}</p>
//               <p className="text-gray-600 dark:text-gray-400 mt-2">
//                 Make sure the PDF file exists in the public/pdfs directory.
//               </p>
//             </div>
//           )}
          
//           <Document
//             file={pdfPath}
//             onLoadSuccess={onDocumentLoadSuccess}
//             onLoadError={onDocumentLoadError}
//             loading={<p className="text-gray-600 dark:text-gray-400">Loading PDF...</p>}
//             className="border border-green-100 dark:border-green-900"
//           >
//             {!loadError && <Page pageNumber={pageNumber} />}
//           </Document>
//         </div>
        
//         {numPages && !loadError && (
//           <div className="flex justify-between items-center">
//             <button
//               disabled={pageNumber <= 1}
//               onClick={() => setPageNumber(pageNumber - 1)}
//               className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <p className="text-gray-700 dark:text-gray-300">
//               Page {pageNumber} of {numPages}
//             </p>
//             <button
//               disabled={pageNumber >= numPages}
//               onClick={() => setPageNumber(pageNumber + 1)}
//               className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LibraryPage;
