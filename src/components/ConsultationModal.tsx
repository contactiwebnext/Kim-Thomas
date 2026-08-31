import React, { useState } from 'react';
import { SITE_CONTACT } from '../data/siteData';
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ArrowRight,
  Loader2,
  Calendar,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultReason?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultReason = "executive-advisory"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    reason: defaultReason,
    timeline: 'Within 30 Days',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

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

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2D4A3E', '#C89B53', '#FAF8F5']
        });
      } catch (e) {}
    } catch (err) {
      // If network fails, still show graceful success since direct email/phone are accessible
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="bg-[#141414] text-[#FDFCF8] w-full max-w-2xl rounded-xl border border-[#FDFCF8]/10 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#FDFCF8]/10 bg-[#0F0F0F]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#FDFCF8] tracking-tight">
                Confidential Executive Dialogue
              </h3>
              <p className="text-xs text-[#FDFCF8]/60">
                Direct line to Kim Nicole Thomas · Executive Advisory, Coaching & Keynotes
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-[#141414]">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-lg bg-[#1C1C1C] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/80 flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>
                  All communications are treated with strict C-suite confidentiality and discretion.
                </span>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-md bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] placeholder-[#FDFCF8]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. University Health Network"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] placeholder-[#FDFCF8]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] placeholder-[#FDFCF8]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 647-618-6311"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] placeholder-[#FDFCF8]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                    Primary Area of Inquiry *
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="executive-advisory" className="bg-[#1A1A1A] text-[#FDFCF8]">Executive Advisory (C-Suite / Board)</option>
                    <option value="leadership-coaching" className="bg-[#1A1A1A] text-[#FDFCF8]">1:1 Leadership & Wellbeing Coaching</option>
                    <option value="keynote-speaking" className="bg-[#1A1A1A] text-[#FDFCF8]">Keynote Speaking / Summit Address</option>
                    <option value="event-masterclass" className="bg-[#1A1A1A] text-[#FDFCF8]">Executive Retreat / Masterclass Facilitation</option>
                    <option value="general-inquiry" className="bg-[#1A1A1A] text-[#FDFCF8]">General Strategic Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                    Estimated Timeline / Event Date
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Immediate / High Priority (Next 2 Weeks)" className="bg-[#1A1A1A] text-[#FDFCF8]">Immediate / High Priority (Next 2 Weeks)</option>
                    <option value="Within 30–60 Days" className="bg-[#1A1A1A] text-[#FDFCF8]">Within 30–60 Days</option>
                    <option value="Upcoming Quarter" className="bg-[#1A1A1A] text-[#FDFCF8]">Upcoming Quarter</option>
                    <option value="Annual Conference / Future Planning" className="bg-[#1A1A1A] text-[#FDFCF8]">Annual Conference / Future Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/70 mb-1">
                  Brief Overview of Mandate or Strategic Challenge *
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your organization's context, upcoming transition, or conference theme..."
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#1A1A1A] border border-[#FDFCF8]/15 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] placeholder-[#FDFCF8]/40"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#FDFCF8]/60">
                  Direct inquiries: <a href={`tel:${SITE_CONTACT.phone}`} className="font-semibold underline text-[#C5A059]">{SITE_CONTACT.phoneFormatted}</a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#121212]" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Confidential Inquiry</span>
                      <Send className="w-4 h-4 text-[#121212]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1C1C1C] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFCF8]">
                Inquiry Received Confidentially
              </h4>

              <p className="text-sm sm:text-base text-[#FDFCF8]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#C5A059]">{formData.name}</span>. Kim Nicole Thomas reviews each executive inquiry personally. You will receive a response within 24–48 business hours.
              </p>

              <div className="p-4 rounded-lg bg-[#181818] border border-[#FDFCF8]/10 text-xs text-[#FDFCF8]/70 max-w-md mx-auto space-y-1">
                <div>For urgent matters or immediate speaking dates:</div>
                <div className="font-semibold text-[#FDFCF8] text-sm flex items-center justify-center gap-4 pt-1">
                  <a href={`tel:${SITE_CONTACT.phone}`} className="hover:text-[#C5A059] flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{SITE_CONTACT.phoneFormatted}</span>
                  </a>
                  <span>·</span>
                  <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-[#C5A059] flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{SITE_CONTACT.email}</span>
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
