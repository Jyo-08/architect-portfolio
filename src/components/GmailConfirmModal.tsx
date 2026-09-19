import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface GmailConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail?: string;
  subject?: string;
  body?: string;
}

export const GmailConfirmModal: React.FC<GmailConfirmModalProps> = ({
  isOpen,
  onClose,
  recipientEmail = 'jnmidas@gmail.com',
  subject = 'Professional Inquiry — Architecture & City Planning',
  body = 'Hello,\n\nI would like to get in touch regarding architecture, city planning, consultancy, or related professional services.\n\nThank you.\n\nRegards,'
}) => {
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

  const handleContinueToGmail = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090A0D]/90 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gmail-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#111319] border border-white/15 p-6 sm:p-8 shadow-2xl select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#9AA0AC] hover:text-[#F5F5F3] border border-white/10 hover:border-white/30 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A]"
          aria-label="Close dialog (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#D9383A]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              CONSULTATION INQUIRY
            </span>
          </div>
          <h3 id="gmail-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F3] uppercase">
            Open Gmail Compose
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#9AA0AC] font-light leading-relaxed">
            A new browser tab will open with Gmail compose prefilled for Ar. Nenmeli Jayaraman. You can review and edit your inquiry before sending.
          </p>
        </div>

        {/* Details Box */}
        <div className="p-4 bg-[#171A24]/90 border border-white/8 space-y-2.5 mb-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-[#9AA0AC]">RECIPIENT:</span>
            <span className="text-[#F5F5F3] font-medium">{recipientEmail}</span>
          </div>
          <div className="flex items-start justify-between gap-2 pt-2 border-t border-white/5">
            <span className="text-[#9AA0AC] shrink-0">SUBJECT:</span>
            <span className="text-[#CDD0D8] text-right truncate">{subject}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-white/15 text-[#9AA0AC] hover:text-[#F5F5F3] hover:border-white/30 text-xs font-mono tracking-widest uppercase transition-colors"
          >
            CANCEL
          </button>

          <button
            type="button"
            onClick={handleContinueToGmail}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.15em] uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#D9383A]/20"
          >
            <span>CONTINUE TO GMAIL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
