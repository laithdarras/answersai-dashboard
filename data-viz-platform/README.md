# Data Visualization Platform Dashboard

A modern, responsive dashboard for charging station analytics built with React, TypeScript, and Chart.js. This project demonstrates clean architecture, performance optimization, and professional UI/UX design principles.

## Project Overview

This is a **take-home assignment for AnswersAI** that showcases:

- **Real-time data visualization** with interactive charts
- **Responsive design** that works across all devices
- **Dark theme UI** with professional styling
- **Performance-optimized** components with minimal bundle size
- **Type-safe** development with TypeScript
- **Modern React patterns** with hooks and functional components

## Features

### Core Dashboard Features

- **KPI Cards**: Responsive grid layout with Revenue, Cost, Efficiency, and Utilization metrics
- **Interactive Chart**: Monthly revenue trend visualization with Chart.js
- **Variable Management**: Slide-over panel for toggling chart variables
- **Responsive Layout**: Adaptive design for desktop, tablet, and mobile

### UI/UX Enhancements

- **Dark Theme**: Professional dark color scheme (#1a1a1a background)
- **Hover Effects**: Subtle animations and transitions
- **Tooltips**: Contextual information on hover
- **Clean Typography**: Consistent font weights and spacing
- **Box Shadows**: Depth and visual hierarchy

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **Styled Components**: CSS-in-JS for maintainable styling
- **State Management**: Zustand for lightweight state management
- **Performance**: Optimized chart rendering and minimal re-renders
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd data-viz-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## Technical Decisions and Trade-offs

### **Architecture Choices**

- **React 18**: Latest features with concurrent rendering
- **TypeScript**: Type safety over JavaScript for better developer experience
- **Vite**: Fast build tool over Create React App for better performance
- **Styled Components**: CSS-in-JS over CSS modules for dynamic styling

### **State Management**

- **Zustand**: Lightweight over Redux for simple state needs
- **Local State**: React hooks for component-specific state
- **No Context**: Avoided prop drilling without over-engineering

### **Chart Library**

- **Chart.js**: Mature, well-documented over D3.js for faster development
- **React-Chartjs-2**: React wrapper for seamless integration
- **Performance**: Optimized chart options for smooth rendering

### **Styling Approach**

- **Dark Theme**: Professional appearance over light theme
- **CSS Grid**: Modern layout over flexbox for complex grids
- **Responsive Design**: Mobile-first approach with progressive enhancement

### **Performance Optimizations**

- **Minimal Dependencies**: Only essential packages included
- **Code Splitting**: Vite handles automatic code splitting
- **Optimized Charts**: Disabled unnecessary features for speed
- **No Animations**: Removed heavy animations for better performance

## Limitations

### **Current Limitations**

- **Static Data**: Uses mock data instead of real API integration
- **No Authentication**: No user login/registration system
- **Limited Variables**: Only 4 predefined variables available
- **No Data Export**: Cannot export charts or data
- **No Real-time Updates**: Data doesn't update automatically

### **Technical Constraints**

- **Chart.js Limitations**: Some advanced features not implemented
- **Browser Support**: Modern browsers only (ES2020+)
- **No Offline Support**: Requires internet connection for dependencies

## ⏱Time Spent

### **Development Timeline**

- **Initial Setup**: 20 minutes (project structure, dependencies)
- **Core Dashboard**: 1.5 hours (layout, KPI cards, basic styling)
- **Chart Integration**: 1 hour (Chart.js setup, data visualization)
- **Responsive Design**: 45 minutes (mobile optimization, breakpoints)
- **UI Polish**: 45 minutes (animations, hover effects, final styling)
- **Performance Optimization**: 20 minutes (chart optimization, bundle size)
- **Documentation**: 20 minutes (README, code comments)

**Total Time**: ~4.5 hours

## Folder Structure

```
data-viz-platform/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Chart.tsx      # Chart.js visualization component
│   │   ├── SlideOver.tsx  # Variable management panel
│   │   └── TooltipCard.tsx # Hover tooltip component
│   ├── hooks/             # Custom React hooks
│   │   └── useFirebaseAuth.ts # Authentication hook (unused)
│   ├── lib/               # Third-party library configurations
│   │   └── firebase.ts    # Firebase setup (unused)
│   ├── pages/             # Page components
│   │   ├── Dashboard.tsx  # Main dashboard page
│   │   └── Login.tsx      # Login page (unused)
│   ├── store/             # State management
│   │   └── useDashboardStore.ts # Zustand store for dashboard state
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## Key Components

### **Dashboard.tsx**

- Main dashboard layout with responsive grid
- KPI cards with hover effects
- Header with variable selector and edit button
- Chart container with proper spacing

### **Chart.tsx**

- Lightweight Chart.js implementation
- Fixed height (250px) for consistent layout
- Optimized for performance with minimal features
- Clean styling with dark theme integration

### **SlideOver.tsx**

- Variable management panel
- Smooth slide-in animation
- Checkbox controls with tooltips
- Responsive design for mobile

### **useDashboardStore.ts**

- Zustand store for application state
- Variable management and selection
- Clean, type-safe state updates

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Attribution

This project was created as a **take-home assignment for AnswersAI**. It demonstrates modern React development practices, clean architecture, and professional UI/UX design principles.

### **Technologies Used**

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Chart.js** for data visualization
- **Styled Components** for styling
- **Zustand** for state management

### **Design Principles**

- **Mobile-first** responsive design
- **Performance-first** optimization
- **Type-safe** development
- **Clean, maintainable** code structure

---

**Built with ❤️ for AnswersAI**