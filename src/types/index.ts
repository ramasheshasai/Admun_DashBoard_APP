export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: User;
  dueDate: Date;
  createdAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  type: 'meeting' | 'deadline' | 'event';
  color: string;
}

export interface TableData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  lastActive: Date;
  revenue: number;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export type Theme = 'light' | 'dark';