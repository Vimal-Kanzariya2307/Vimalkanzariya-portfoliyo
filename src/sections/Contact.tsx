import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { personalInfo } from '../data/socials';

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0D17] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Meaningful."
          subtitle="I'm interested in web development internships, collaborative projects, and opportunities to learn, contribute, and grow as a developer."
          accentWord="Meaningful"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0D0F18] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                Whether you have an internship opening, want to discuss software architecture, or
                explore a collaborative project, feel free to reach out directly.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                      Phone
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-4 border-t border-zinc-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Professional Profiles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-white hover:bg-zinc-800 transition-colors text-xs font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-white" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-white hover:bg-zinc-800 transition-colors text-xs font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-white" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2.5">
                <Calendar className="w-4 h-4 shrink-0 text-white" />
                <span>
                  Target graduation: <strong className="text-white">2027</strong> · Open to summer & semester internships.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
