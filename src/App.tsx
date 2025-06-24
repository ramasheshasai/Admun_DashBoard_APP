import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Users } from './pages/Users';
import { CalendarPage } from './pages/CalendarPage';
import { KanbanPage } from './pages/KanbanPage';
import { Settings } from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'analytics': return <Analytics />;
      case 'users': return <Users />;
      case 'calendar': return <CalendarPage />;
      case 'kanban': return <KanbanPage />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <div className="lg:ml-64 transition-all duration-300">
          <Header />
          
          <main className="p-6">
            {renderPage()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;