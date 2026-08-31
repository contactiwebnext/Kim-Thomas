import React from 'react';
import { NavigationPage } from '../types';
import { ADVISORY_OFFERINGS, SITE_CONTACT } from '../data/siteData';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  Award, 
  Lock, 
  Phone, 
  Mail, 
  Users, 
  Scale, 
  Compass, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

interface AdvisoryPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const AdvisoryPage: React.FC<AdvisoryPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const complexityTriggers = [
    {
      title: "M&A, Amalgamations & Restructuring",
      description: "Navigating post-merger integration where culture clash, lost momentum, and executive turnover threaten enterprise value.",
      outcome: "Unified executive cadence, preserved institutional memory, and accelerated transformation execution."
    },
    {
      title: "Board Friction & Governance Scrutiny",
      description: "Addressing misalignments between board oversight and operational management before trust erodes irrevocably.",
      outcome: "Transparent governance agreements and restored mutual confidence between CEO and governing directors."
    },
    {
      title: "Decision Paralysis & Competing Priorities",
      description: "Overcoming organizational gridlock caused by warring department heads, legacy fiefdoms, and conflicting KPIs.",
      outcome: "A clear, ruthless prioritization roadmap that aligns executive bandwidth to high-leverage outcomes."
    },
    {
      title: "High-Visibility Institutional Crises",
      description: "Managing unexpected regulatory investigations, public crises, or media scrutiny with disciplined calm and ethical clarity.",
      outcome: "Preservation of brand integrity, stakeholder credibility, and workforce psychological safety."
    }
  ];

  return (
    <div className="space-y-0 text-[#FDFCF8] bg-[#121212]">
      {/* 1. ADVISORY HERO */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-[#121212] border-b border-[#FDFCF8]/10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              Executive Advisory Practice
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDFCF8] font-bold tracking-tight leading-[1.12]">
              Strategic counsel when the cost of <span className="italic font-normal text-[#C5A059]">missteps</span> is severe.
            </h1>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70 leading-relaxed">
              Kim Nicole Thomas partners with CEOs, Board Chairs, Executive Directors, and Senior Leadership Teams to deconstruct complex dilemmas, align executive factions, and execute high-stakes mandates with poise.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
              >
                <span>Initiate Confidential Advisory Dialogue</span>
                <ArrowUpRight className="w-4 h-4 text-[#121212]" />
              </button>

              <a
                href={`tel:${SITE_CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#1E1E1E] border border-[#FDFCF8]/15 text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {SITE_CONTACT.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE HIGH-STAKES CONTEXTS KIM ADDRESSES */}
      <section className="py-20 md:py-28 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              High-Stakes Scenarios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              When Organizations Call Kim Nicole Thomas
            </h2>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70">
              Senior leaders engage Kim not for generic consulting boilerplate, but for decisive, trusted executive intervention during pivotal institutional moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complexityTriggers.map((item, idx) => (
              <div key={idx} className="bg-[#181818] p-8 rounded-xl border border-[#FDFCF8]/10 space-y-4 shadow-xl hover:border-[#C5A059]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#C5A059] font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
                  <span>Critical Challenge 0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FDFCF8]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#FDFCF8]/70 leading-relaxed">
                  {item.description}
                </p>

                <div className="p-4 rounded-md bg-[#141414] border border-[#FDFCF8]/10 space-y-1">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                    Strategic Outcome Delivered:
                  </span>
                  <p className="text-xs text-[#FDFCF8]/85 font-medium leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE ADVISORY OFFERINGS & ENGAGEMENT MODELS */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              Engagement Structures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              Advisory Engagement Models
            </h2>
          </div>

          <div className="space-y-8">
            {ADVISORY_OFFERINGS.map((offering) => (
              <div 
                key={offering.id}
                className="bg-[#181818] rounded-xl p-8 sm:p-10 border border-[#FDFCF8]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#C5A059]/40 transition-colors"
              >
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    {offering.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFCF8]">
                    {offering.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FDFCF8]/70 leading-relaxed">
                    {offering.description}
                  </p>

                  <div className="p-3.5 rounded-md bg-[#141414] border border-[#FDFCF8]/10 text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                    Engagement Structure: <span className="text-[#FDFCF8] font-normal normal-case">{offering.engagementModel}</span>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4 bg-[#141414] p-6 rounded-md border border-[#FDFCF8]/10">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FDFCF8] block">
                      Specific Challenges Resolved:
                    </span>
                    <ul className="text-xs text-[#FDFCF8]/70 space-y-1.5">
                      {offering.challengesAddressed.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#FDFCF8]/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block">
                      Measurable Strategic Outcomes:
                    </span>
                    <ul className="text-xs text-[#FDFCF8]/85 space-y-1.5 font-medium">
                      {offering.strategicOutcomes.map((o, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONFIDENTIAL ADVISORY CTA */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] text-[#FDFCF8] text-center border-t border-[#FDFCF8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
            <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
            Strict C-Suite Confidentiality Guaranteed
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFCF8]">
            Initiate a Confidential Strategic Conversation
          </h2>

          <p className="text-base sm:text-lg text-[#FDFCF8]/70 max-w-2xl mx-auto leading-relaxed">
            Every advisory engagement begins with an unhurried, highly discreet conversation between Kim Nicole Thomas and the executive sponsor to determine strategic fit and mandate objectives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
            >
              <span>Schedule Advisory Briefing</span>
              <ArrowUpRight className="w-4 h-4 text-[#121212]" />
            </button>

            <a
              href={`mailto:${SITE_CONTACT.email}?subject=Confidential%20Executive%20Advisory%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] border border-[#FDFCF8]/15 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#C5A059]" />
              <span>Email Kim Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
