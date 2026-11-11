import React, { useState, useEffect, useCallback } from 'react';
import { X, ExternalLink, Mail, Copy, Check, AlertCircle } from 'lucide-react';

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
  recipientEmail = 'jesnenmeli@gmail.com',
  subject = 'Professional Inquiry — Architecture & City Planning',
  body = 'Hello,\n\nI would like to get in touch regarding architecture, city planning, arbitration, legal advisory, or related professional services.\n\nThank you.\n\nRegards,'
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const handleClose = useCallback(() => {
    setShowFallback(false);
    onClose();
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

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

  const encodedRecipient = encodeURIComponent(recipientEmail);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Exact required Gmail compose URL format
  const gmailUrl = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${encodedRecipient}&su=${encodedSubject}&body=${encodedBody}`;
  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContinueClick = () => {
    // Attempt window.open check for browsers blocking popups
    try {
      const testWin = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      if (!testWin || testWin.closed || typeof testWin.closed === 'undefined') {
        // Popup was blocked, show fallback notice
        setShowFallback(true);
      } else {
        // Successfully opened in new tab
        setTimeout(() => {
          handleClose();
        }, 300);
      }
    } catch {
      setShowFallback(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111214]/90 backdrop-blur-md animate-fade-in select-none"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gmail-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#1E2025] border border-[#2A2D31] p-6 sm:p-8 shadow-2xl select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-[#A5A7AA] hover:text-[#F2F2F0] border border-[#2A2D31] hover:border-[#F2F2F0]/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A] bg-[#111214]"
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
          <h3 id="gmail-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#F2F2F0] uppercase">
            Open Gmail Compose
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#A5A7AA] leading-relaxed">
            A new browser tab will open with Gmail compose prefilled for Ar. N. Jayaraman. You can review and edit your inquiry before sending.
          </p>
        </div>

        {/* Fallback Notice if Popup Was Blocked */}
        {showFallback && (
          <div className="mb-5 p-3.5 bg-[#D9383A]/10 border border-[#D9383A]/40 text-xs font-mono text-[#F2F2F0] flex items-start gap-2.5 animate-fade-in">
            <AlertCircle className="w-4 h-4 text-[#D9383A] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#F2F2F0] mb-1">
                Gmail could not be opened automatically.
              </p>
              <p className="text-[#A5A7AA]">
                Please use the direct link below, open your default mail client, or copy the email address.
              </p>
            </div>
          </div>
        )}

        {/* Details Box */}
        <div className="p-4 bg-[#111214] border border-[#2A2D31] space-y-2.5 mb-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-[#A5A7AA]">RECIPIENT:</span>
            <div className="flex items-center gap-2">
              <span className="text-[#F2F2F0] font-semibold">{recipientEmail}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1 hover:text-[#D9383A] text-[#A5A7AA] transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#D9383A]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
          <div className="flex items-start justify-between gap-2 pt-2 border-t border-[#2A2D31]">
            <span className="text-[#A5A7AA] shrink-0">SUBJECT:</span>
            <span className="text-[#F2F2F0] text-right truncate">{subject}</span>
          </div>
        </div>

        {/* Direct Fallback Links */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#A5A7AA] pt-1">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="hover:text-[#F2F2F0] transition-colors flex items-center gap-1.5"
          >
            <Copy className="w-3 h-3 text-[#D9383A]" />
            <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
          </button>
          <a
            href={mailtoUrl}
            className="hover:text-[#F2F2F0] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3 h-3 text-[#D9383A]" />
            <span>Open Default Mail Client</span>
          </a>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2 border-t border-[#2A2D31]">
          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-[#2A2D31] bg-[#111214] text-[#F2F2F0] hover:border-[#F2F2F0] text-xs font-mono tracking-widest uppercase transition-colors"
          >
            CANCEL
          </button>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleContinueClick}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.15em] uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#D9383A]/20"
          >
            <span>CONTINUE TO GMAIL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
