import React, { useState } from 'react';
import { KEYNOTE_TOPICS, SITE_CONTACT } from '../data/siteData';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Award, 
  Calendar, 
  Users, 
  ArrowUpRight,
  Maximize2,
  CheckCircle2,
  Tv
} from 'lucide-react';

interface SpeakerReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SpeakerReelModal: React.FC<SpeakerReelModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  if (!isOpen) return null;

  const clips = [
    {
      title: "Keynote Highlight: The Courage of Clarity in Crisis",
      event: "Global Executive Healthcare Symposium (Toronto)",
      duration: "3:45",
      takeaway: "How senior leadership teams distinguish between urgent operational noise and pivotal strategic imperatives when the public eye is watching.",
      quote: "When complexity hits a fever pitch, an executive's greatest gift to their organization is not frantic speed—it is unshakeable, grounded composure."
    },
    {
      title: "Keynote Highlight: Sustainable Executive Wellbeing",
      event: "North American Enterprise Technology Summit",
      duration: "4:12",
      takeaway: "Debunking the sacrificial leadership myth and demonstrating how nervous system resilience unlocks breakthrough cognitive capacity.",
      quote: "You cannot govern a billion-dollar transformation if your own nervous system is operating in a state of continuous emergency."
    },
    {
      title: "Executive Masterclass: Leading Through Institutional Friction",
      event: "Academic Governance & Higher Education Forum",
      duration: "5:20",
      takeaway: "Frameworks for bridging administrative mandates, faculty governance, and student expectations without losing institutional soul.",
      quote: "True authority isn't declared by executive title; it is earned through candor, empathy, and transparent integrity."
    }
  ];

  const currentClip = clips[activeClipIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#141414] text-[#FDFCF8] w-full max-w-4xl rounded-xl border border-[#FDFCF8]/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#FDFCF8]/10 bg-[#0F0F0F]">
          <div className="flex items-center gap-2.5">
            <Tv className="w-5 h-5 text-[#C5A059]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#FDFCF8] tracking-tight">
                Kim Nicole Thomas — Keynote Presentation Reel
              </h3>
              <p className="text-xs text-[#FDFCF8]/60">
                Live Stage Presentations & International Keynote Moments
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#FDFCF8]/60 hover:text-[#C5A059] hover:bg-[#FDFCF8]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Mockup / Presentation Stage Simulation */}
        <div className="relative bg-[#0A0A0A] aspect-video w-full flex items-center justify-center overflow-hidden group">
          {/* Visual Presentation Background Simulation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F] via-[#1A1A1A] to-[#141414] opacity-95"></div>
          
          {/* Subtle Stage Lighting FX */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Presentation Slide / Stage Graphic */}
          <div className="relative z-10 p-6 sm:p-10 max-w-2xl text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 backdrop-blur-md text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              {currentClip.event}
            </span>

            <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#FDFCF8] font-semibold leading-tight">
              "{currentClip.quote}"
            </h4>

            <div className="text-xs sm:text-sm text-[#FDFCF8]/70 font-sans">
              <span className="font-bold text-[#C5A059]">Kim Nicole Thomas</span> · Keynote Address
            </div>

            {/* Play/Pause Pulse Button */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-[#C5A059] text-[#121212] flex items-center justify-center hover:brightness-110 transition-all shadow-lg active:scale-95"
                title={isPlaying ? "Pause Preview" : "Play Preview"}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
              </button>
            </div>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex items-center justify-between text-xs text-[#FDFCF8]/70">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-[#C5A059] transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-[#C5A059] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span>{currentClip.duration}</span>
            </div>

            <div className="text-right text-[11px] text-[#FDFCF8]/50">
              HD 1080p · Keynote Clip {activeClipIndex + 1} of {clips.length}
            </div>
          </div>
        </div>

        {/* Clip Selector & Summary */}
        <div className="p-6 overflow-y-auto space-y-4 bg-[#121212] flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/60">
            Select Presentation Highlight:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {clips.map((clip, index) => (
              <button
                key={index}
                onClick={() => setActiveClipIndex(index)}
                className={`p-3 rounded-md border text-left transition-all ${
                  activeClipIndex === index 
                    ? 'border-[#C5A059] bg-[#1E1E1E] text-white ring-1 ring-[#C5A059]' 
                    : 'border-[#FDFCF8]/10 bg-[#181818] text-[#FDFCF8]/60 hover:bg-[#202020] hover:text-[#FDFCF8]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#C5A059] font-bold mb-1">
                  <span>Clip 0{index + 1}</span>
                  <span>{clip.duration}</span>
                </div>
                <div className="font-serif text-sm font-semibold text-[#FDFCF8] line-clamp-1">
                  {clip.title}
                </div>
                <div className="text-[11px] text-[#FDFCF8]/50 mt-1 line-clamp-1">
                  {clip.event}
                </div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-md bg-[#181818] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/70 space-y-1">
            <span className="font-bold text-[#FDFCF8] block">Keynote Takeaway for Organizers:</span>
            <p className="leading-relaxed">{currentClip.takeaway}</p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-[#FDFCF8]/10 bg-[#0F0F0F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#FDFCF8]/60">
            Booking inquiries: <span className="text-[#FDFCF8] font-bold">{SITE_CONTACT.email}</span> · <span className="text-[#C5A059] font-bold">{SITE_CONTACT.phoneFormatted}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors"
          >
            <span>Inquire About Speaker Availability</span>
            <ArrowUpRight className="w-4 h-4 text-[#121212]" />
          </button>
        </div>
      </div>
    </div>
  );
};
