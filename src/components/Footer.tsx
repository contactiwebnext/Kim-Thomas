import React from 'react';
import { NavigationPage } from '../types';
import { SITE_CONTACT } from '../data/siteData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Compass, 
  Mic2, 
  CheckCircle2, 
  Award,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
  onOpenSpeakerKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenSpeakerKit
}) => {
  return (
    <footer className="bg-[#0F0F0F] text-[#FDFCF8]/80 pt-16 pb-12 border-t border-[#FDFCF8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Box */}
        <div className="bg-[#181818] rounded-xl p-8 md:p-10 mb-16 border border-[#FDFCF8]/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A059]/25">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                Confidential Executive Inquiries
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FDFCF8] font-semibold tracking-tight mb-3">
                Ready to navigate high-stakes complexity with clarity and composure?
              </h3>
              <p className="text-[#FDFCF8]/70 text-base max-w-2xl leading-relaxed">
                Connect with Kim Nicole Thomas for a confidential discussion regarding executive advisory retainers, 1:1 leadership coaching, or keynote speaking engagements for your upcoming summit.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Schedule Confidential Dialogue</span>
                <ArrowUpRight className="w-4 h-4 text-[#121212]" />
              </button>
              <button
                onClick={onOpenSpeakerKit}
                className="w-full py-3 px-6 rounded-sm bg-[#222222] text-[#FDFCF8] font-medium text-xs uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors border border-[#FDFCF8]/15 flex items-center justify-center gap-2"
              >
                <span>View Speaker One-Sheet</span>
                <Mic2 className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FDFCF8]/10">
          {/* Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] text-[#C5A059] flex items-center justify-center font-serif text-xl font-bold border border-[#C5A059]/30">
                KT
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#C5A059] block tracking-wider uppercase">
                  Kim Nicole Thomas
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FDFCF8]/60 font-medium">
                  Executive Leadership & Wellbeing Coach | Strategic Advisor | Keynote Speaker
                </span>
              </div>
            </div>

            <p className="text-[#FDFCF8]/70 text-sm leading-relaxed pr-4">
              Guiding senior leaders and organizations through complexity with clarity, sound judgment, and unwavering resilience—without burning out. Founder of KimNicole Inc. and Director at GEM Agency.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#FDFCF8]/60">
              <span className="px-2.5 py-1 rounded-sm bg-[#181818] border border-[#FDFCF8]/10">Toronto, Ontario</span>
              <span className="px-2.5 py-1 rounded-sm bg-[#181818] border border-[#FDFCF8]/10">North America & Global Scope</span>
              <span className="px-2.5 py-1 rounded-sm bg-[#181818] border border-[#FDFCF8]/10">30+ Years Practice</span>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base text-[#FDFCF8] font-semibold tracking-wide border-b border-[#FDFCF8]/10 pb-2 uppercase text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FDFCF8]/70">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  About Kim Nicole Thomas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('executive-advisory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  Executive Advisory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('coaching'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  Leadership & Wellbeing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('speaking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  Keynote Speaking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base text-[#FDFCF8] font-semibold tracking-wide border-b border-[#FDFCF8]/10 pb-2 uppercase text-xs">
              Practice Areas
            </h4>
            <div className="space-y-3 text-xs">
              <div 
                onClick={() => onNavigate('executive-advisory')}
                className="cursor-pointer group p-3 rounded-md bg-[#181818] hover:bg-[#202020] border border-[#FDFCF8]/10 hover:border-[#C5A059]/40 transition-all"
              >
                <div className="flex items-center gap-2 font-semibold text-[#FDFCF8] group-hover:text-[#C5A059]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Executive Advisory</span>
                </div>
                <p className="text-[#FDFCF8]/60 mt-1 text-[11px]">
                  C-Suite & Board confidential counsel during high-stakes transitions.
                </p>
              </div>

              <div 
                onClick={() => onNavigate('coaching')}
                className="cursor-pointer group p-3 rounded-md bg-[#181818] hover:bg-[#202020] border border-[#FDFCF8]/10 hover:border-[#C5A059]/40 transition-all"
              >
                <div className="flex items-center gap-2 font-semibold text-[#FDFCF8] group-hover:text-[#C5A059]">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Leadership & Wellbeing</span>
                </div>
                <p className="text-[#FDFCF8]/60 mt-1 text-[11px]">
                  Strengthening sustainable capacity, resilience, and executive gravitas.
                </p>
              </div>

              <div 
                onClick={() => onNavigate('speaking')}
                className="cursor-pointer group p-3 rounded-md bg-[#181818] hover:bg-[#202020] border border-[#FDFCF8]/10 hover:border-[#C5A059]/40 transition-all"
              >
                <div className="flex items-center gap-2 font-semibold text-[#FDFCF8] group-hover:text-[#C5A059]">
                  <Mic2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Keynote Speaking</span>
                </div>
                <p className="text-[#FDFCF8]/60 mt-1 text-[11px]">
                  Internationally recognized keynotes for conferences and global summits.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Contact Credentials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base text-[#FDFCF8] font-semibold tracking-wide border-b border-[#FDFCF8]/10 pb-2 uppercase text-xs">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${SITE_CONTACT.phone}`}
                className="flex items-start gap-3 p-3 rounded-md bg-[#181818] hover:bg-[#202020] border border-[#FDFCF8]/10 hover:border-[#C5A059]/40 transition-all group"
              >
                <Phone className="w-4 h-4 text-[#C5A059] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs text-[#FDFCF8]/50 block uppercase tracking-wider text-[10px]">Direct Executive Line</span>
                  <span className="font-bold text-[#FDFCF8] group-hover:text-[#C5A059] transition-colors">{SITE_CONTACT.phoneFormatted}</span>
                </div>
              </a>

              <a 
                href={`mailto:${SITE_CONTACT.email}`}
                className="flex items-start gap-3 p-3 rounded-md bg-[#181818] hover:bg-[#202020] border border-[#FDFCF8]/10 hover:border-[#C5A059]/40 transition-all group"
              >
                <Mail className="w-4 h-4 text-[#C5A059] mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <span className="text-xs text-[#FDFCF8]/50 block uppercase tracking-wider text-[10px]">Confidential Email</span>
                  <span className="font-bold text-[#FDFCF8] group-hover:text-[#C5A059] truncate block transition-colors">{SITE_CONTACT.email}</span>
                </div>
              </a>

              <a 
                href={SITE_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-md bg-[#181818] hover:bg-[#202020] border border-[#FDFCF8]/10 hover:border-[#C5A059]/40 transition-all group"
              >
                <Globe className="w-4 h-4 text-[#C5A059] mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <span className="text-xs text-[#FDFCF8]/50 block uppercase tracking-wider text-[10px]">LinkedIn Profile</span>
                  <span className="font-bold text-[#FDFCF8] group-hover:text-[#C5A059] truncate block transition-colors">{SITE_CONTACT.linkedinDisplay}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-md bg-[#181818] border border-[#FDFCF8]/10">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5" />
                <div>
                  <span className="text-xs text-[#FDFCF8]/50 block uppercase tracking-wider text-[10px]">Practice Location</span>
                  <span className="font-medium text-[#FDFCF8]">{SITE_CONTACT.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Developer Credit & Legal */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-3 text-xs text-[#FDFCF8]/50">
          <p>
            © {new Date().getFullYear()} Kim Nicole Thomas. All Rights Reserved. Executive Advisor & Leadership Coach.
          </p>
          <div className="flex items-center gap-4 text-[#FDFCF8]/40">
            <span>Healthcare</span>
            <span>•</span>
            <span>Technology</span>
            <span>•</span>
            <span>Education</span>
            <span>•</span>
            <span>Institutional Governance</span>
          </div>
          <div className="pt-2 text-sm text-[#FDFCF8]/70">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:text-[#FDFCF8] font-bold underline underline-offset-4 transition-colors">iWebNext</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
