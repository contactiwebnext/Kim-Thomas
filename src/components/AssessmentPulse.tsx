import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../data/siteData';
import { AssessmentQuestion } from '../types';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  BrainCircuit, 
  BatteryCharging, 
  Compass, 
  Download,
  Mail,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AssessmentPulseProps {
  onOpenBooking: () => void;
}

export const AssessmentPulse: React.FC<AssessmentPulseProps> = ({ onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, { label: string; score: number; description: string }>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);

  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (option: { label: string; score: number; description: string }) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  const handleNext = async () => {
    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Completed all questions
      setIsCompleted(true);
      setAnalyzing(true);
      
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#2D4A3E', '#C89B53', '#FAF8F5']
        });
      } catch (e) {
        // Safe fallback
      }

      // Request AI analysis or calculate summary
      try {
        const response = await fetch('/api/assessment-analysis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            answersSummary: selectedAnswers
          })
        });
        const data = await response.json();
        setAiInsight(data.insight);
      } catch (err) {
        setAiInsight("Your responses highlight a leader navigating high-stakes organizational mandates. To sustain clear decision-making and avoid reactive depletion, Kim recommends establishing structured boundary protocols and engaging an objective strategic sounding board.");
      } finally {
        setAnalyzing(false);
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setAiInsight(null);
  };

  // Calculate scores
  const totalScore = (Object.values(selectedAnswers) as Array<{ label: string; score: number; description: string }>).reduce((acc, curr) => acc + (curr?.score || 0), 0);
  const maxScore = ASSESSMENT_QUESTIONS.length * 3;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  const getProfileSummary = () => {
    if (scorePercent >= 80) {
      return {
        archetype: "High-Capacity Strategic Navigator",
        statusColor: "text-[#C5A059]",
        summary: "You maintain exceptional discipline around strategic priorities and resilience. Your primary focus with an advisor is sustaining high-level institutional legacy and scaling leadership gravitas.",
        focusArea: "Strategic Legacy & High-Stakes Board Alignment"
      };
    } else if (scorePercent >= 55) {
      return {
        archetype: "Resilient Leader Under Elevated Friction",
        statusColor: "text-[#E5B564]",
        summary: "You possess strong core capabilities, but low-signal noise, continuous operational firefighting, and inconsistent recovery are taxing your cognitive bandwidth.",
        focusArea: "Cognitive Bandwidth Protection & Team Alignment"
      };
    } else {
      return {
        archetype: "High-Pressure / High-Burnout Zone",
        statusColor: "text-[#E07A5F]",
        summary: "You are absorbing immense organizational tension with insufficient recovery and an isolated sounding board. Immediate strategic recalibration and energy restoration are vital.",
        focusArea: "Urgent Burnout Mitigation & Executive Sounding Board"
      };
    }
  };

  const profile = getProfileSummary();

  return (
    <section className="py-16 md:py-24 bg-[#0F0F0F] border-y border-[#FDFCF8]/10 relative overflow-hidden" id="leadership-pulse">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C5A059]/25">
            <BrainCircuit className="w-3.5 h-3.5 text-[#C5A059]" />
            Executive Self-Reflection Tool
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFCF8] font-bold tracking-tight">
            The Sustainable Leadership & Resilience Pulse
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#FDFCF8]/70 max-w-2xl mx-auto">
            A 2-minute diagnostic designed for senior executives to evaluate strategic clarity, cognitive bandwidth, and high-stakes resilience.
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="bg-[#141414] rounded-xl border border-[#FDFCF8]/10 shadow-2xl p-6 sm:p-8 md:p-10 relative">
          {!isCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/60 mb-2">
                  <span>Question {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}</span>
                  <span className="text-[#C5A059] font-bold">Dimension: {currentQuestion.category}</span>
                </div>
                <div className="w-full bg-[#222222] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#C5A059] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-8">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FDFCF8] font-semibold leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id]?.label === option.label;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option)}
                      className={`w-full text-left p-4 rounded-md border transition-all duration-200 flex items-start gap-4 ${
                        isSelected 
                          ? 'border-[#C5A059] bg-[#1E1E1E] shadow-sm ring-1 ring-[#C5A059]' 
                          : 'border-[#FDFCF8]/10 bg-[#181818] hover:bg-[#202020] hover:border-[#C5A059]/40'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected 
                          ? 'border-[#C5A059] bg-[#C5A059] text-[#121212]' 
                          : 'border-[#FDFCF8]/30 bg-[#141414]'
                      }`}>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#121212]"></span>}
                      </div>
                      <div>
                        <div className={`font-bold text-sm sm:text-base ${isSelected ? 'text-[#C5A059]' : 'text-[#FDFCF8]'}`}>
                          {option.label}
                        </div>
                        <div className="text-xs sm:text-sm text-[#FDFCF8]/70 mt-0.5 leading-relaxed">
                          {option.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#FDFCF8]/10">
                <button
                  onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)}
                  disabled={currentStep === 0}
                  className={`text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-sm transition-colors ${
                    currentStep === 0 
                      ? 'text-[#FDFCF8]/20 cursor-not-allowed' 
                      : 'text-[#FDFCF8]/70 hover:bg-[#FDFCF8]/10 hover:text-[#FDFCF8]'
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={!selectedAnswers[currentQuestion.id]}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedAnswers[currentQuestion.id]
                      ? 'bg-[#C5A059] text-[#121212] hover:brightness-110 shadow-lg'
                      : 'bg-[#222222] text-[#FDFCF8]/30 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === ASSESSMENT_QUESTIONS.length - 1 ? 'Generate Leadership Synthesis' : 'Next Dimension'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-[#FDFCF8]/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1C1C1C] border border-[#C5A059]/40 text-[#C5A059] mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFCF8] font-bold">
                  Executive Resilience & Clarity Synthesis
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mt-1">
                  Confidential Leadership Diagnostic Profile
                </p>
              </div>

              {/* Score & Archetype Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#181818] p-6 rounded-md border border-[#FDFCF8]/10">
                <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-[#141414] rounded-md border border-[#FDFCF8]/10 shadow-inner">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FDFCF8]/60">
                    Capacity Score
                  </span>
                  <div className="font-serif text-4xl font-bold text-[#C5A059] my-1">
                    {scorePercent}%
                  </div>
                  <span className="text-[11px] text-[#FDFCF8]/50">
                    {totalScore} / {maxScore} points
                  </span>
                </div>

                <div className="md:col-span-8 flex flex-col justify-center space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Assessed Leadership Archetype
                  </div>
                  <div className={`font-serif text-xl sm:text-2xl font-bold ${profile.statusColor}`}>
                    {profile.archetype}
                  </div>
                  <p className="text-sm text-[#FDFCF8]/80 leading-relaxed">
                    {profile.summary}
                  </p>
                </div>
              </div>

              {/* Strategic Insights */}
              <div className="bg-[#181818] p-6 rounded-md border border-[#FDFCF8]/10 space-y-3">
                <div className="flex items-center gap-2 text-[#C5A059] font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Kim Nicole Thomas Strategic Observation:</span>
                </div>

                {analyzing ? (
                  <div className="flex items-center justify-center py-6 gap-3 text-sm text-[#FDFCF8]/60">
                    <Loader2 className="w-5 h-5 animate-spin text-[#C5A059]" />
                    <span>Synthesizing cross-sector leadership benchmarks...</span>
                  </div>
                ) : (
                  <p className="text-sm sm:text-base text-[#FDFCF8]/90 leading-relaxed italic border-l-2 border-[#C5A059] pl-4">
                    "{aiInsight || "Leading through relentless complexity requires decoupling urgency from importance. Senior leaders thrive when they insulate strategic thinking time and cultivate psychological safety across executive ranks."}"
                  </p>
                )}
              </div>

              {/* Next Steps & CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#FDFCF8]/10">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FDFCF8]/60 hover:text-[#C5A059] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#C5A059] text-[#121212] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors shadow-lg"
                  >
                    <span>Discuss Results in a Discovery Call</span>
                    <ArrowRight className="w-4 h-4 text-[#121212]" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
