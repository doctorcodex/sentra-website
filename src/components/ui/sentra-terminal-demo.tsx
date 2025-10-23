    // Developed by doctorcodex
// Sentra AADI Terminal Demo

"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal';

const SentraTerminalDemo = () => (
  <Terminal>
    <AnimatedSpan delay={0}>$ doctorcodex@sentra:~$ npm init -y</AnimatedSpan>
    <TypingAnimation delay={1500} duration={60}>
      Creating package.json...
    </TypingAnimation>
    <AnimatedSpan delay={3000}>✓ Package initialized</AnimatedSpan>

    <AnimatedSpan delay={3500}>$ doctorcodex@sentra:~$ npm install next@latest react@latest</AnimatedSpan>
    <TypingAnimation delay={5000} duration={50}>
      Installing Next.js 15 and React 19...
    </TypingAnimation>
    <AnimatedSpan delay={7000}>✓ Dependencies installed</AnimatedSpan>

    <AnimatedSpan delay={7500}>$ doctorcodex@sentra:~$ npx create-next-app@latest aadi-clinical</AnimatedSpan>
    <TypingAnimation delay={9000} duration={40}>
      Creating AADI Clinical Intelligence Platform...
    </TypingAnimation>
    <AnimatedSpan delay={12000}>✓ Project structure created</AnimatedSpan>

    <AnimatedSpan delay={12500}>$ doctorcodex@sentra:~$ cd aadi-clinical</AnimatedSpan>
    <AnimatedSpan delay={13000}>$ doctorcodex@sentra:~/aadi-clinical$ npm run dev</AnimatedSpan>
    <TypingAnimation delay={14000} duration={30}>
      Starting development server...
    </TypingAnimation>
    <AnimatedSpan delay={16000}>✓ Server running on http://localhost:3000</AnimatedSpan>

    <AnimatedSpan delay={16500}>$ doctorcodex@sentra:~/aadi-clinical$ dex --assist --deploy</AnimatedSpan>
    <TypingAnimation delay={18000} duration={25}>
      Dex is now enhancing the clinical platform...
    </TypingAnimation>
    <AnimatedSpan delay={20000}>✓ AI-powered clinical intelligence activated</AnimatedSpan>
    <AnimatedSpan delay={20500}>🚀 AADI Clinical Platform ready at https://sentra-aadi.com</AnimatedSpan>
    <AnimatedSpan delay={21000}>💡 Enhanced by doctorcodex + Dex AI collaboration</AnimatedSpan>
  </Terminal>
);

export default SentraTerminalDemo;
