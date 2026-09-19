import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { GmailConfirmModal } from './components/GmailConfirmModal';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { AboutPage } from './pages/AboutPage';
import { CredentialsPage } from './pages/CredentialsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProfilePage } from './pages/ProfilePage';
import { ContactPage } from './pages/ContactPage';

function AnimatedRoutes({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage onOpenInquiry={onOpenInquiry} />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/credentials" element={<CredentialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage onOpenInquiry={onOpenInquiry} />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const location = useLocation();

  const handleOpenInquiry = () => setInquiryModalOpen(true);
  const handleCloseInquiry = () => setInquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F5F5F3] selection:bg-[#D9383A] selection:text-[#F5F5F3] relative flex flex-col justify-between">
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Global Multi-Page Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        <AnimatedRoutes onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Global Multi-Page Editorial Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Consultation Inquiry Modal (fresh key per route prevents stale overlay) */}
      <GmailConfirmModal
        key={location.pathname}
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
      />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
