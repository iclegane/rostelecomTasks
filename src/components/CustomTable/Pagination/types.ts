export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
}
