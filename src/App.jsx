/* ============================================
   LegalPro - App Root Component with Routing
   ============================================ */
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

/* Lazy-loaded pages */
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ContactPage = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/* Page loading fallback */
const PageLoader = () => (
  <div className="loading-spinner-wrapper">
    <div className="loading-spinner"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Navbar />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/practice-areas" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* Floating action buttons */}
      <WhatsAppButton />
      <ScrollToTop showButton />
    </BrowserRouter>
  );
};

export default App;
