// Developed by doctorcodex
// Hero section with animated text

'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export default function SentraHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ['cepat', 'akurat', 'aman', 'terpercaya', 'modern'], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Powered by RSIA Melinda DHAI <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-[#002157]">Augmented AI Diagnostic Integrated</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#002157]"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Sistem pendukung keputusan klinis yang dirancang khusus untuk layanan kesehatan
              primer. Membantu dokter menegakkan diagnosis dan membuat rencana terapi dengan cepat,
              aman, dan berbasis data.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Hubungi Kami <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Mulai Sekarang <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
