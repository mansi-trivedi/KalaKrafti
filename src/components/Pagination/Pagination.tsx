import React from "react";
import { PaginationType } from "types/pagination";
import Icon from "../Icon/Icon";

const Pagination: React.FC<PaginationType> = (props) => {
  const { handlePageChange, totalPages, currentPage } = props;
  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 bg-beige text-white rounded disabled:opacity-50"
      >
        <Icon icon="leftArrow" size={20} />
      </button>

      <button className="px-4 py-2 bg-offWhite rounded font-semibold">
        {currentPage}
      </button>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 bg-beige text-white rounded disabled:opacity-50"
      >
        <Icon icon="rightArrow" size={20} />
      </button>
    </div>
  );
};

export default Pagination;
