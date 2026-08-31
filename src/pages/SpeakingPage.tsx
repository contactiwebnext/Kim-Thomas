import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { KEYNOTE_TOPICS, SITE_CONTACT, SPEAKER_KIT_DETAILS } from '../data/siteData';
import { 
  Mic2, 
  Play, 
  Tv, 
  Download, 
  Printer, 
  ArrowUpRight, 
  CheckCircle2, 
  Calendar, 
  Award, 
  Sparkles, 
  Quote, 
  Users, 
  Clock, 
  Globe, 
  FileText 
} from 'lucide-react';

interface SpeakingPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
  onOpenReel: () => void;
  onOpenSpeakerKit: () => void;
}

export const SpeakingPage: React.FC<SpeakingPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenReel,
  onOpenSpeakerKit
}) => {
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);

  const activeTopic = KEYNOTE_TOPICS[selectedTopicIdx];

  const pastEvents = [
    { name: "Global Executive Healthcare Leadership Summit", location: "Toronto, ON", attendees: "650+ Hospital CEOs & CMOs" },
    { name: "Enterprise SaaS & Tech Transformation Conference", location: "San Francisco / Virtual", attendees: "1,200+ Enterprise Tech Leaders" },
    { name: "International Academic Governance Consortium", location: "Montreal, QC", attendees: "500+ University Presidents & Provosts" },
    { name: "Public Sector Modernization & Governance Forum", location: "Ottawa, ON", attendees: "450+ Deputy Ministers & Board Chairs" },
    { name: "National Healthcare Resilience & Wellbeing Symposium", location: "Vancouver, BC", attendees: "800+ Clinical & Health Executives" }
  ];

  return (
    <div className="space-y-0 text-[#FDFCF8] bg-[#121212]">
      {/* 1. SPEAKING HERO */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-[#121212] border-b border-[#FDFCF8]/10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Internationally Recognized Keynote Speaker</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDFCF8] font-bold tracking-tight leading-[1.12]">
                Keynotes that inspire <span className="italic font-normal text-[#C5A059]">courageous clarity</span> and lasting transformation.
              </h1>

              <p className="text-base sm:text-lg text-[#FDFCF8]/70 leading-relaxed">
                Kim Nicole Thomas delivers high-impact, transformative keynote addresses for global conferences, executive retreats, and annual leadership summits. Her presentations synthesize 30+ years of senior executive advisory with deep emotional intelligence and actionable resilience frameworks.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
                >
                  <span>Book Kim to Speak</span>
                  <ArrowUpRight className="w-4 h-4 text-[#121212]" />
                </button>

                <button
                  onClick={onOpenReel}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#1E1E1E] border border-[#FDFCF8]/15 text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
                >
                  <Play className="w-4 h-4 fill-current text-[#C5A059]" />
                  <span>Watch Speaker Reel</span>
                </button>

                <button
                  onClick={onOpenSpeakerKit}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 hover:text-[#C5A059] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#C5A059]" />
                  <span>Speaker Kit & AV Rider</span>
                </button>
              </div>
            </div>

            {/* Stage Preview Visual Card */}
            <div className="lg:col-span-5">
              <div 
                onClick={onOpenReel}
                className="cursor-pointer group relative rounded-xl bg-[#181818] p-3 border border-[#FDFCF8]/15 shadow-2xl overflow-hidden hover:border-[#C5A059]/50 transition-colors"
              >
                <div className="relative aspect-video rounded-lg bg-gradient-to-tr from-[#121212] via-[#1A1A1A] to-[#252525] flex flex-col items-center justify-center text-center p-6 overflow-hidden border border-[#FDFCF8]/10">
                  <div className="absolute inset-0 bg-[#C5A059]/10 rounded-full blur-2xl group-hover:bg-[#C5A059]/20 transition-all"></div>

                  <div className="relative z-10 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] text-[#121212] flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>

                    <div className="font-serif text-lg font-bold text-[#FDFCF8]">
                      Watch Presentation Reel (Preview)
                    </div>
                    <p className="text-xs text-[#FDFCF8]/70 max-w-xs">
                      Live stage excerpts on Leading Through Complexity & Sustainable Leadership
                    </p>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[10px] uppercase font-bold text-[#C5A059] bg-black/70 px-2 py-1 rounded border border-[#FDFCF8]/10">
                    HD 1080p · Click to Play
                  </div>
                </div>

                <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#FDFCF8]/60">
                  <span>Keynote Presentations · Global Scope</span>
                  <span className="text-[#C5A059] font-bold">100+ Keynotes Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE KEYNOTE THEMES */}
      <section className="py-20 md:py-28 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Presentation Topics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              Signature Keynote Presentations
            </h2>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70">
              Every presentation is thoughtfully customized to your organization's industry context, conference theme, and audience dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Topic Navigation Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {KEYNOTE_TOPICS.map((topic, idx) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicIdx(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all ${
                    selectedTopicIdx === idx 
                      ? 'bg-[#181818] text-[#FDFCF8] border-[#C5A059] shadow-md ring-1 ring-[#C5A059]' 
                      : 'bg-[#141414] text-[#FDFCF8]/70 border-[#FDFCF8]/10 hover:bg-[#1E1E1E]'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 ${
                    selectedTopicIdx === idx ? 'text-[#C5A059]' : 'text-[#FDFCF8]/40'
                  }`}>
                    {topic.themeCategory}
                  </span>
                  <div className="font-serif text-base sm:text-lg font-bold leading-snug text-[#FDFCF8]">
                    {topic.title}
                  </div>
                </button>
              ))}

              <div className="pt-4">
                <button
                  onClick={onOpenSpeakerKit}
                  className="w-full py-3.5 rounded-sm bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#C5A059] text-xs font-bold uppercase tracking-wider border border-[#FDFCF8]/15 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Speaker One-Sheet (PDF)</span>
                </button>
              </div>
            </div>

            {/* Active Topic Deep Dive */}
            <div className="lg:col-span-8 bg-[#181818] p-8 sm:p-10 rounded-xl border border-[#FDFCF8]/10 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  {activeTopic.themeCategory}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFCF8]">
                  {activeTopic.title}
                </h3>
                <p className="text-base text-[#C5A059] font-medium italic">
                  "{activeTopic.tagline}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#FDFCF8]/70 leading-relaxed">
                {activeTopic.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FDFCF8] block">
                  Actionable Attendee Takeaways:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTopic.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="p-3.5 rounded-md bg-[#141414] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/85 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#FDFCF8]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#FDFCF8]/70">
                <div>
                  <span className="font-bold text-[#FDFCF8] block mb-1 uppercase tracking-wider">Ideal For:</span>
                  <p>{activeTopic.targetAudience}</p>
                </div>
                <div>
                  <span className="font-bold text-[#FDFCF8] block mb-1 uppercase tracking-wider">Available Formats:</span>
                  <p>{activeTopic.durationOptions.join(" · ")}</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors shadow-lg"
                >
                  <span>Inquire for This Keynote</span>
                  <ArrowUpRight className="w-4 h-4 text-[#121212]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENT ORGANIZER TOOLKIT & LOGISTICS */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Event Planner Toolkit
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-tight">
                Designed to Make the Meeting Planner's Job Effortless
              </h2>
              <p className="text-base text-[#FDFCF8]/70 leading-relaxed">
                As a seasoned international speaker, Kim Nicole Thomas partners closely with event chairs, conference producers, and AV teams to ensure an extraordinary, frictionless attendee experience.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#FDFCF8]/85">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Pre-Event Discovery Call:</strong> Align on conference objectives, audience demographics, and high-impact themes.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Turnkey Speaker Kit:</strong> High-res photography, tailored introductions, and pre-approved marketing blurbs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Flexible AV Rider:</strong> Seamless slide deck compatibility (HDMI/Keynote/PowerPoint) and wireless audio.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#181818] p-8 rounded-xl border border-[#FDFCF8]/10 shadow-xl space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">
                Representative Summit Engagements
              </h3>
              <div className="space-y-3 text-xs">
                {pastEvents.map((evt, idx) => (
                  <div key={idx} className="p-3.5 rounded-md bg-[#141414] border border-[#FDFCF8]/10 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-[#FDFCF8]">{evt.name}</div>
                      <div className="text-[#FDFCF8]/60 text-[11px]">{evt.location}</div>
                    </div>
                    <span className="text-[11px] font-bold text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 px-2.5 py-1 rounded whitespace-nowrap">
                      {evt.attendees}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] text-[#FDFCF8] text-center border-t border-[#FDFCF8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFCF8]">
            Check Kim’s Keynote Availability for Your Upcoming Event
          </h2>
          <p className="text-base sm:text-lg text-[#FDFCF8]/70 max-w-2xl mx-auto leading-relaxed">
            Keynote dates fill several months in advance. Contact Kim’s office today to hold your conference date or request fee schedules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
            >
              <span>Hold Event Date / Request Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#121212]" />
            </button>

            <button
              onClick={onOpenSpeakerKit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] border border-[#FDFCF8]/15 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#C5A059]" />
              <span>View Speaker Kit One-Sheet</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
