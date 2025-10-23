// Developed by doctorcodex
// Pricing milestones component - horizontal timeline with cards

'use client';

import TeamAvatars from '@/components/ui/team-avatars';
import { motion } from 'framer-motion';

export default function SentraMilestones() {
  const milestones = [
    {
      title: 'Arsitektur',
      date: 'August, 25',
      position: 'below',
      completed: true,
      description: 'data utama, desain FHIR flow, dan user journey klinis.',
    },
    {
      title: 'UI/UX',
      date: 'September, 25',
      position: 'above',
      completed: true,
      description: 'Bangun tampilan awal & Uji alur input dengan tenaga medis.',
    },
    {
      title: 'FHIR Integration',
      date: 'October, 25',
      position: 'below',
      completed: true,
      description: 'Menggunakan standar FHIR.',
    },
    {
      title: 'Machine Intelligence',
      date: 'November, 25',
      position: 'above',
      completed: true,
      description: 'Modul rekomendasi (rule-based + model ML)',
    },
    {
      title: 'Interoperabilitas',
      date: 'December, 25',
      position: 'below',
      completed: true,
      description: 'Implementasi autentikasi berbasis OAuth2 dan enkripsi (HIPAA-ready)',
    },
    {
      title: 'Pilot',
      date: 'January, 26',
      position: 'above',
      completed: false,
      description: 'Uji coba klinis',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          {/* Separator line */}
          <div className="h-px bg-gray-300 dark:bg-gray-700 max-w-2xl mx-auto mb-6"></div>
          <h2
            className="text-2xl md:text-3xl font-semibold h2-underline mb-2"
            style={{ color: '#002157' }}
          >
            Development milestones
          </h2>
          <p className="text-[17px] leading-[1.8] font-medium text-gray-600">
            Project Development dimulai sejak Agustus 2025
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-[200px]">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black transform -translate-y-1/2"></div>

          {/* Timeline Points and Cards */}
          <div className="relative flex justify-between items-center">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="relative flex flex-col items-center"
              >
                {/* Timeline Point */}
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 ${
                    milestone.completed ? 'bg-white border-black' : 'bg-gray-300 border-gray-300'
                  } relative z-10 flex items-center justify-center`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                    ease: 'easeOut',
                  }}
                >
                  {milestone.completed && (
                    <motion.div
                      className="w-2 h-2 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.5,
                        ease: 'easeOut',
                      }}
                    />
                  )}
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`absolute ${
                    milestone.position === 'above' ? 'bottom-8' : 'top-8'
                  } w-48 transform -translate-x-1/2`}
                  initial={{
                    opacity: 0,
                    y: milestone.position === 'above' ? 30 : -30,
                    rotate: milestone.position === 'above' ? 3 : -3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: 2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotate: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden">
                    {/* Header with Oxford Blue or Red Orange for Machine Intelligence */}
                    <div
                      className={`px-4 py-2 ${
                        milestone.title === 'Machine Intelligence' ? 'bg-[#F71D25]' : 'bg-[#002157]'
                      }`}
                    >
                      <h3 className="font-bold text-white text-sm text-center">
                        {milestone.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="text-center mb-3">
                        <p className="text-xs text-gray-500">{milestone.date}</p>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-[200px]">
        <TeamAvatars />
      </div>
    </section>
  );
}
