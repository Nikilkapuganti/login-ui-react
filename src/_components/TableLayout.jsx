import React, { useState } from 'react';

function PaginatedList({ data, headers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1


  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th style={{ textTransform: 'uppercase' }} key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {headers.map((header, headerIndex) => (
                <td key={headerIndex}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'flex-end',alignItems:'center' }}>
        <div style={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.5 : 1,
        }} onClick={handlePreviousPage}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8159 1.65166C13.7142 1.39599 13.5386 1.20193 13.3015 1.07564C13.1166 0.980151 12.6453 0.97399 12.4544 1.06332C12.2726 1.14957 5.1725 8.24662 5.07393 8.44068C5.01232 8.56081 5 8.62857 5 8.875C5 9.12143 5.01232 9.18919 5.07393 9.30932C5.1725 9.50338 12.2726 16.6004 12.4544 16.6867C12.6453 16.776 13.1166 16.7698 13.3015 16.6744C13.4863 16.5789 13.6772 16.3879 13.7666 16.2123L13.8405 16.0675L13.8467 8.9058C13.8497 3.46597 13.8436 1.72251 13.8159 1.65166Z" fill="#7e7e7e" />
          </svg>
        </div>
        <span style={{fontSize:'14px',marginTop:'4px'}}>{`Page ${currentPage} of ${totalPages}`}</span>
        <div onClick={handleNextPage}  style={{
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.18414 16.3483C5.28579 16.6039 5.46136 16.798 5.69855 16.9243C5.88337 17.0198 6.35466 17.0259 6.54564 16.9366C6.72737 16.8504 13.8275 9.75332 13.9261 9.55926C13.9877 9.43913 14 9.37136 14 9.12494C14 8.87851 13.9877 8.81075 13.9261 8.69061C13.8275 8.49655 6.72737 1.39951 6.54564 1.31326C6.35466 1.22393 5.88337 1.23009 5.69855 1.32558C5.51373 1.42107 5.32275 1.61205 5.23342 1.78763L5.15949 1.9324L5.15333 9.09414C5.15025 14.534 5.15641 16.2774 5.18414 16.3483Z" fill="#7e7e7e" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PaginatedList;
