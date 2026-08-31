import React from 'react';
import { NavigationPage } from '../types';
import { SITE_CONTACT, CORE_METRICS, SECTORS_DATA } from '../data/siteData';
import { 
  Award, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  HeartHandshake, 
  BrainCircuit, 
  Target, 
  BookOpen, 
  Users 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
  onOpenSpeakerKit: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenSpeakerKit
}) => {
  const guidingTenets = [
    {
      title: "Clarity Over Complexity",
      description: "When organizations become tangled in competing priorities and noisy emergencies, Kim’s role is to strip away the non-essential and isolate the high-leverage strategic imperatives.",
      icon: Target
    },
    {
      title: "Sustainable Capacity Over Depletion",
      description: "High performance is counterproductive if it culminates in executive burnout. Sustainable leadership requires intentional energy management, nervous system resilience, and cognitive recovery.",
      icon: BrainCircuit
    },
    {
      title: "Human Dignity & Radical Candor",
      description: "Tough institutional challenges cannot be resolved with platitudes. Kim brings an uncompromising standard of truth and accountability, delivered with profound empathy and respect.",
      icon: HeartHandshake
    },
    {
      title: "Absolute Discretion & Trust",
      description: "Operating at the executive apex is isolated. Kim provides a completely safe, confidential sanctuary for CEOs and board chairs to deconstruct raw dilemmas without political risk.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="space-y-0 text-[#FDFCF8] bg-[#121212]">
      {/* 1. ABOUT HERO */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-[#121212] border-b border-[#FDFCF8]/10 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              Executive Biography & Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDFCF8] font-bold tracking-tight leading-[1.12]">
              Strategic perspective meets <span className="italic font-normal text-[#C5A059]">deep human insight</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70 leading-relaxed">
              Based in Toronto, Ontario, Kim Nicole Thomas has spent over three decades walking beside leaders through organizational transformations, institutional crises, and high-pressure career milestones.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE BIOGRAPHY & STORY */}
      <section className="py-20 md:py-28 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#FDFCF8]/75 leading-relaxed">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-tight">
                Executive Biography
              </h2>

              <p className="text-lg text-[#FDFCF8] font-medium leading-relaxed">
                Kim Nicole Thomas is an executive advisor, leadership and wellbeing coach, and internationally recognized keynote speaker with over 30 years of experience guiding senior leaders through complex, high-stakes environments across healthcare, technology, education, and institutional sectors. Working at the intersection of strategic decision-making, high-performance execution, and personal sustainability, Kim helps C-suite executives lead with clarity, sound judgment, and unwavering resilience—without burning out.
              </p>

              <p>
                As the Founder of KimNicole Inc. and Director of Strategy, Partnerships & Innovation at GEM Agency, Kim serves as a trusted confidante and strategic sounding board to C-level executives. Her background includes launching and directing inaugural TEDx initiatives, coaching speakers for major global platforms, and authoring high-level executive briefings and thought leadership pieces for senior leaders.
              </p>

              <p>
                Armed with degrees from Queen’s University and specialized training in leadership coaching, conflict resolution, and trauma-informed practices, Kim delivers bespoke, high-touch support that transforms how executives decide, communicate, and lead.
              </p>

              <div className="p-6 rounded-xl bg-[#181818] border-l-4 border-[#C5A059] my-6 space-y-2 border border-[#FDFCF8]/10">
                <div className="font-serif text-xl text-[#FDFCF8] font-bold">
                  The Core Advisory Philosophy:
                </div>
                <p className="italic text-[#FDFCF8]/85 text-base">
                  "Leading at the top shouldn't cost your wellbeing—or your edge. True leadership capacity is proven by how clearly you think, how courageously you decide, and how sustainably you preserve your vitality under chronic pressure."
                </p>
              </div>

              <h3 className="font-serif text-2xl text-[#FDFCF8] font-bold pt-4">
                Bridging Strategic Acuity & Sustainable Wellbeing
              </h3>

              <p>
                Throughout her career, Kim observed a recurring tragedy in executive circles: brilliant, dedicated leaders who achieved extraordinary organizational milestones at the expense of their physical health, emotional equilibrium, and family life.
              </p>

              <p>
                Kim firmly rejects the outdated doctrine of sacrificial leadership. She has pioneered an integrated approach where <strong className="text-[#C5A059]">sustainable executive wellbeing is positioned as a strategic capability</strong>—the bedrock of clear cognitive judgment, emotional presence, and decisive institutional impact.
              </p>
            </div>

            {/* Right Credibility Card & Milestones */}
            <div className="lg:col-span-5 space-y-6">
              {/* Profile Card */}
              <div className="bg-[#141414] rounded-xl p-6 sm:p-8 border border-[#FDFCF8]/10 shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Credentials & Leadership Footprint
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FDFCF8]">
                    Kim Nicole Thomas
                  </h3>
                  <p className="text-xs text-[#FDFCF8]/60">
                    Toronto, Ontario · Global Advisory Practice
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#FDFCF8]/80 border-t border-b border-[#FDFCF8]/10 py-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FDFCF8]">Founder</strong> of KimNicole Inc.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FDFCF8]">Director of Strategy, Partnerships & Innovation</strong> at GEM Agency</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FDFCF8]">Degrees from Queen’s University</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FDFCF8]">Specialized Training:</strong> Leadership Coaching, Conflict Resolution & Trauma-Informed Practices</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FDFCF8]">TEDx Director & Speaker Coach:</strong> Major global platforms & executive briefings</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FDFCF8]">30+ Years Experience:</strong> Healthcare, Technology, Education, and Institutional Sectors</span>
                  </div>
                </div>

                {/* Direct Contact Block */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="font-bold text-[#FDFCF8] uppercase tracking-wider text-[11px]">
                    Direct Executive Contact:
                  </div>
                  <div className="flex items-center gap-2 text-[#FDFCF8]/70">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <a href={`tel:${SITE_CONTACT.phone}`} className="hover:text-[#C5A059] font-bold">{SITE_CONTACT.phoneFormatted}</a>
                  </div>
                  <div className="flex items-center gap-2 text-[#FDFCF8]/70">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-[#C5A059] font-bold">{SITE_CONTACT.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-[#FDFCF8]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Toronto, Ontario, Canada</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Schedule Executive Dialogue</span>
                    <ArrowUpRight className="w-4 h-4 text-[#121212]" />
                  </button>
                </div>
              </div>

              {/* Speaker Kit Card */}
              <div className="bg-[#181818] rounded-xl p-6 border border-[#FDFCF8]/10 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    Event Organizers & Media
                  </div>
                  <div className="font-serif text-base font-bold text-[#FDFCF8]">
                    Download Speaker Bio & One-Sheet
                  </div>
                </div>
                <button
                  onClick={onOpenSpeakerKit}
                  className="px-4 py-2 rounded-sm bg-[#1E1E1E] border border-[#FDFCF8]/15 text-xs font-bold text-[#FDFCF8] hover:bg-[#2A2A2A] hover:text-[#C5A059] transition-colors shrink-0"
                >
                  View Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR GUIDING TENETS */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              How Kim Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              Four Tenets of the Advisory Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidingTenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div key={idx} className="bg-[#181818] p-8 rounded-xl border border-[#FDFCF8]/10 shadow-xl space-y-3 hover:border-[#C5A059]/40 transition-colors">
                  <div className="w-12 h-12 rounded-md bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center font-bold border border-[#FDFCF8]/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">
                    {tenet.title}
                  </h3>
                  <p className="text-sm text-[#FDFCF8]/70 leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] text-[#FDFCF8] text-center border-t border-[#FDFCF8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFCF8]">
            Explore How Kim Can Partner With Your Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-[#FDFCF8]/70 max-w-2xl mx-auto leading-relaxed">
            Begin with a confidential discovery call to assess your current organizational priorities, board dynamics, or upcoming conference theme.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
            >
              <span>Schedule Confidential Dialogue</span>
              <ArrowUpRight className="w-4 h-4 text-[#121212]" />
            </button>

            <button
              onClick={() => onNavigate('executive-advisory')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] border border-[#FDFCF8]/15 transition-colors"
            >
              <span>View Executive Advisory Services</span>
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
