import React from 'react';
import { CustomLineChart } from '../components/charts/LineChart';
import { CustomPieChart } from '../components/charts/PieChart';
import { mockChartData, mockPieData } from '../utils/mockData';

const performanceData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 }
];

const conversionData = [
  { name: 'Organic', value: 45, color: '#3B82F6' },
  { name: 'Social', value: 25, color: '#8B5CF6' },
  { name: 'Direct', value: 20, color: '#10B981' },
  { name: 'Referral', value: 10, color: '#F59E0B' }
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomLineChart title="Monthly Revenue" data={mockChartData} />
        <CustomLineChart title="Performance Metrics" data={performanceData} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomPieChart title="User Acquisition" data={mockPieData} />
        <CustomPieChart title="Conversion Sources" data={conversionData} />
      </div>
    </div>
  );
};