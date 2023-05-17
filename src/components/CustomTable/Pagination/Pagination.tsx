import React from "react";
import { PaginationProps } from "./types";
import "./styles.scss";

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onChange,
}) => {
    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;
    
    const onClickHandler = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onChange(page);
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={() => onClickHandler(currentPage - 1)}
                type="button"
                className="pagination__btn"
                disabled={isPrevDisabled}
            >
                Prev
            </button>
            <button
                onClick={() => onClickHandler(currentPage + 1)}
                type="button"
                className="pagination__btn"
                disabled={isNextDisabled}
            >
                Next
            </button>

            <div className="pagination__size">
                {`${currentPage} / ${totalPages}`}
            </div>
        </div>
    );
};
