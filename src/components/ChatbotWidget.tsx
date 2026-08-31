import React, { useState, useRef, useEffect } from 'react';
import { SITE_CONTACT } from '../data/siteData';
import { ChatMessage } from '../types';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Phone, 
  Mail, 
  ArrowUpRight,
  ShieldCheck,
  Loader2,
  ChevronDown
} from 'lucide-react';

interface ChatbotWidgetProps {
  onOpenBooking: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello and welcome. I am Kim Nicole Thomas's Executive AI Advisor. How can I assist you today regarding Kim's Executive Advisory, Leadership Coaching, or Keynote Speaking engagements?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What are Kim's signature keynote topics?",
    "How does Executive Advisory work for C-Suite?",
    "Tell me about Kim's 30+ years experience",
    "How do I book Kim for our conference?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputValue;
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/advisory-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(m => ({ role: m.role, content: m.content })),
          userMessage: messageText
        })
      });

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: data.reply || "Kim Nicole Thomas has guided senior leaders for over 30 years across Healthcare, Technology, Education, and Institutions. Feel free to connect directly at 647-618-6311 or kimnthomas@gmail.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const fallbackMessage: ChatMessage = {
        id: `assistant_err_${Date.now()}`,
        role: 'assistant',
        content: "Thank you for inquiring. Kim works directly with leaders navigating complexity and transformation. You can reach Kim's practice directly at 647-618-6311 or email kimnthomas@gmail.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#1A1A1A] text-[#FDFCF8] shadow-2xl hover:bg-[#222222] transition-all duration-300 hover:scale-105 active:scale-95 border border-[#C5A059]/40"
          aria-label="Open Kim's AI Executive Advisor"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#121212] flex items-center justify-center font-serif font-bold text-sm">
              KT
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#C5A059] border-2 border-[#1A1A1A] rounded-full animate-pulse"></span>
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight text-[#FDFCF8]">
              Executive Advisory AI
            </div>
            <div className="text-[10px] text-[#FDFCF8]/60">
              Ask about speaking, coaching, or advisory
            </div>
          </div>
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="bg-[#141414] text-[#FDFCF8] w-[92vw] sm:w-[380px] md:w-[400px] h-[520px] rounded-xl border border-[#FDFCF8]/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#0F0F0F] text-[#FDFCF8] px-4 py-3.5 flex items-center justify-between border-b border-[#FDFCF8]/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#C5A059] text-[#121212] flex items-center justify-center font-serif font-bold text-xs">
                KT
              </div>
              <div>
                <div className="text-xs font-bold flex items-center gap-1.5 text-[#FDFCF8]">
                  <span>Kim Nicole Thomas Advisory AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                </div>
                <div className="text-[10px] text-[#FDFCF8]/60 uppercase tracking-wider">
                  Executive Insights & Practice Inquiries
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md text-[#FDFCF8]/60 hover:text-[#C5A059] hover:bg-[#FDFCF8]/10 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#121212] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-sm bg-[#1A1A1A] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    KT
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-lg leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#C5A059] text-[#121212] font-medium rounded-tr-none'
                      : 'bg-[#1C1C1C] text-[#FDFCF8] border border-[#FDFCF8]/10 rounded-tl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                  <span className={`block text-[9px] mt-1 text-right ${
                    msg.role === 'user' ? 'text-[#121212]/70' : 'text-[#FDFCF8]/40'
                  }`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[#FDFCF8]/70 text-[11px] italic bg-[#1C1C1C] p-2.5 rounded-lg border border-[#FDFCF8]/10 w-fit">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C5A059]" />
                <span>Formulating executive response...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-[#181818] border-t border-[#FDFCF8]/10 overflow-x-auto whitespace-nowrap space-x-1.5 scrollbar-none flex">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="inline-block px-2.5 py-1 rounded-sm bg-[#222222] text-[11px] text-[#FDFCF8]/80 hover:bg-[#C5A059] hover:text-[#121212] transition-colors border border-[#FDFCF8]/10 shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-[#161616] border-t border-[#FDFCF8]/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Kim's AI Advisor..."
                className="flex-1 px-3 py-2 rounded-sm bg-[#121212] border border-[#FDFCF8]/15 text-xs text-[#FDFCF8] focus:outline-none focus:border-[#C5A059] placeholder-[#FDFCF8]/40"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2 rounded-sm bg-[#C5A059] text-[#121212] hover:brightness-110 transition-colors disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5 text-[#121212]" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-[#FDFCF8]/60 mt-2 pt-1.5 border-t border-[#FDFCF8]/10">
              <a href={`tel:${SITE_CONTACT.phone}`} className="hover:text-[#C5A059] flex items-center gap-1 font-medium">
                <Phone className="w-3 h-3 text-[#C5A059]" />
                <span>647-618-6311</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="text-[#C5A059] hover:underline font-bold flex items-center gap-1 uppercase text-[10px] tracking-wider"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
