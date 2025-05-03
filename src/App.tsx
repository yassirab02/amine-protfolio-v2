import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from './components/LoadingSpinner'; // Create a simple loading component

// Lazy load all page components
const HomePage = lazy(() => import('./pages/HomePage'));
const StillsPage = lazy(() => import('./pages/StillsPage'));
const MotionPage = lazy(() => import('./pages/MotionPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            } 
          />
          <Route 
            path="stills" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <StillsPage />
              </Suspense>
            } 
          />
          <Route 
            path="motion" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MotionPage />
              </Suspense>
            } 
          />
          <Route 
            path="about" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            } 
          />
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            } 
          />
          <Route 
            path="portfolio" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PortfolioPage />
              </Suspense>
            } 
          />
          <Route 
            path="services" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ServicesPage />
              </Suspense>
            } 
          />
          <Route 
            path="*" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundPage />
              </Suspense>
            } 
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;