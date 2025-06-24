import React from 'react';
import { KanbanBoard } from '../components/kanban/KanbanBoard';

export const KanbanPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <KanbanBoard />
    </div>
  );
};