import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
const AppContent = lazy(() => import('./components/AppContent'));

function App() {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppContent />
        </Suspense>
        </BrowserRouter>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;