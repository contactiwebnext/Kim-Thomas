import React from 'react';
import { KEYNOTE_TOPICS, SITE_CONTACT, SPEAKER_KIT_DETAILS } from '../data/siteData';
import { 
  X, 
  Download, 
  Printer, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Mic2, 
  Globe, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpeakerOneSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SpeakerOneSheetModal: React.FC<SpeakerOneSheetModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="bg-[#141414] text-[#FDFCF8] w-full max-w-3xl rounded-xl border border-[#FDFCF8]/10 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#FDFCF8]/10 bg-[#0F0F0F]">
          <div className="flex items-center gap-2">
            <Mic2 className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Official Speaker One-Sheet & Kit
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#1E1E1E] border border-[#FDFCF8]/15 text-xs font-bold text-[#FDFCF8] hover:bg-[#2A2A2A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#FDFCF8]/60 hover:text-[#C5A059] hover:bg-[#FDFCF8]/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable One-Sheet Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 bg-[#141414] font-sans print:bg-white print:text-black print:p-0">
          {/* Header Banner */}
          <div className="border-b-2 border-[#C5A059] pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                Internationally Recognized Keynote Speaker & Executive Advisor
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-tight print:text-black">
                Kim Nicole Thomas
              </h1>
              <p className="text-sm text-[#FDFCF8]/70 mt-1 print:text-gray-700">
                30+ Years Guiding Senior Leaders in Healthcare, Technology, Education & Public Governance
              </p>
            </div>

            <div className="shrink-0 bg-[#181818] p-3.5 rounded-md border border-[#FDFCF8]/10 text-right space-y-1 text-xs text-[#FDFCF8]/80 print:bg-gray-100 print:text-black">
              <div className="font-bold text-[#C5A059] flex items-center justify-end gap-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>647-618-6311</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-[#FDFCF8]/70 print:text-gray-700">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>kimnthomas@gmail.com</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-[#FDFCF8]/50 print:text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Biography Synopsis */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#FDFCF8] print:text-black">
              Executive Speaker Biography
            </h2>
            <p className="text-sm text-[#FDFCF8]/80 leading-relaxed print:text-gray-800">
              Kim Nicole Thomas is an executive advisor, leadership and wellbeing coach, and internationally recognized keynote speaker with over 30 years of experience guiding senior leaders through complex, high-stakes environments across healthcare, technology, education, and institutional sectors. Working at the intersection of strategic decision-making, high-performance execution, and personal sustainability, Kim helps C-suite executives lead with clarity, sound judgment, and unwavering resilience—without burning out.
            </p>
            <p className="text-xs text-[#FDFCF8]/70 leading-relaxed print:text-gray-700">
              Founder of KimNicole Inc. and Director of Strategy, Partnerships & Innovation at GEM Agency. Background includes launching and directing inaugural TEDx initiatives, coaching speakers for major global platforms, and authoring high-level executive briefings. Armed with degrees from Queen’s University and specialized training in leadership coaching, conflict resolution, and trauma-informed practices.
            </p>
          </div>

          {/* Signature Keynote Themes */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#FDFCF8] print:text-black">
              Signature Keynote Presentations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KEYNOTE_TOPICS.map((topic) => (
                <div key={topic.id} className="p-4 rounded-md bg-[#181818] border border-[#FDFCF8]/10 space-y-2 print:bg-gray-50 print:border-gray-300">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                    {topic.themeCategory}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#FDFCF8] leading-snug print:text-black">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#FDFCF8]/70 leading-relaxed print:text-gray-700">
                    {topic.tagline}
                  </p>
                  <div className="pt-2 border-t border-[#FDFCF8]/10 text-[11px] text-[#C5A059] font-medium print:text-gray-800">
                    Available Formats: {topic.durationOptions.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors Served & Audience Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#181818] p-5 rounded-md border border-[#FDFCF8]/10 print:bg-gray-50 print:border-gray-300">
            <div>
              <h3 className="font-serif text-base font-bold text-[#FDFCF8] mb-2 print:text-black">
                Sectors Served
              </h3>
              <ul className="text-xs text-[#FDFCF8]/70 space-y-1.5 print:text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Healthcare Networks & Chief Medical Officers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Enterprise SaaS & High-Growth Technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Higher Education Deans & Provosts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Crown Corporations & Public Governance Boards</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-[#FDFCF8] mb-2 print:text-black">
                Event Logistics & AV Rider
              </h3>
              <ul className="text-xs text-[#FDFCF8]/70 space-y-1.5 print:text-gray-700">
                <li>• Wireless headset or lavalier mic</li>
                <li>• HDMI connection with presentation audio</li>
                <li>• Confidence countdown monitor</li>
                <li>• Global travel: In-person & live virtual keynotes</li>
              </ul>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-4 rounded-md bg-[#181818] border-l-4 border-[#C5A059] text-xs text-[#FDFCF8]/80 italic print:bg-gray-50 print:text-gray-800">
            "Kim received a standing ovation from 600 university presidents and provosts. Her ability to address the pressures modern leaders face while providing actionable, human-centered pathways forward is extraordinary."
            <div className="text-[11px] font-bold text-[#C5A059] not-italic mt-1">
              — Prof. Eleanor Vance, Ph.D., Provost & VP Academic
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#FDFCF8]/10 bg-[#0F0F0F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#FDFCF8]/60">
            Direct booking line: <span className="font-bold text-[#C5A059]">647-618-6311</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors"
          >
            <span>Hold Date / Check Speaker Availability</span>
            <ArrowUpRight className="w-4 h-4 text-[#121212]" />
          </button>
        </div>
      </div>
    </div>
  );
};
