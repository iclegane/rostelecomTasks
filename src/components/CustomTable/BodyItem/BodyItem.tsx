import React from "react";
import { isLink } from "@/utils/isLink";
import { BodyItemProp } from "./types";
import { ArrayItem, BooleanItem, DateItem, LinkItem, OtherItem } from "./items";

export const BodyItem: React.FC<BodyItemProp> = ({ item }) => {
    if (typeof item === "boolean") {
        return <BooleanItem item={item} />;
    }

    if (item instanceof Date) {
        return <DateItem item={item} />;
    }

    if (Array.isArray(item)) {
        return <ArrayItem item={item} />;
    }

    if (typeof item === "string" && isLink(item)) {
        return <LinkItem item={item} />;
    }

    return <OtherItem item={item} />;
};
