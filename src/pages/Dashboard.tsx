import React from 'react';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { CustomLineChart } from '../components/charts/LineChart';
import { CustomPieChart } from '../components/charts/PieChart';
import { mockChartData, mockPieData } from '../utils/mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="12,420"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Revenue"
          value="$124,590"
          change="+8% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <StatsCard
          title="Orders"
          value="3,210"
          change="-3% from last month"
          changeType="negative"
          icon={ShoppingCart}
        />
        <StatsCard
          title="Growth"
          value="24.5%"
          change="+5% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomLineChart title="Revenue Overview" data={mockChartData} />
        <CustomPieChart title="Traffic Sources" data={mockPieData} />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};