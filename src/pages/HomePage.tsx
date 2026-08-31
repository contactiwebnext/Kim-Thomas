import React, { useState, useRef, useEffect } from 'react';
import { NavigationPage } from '../types';
import { 
  SITE_CONTACT, 
  CORE_METRICS, 
  CORE_AREAS_OF_SUPPORT,
  EXECUTIVE_ENGAGEMENT_MODELS,
  SECTORS_DATA, 
  TESTIMONIALS, 
  KEYNOTE_TOPICS 
} from '../data/siteData';
import { AssessmentPulse } from '../components/AssessmentPulse';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Compass, 
  Mic2, 
  Sparkles, 
  Award, 
  Activity, 
  Cpu, 
  GraduationCap, 
  Landmark, 
  Quote, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Play, 
  Tv, 
  ArrowRight,
  ChevronRight,
  UserCheck,
  BatteryCharging,
  BookOpen,
  HeartHandshake,
  MapPin,
  Linkedin,
  Layers,
  Volume2,
  VolumeX
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
  onOpenReel: () => void;
  onOpenSpeakerKit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenReel,
  onOpenSpeakerKit
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback for browsers requiring user gesture
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6 text-[#C5A059]" />;
      case 'Mic2': return <Mic2 className="w-6 h-6 text-[#C5A059]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#C5A059]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const getSectorIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-6 h-6 text-[#C5A059]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#C5A059]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#C5A059]" />;
      default: return <Landmark className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <div className="space-y-0 text-[#FDFCF8] bg-[#121212]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#FDFCF8]/10">
        {/* Video Background with Atmospheric Dark Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#121212]">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/src/assets/images/kim_portrait_bg_1788195262640.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] scale-105 pointer-events-none"
          >
            <source 
              src="https://dmuoodsvt4pkwwlq.public.blob.vercel-storage.com/Create_video_for_leadership_coach_202608312221.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Multi-tier gradient overlay to ensure maximum legibility while keeping video prominently visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/50 to-[#121212]/85"></div>
          <div className="absolute inset-0 bg-radial-at-center from-transparent via-[#0F0F0F]/30 to-[#0A0A0A]/70"></div>
        </div>

        {/* Subtle decorative background ambient glow */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C5A059]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C5A059]/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-7 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#121212]/80 backdrop-blur-md border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest text-[#C5A059] shadow-lg">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Executive Leadership & Wellbeing Coach · Strategic Advisor · Keynote Speaker</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDFCF8] font-bold leading-[1.12] tracking-tight drop-shadow-md">
              Leading at the Top Shouldn't Cost Your <span className="italic font-normal text-[#C5A059]">Wellbeing</span>—or Your <span className="italic font-normal text-[#C5A059]">Edge</span>.
            </h1>

            {/* Subtitle / C-Suite Statement */}
            <p className="text-base sm:text-lg text-[#FDFCF8]/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-normal">
              {SITE_CONTACT.cSuiteIntro}
            </p>

            {/* Advisory Offer Box */}
            <div className="p-5 rounded-md bg-[#141414]/90 backdrop-blur-md border border-[#C5A059]/35 text-xs sm:text-sm text-[#FDFCF8]/95 leading-relaxed max-w-3xl mx-auto text-left sm:text-center shadow-2xl">
              <span className="font-bold text-[#C5A059]">Bespoke Partnership:</span> {SITE_CONTACT.cSuiteOffer}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg active:scale-95"
              >
                <span>Work With Kim</span>
                <ArrowUpRight className="w-4 h-4 text-[#121212]" />
              </button>

              <button
                onClick={() => onNavigate('speaking')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#1E1E1E]/90 backdrop-blur-sm text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] border border-[#FDFCF8]/20 transition-all shadow-md"
              >
                <span>Book Kim to Speak</span>
                <Mic2 className="w-4 h-4 text-[#C5A059]" />
              </button>

              <button
                onClick={onOpenReel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-sm text-xs font-semibold text-[#FDFCF8]/80 hover:text-[#C5A059] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#1E1E1E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Speaker Reel</span>
              </button>
            </div>

            {/* Credibility badges */}
            <div className="pt-8 border-t border-[#FDFCF8]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {CORE_METRICS.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059]">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-[#FDFCF8] leading-tight">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#FDFCF8]/60 leading-tight">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Audio Control Mute/Unmute Toggle Button */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute hero video audio" : "Mute hero video audio"}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121212]/80 hover:bg-[#1E1E1E] backdrop-blur-md border border-[#C5A059]/40 hover:border-[#C5A059] text-xs font-semibold text-[#FDFCF8] shadow-2xl transition-all duration-200 active:scale-95"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] uppercase tracking-wider text-[#FDFCF8]/90 font-medium">Unmute Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">Audio On</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* 2. EXECUTIVE BIO SECTION */}
      <section className="py-16 md:py-24 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 shadow-2xl bg-[#181818] aspect-[4/5] max-w-sm mx-auto">
                <img 
                  src="/src/assets/images/kim_portrait_bg_1788195262640.jpg" 
                  alt="Kim Nicole Thomas"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">Kim Nicole Thomas</h3>
                  <p className="text-xs text-[#C5A059] font-medium">{SITE_CONTACT.location}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                Executive Bio
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-tight">
                Trusted Confidante & Strategic Sounding Board to Senior Leaders
              </h2>

              <p className="text-sm sm:text-base text-[#FDFCF8]/85 leading-relaxed">
                {SITE_CONTACT.executiveBioParagraph1}
              </p>

              <p className="text-sm sm:text-base text-[#FDFCF8]/75 leading-relaxed">
                {SITE_CONTACT.executiveBioParagraph2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-md bg-[#181818] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Founder</strong> of KimNicole Inc.</span>
                </div>
                <div className="p-3.5 rounded-md bg-[#181818] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Director</strong> of Strategy, Partnerships & Innovation at GEM Agency</span>
                </div>
                <div className="p-3.5 rounded-md bg-[#181818] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Degrees</strong> from Queen's University</span>
                </div>
                <div className="p-3.5 rounded-md bg-[#181818] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Specialized Training:</strong> Leadership Coaching, Conflict Resolution & Trauma-Informed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE AREAS OF SUPPORT SECTION (5 PILLARS FROM PDF) */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              Core Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              Core Areas of Support
            </h2>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70">
              High-touch executive coaching, strategic sounding-board advisory, and executive communication support tailored specifically for C-suite leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_AREAS_OF_SUPPORT.map((area) => (
              <div 
                key={area.id}
                className="bg-[#181818] rounded-xl p-8 border border-[#FDFCF8]/10 hover:border-[#C5A059]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-md bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center font-bold group-hover:bg-[#C5A059] group-hover:text-[#121212] transition-colors border border-[#FDFCF8]/10">
                    {getAreaIcon(area.iconName)}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    {area.tagline}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FDFCF8] group-hover:text-[#C5A059] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#FDFCF8]/70 leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/80">
                    {area.keyFocus.map((kf, kfIdx) => (
                      <li key={kfIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#FDFCF8]/10">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] group-hover:translate-x-1 transition-all uppercase tracking-wider"
                  >
                    <span>Inquire About This Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* 6th Card: Bespoke Full-Spectrum Retainer Card */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-xl p-8 border border-[#C5A059]/40 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-[#C5A059] text-[#121212] flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6 text-[#121212]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Comprehensive Practice
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FDFCF8]">
                  Bespoke Executive Retainer
                </h3>
                <p className="text-sm text-[#FDFCF8]/80 leading-relaxed">
                  A high-touch, customized advisory partnership blending 1:1 confidential sounding board access, keynote preparation, ghostwriting, and crisis conflict mediation.
                </p>
                <div className="p-3 bg-[#141414] rounded-md border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/70">
                  Direct on-call access for high-consequence transitions, board meetings, and keynote stages.
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#FDFCF8]/10">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Request Bespoke Retainer</span>
                  <ArrowUpRight className="w-4 h-4 text-[#121212]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE ENGAGEMENT MODELS (FROM PDF) */}
      <section className="py-20 md:py-28 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
              Structured Engagements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              Executive Engagement Models
            </h2>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70">
              Clear, disciplined structures tailored to C-suite retainers, high-visibility milestones, and strategic thought leadership.
            </p>
          </div>

          {/* Engagement Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXECUTIVE_ENGAGEMENT_MODELS.map((item) => (
              <div 
                key={item.id}
                className="bg-[#181818] rounded-xl p-8 border border-[#FDFCF8]/10 shadow-xl flex flex-col justify-between hover:border-[#C5A059]/50 transition-all group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-sm bg-[#C5A059]/15 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider border border-[#C5A059]/30">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center border border-[#FDFCF8]/10 group-hover:bg-[#C5A059] group-hover:text-[#121212] transition-colors">
                      {getAreaIcon(item.iconName || 'ShieldCheck')}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#FDFCF8] group-hover:text-[#C5A059] transition-colors">
                      {item.model}
                    </h3>
                  </div>

                  {/* Details block */}
                  <div className="p-4 rounded-md bg-[#141414] border border-[#FDFCF8]/10 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Engagement Details
                    </span>
                    <p className="text-xs text-[#FDFCF8]/85 leading-relaxed font-medium">
                      {item.details}
                    </p>
                  </div>

                  {/* Focus Areas block */}
                  <div className="p-4 rounded-md bg-[#141414] border border-[#FDFCF8]/10 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Focus Areas
                    </span>
                    <p className="text-xs text-[#FDFCF8]/75 leading-relaxed">
                      {item.focusAreas}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#FDFCF8]/10">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#121212] transition-all flex items-center justify-center gap-2 border border-[#FDFCF8]/10"
                  >
                    <span>Inquire About {item.model.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTORS SERVED DEEP DIVE */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                30+ Years Cross-Sector Expertise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
                Deep Mastery in Demanding Institutional Environments
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#FDFCF8]/70 max-w-md">
              Kim’s cross-sector background allows her to cross-pollinate breakthrough strategies between healthcare, technology, higher education, and public governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECTORS_DATA.map((item, index) => (
              <div 
                key={index}
                className="bg-[#181818] rounded-xl p-8 border border-[#FDFCF8]/10 shadow-xl space-y-4 hover:border-[#C5A059]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-[#1E1E1E] flex items-center justify-center border border-[#FDFCF8]/10">
                    {getSectorIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#FDFCF8]">
                      {item.sector}
                    </h3>
                    <span className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                      Executive Advisory & Coaching
                    </span>
                  </div>
                </div>

                <div className="text-sm font-bold text-[#C5A059]">
                  {item.headline}
                </div>

                <p className="text-xs sm:text-sm text-[#FDFCF8]/70 leading-relaxed">
                  {item.description}
                </p>

                <div className="p-3.5 rounded-md bg-[#141414] border border-[#FDFCF8]/10 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                    Typical Mandates:
                  </span>
                  <ul className="text-xs text-[#FDFCF8]/80 space-y-1">
                    {item.typicalMandates.slice(0, 3).map((m, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-[#FDFCF8]/70 italic border-l-2 border-[#C5A059] pl-3 py-0.5">
                  Impact: {item.representativeImpact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE LEADERSHIP PULSE ASSESSMENT */}
      <AssessmentPulse onOpenBooking={onOpenBooking} />

      {/* 5. VERIFIED EXECUTIVE TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-[#FDFCF8] border-b border-[#FDFCF8]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Quote className="w-3.5 h-3.5 text-[#C5A059]" />
              Executive Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
              Trusted by Senior Leaders When the Stakes Are Highest
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className="bg-[#141414] p-8 rounded-xl border border-[#FDFCF8]/10 shadow-2xl flex flex-col justify-between relative group hover:border-[#C5A059]/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                    <span>{t.sector} Sector</span>
                    <span>{t.location}</span>
                  </div>

                  <p className="text-sm sm:text-base text-[#FDFCF8]/85 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#FDFCF8]/10 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1E1E1E] text-[#C5A059] font-serif font-bold text-base flex items-center justify-center border border-[#C5A059]/40 shrink-0">
                    {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-serif text-base font-bold text-[#FDFCF8]">
                      {t.author}
                    </div>
                    <div className="text-xs text-[#FDFCF8]/70">
                      {t.title}
                    </div>
                    <div className="text-[11px] text-[#C5A059]">
                      {t.organization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-20 md:py-24 bg-[#121212] text-center border-t border-[#FDFCF8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A059]/25">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            Start the Conversation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight mb-4">
            Navigate Your Next Leadership Mandate With Unshakable Poise
          </h2>
          <p className="text-base sm:text-lg text-[#FDFCF8]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you are navigating high-stakes strategic decisions, seeking 1:1 executive coaching to prevent burnout, or preparing for high-visibility keynote presentations, Kim Nicole Thomas is ready to partner with you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95"
            >
              <span>Schedule Executive Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#121212]" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#1E1E1E] text-[#FDFCF8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2A2A2A] border border-[#FDFCF8]/15 transition-all"
            >
              <span>View Direct Contact Information</span>
              <Phone className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#FDFCF8]/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FDFCF8]/60">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{SITE_CONTACT.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <a href={`tel:${SITE_CONTACT.phone}`} className="hover:text-[#C5A059] font-bold">{SITE_CONTACT.phoneFormatted}</a>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-[#C5A059] font-bold">{SITE_CONTACT.email}</a>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-[#C5A059]" />
              <a href={SITE_CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] font-bold">{SITE_CONTACT.linkedinDisplay}</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
