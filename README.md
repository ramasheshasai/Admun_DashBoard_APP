# Admin Pro Dashboard

A modern, responsive React admin dashboard application with customizable themes, interactive charts, data tables, calendar, and Kanban board functionality.

## 🚀 Live Demo

**Deployed Application:** [https://dazzling-raindrop-fb48db.netlify.app](https://dazzling-raindrop-fb48db.netlify.app)

## ✨ Features

### 🎨 Modern Design
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Apple-level Design Aesthetics** - Clean, sophisticated visual presentation
- **Smooth Animations** - Thoughtful micro-interactions and transitions

### 📊 Dashboard Components
- **Interactive Charts** - Line charts and pie charts with Recharts
- **Data Tables** - Sortable, searchable tables with pagination
- **Statistics Cards** - Key metrics with trend indicators
- **Recent Activity Feed** - Real-time activity tracking

### 📅 Calendar Integration
- **Monthly Calendar View** - Navigate through months with ease
- **Event Management** - View and manage events by date
- **Event Types** - Meetings, deadlines, and general events
- **Event Sidebar** - Detailed event information panel

### 📋 Kanban Board
- **Drag & Drop** - Intuitive task management with react-beautiful-dnd
- **Task Columns** - To Do, In Progress, Review, Done
- **Priority Levels** - High, medium, low priority indicators
- **Assignee Management** - User assignment with avatars
- **Due Date Tracking** - Visual due date indicators

### 👥 User Management
- **User Tables** - Comprehensive user data management
- **Status Tracking** - Active, inactive, pending user states
- **Role Management** - Different user roles and permissions
- **Revenue Tracking** - User-specific revenue metrics

### ⚙️ Settings & Customization
- **Theme Preferences** - Light/dark mode toggle
- **Account Settings** - User profile management
- **Responsive Sidebar** - Collapsible navigation menu

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Recharts** - Responsive chart library
- **React Beautiful DnD** - Drag and drop functionality
- **Lucide React** - Beautiful icon library
- **Date-fns** - Modern date utility library

## 🏗️ Project Structure

```
src/
├── components/
│   ├── calendar/          # Calendar components
│   ├── charts/            # Chart components (Line, Pie)
│   ├── dashboard/         # Dashboard-specific components
│   ├── kanban/            # Kanban board components
│   ├── layout/            # Layout components (Header, Sidebar)
│   ├── table/             # Data table components
│   └── ui/                # Reusable UI components
├── contexts/              # React contexts (Theme)
├── pages/                 # Page components
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions and mock data
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd admin-pro-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎨 Theme System

The application supports both light and dark themes with:
- Persistent theme preferences (localStorage)
- Smooth transitions between themes
- Consistent color schemes across all components
- Proper contrast ratios for accessibility

## 📊 Data Management

The application uses mock data for demonstration purposes, including:
- User profiles and statistics
- Chart data for analytics
- Calendar events
- Kanban tasks
- Activity logs

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to the sidebar navigation in `src/components/layout/Sidebar.tsx`
3. Include the page in the main App component routing

### Styling
- Uses Tailwind CSS for styling
- Custom components follow a consistent design system
- Dark mode classes are included for all components

## 📈 Performance Features

- **Code Splitting** - Optimized bundle sizes
- **Lazy Loading** - Components loaded on demand
- **Optimized Images** - Responsive image loading
- **Efficient Rendering** - React best practices implemented

## 🌐 Deployment

The application is deployed on Netlify with automatic deployments from the main branch.

**Live URL:** [https://dazzling-raindrop-fb48db.netlify.app](https://dazzling-raindrop-fb48db.netlify.app)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**