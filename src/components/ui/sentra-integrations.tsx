// Developed by doctorcodex
// Integrations section with infinite scroll logos

'use client';

import { Button } from '@/components/ui/button';

const ICONS_ROW1 = [
  'https://cdn-icons-png.flaticon.com/512/5968/5968854.png',
  'https://cdn-icons-png.flaticon.com/512/732/732221.png',
  'https://cdn-icons-png.flaticon.com/512/733/733609.png',
  'https://cdn-icons-png.flaticon.com/512/732/732084.png',
  'https://cdn-icons-png.flaticon.com/512/733/733585.png',
  'https://cdn-icons-png.flaticon.com/512/281/281763.png',
  'https://cdn-icons-png.flaticon.com/512/888/888879.png',
];

const ICONS_ROW2 = [
  'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  'https://cdn-icons-png.flaticon.com/512/906/906324.png',
  'https://cdn-icons-png.flaticon.com/512/888/888841.png',
  'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
  'https://cdn-icons-png.flaticon.com/512/906/906361.png',
  'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  'https://cdn-icons-png.flaticon.com/512/888/888847.png',
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function SentraIntegrations() {
  return (
    <section className="relative pt-16 pb-2 overflow-hidden bg-white dark:bg-black">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white tracking-wide">
          ⚡ Integrations
        </span>
        {/* Separator line */}
        <div className="h-px bg-gray-300 dark:bg-gray-700 max-w-2xl mx-auto mb-6"></div>
        <h2
          className="text-2xl md:text-3xl font-semibold h2-underline"
          style={{ color: '#002157' }}
        >
          Integrate with favorite tools
        </h2>
        <p className="mt-4 text-[17px] leading-[1.8] font-medium text-gray-600 max-w-xl mx-auto">
          Lebih dari 20 aplikasi teratas tersedia untuk diintegrasikan secara mulus dengan alur
          kerja Anda.
        </p>
        <Button variant="secondary" size="lg" className="mt-8">
          Get started
        </Button>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
              >
                <img src={src} alt="icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
              >
                <img src={src} alt="icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
