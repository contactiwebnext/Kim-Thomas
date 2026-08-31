import React from 'react';
import { NavigationPage } from '../types';
import { COACHING_PILLARS, SITE_CONTACT } from '../data/siteData';
import { 
  Compass, 
  BatteryCharging, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  BrainCircuit, 
  Zap, 
  Layers, 
  Flame 
} from 'lucide-react';

interface CoachingPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const CoachingPage: React.FC<CoachingPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#C5A059]" />;
      default: return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const executiveSymptoms = [
    {
      symptom: "Relentless Decision Fatigue",
      description: "Operating with a fog of cognitive depletion after hundreds of micro-decisions and back-to-back crisis meetings each week."
    },
    {
      symptom: "Sacrificial Work Cadence",
      description: "Believing that organizational success requires sacrificing sleep, physical vitality, personal relationships, and emotional peace."
    },
    {
      symptom: "Executive Isolation at the Top",
      description: "Lacking an objective, high-trust thinking partner with whom you can drop your professional armor and test raw vulnerabilities."
    },
    {
      symptom: "Reactive Firefighting",
      description: "Knowing what your high-leverage strategic priorities are, but getting perpetually pulled into low-signal emergencies and department friction."
    }
  ];

  return (
    <div className="space-y-0 text-[#FDFCF8] bg-[#121212]">
      {/* 1. COACHING HERO */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-[#121212] border-b border-[#FDFCF8]/10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              1:1 Executive Leadership & Wellbeing
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDFCF8] font-bold tracking-tight leading-[1.12]">
              Sustained peak performance without <span className="italic font-normal text-[#C5A059]">cognitive depletion</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70 leading-relaxed">
              Designed for accomplished executives, C-suite leaders, and high-impact directors who refuse to choose between world-class leadership delivery and their own health, vitality, and human wellbeing.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
              >
                <span>Request a Confidential Chemistry Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#121212]" />
              </button>

              <button
                onClick={() => {
                  const pulse = document.getElementById('leadership-pulse');
                  if (pulse) pulse.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('home');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#1E1E1E] border border-[#FDFCF8]/15 text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
              >
                <BrainCircuit className="w-4 h-4 text-[#C5A059]" />
                <span>Take Resilience Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY WELLBEING IS STRATEGIC TO LEADERSHIP */}
      <section className="py-20 md:py-28 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                The Strategic Reframe
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-tight">
                Wellbeing Is Not a Perk. It Is Your Highest-Leverage Leadership Asset.
              </h2>
              <p className="text-base text-[#FDFCF8]/70 leading-relaxed">
                Corporate wellness programs often treat wellbeing as an extracurricular retreat or a fitness perk. Kim Nicole Thomas views executive wellbeing through a rigorous strategic lens:
              </p>
              <p className="text-base text-[#FDFCF8]/70 leading-relaxed">
                When an executive’s nervous system is perpetually activated in crisis mode, cognitive processing narrows, risk-assessment degrades, emotional reactivity spikes, and team morale suffers. Protecting your clarity and stamina is not self-indulgent—it is an organizational imperative.
              </p>

              <div className="p-5 rounded-xl bg-[#181818] border-l-4 border-[#C5A059] text-sm text-[#FDFCF8]/85 italic space-y-1 border border-[#FDFCF8]/10">
                <p>
                  "The quality of your organization's strategy cannot exceed the quality of your executive cognitive bandwidth."
                </p>
                <span className="text-xs font-bold text-[#C5A059] not-italic block mt-1">
                  — Kim Nicole Thomas
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {executiveSymptoms.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#181818] border border-[#FDFCF8]/10 space-y-2 hover:border-[#C5A059]/40 transition-colors">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Pressure Pattern 0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#FDFCF8]">
                    {item.symptom}
                  </h3>
                  <p className="text-xs text-[#FDFCF8]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR COACHING PILLARS */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Methodology & Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              The Four Dimensions of Executive Coaching
            </h2>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70">
              Customized to each leader's operational environment, organizational mandate, and personal aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COACHING_PILLARS.map((pillar) => (
              <div key={pillar.id} className="bg-[#181818] rounded-xl p-8 border border-[#FDFCF8]/10 shadow-xl space-y-4 flex flex-col justify-between hover:border-[#C5A059]/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-[#1E1E1E] flex items-center justify-center font-bold border border-[#FDFCF8]/10">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                        {pillar.coreFocus}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#FDFCF8]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#FDFCF8]/70 leading-relaxed pt-2">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FDFCF8]/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block">
                    Key Developmental Breakthroughs:
                  </span>
                  <ul className="text-xs text-[#FDFCF8]/85 space-y-1.5 font-medium">
                    {pillar.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE COACHING JOURNEY & CADENCE */}
      <section className="py-20 md:py-28 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Engagement Structure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              The 1:1 Executive Partnership Model
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#141414] border border-[#FDFCF8]/10 space-y-3 text-left shadow-xl hover:border-[#C5A059]/40 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#1E1E1E] text-[#C5A059] font-serif font-bold text-lg flex items-center justify-center border border-[#C5A059]/30">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">
                Deep Contextual Diagnostic
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFCF8]/70 leading-relaxed">
                Initial 90-minute strategic deep dive mapping your organizational ecosystem, stakeholder dynamics, cognitive energy drains, and priority leadership objectives.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#141414] border border-[#FDFCF8]/10 space-y-3 text-left shadow-xl hover:border-[#C5A059]/40 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#1E1E1E] text-[#C5A059] font-serif font-bold text-lg flex items-center justify-center border border-[#C5A059]/30">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">
                Bi-Weekly Strategic Sessions
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFCF8]/70 leading-relaxed">
                60-minute confidential 1:1 sessions (virtual or in-person) dissecting real-time boardroom challenges, stress recalibration, and behavioral mastery.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#141414] border border-[#FDFCF8]/10 space-y-3 text-left shadow-xl hover:border-[#C5A059]/40 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#1E1E1E] text-[#C5A059] font-serif font-bold text-lg flex items-center justify-center border border-[#C5A059]/30">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">
                Just-In-Time Crisis Support
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFCF8]/70 leading-relaxed">
                Dedicated on-call access for high-stakes moments: pre-board meeting alignment, sudden organizational crises, or difficult executive negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] text-[#FDFCF8] text-center border-t border-[#FDFCF8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFCF8]">
            Schedule a Confidential Chemistry Conversation
          </h2>
          <p className="text-base sm:text-lg text-[#FDFCF8]/70 max-w-2xl mx-auto leading-relaxed">
            Executive coaching is deeply personal and relational. A 30-minute introductory conversation allows us to evaluate mutual chemistry, clarify your mandate, and design a customized engagement roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
            >
              <span>Book 30-Min Chemistry Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#121212]" />
            </button>

            <a
              href={`tel:${SITE_CONTACT.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] border border-[#FDFCF8]/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Direct Line: {SITE_CONTACT.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
