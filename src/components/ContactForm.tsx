import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, ExternalLink, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/socials';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam check
    if (formData.honeypot) {
      setStatus('error');
      setStatusMessage('Submission blocked as spam.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        setStatusMessage(
          data.message ||
            `Thank you, ${formData.name}! Your message has been dispatched to Vimal. He will respond to ${formData.email} promptly.`
        );
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || 'Internship / Project Inquiry'
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        setStatus('error');
        setStatusMessage(
          data?.error ||
            'Unable to transmit via server endpoint. You can dispatch directly via your default email application using the button below.'
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Server connection unavailable. Please use the direct email link below to send your message directly to vimalkanzariya2307@gmail.com.'
      );
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry / Internship Opportunity');
    const body = encodeURIComponent(
      `Hi Vimal,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${
        formData.message || ''
      }`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#0D0F18] border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
        <div>
          <h3 className="text-xl font-bold text-white">Direct Message Channel</h3>
          <p className="text-xs text-zinc-400 mt-1">
            Expected response time: within 24 hours
          </p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 transition-colors font-medium"
          title="Copy email to clipboard"
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
          <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Honeypot field (hidden from genuine users) */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
              Full Name <span className="text-white">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                errors.name ? 'border-rose-400' : 'border-zinc-800 focus:border-zinc-400'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
              Email Address <span className="text-white">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="name@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                errors.email ? 'border-rose-400' : 'border-zinc-800 focus:border-zinc-400'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Web Development Internship / Project Inquiry"
            className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-zinc-400 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
            Message <span className="text-white">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: '' });
            }}
            placeholder="Tell me about your team, project requirements, or role..."
            className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-colors resize-none ${
              errors.message ? 'border-rose-400' : 'border-zinc-800 focus:border-zinc-400'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Feedback message banner */}
        {status === 'success' && (
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-xs sm:text-sm text-white flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Message Dispatched Successfully</p>
              <p className="mt-0.5 text-zinc-300">{statusMessage}</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-xl bg-zinc-900 border border-rose-800/80 text-xs sm:text-sm text-zinc-200 flex flex-col gap-2">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <p className="text-zinc-300">{statusMessage}</p>
            </div>
            <div className="pt-2 border-t border-zinc-800 flex items-center gap-2">
              <a
                href={getDirectMailto()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 disabled:bg-zinc-600 rounded-lg transition-all shadow-md shadow-white/5 active:scale-95 whitespace-nowrap shrink-0"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <span className="text-xs text-zinc-400">
            Protected against spam. Your email will remain strictly confidential.
          </span>
        </div>
      </form>
    </div>
  );
}
