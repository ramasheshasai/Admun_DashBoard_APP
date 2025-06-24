import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { formatDistanceToNow } from 'date-fns';

interface Activity {
  id: string;
  action: string;
  user: string;
  timestamp: Date;
  type: 'user' | 'system' | 'payment';
}

const mockActivities: Activity[] = [
  {
    id: '1',
    action: 'New user registered',
    user: 'Alice Cooper',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: 'user'
  },
  {
    id: '2',
    action: 'Payment processed',
    user: 'System',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    type: 'payment'
  },
  {
    id: '3',
    action: 'Profile updated',
    user: 'Bob Wilson',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    type: 'user'
  }
];

export const RecentActivity: React.FC = () => {
  const getBadgeVariant = (type: Activity['type']) => {
    switch (type) {
      case 'user': return 'info';
      case 'payment': return 'success';
      case 'system': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  by {activity.user}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={getBadgeVariant(activity.type)}>
                  {activity.type}
                </Badge>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};