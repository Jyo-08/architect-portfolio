import React, { useState, useEffect } from 'react';
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

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nInquiry Type: ${formData.inquiryType}\n\nProject Scope / Message:\n${formData.message}`
    );
    
    // Trigger user's email client
    window.location.href = `mailto:jesnenmeli@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jesnenmeli@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111214]/90 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#1E2025] border border-[#2A2D31] p-6 sm:p-10 shadow-2xl select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#A5A7AA] hover:text-[#F2F2F0] border border-[#2A2D31] hover:border-[#F2F2F0]/50 transition-colors focus:outline-none bg-[#111214]"
          aria-label="Close inquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              CONSULTATION &amp; ADVISORY
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2F2F0] uppercase">
            Initiate Professional Inquiry
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#A5A7AA]">
            Engage Ar. N. Jayaraman for City Master Planning, AMRUT / Port consultancy, Architectural Projects, Arbitration, or Academic Advisory.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-[#D9383A]/15 text-[#D9383A] border border-[#D9383A]/40 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#F2F2F0]">
              Inquiry Draft Prepared
            </h4>
            <p className="text-xs sm:text-sm text-[#A5A7AA] max-w-md mx-auto">
              Your default email client has been launched with the structured inquiry draft. You can also directly reach out at the address below.
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0] flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                <span>jesnenmeli@gmail.com</span>
                {copiedEmail ? <Check className="w-3 h-3 text-[#D9383A]" /> : <Copy className="w-3 h-3" />}
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
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-1.5 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-1.5 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-1.5 font-medium">
                  Organization / Authority
                </label>
                <input
                  type="text"
                  placeholder="e.g. Planning Authority / Studio"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-1.5 font-medium">
                  Inquiry Nature
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] focus:outline-none focus:border-[#D9383A]"
                >
                  <option value="City Planning / Master Plan">Statutory City Planning / GIS</option>
                  <option value="Architectural Design Project">Architectural Practice &amp; Design</option>
                  <option value="Arbitration & Legal Practice">Arbitration &amp; Legal Advisory</option>
                  <option value="Academic Advisory & Lecture">Academic Leadership &amp; Lecture</option>
                  <option value="Property Valuation">Immovable Property Valuation</option>
                  <option value="General Professional Inquiry">General Professional Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-1.5 font-medium">
                Scope Summary / Message *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe the project context, location, and statutory requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A]"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-mono text-[#A5A7AA] hover:text-[#D9383A] flex items-center gap-1.5 self-start sm:self-center"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                <span>Copy jesnenmeli@gmail.com</span>
                {copiedEmail && <span className="text-[#F2F2F0] text-[10px]">(Copied!)</span>}
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#D9383A]/20"
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
