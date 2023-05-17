import React, { useMemo } from "react";
import { TableBodyProps } from "./types";
import { BodyItem } from "../BodyItem/BodyItem";

export const TableBody: React.FC<TableBodyProps> = ({ items, cols }) => {
    const tableRows = useMemo(() => {
        return items.map((item, rowIndex) => (
            <tr
                key={`row-${rowIndex}`}
                className={`custom-table__row ${
                    item.state ? `custom-table__row--${item.state}` : ""
                }`}
            >
                {cols.map((col, colIndex) => (
                    <td key={`col-${colIndex}`}>
                        <BodyItem item={item[col]} />
                    </td>
                ))}
            </tr>
        ));
    }, [items, cols]);

    return <tbody>{tableRows}</tbody>;
};
