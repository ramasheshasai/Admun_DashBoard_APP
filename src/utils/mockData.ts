import { addDays, subDays, addHours } from 'date-fns';
import { User, Task, Event, TableData, ChartData } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Admin'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Developer'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@example.com',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Designer'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design system updates',
    description: 'Update the design system with new components',
    status: 'todo',
    priority: 'high',
    assignee: mockUsers[2],
    dueDate: addDays(new Date(), 3),
    createdAt: subDays(new Date(), 2)
  },
  {
    id: '2',
    title: 'API integration',
    description: 'Integrate payment gateway API',
    status: 'in-progress',
    priority: 'high',
    assignee: mockUsers[1],
    dueDate: addDays(new Date(), 5),
    createdAt: subDays(new Date(), 1)
  },
  {
    id: '3',
    title: 'User testing',
    description: 'Conduct user testing sessions',
    status: 'review',
    priority: 'medium',
    assignee: mockUsers[0],
    dueDate: addDays(new Date(), 7),
    createdAt: subDays(new Date(), 3)
  },
  {
    id: '4',
    title: 'Documentation',
    description: 'Update project documentation',
    status: 'done',
    priority: 'low',
    assignee: mockUsers[1],
    dueDate: addDays(new Date(), 1),
    createdAt: subDays(new Date(), 5)
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    description: 'Weekly team sync',
    start: addHours(new Date(), 2),
    end: addHours(new Date(), 3),
    type: 'meeting',
    color: '#3B82F6'
  },
  {
    id: '2',
    title: 'Project Deadline',
    description: 'Q1 project deadline',
    start: addDays(new Date(), 5),
    end: addDays(new Date(), 5),
    type: 'deadline',
    color: '#EF4444'
  },
  {
    id: '3',
    title: 'Conference',
    description: 'Tech conference presentation',
    start: addDays(new Date(), 10),
    end: addDays(new Date(), 12),
    type: 'event',
    color: '#10B981'
  }
];

export const mockTableData: TableData[] = [
  {
    id: '1',
    name: 'Alice Cooper',
    email: 'alice@example.com',
    status: 'active',
    role: 'Manager',
    lastActive: subDays(new Date(), 1),
    revenue: 15420
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    status: 'inactive',
    role: 'Developer',
    lastActive: subDays(new Date(), 7),
    revenue: 8960
  },
  {
    id: '3',
    name: 'Carol Smith',
    email: 'carol@example.com',
    status: 'pending',
    role: 'Designer',
    lastActive: subDays(new Date(), 2),
    revenue: 12340
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@example.com',
    status: 'active',
    role: 'Analyst',
    lastActive: new Date(),
    revenue: 19870
  }
];

export const mockChartData: ChartData[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 }
];

export const mockPieData: ChartData[] = [
  { name: 'Desktop', value: 400, color: '#3B82F6' },
  { name: 'Mobile', value: 300, color: '#8B5CF6' },
  { name: 'Tablet', value: 200, color: '#10B981' },
  { name: 'Other', value: 100, color: '#F59E0B' }
];