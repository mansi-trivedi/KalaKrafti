type PaginationType = {
  onPageClick: (pageNumber: number) => void;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};

export type { PaginationType };
