import React from 'react';
import CustomTable from '@/components/CustomTable';
import { cols, items } from '@/utils/tableData';

export const Task1: React.FC = () => {
    return (
        <div>
            <h1>Task 1</h1>
            <CustomTable items={ items } cols={ cols } pageSize={ 5 } />
        </div>
    )
}
