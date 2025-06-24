import React from 'react';
import { DataTable } from '../components/table/DataTable';
import { mockTableData } from '../utils/mockData';

export const Users: React.FC = () => {
  return (
    <div className="space-y-6">
      <DataTable title="User Management" data={mockTableData} />
    </div>
  );
};