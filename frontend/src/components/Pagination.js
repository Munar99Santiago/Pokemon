import React from 'react';

function Pagination({ onPrevious, onNext, currentId, disablePrev }) {
  return (
    <div className="pagination">
      <button 
        onClick={onPrevious} 
        disabled={disablePrev}
        className="pagination-button"
      >
        &laquo; Anterior
      </button>
      
      <span className="current-page">#{currentId}</span>
      
      <button 
        onClick={onNext}
        className="pagination-button"
      >
        Siguiente &raquo;
      </button>
    </div>
  );
}

export default Pagination;