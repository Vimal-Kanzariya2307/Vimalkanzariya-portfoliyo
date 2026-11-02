import { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  LineChart,
  Wrench,
  Search,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons: Record<string, typeof Code2> = {
    'Programming Languages': Code2,
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Databases & Storage': Database,
    'Data Science & FinTech': LineChart,
    'Developer Tools & Workflow': Wrench,
  };

  const filteredCategories = skillCategories
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => {
      if (selectedCategory !== 'all' && cat.title !== selectedCategory) return false;
      return cat.skills.length > 0;
    });

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0B0D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Tools I Use to Build."
          subtitle="A structured overview of programming languages, libraries, databases, and FinTech analytical tools I utilize in practical projects."
          accentWord="Tools I Use"
        />

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800">
          {/* Segmented category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-zinc-900 border border-zinc-800 rounded-xl scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.title
                    ? 'bg-white text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, JWT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <div
                key={category.title}
                className="bg-[#0D0F18] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills list inside category */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 text-xs rounded-lg border font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-zinc-800 border-zinc-600 text-white font-semibold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-zinc-400 text-sm">
            No technologies match "{searchQuery}". Try searching for another skill.
          </div>
        )}
      </div>
    </section>
  );
}
