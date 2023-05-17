import { CustomTableCol, CustomTableItem } from "@/components/CustomTable/types";

export const items: CustomTableItem[] = [
    {field1: true, field2: ['item1', 'item2'], field3: new Date(), state: 'normal'},
    {field1: false, field2: 'https://example.com', field3: new Date()},
    {field1: false, field2: 'item1', field3: new Date()},
    {field1: true, field2: 'item2', field3: new Date()},
    {field1: false, field2: 'item3', field3: new Date(), state: 'danger'},
    {field1: true, field2: 'item4', field3: new Date()},
    {field1: true, field2: 'item5', field3: new Date(), state: 'warning'},
    {field1: false, field2: 'item6', field3: new Date()},
];

export const cols: CustomTableCol[] = ['field1', 'field2', 'field3'];
