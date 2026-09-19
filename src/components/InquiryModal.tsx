import React, { useState } from 'react';
import { X, Mail, Send, Check, Copy } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'City Planning / Master Plan',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nInquiry Type: ${formData.inquiryType}\n\nProject Scope / Message:\n${formData.message}`
    );
    
    // Trigger user's email client
    window.location.href = `mailto:contact.ar.jayaraman@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact.ar.jayaraman@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090A0D]/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#111319] border border-white/15 p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#9AA0AC] hover:text-[#F5F5F3] border border-white/10 hover:border-white/30 transition-colors focus:outline-none"
          aria-label="Close inquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase">
              CONSULTATION &amp; ADVISORY
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F3] uppercase">
            Initiate Professional Inquiry
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#9AA0AC] font-light">
            Engage Ar. N. Jayaraman for City Master Planning, AMRUT / Port consultancy, Architectural Projects, or Academic Advisory.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-[#D9383A]/20 text-[#D9383A] border border-[#D9383A]/40 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#F5F5F3]">
              Inquiry Draft Prepared
            </h4>
            <p className="text-xs sm:text-sm text-[#CDD0D8] max-w-md mx-auto font-light">
              Your default email client has been launched with the structured inquiry draft. You can also directly reach out at the address below.
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 bg-[#1A1D27] border border-white/15 text-xs font-mono text-[#F5F5F3] flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                <span>contact.ar.jayaraman@gmail.com</span>
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#D9383A] text-[#F5F5F3] text-xs font-mono tracking-widest uppercase font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9AA0AC] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#171A24] border border-white/10 text-sm text-[#F5F5F3] placeholder-[#626776] focus:outline-none focus:border-[#D9383A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9AA0AC] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#171A24] border border-white/10 text-sm text-[#F5F5F3] placeholder-[#626776] focus:outline-none focus:border-[#D9383A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9AA0AC] mb-1.5">
                  Organization / Authority
                </label>
                <input
                  type="text"
                  placeholder="e.g. Planning Authority / Studio"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#171A24] border border-white/10 text-sm text-[#F5F5F3] placeholder-[#626776] focus:outline-none focus:border-[#D9383A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9AA0AC] mb-1.5">
                  Inquiry Nature
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#171A24] border border-white/10 text-sm text-[#F5F5F3] focus:outline-none focus:border-[#D9383A]"
                >
                  <option value="City Planning / Master Plan">Statutory City Planning / GIS</option>
                  <option value="Architectural Design Project">Architectural Practice &amp; Design</option>
                  <option value="Academic Advisory & Lecture">Academic Leadership &amp; Lecture</option>
                  <option value="Property Valuation">Immovable Property Valuation</option>
                  <option value="General Professional Inquiry">General Professional Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9AA0AC] mb-1.5">
                Scope Summary / Message *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe the project context, location, and statutory requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#171A24] border border-white/10 text-sm text-[#F5F5F3] placeholder-[#626776] focus:outline-none focus:border-[#D9383A]"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-mono text-[#9AA0AC] hover:text-[#D9383A] flex items-center gap-1.5 self-start sm:self-center"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                <span>Copy contact address</span>
                {copiedEmail && <span className="text-emerald-400 text-[10px]">(Copied!)</span>}
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#D9383A]/20"
              >
                <span>Send via Mail Client</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
