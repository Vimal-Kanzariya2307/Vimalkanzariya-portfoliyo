import { useState } from 'react';
import { Copy, Check, Terminal, FileCode2, Play } from 'lucide-react';

interface CodeTab {
  name: string;
  language: string;
  code: string[];
  terminalOutput: string[];
}

export function CodeEditorHero() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '$ node server.js',
    '✓ Connected to MongoDB database: pgfinder_db',
    '✓ REST API routes initialized on :5000',
    '✓ JWT authentication middleware active',
    'Ready for requests...',
  ]);

  const tabs: CodeTab[] = [
    {
      name: 'authMiddleware.js',
      language: 'javascript',
      code: [
        '// PGFinder: JWT & Bcrypt Authentication Middleware',
        'import jwt from "jsonwebtoken";',
        'import User from "../models/User.js";',
        '',
        'export const requireAuth = async (req, res, next) => {',
        '  try {',
        '    const authHeader = req.headers.authorization;',
        '    if (!authHeader?.startsWith("Bearer ")) {',
        '      return res.status(401).json({ error: "Access token missing" });',
        '    }',
        '',
        '    const token = authHeader.split(" ")[1];',
        '    const decoded = jwt.verify(token, process.env.JWT_SECRET);',
        '    req.user = await User.findById(decoded.id).select("-password");',
        '    next();',
        '  } catch (err) {',
        '    return res.status(403).json({ error: "Invalid or expired token" });',
        '  }',
        '};',
      ],
      terminalOutput: [
        '$ node server.js',
        '✓ Connected to MongoDB: pgfinder_db',
        '✓ REST API routes initialized on :5000',
        '✓ JWT authentication middleware active',
        'Ready for incoming requests...',
      ],
    },
    {
      name: 'volatilityEngine.py',
      language: 'python',
      code: [
        '# Stock Volatility Analytics Engine',
        'import numpy as np',
        'import pandas as pd',
        '',
        'def compute_rolling_volatility(prices_df, window=20):',
        '    """Calculates annualized rolling standard deviation"""',
        '    log_returns = np.log(prices_df["Close"] / prices_df["Close"].shift(1))',
        '    annualized_vol = log_returns.rolling(window=window).std() * np.sqrt(252)',
        '    ',
        '    return {',
        '        "current_vol": round(float(annualized_vol.iloc[-1] * 100), 2),',
        '        "historical_mean": round(float(annualized_vol.mean() * 100), 2),',
        '        "risk_regime": "HIGH" if annualized_vol.iloc[-1] > 0.25 else "MODERATE"',
        '    }',
      ],
      terminalOutput: [
        '$ python3 -m volatility.engine --ticker SPY',
        '✓ Ingested 252 daily price records',
        '✓ Computed rolling volatility window=20',
        '» Current Annualized Volatility: 28.65% [HIGH]',
        '» Risk status: Evaluated for dashboard visualization',
      ],
    },
    {
      name: 'DeveloperProfile.ts',
      language: 'typescript',
      code: [
        'export const vimalKanzariya = {',
        '  name: "Vimal Kanzariya",',
        '  role: "Web Developer | Aspiring Full-Stack Developer",',
        '  education: "B.Sc. IT (FinTech), Marwadi University",',
        '  location: "Rajkot, Gujarat, India",',
        '  coreStack: ["React.js", "Node.js", "Python", "MongoDB"],',
        '  status: "Open to Internship Opportunities (Grad 2027)",',
        '  objective: "Solving real-world problems with robust code."',
        '} as const;',
      ],
      terminalOutput: [
        '$ npm run build',
        '✓ Vite v8.3.0 building for production...',
        '✓ 42 modules transformed',
        '✓ Built in 340ms',
        '✓ Status: Ready for internship and developer roles',
      ],
    },
  ];

  const handleCopy = () => {
    const textToCopy = tabs[activeTab].code.join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTerminalLogs(['Executing file in sandbox environment...']);
    setTimeout(() => {
      setTerminalLogs(tabs[activeTab].terminalOutput);
      setIsRunning(false);
    }, 600);
  };

  const renderHighlightedLine = (line: string) => {
    if (line.startsWith('//') || line.startsWith('#') || line.startsWith('"""') || line.endsWith('"""')) {
      return <span className="text-zinc-500 italic">{line}</span>;
    }
    
    // Gray and white syntax highlight
    const parts = line.split(/(\b(?:import|from|export|const|async|await|try|catch|if|return|def|as|as const)\b|"[^"]*"|'[^']*')/g);
    
    return parts.map((part, i) => {
      if (/^(import|from|export|const|async|await|try|catch|if|return|def|as)$/.test(part)) {
        return <span key={i} className="text-white font-bold">{part}</span>;
      }
      if (/^["'].*["']$/.test(part)) {
        return <span key={i} className="text-zinc-300 font-medium">{part}</span>;
      }
      if (part.includes('(') || part.includes(')')) {
        return <span key={i} className="text-zinc-200">{part}</span>;
      }
      return <span key={i} className="text-zinc-400">{part}</span>;
    });
  };

  return (
    <div className="relative w-full rounded-2xl border border-zinc-800 bg-[#0B0D14] shadow-2xl overflow-hidden group">
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D101A] border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {/* Window control dots in monochrome subtle gray */}
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-600" />
          <span className="ml-3 text-xs font-mono text-zinc-400">workspace — vimal@portfolio</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning}
            title="Execute file"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-colors font-medium"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>Run</span>
          </button>
          <button
            onClick={handleCopy}
            title="Copy code"
            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
            aria-label="Copy code to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Editor Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#0A0C14] border-b border-zinc-800/80 overflow-x-auto scrollbar-none">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => {
              setActiveTab(idx);
              setTerminalLogs(tabs[idx].terminalOutput);
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap shrink-0 border-t border-x ${
              activeTab === idx
                ? 'bg-[#111422] text-white border-zinc-700 font-semibold'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800/40'
            }`}
          >
            <FileCode2 className={`w-3.5 h-3.5 ${activeTab === idx ? 'text-white' : 'text-zinc-500'}`} />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Code Text Area with Line Numbers */}
      <div className="p-4 font-mono text-xs md:text-sm bg-[#111422] leading-relaxed overflow-x-auto max-h-[300px] select-text">
        <div className="space-y-0.5 min-w-[340px]">
          {tabs[activeTab].code.map((line, lineIndex) => (
            <div key={lineIndex} className="flex items-start hover:bg-white/[0.03] px-1 rounded">
              <span className="w-8 text-right pr-4 text-zinc-600 select-none text-xs tabular-nums shrink-0">
                {lineIndex + 1}
              </span>
              <span className="flex-1 whitespace-pre">
                {renderHighlightedLine(line)}
                {lineIndex === tabs[activeTab].code.length - 1 && (
                  <span className="inline-block w-2 h-4 ml-1 bg-white animate-pulse align-middle" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Panel */}
      <div className="border-t border-zinc-800 bg-[#080A10] px-4 py-3">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span className="text-zinc-300 font-medium">Terminal (Interactive Output)</span>
          </div>
          <span className="text-[11px] text-zinc-500">bash 5.2</span>
        </div>
        <div className="space-y-1 font-mono text-[11px] md:text-xs">
          {terminalLogs.map((log, i) => (
            <p
              key={i}
              className={`${
                log.startsWith('✓')
                  ? 'text-white font-medium'
                  : log.startsWith('»')
                  ? 'text-zinc-300 font-semibold'
                  : log.startsWith('$')
                  ? 'text-zinc-400'
                  : 'text-zinc-400'
              }`}
            >
              {log}
            </p>
          ))}
        </div>
      </div>

      {/* Technology Bar at bottom of workspace */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-[#0B0D16] border-t border-zinc-800 text-[11px] text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="text-zinc-300 font-medium">React.js</span>
          <span className="text-zinc-700">·</span>
          <span className="text-zinc-300 font-medium">Node.js</span>
          <span className="text-zinc-700">·</span>
          <span className="text-zinc-300 font-medium">MongoDB</span>
          <span className="text-zinc-700">·</span>
          <span className="text-zinc-300 font-medium">Python</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>Dev Environment</span>
        </div>
      </div>
    </div>
  );
}
