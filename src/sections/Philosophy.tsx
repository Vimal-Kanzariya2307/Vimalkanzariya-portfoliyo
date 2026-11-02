import { Cpu, Sparkles, Layers, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { philosophyData } from '../data/socials';

export function Philosophy() {
  const iconMap: Record<string, typeof Cpu> = {
    Cpu: Cpu,
    Sparkles: Sparkles,
    Layers: Layers,
    Users: Users,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#090A11] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering Mindset"
          title="What I Bring to a Team."
          subtitle="My core approach to software development, collaboration, and continuous technical growth."
          accentWord="What I Bring"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Cpu;
            return (
              <div
                key={item.id}
                className="bg-[#0D0F18] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mb-3 font-semibold">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
