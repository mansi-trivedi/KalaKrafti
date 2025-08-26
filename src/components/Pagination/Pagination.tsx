import React, { useCallback } from "react";
import { PaginationType } from "types/pagination";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { generatePages } from "./helper";

const Pagination: React.FC<PaginationType> = (props) => {
  const { currentPage, itemsPerPage, totalItems, onPageClick } = props;

  // if page index start from 0 add 1
  const startIndex = 0;

  const handlePageCount = useCallback(
    (pageNumber: number) => () => {
      if (pageNumber === currentPage) {
        return;
      }
      onPageClick(pageNumber);
    },
    [currentPage, onPageClick]
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 0;

  const pageData = generatePages({
    currentPage,
    totalPages,
  });

  const paginationRangeLength = pageData?.length ?? 0;
  const lastPage =
    (pageData?.[paginationRangeLength - 1] as number) - startIndex;
  const isLastPage = currentPage === lastPage;
  const isFirstPage = currentPage - 1 === 0;

  // const pageButtonLabel = useMemo(() => "", []);

  if (!itemsPerPage || !totalItems) {
    return null;
  }
  return (
    <div className="flex justify-center mt-8 space-x-2">
      <Button
        onClick={handlePageCount(currentPage - 1)}
        disabled={isFirstPage}
        className="px-2 py-1 bg-beige text-white rounded disabled:opacity-50"
      >
        <Icon icon="leftArrow" size={20} />
      </Button>

      <Button className="px-4 py-2 bg-offWhite rounded font-semibold">
        {currentPage}
      </Button>

      <Button
        onClick={handlePageCount(currentPage + 1)}
        disabled={isLastPage}
        className="px-2 py-1 bg-beige text-white rounded disabled:opacity-50"
      >
        <Icon icon="rightArrow" size={20} />
      </Button>
    </div>
  );
};

export default Pagination;
