export type CustomTableItemValue = boolean | Date | string | string[] | null | undefined;

export type CustomTableRowState = "danger" | "warning" | "normal";

export type CustomTableItem = {
    [key: string]: CustomTableItemValue;
    state?: CustomTableRowState;
}

export type CustomTableCol = string;
 
export interface CustomTableProps {
    items: CustomTableItem[];
    cols: CustomTableCol[];
    pageSize: number;
}
