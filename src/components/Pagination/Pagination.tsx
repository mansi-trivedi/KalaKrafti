import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationType = {
    handlePageChange: (item: number) => void;
    totalPages: number;
    currentPage: number;
}

const Pagination: React.FC<PaginationType> = (props) => {
    const { handlePageChange, totalPages, currentPage } = props
    return (
        <div className="flex justify-center mt-8 space-x-2">
            {/* Left Arrow */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 bg-brick text-white rounded disabled:opacity-50"
            >
                <FaChevronLeft />
            </button>

            <button
                className="px-4 py-2 bg-beige rounded font-semibold"
            >
                {currentPage}
            </button>

            {/* Right Arrow */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 bg-brick text-white rounded disabled:opacity-50"
            >
                <FaChevronRight />
            </button>
        </div>
    )
}

export default Pagination