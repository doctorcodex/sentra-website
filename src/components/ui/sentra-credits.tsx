// Developed by doctorcodex
// Credits and acknowledgments section for third-party technologies

"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
// External links use standard <a> tags for external navigation

interface Technology {
  name: string;
  developer: string;
  license: string;
  website: string;
  category: string;
  description: string;
}

const technologies: Technology[] = [
  // Core Framework
  {
    name: "Next.js",
    developer: "Vercel",
    license: "MIT",
    website: "https://nextjs.org",
    category: "Core Framework",
    description: "React framework dengan App Router, Server Components, dan optimization",
  },
  {
    name: "React",
    developer: "Meta (Facebook)",
    license: "MIT",
    website: "https://react.dev",
    category: "Core Framework",
    description: "UI library untuk building component-based interfaces",
  },
  {
    name: "TypeScript",
    developer: "Microsoft",
    license: "Apache 2.0",
    website: "https://typescriptlang.org",
    category: "Core Framework",
    description: "Type-safe JavaScript dengan strict mode",
  },

  // UI & Design
  {
    name: "Tailwind CSS",
    developer: "Tailwind Labs",
    license: "MIT",
    website: "https://tailwindcss.com",
    category: "UI & Styling",
    description: "Utility-first CSS framework",
  },
  {
    name: "shadcn/ui",
    developer: "shadcn",
    license: "MIT",
    website: "https://ui.shadcn.com",
    category: "UI & Styling",
    description: "Re-usable components built with Radix UI primitives",
  },
  {
    name: "Radix UI",
    developer: "Radix UI Team",
    license: "MIT",
    website: "https://radix-ui.com",
    category: "UI & Styling",
    description: "Unstyled, accessible component primitives",
  },
  {
    name: "Framer Motion",
    developer: "Framer",
    license: "MIT",
    website: "https://framer.com/motion",
    category: "UI & Styling",
    description: "Production-ready animation library for React",
  },
  {
    name: "Lucide Icons",
    developer: "Lucide Contributors",
    license: "ISC",
    website: "https://lucide.dev",
    category: "UI & Styling",
    description: "Beautiful & consistent icon set",
  },

  // Development Tools
  {
    name: "ESLint",
    developer: "ESLint Team",
    license: "MIT",
    website: "https://eslint.org",
    category: "Development Tools",
    description: "Pluggable JavaScript linter",
  },
  {
    name: "Prettier",
    developer: "Prettier Team",
    license: "MIT",
    website: "https://prettier.io",
    category: "Development Tools",
    description: "Opinionated code formatter",
  },
  {
    name: "Husky",
    developer: "Typicode",
    license: "MIT",
    website: "https://typicode.github.io/husky",
    category: "Development Tools",
    description: "Modern native git hooks",
  },

  // Healthcare
  {
    name: "FHIR Kit Client",
    developer: "Vermonster",
    license: "MIT",
    website: "https://github.com/Vermonster/fhir-kit-client",
    category: "Healthcare",
    description: "HL7 FHIR R4 client for healthcare interoperability",
  },
];

const categories = [
  "Core Framework",
  "UI & Styling",
  "Development Tools",
  "Healthcare",
];

export default function SentraCredits() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,33,87,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-px bg-gray-300 max-w-2xl mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-semibold h2-underline mb-2" style={{ color: '#002157' }}>
            Credits & Acknowledgments
          </h2>
          <p className="mt-4 text-[17px] leading-[1.8] font-medium text-gray-600 max-w-3xl mx-auto">
            Sentra AADI Framework dibangun di atas fondasi teknologi open-source terbaik. Kami mengucapkan terima kasih kepada seluruh komunitas dan developer yang telah berkontribusi membangun tools dan libraries berkualitas tinggi.
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const techs = technologies.filter((t) => t.category === category);
            if (techs.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-6" style={{ color: '#002157', fontFamily: 'var(--font-heading)' }}>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techs.map((tech) => (
                    <Card
                      key={tech.name}
                      className="group hover:shadow-lg transition-all duration-300 border-gray-200"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm" style={{ color: '#002147', fontFamily: 'var(--font-heading)' }}>
                            {tech.name}
                          </h4>
                          <a
                            href={tech.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            aria-label={`Visit ${tech.name} website`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-[14px] leading-[1.8] font-medium text-gray-600 mb-3">
                          {tech.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {tech.developer}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {tech.license}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Thanks */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[17px] leading-[1.8] font-medium text-gray-600">
              We extend our sincere appreciation to the creators and contributors of the open-source technologies that power this system.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                100% Open Source Licensed
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                51 Dependencies
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                MIT & Apache Licensed
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Attribution Footer */}
        <div className="mt-12 text-center">
          <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
            Architecture & Development by{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <strong
                    className="cursor-help transition-colors hover:text-[#F71D25]"
                    style={{ color: '#002157' }}
                  >
                    doctorcodex / drferdiiskandar
                  </strong>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white border-2 border-gray-200 shadow-lg p-4 max-w-xs"
                >
                  <div className="space-y-1.5">
                    <p className="font-semibold text-sm" style={{ color: '#002157' }}>
                      Doctorcodex sentra/ ui
                    </p>
                    <p className="text-xs text-gray-600">CEO of Sentra</p>
                    <p className="text-xs text-gray-600">CEO RSIA Melinda DHAI</p>
                    <p className="text-xs text-gray-600">Full Stack Developer</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <p className="text-[12px] leading-[1.8] text-gray-500 mt-2">
            All third-party technologies are property of their respective owners. Used under their respective open-source licenses.
          </p>
        </div>
      </div>
    </section>
  );
}

