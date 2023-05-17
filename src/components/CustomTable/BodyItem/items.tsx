import React from "react";
import { formattedDate } from "@/utils/formattedDate";

export const BooleanItem: React.FC<{ item: boolean }> = ({ item }) => {
    return <span>{item ? "✓" : "□"}</span>;
};

export const DateItem: React.FC<{ item: Date }> = ({ item }) => {
    return <span>{formattedDate(item)}</span>;
};

export const ArrayItem: React.FC<{ item: string[] }> = ({ item }) => {
    return (
        <ul>
            {item.map((el, index) => (
                <li key={index}>{el?.toString()}</li>
            ))}
        </ul>
    );
};

export const LinkItem: React.FC<{ item: string }> = ({ item }) => {
    return <a href={item}>{item}</a>;
};

export const OtherItem: React.FC<{ item: string | null | undefined }> = ({ item }) => {
    if (item === null || item === undefined) {
        return <span>-</span>;
    }

    return <span>{item?.toString()}</span>;
};
