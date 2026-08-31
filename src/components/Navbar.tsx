import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { SITE_CONTACT } from '../data/siteData';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  Compass, 
  ShieldCheck, 
  Mic2, 
  UserCheck 
} from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavigationPage; label: string; icon?: React.ElementType }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Kim' },
    { id: 'executive-advisory', label: 'Executive Advisory', icon: ShieldCheck },
    { id: 'coaching', label: 'Leadership & Wellbeing', icon: Compass },
    { id: 'speaking', label: 'Keynote Speaking', icon: Mic2 },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Advisory Bar */}
      <div className="bg-[#0F0F0F] text-[#FDFCF8]/70 text-xs py-2 px-4 border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/25 font-semibold text-[11px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              30+ Years Senior Advisory
            </span>
            <span className="hidden md:inline text-[#FDFCF8]/60 text-[11px] tracking-wider uppercase">
              Toronto, Ontario · Advising C-Suite & Boards Globally
            </span>
          </div>

          <div className="flex items-center gap-5 text-[12px]">
            <a 
              href={`tel:${SITE_CONTACT.phone}`} 
              className="flex items-center gap-1.5 text-[#FDFCF8]/80 hover:text-[#C5A059] transition-colors"
              title="Call Kim Nicole Thomas directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{SITE_CONTACT.phoneFormatted}</span>
            </a>
            <a 
              href={`mailto:${SITE_CONTACT.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-[#FDFCF8]/80 hover:text-[#C5A059] transition-colors"
              title="Email Kim Nicole Thomas"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{SITE_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#121212]/95 backdrop-blur-md shadow-2xl border-b border-[#FDFCF8]/10 py-3.5' 
          : 'bg-[#121212] border-b border-[#FDFCF8]/10 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Kim Nicole Thomas Homepage"
          >
            <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] text-[#C5A059] flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-md border border-[#C5A059]/30 group-hover:border-[#C5A059] transition-all">
              KT
            </div>
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[11px] uppercase tracking-widest font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-sm transition-all duration-200 ${
                    isActive
                      ? 'text-[#C5A059] bg-[#C5A059]/10 font-bold border border-[#C5A059]/30'
                      : 'text-[#FDFCF8]/70 hover:text-[#C5A059] hover:bg-[#FDFCF8]/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#C5A059] text-[#121212] text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all shadow-md active:scale-[0.98]"
            >
              <span>Work With Kim</span>
              <ArrowUpRight className="w-4 h-4 text-[#121212]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-sm bg-[#C5A059] text-[#121212] text-xs uppercase tracking-wider font-bold"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#FDFCF8] hover:bg-[#FDFCF8]/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#FDFCF8]/10 bg-[#161616] px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2">
            <div className="py-2.5 px-3 mb-3 rounded-md bg-[#1E1E1E] border border-[#C5A059]/20 text-xs text-[#FDFCF8]/80 flex items-center justify-between">
              <span className="font-medium uppercase tracking-wider text-[10px]">Direct Executive Inquiries</span>
              <a href={`tel:${SITE_CONTACT.phone}`} className="font-bold text-[#C5A059] hover:underline">
                {SITE_CONTACT.phoneFormatted}
              </a>
            </div>

            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-md text-left text-xs uppercase tracking-widest font-medium transition-colors ${
                    isActive
                      ? 'bg-[#C5A059] text-[#121212] font-bold'
                      : 'text-[#FDFCF8]/80 hover:text-[#C5A059] hover:bg-[#FDFCF8]/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-[#121212]' : 'text-[#C5A059]'}`} />}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#121212]' : 'text-[#FDFCF8]/40'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#FDFCF8]/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-sm bg-[#C5A059] text-[#121212] text-center text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Schedule Executive Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${SITE_CONTACT.phone}`}
                  className="py-2 px-3 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] text-[11px] uppercase tracking-wider font-semibold text-center border border-[#FDFCF8]/10 flex items-center justify-center gap-1.5 hover:border-[#C5A059]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>647-618-6311</span>
                </a>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="py-2 px-3 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] text-[11px] uppercase tracking-wider font-semibold text-center border border-[#FDFCF8]/10 flex items-center justify-center gap-1.5 hover:border-[#C5A059]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Email Kim</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
