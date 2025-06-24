import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Plus, Calendar, User, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Task } from '../../types';
import { mockTasks } from '../../utils/mockData';
import { format } from 'date-fns';

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100 dark:bg-gray-800' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900' },
  { id: 'review', title: 'Review', color: 'bg-yellow-100 dark:bg-yellow-900' },
  { id: 'done', title: 'Done', color: 'bg-green-100 dark:bg-green-900' }
];

export const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    setTasks(prev => 
      prev.map(task => 
        task.id === draggableId 
          ? { ...task, status: destination.droppableId as Task['status'] }
          : task
      )
    );
  };

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const getPriorityVariant = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  const getPriorityIcon = (priority: Task['priority']) => {
    if (priority === 'high') return <AlertCircle className="w-3 h-3" />;
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Project Board</CardTitle>
          <Button variant="primary" size="sm" icon={Plus}>
            Add Task
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {columns.map(column => (
              <div key={column.id} className={`${column.color} rounded-lg p-4`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {column.title}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {getTasksByStatus(column.id as Task['status']).length}
                  </span>
                </div>

                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`
                        min-h-[200px] space-y-3
                        ${snapshot.isDraggingOver ? 'bg-blue-50 dark:bg-blue-900/20 rounded-lg' : ''}
                      `}
                    >
                      {getTasksByStatus(column.id as Task['status']).map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`
                                bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600
                                transition-all duration-200 hover:shadow-md cursor-pointer
                                ${snapshot.isDragging ? 'rotate-3 shadow-lg' : ''}
                              `}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                  {task.title}
                                </h4>
                                <div className="flex items-center">
                                  {getPriorityIcon(task.priority)}
                                  <Badge variant={getPriorityVariant(task.priority)} className="ml-1">
                                    {task.priority}
                                  </Badge>
                                </div>
                              </div>
                              
                              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                                {task.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={task.assignee.avatar}
                                    alt={task.assignee.name}
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="text-xs text-gray-600 dark:text-gray-400">
                                    {task.assignee.name.split(' ')[0]}
                                  </span>
                                </div>
                                
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {format(task.dueDate, 'MMM dd')}
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </CardContent>
    </Card>
  );
};