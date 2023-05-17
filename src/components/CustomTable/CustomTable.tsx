import React, { useState, useMemo, useCallback } from "react";
import { CustomTableProps } from "./types";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./styles.scss";

export const CustomTable: React.FC<CustomTableProps> = ({ items, cols, pageSize }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const tableItems = useMemo(() => items.slice(startIndex, endIndex), [items, startIndex, endIndex]);

    const handlePageChange = useCallback((page: number) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
    }, [totalPages]);
      
    return (
        <div className="table-container">
            <table className="custom-table">
                <TableHeader cols={cols} />
                <TableBody items={tableItems} cols={cols} />
            </table>
            {pageSize && pageSize < items.length && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
            )}                        
        </div>
    );
};
