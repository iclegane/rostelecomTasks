import React from "react";
import { ucFirst } from "@/utils/ucFirst";
import { TableHeaderTypes } from "./types";
 
export const TableHeader: React.FC<TableHeaderTypes> = ({ cols }) => {
    return (
        <thead> 
            <tr>
                {cols.map((col: string) => (
                    <th key={`header-col-${col}`}>{ucFirst(col)}</th>
                ))}
            </tr>
        </thead>
    );
};
