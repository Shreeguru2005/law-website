/* ============================================
   LegalPro - Application Entry Point
   ============================================ */
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './css/global.css';

/* Loading fallback */
const Spinner = () => (
  <div className="loading-spinner-wrapper">
    <div className="loading-spinner"></div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </StrictMode>
);
