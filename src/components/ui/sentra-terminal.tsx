// Developed by doctorcodex
// Terminal demo with realistic typing animation - Mac style

"use client";

import { useEffect, useMemo, useState } from "react";

export default function SentraTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const terminalLines = useMemo(() => [
    "$ doctorcodex@sentra:~$ npm init -y",
    "✓ Package initialized",
    "$ doctorcodex@sentra:~$ npm install next@latest react@latest",
    "✓ Dependencies installed",
    "$ doctorcodex@sentra:~$ npx create-next-app@latest aadi-clinical",
    "✓ Project structure created",
    "$ doctorcodex@sentra:~/aadi-clinical$ cd aadi-clinical",
    "$ doctorcodex@sentra:~/aadi-clinical$ npm run dev",
    "✓ Server running on http://localhost:3000",
    "$ doctorcodex@sentra:~/aadi-clinical$ dex --assist --deploy",
    "✓ AI-powered clinical intelligence activated",
    "🚀 AADI Clinical Platform ready at https://sentra-aadi.com",
    "💡 Enhanced by doctorcodex + Dex AI collaboration",
  ], []);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    if (!line) return;

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines([...lines, line]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 400); // Pause before next line
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, terminalLines]);

  return (
    <div className="bg-black text-green-400 rounded-lg font-mono text-sm shadow-2xl overflow-hidden">
      {/* Mac-style header */}
      <div className="flex items-center justify-between mb-0 bg-gray-800 px-3 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-300 text-xs font-medium ml-2">
            doctorcodex@sentra:~
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-gray-500 text-xs">zsh</div>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-4 space-y-1 min-h-[320px] bg-black">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${
              line.startsWith("✓") || line.startsWith("🚀") || line.startsWith("💡")
                ? "text-emerald-400"
                : "text-green-400"
            }`}
          >
            {line}
          </div>
        ))}
        {currentLine < terminalLines.length && terminalLines[currentLine] && (
          <div className="text-green-400">
            {terminalLines[currentLine].substring(0, currentChar)}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  );
}

