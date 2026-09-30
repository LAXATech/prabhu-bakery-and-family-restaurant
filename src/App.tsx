import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Home } from './pages/Home';
import { MenuPage } from './pages/MenuPage';
import { CustomCakesPage } from './pages/CustomCakesPage';
import { PartiesPage } from './pages/PartiesPage';
import { ContactPage } from './pages/ContactPage';
import { Check } from 'lucide-react';

// Scroll to top automatically when route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Global Toast Banner
const GlobalToast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-4 z-50 animate-fade-in">
      <div className="bg-[#3B2418] text-white px-4 py-3 rounded-card shadow-soft-lg flex items-center gap-2.5 border border-white/10">
        <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <span className="text-xs font-semibold">{toastMessage}</span>
      </div>
    </div>
  );
};

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#3B2418]">
      <ScrollToTop />
      <GlobalToast />
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/custom-cakes" element={<CustomCakesPage />} />
          <Route path="/parties" element={<PartiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer />
      <MobileStickyBar />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
