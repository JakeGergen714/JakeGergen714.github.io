import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomeApple from './pages/HomeApple';
import FAQ from './pages/FAQ.tsx';
import Layout from './components/Layout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomeApple />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>
);
