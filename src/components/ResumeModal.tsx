import { useEffect } from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/socials';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1018] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#11131E] border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center font-bold text-xs">
              PDF
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-bold text-white">
                Vimal Kanzariya — Curriculum Vitae
              </h2>
              <p className="text-xs text-zinc-400">
                B.Sc. IT (FinTech) · Marwadi University · Rajkot, Gujarat
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Vimal_Kanzariya_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors ml-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="px-6 py-3 bg-[#080A10] border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300 shrink-0">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-white" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                {personalInfo.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{personalInfo.phone}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-white font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>CGPA: 7.95/10 · Grad 2027</span>
          </div>
        </div>

        {/* PDF Embedded Viewport */}
        <div className="flex-1 min-h-[460px] bg-black relative overflow-hidden">
          <iframe
            src="/resume.pdf#toolbar=1"
            title="Vimal Kanzariya Resume PDF"
            className="w-full h-full border-none min-h-[480px]"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#11131E] border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <span>Official document verified & attached</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
