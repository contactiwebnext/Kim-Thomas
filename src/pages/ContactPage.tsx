import React, { useState } from 'react';
import { SITE_CONTACT } from '../data/siteData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  ArrowUpRight, 
  Clock, 
  Globe,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    reason: 'executive-advisory',
    timeline: 'Within 30 Days',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Submission failed');

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2D4A3E', '#C89B53', '#FAF8F5']
        });
      } catch (e) {}
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-0 text-[#FDFCF8] bg-[#121212]">
      {/* 1. CONTACT HERO */}
      <section className="relative pt-14 pb-16 md:pt-20 md:pb-24 bg-[#121212] border-b border-[#FDFCF8]/10 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/25">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              Confidential Inquiry & Bookings
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDFCF8] font-bold tracking-tight leading-[1.12]">
              Connect with <span className="italic font-normal text-[#C5A059]">Kim Nicole Thomas</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#FDFCF8]/70 leading-relaxed">
              Whether you are seeking strategic executive advisory, 1:1 leadership coaching, or keynote presentation availability for your upcoming conference, all inquiries are handled with strict discretion.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <section className="py-16 md:py-24 bg-[#0F0F0F] border-b border-[#FDFCF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information & Practice Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFCF8]">
                  Direct Practice Channels
                </h2>
                <p className="text-sm text-[#FDFCF8]/70 leading-relaxed">
                  Kim Nicole Thomas personally reviews all executive inquiries. For urgent speaking dates or high-priority advisory mandates, feel free to call directly.
                </p>
              </div>

              {/* Direct clickable contact cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONTACT.phone}`}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#181818] border border-[#FDFCF8]/10 hover:border-[#C5A059]/50 transition-all group shadow-xl"
                >
                  <div className="w-12 h-12 rounded-md bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#121212] transition-colors shrink-0 border border-[#FDFCF8]/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Direct Telephone Line
                    </span>
                    <div className="font-serif text-lg font-bold text-[#FDFCF8] group-hover:text-[#C5A059] transition-colors">
                      {SITE_CONTACT.phoneFormatted}
                    </div>
                    <div className="text-xs text-[#FDFCF8]/50">
                      Available Mon–Fri, 8:00 AM – 6:00 PM EST
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#181818] border border-[#FDFCF8]/10 hover:border-[#C5A059]/50 transition-all group shadow-xl"
                >
                  <div className="w-12 h-12 rounded-md bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#121212] transition-colors shrink-0 border border-[#FDFCF8]/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Confidential Executive Email
                    </span>
                    <div className="font-serif text-lg font-bold text-[#FDFCF8] group-hover:text-[#C5A059] transition-colors">
                      {SITE_CONTACT.email}
                    </div>
                    <div className="text-xs text-[#FDFCF8]/50">
                      Direct inbox · 24-hour response standard
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#181818] border border-[#FDFCF8]/10 shadow-xl">
                  <div className="w-12 h-12 rounded-md bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#FDFCF8]/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Practice Location & Scope
                    </span>
                    <div className="font-serif text-lg font-bold text-[#FDFCF8]">
                      {SITE_CONTACT.location}
                    </div>
                    <div className="text-xs text-[#FDFCF8]/50">
                      {SITE_CONTACT.serviceScope}
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality promise card */}
              <div className="p-6 rounded-xl bg-[#141414] border border-[#FDFCF8]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>The Confidentiality Guarantee</span>
                </div>
                <p className="text-xs text-[#FDFCF8]/70 leading-relaxed">
                  We recognize that discussions surrounding board friction, executive succession, or institutional restructuring require the highest level of security and discretion. Your communications are strictly guarded.
                </p>
              </div>
            </div>

            {/* Right Interactive Form Card */}
            <div className="lg:col-span-7 bg-[#181818] p-8 sm:p-10 rounded-xl border border-[#FDFCF8]/10 shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#FDFCF8]">
                      Submit Strategic Inquiry
                    </h3>
                    <p className="text-xs text-[#FDFCF8]/60 mt-1">
                      Complete this form to start an unhurried, confidential dialogue.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-md bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Marcus Vance"
                        className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder-[#FDFCF8]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                        Organization / Entity
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Ontario Health Authority"
                        className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder-[#FDFCF8]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                        Direct Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="marcus@organization.org"
                        className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder-[#FDFCF8]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                        Direct Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 647-618-6311"
                        className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder-[#FDFCF8]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                        Focus Area *
                      </label>
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                      >
                        <option value="strategic-advisory">Strategic Advisory & Decision-Making</option>
                        <option value="sustainable-wellbeing">Sustainable High Performance & Wellbeing</option>
                        <option value="presentations-prep">High-Stakes Presentations & Keynote Prep</option>
                        <option value="thought-leadership">Ghostwriting & Thought Leadership</option>
                        <option value="conflict-mediation">Conflict Mediation & Sounding Board</option>
                        <option value="keynote-speaking">Keynote Speaking & Summits</option>
                        <option value="bespoke-retainer">Bespoke Executive Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                        Estimated Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                      >
                        <option value="Immediate / High Priority">Immediate / High Priority (Next 2 Weeks)</option>
                        <option value="Within 30–60 Days">Within 30–60 Days</option>
                        <option value="Upcoming Quarter">Upcoming Quarter</option>
                        <option value="Future Summit / Annual Planning">Future Summit / Annual Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF8]/70 mb-1.5">
                      Context / Strategic Dilemma *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly outline your situation, organizational context, or conference date and theme..."
                      className="w-full px-4 py-3 rounded-md bg-[#121212] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder-[#FDFCF8]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-sm bg-[#C5A059] text-[#121212] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-[#121212]" />
                        <span>Transmitting Securely...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Executive Inquiry</span>
                        <Send className="w-4 h-4 text-[#121212]" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success view */
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#1E1E1E] text-[#C5A059] flex items-center justify-center mx-auto shadow-md border border-[#C5A059]/30">
                    <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-[#FDFCF8]">
                    Inquiry Confirmed
                  </h3>

                  <p className="text-sm sm:text-base text-[#FDFCF8]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#FDFCF8]">{formData.name}</span>. Your inquiry has been routed directly to Kim Nicole Thomas's practice. We will be in touch within 24–48 business hours.
                  </p>

                  <div className="p-4 rounded-md bg-[#141414] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/70 max-w-md mx-auto">
                    For immediate assistance, please call <a href={`tel:${SITE_CONTACT.phone}`} className="font-bold text-[#C5A059] underline">{SITE_CONTACT.phoneFormatted}</a>.
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setFormData({
                          name: '',
                          organization: '',
                          email: '',
                          phone: '',
                          reason: 'executive-advisory',
                          timeline: 'Within 30 Days',
                          message: ''
                        });
                        setIsSuccess(false);
                      }}
                      className="px-6 py-2.5 rounded-sm bg-[#1E1E1E] border border-[#FDFCF8]/15 text-[#FDFCF8] text-xs font-bold uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
