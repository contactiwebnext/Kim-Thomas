/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavigationPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AdvisoryPage } from './pages/AdvisoryPage';
import { CoachingPage } from './pages/CoachingPage';
import { SpeakingPage } from './pages/SpeakingPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/ConsultationModal';
import { SpeakerReelModal } from './components/SpeakerReelModal';
import { SpeakerOneSheetModal } from './components/SpeakerOneSheetModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [isSpeakerKitOpen, setIsSpeakerKitOpen] = useState(false);
  const [bookingReason, setBookingReason] = useState<string>('executive-advisory');

  // Handle URL hashes or browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationPage;
      if (['home', 'about', 'executive-advisory', 'coaching', 'speaking', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithReason = (reason: string = 'executive-advisory') => {
    setBookingReason(reason);
    setIsBookingOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithReason('executive-advisory')}
            onOpenReel={() => setIsReelOpen(true)}
            onOpenSpeakerKit={() => setIsSpeakerKitOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithReason('general-inquiry')}
            onOpenSpeakerKit={() => setIsSpeakerKitOpen(true)}
          />
        );
      case 'executive-advisory':
        return (
          <AdvisoryPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithReason('executive-advisory')}
          />
        );
      case 'coaching':
        return (
          <CoachingPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithReason('leadership-coaching')}
          />
        );
      case 'speaking':
        return (
          <SpeakingPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithReason('keynote-speaking')}
            onOpenReel={() => setIsReelOpen(true)}
            onOpenSpeakerKit={() => setIsSpeakerKitOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenBooking={() => handleOpenBookingWithReason('general-inquiry')}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithReason('executive-advisory')}
            onOpenReel={() => setIsReelOpen(true)}
            onOpenSpeakerKit={() => setIsSpeakerKitOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#FDFCF8] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#121212]">
      {/* Header & Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithReason('executive-advisory')}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithReason('executive-advisory')}
      />

      {/* Modals & Interactive Overlays */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultReason={bookingReason}
      />

      <SpeakerReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
        onOpenBooking={() => {
          setIsReelOpen(false);
          handleOpenBookingWithReason('keynote-speaking');
        }}
      />

      <SpeakerOneSheetModal
        isOpen={isSpeakerKitOpen}
        onClose={() => setIsSpeakerKitOpen(false)}
        onOpenBooking={() => {
          setIsSpeakerKitOpen(false);
          handleOpenBookingWithReason('keynote-speaking');
        }}
      />

      {/* AI Executive Advisor Chatbot Widget */}
      <ChatbotWidget
        onOpenBooking={() => handleOpenBookingWithReason('executive-advisory')}
      />

      {/* Smooth Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
