// Developed by doctorcodex
// About Us section - Sentra/UI style

'use client';

import { AvatarSmartGroup } from '@/components/ui/avatar-smart-group';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function SentraAbout() {
  return (
    <section className="py-16 relative z-10" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container mx-auto pl-0 pr-6 max-w-8xl">
        {/* 2 Cards Side by Side */}
        <div className="grid md:grid-cols-[5fr_3fr] gap-8">
          {/* Card 1: Transformasi Digital */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border shadow-lg p-8"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-6 mb-8">
              <div
                className="inline-block px-3 py-1 text-xs rounded-full border border-[#002157]/20 bg-[#002157]/5"
                style={{ color: '#002157' }}
              >
                About SENTRA
              </div>
              <h2
                className="text-2xl md:text-3xl font-semibold h2-underline"
                style={{ color: '#002157' }}
              >
                Transformasi Digital Healthcare Indonesia
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
              {/* Left Column - Profile Card + Team + Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-5"
              >
                {/* Profile Card */}
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: 'var(--bg-alt)', borderColor: 'var(--border)' }}
                >
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 shadow-md">
                    <Image
                      src="/images/ferdi.png"
                      alt="dr Ferdi Iskandar"
                      fill
                      className="object-cover"
                      sizes="300px"
                      priority
                    />
                  </div>
                  <div
                    className="text-center space-y-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <h3 className="font-bold text-lg" style={{ color: '#002157' }}>
                      dr Ferdi Iskandar
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-700">CEO & Founder SENTRA</p>
                      <p className="text-sm font-medium text-gray-700">CEO RSIA Melinda DHAI</p>
                      <p className="text-sm font-medium text-gray-700">
                        Civil Law Consultant (Konsultan Hukum Perdata)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-5"
              >
                {/* Deskripsi SENTRA */}
                <div className="space-y-5">
                  <p className="text-[17px] leading-[1.8] font-medium text-gray-600">
                    <strong style={{ color: '#002157' }}>SENTRA</strong> adalah perusahaan teknologi
                    kesehatan Indonesia yang berfokus pada pengembangan solusi kecerdasan buatan
                    (AI) untuk mendukung tenaga medis di fasilitas kesehatan primer.
                  </p>

                  <p className="text-[17px] leading-[1.8] font-medium text-gray-600">
                    Kami percaya bahwa teknologi harus memberdayakan-bukan menggantikan-keahlian
                    klinis. Melalui{' '}
                    <strong style={{ color: '#002157' }}>
                      AADI (Augmented AI Diagnostic Integrated)
                    </strong>
                    , kami menghadirkan sistem pendukung keputusan yang membantu dokter bekerja
                    lebih cepat, akurat, dan efisien.
                  </p>

                  <p className="text-[17px] leading-[1.8] font-medium text-gray-600">
                    Didukung oleh tim multidisiplin yang terdiri dari klinisi, data scientist, dan
                    software engineer, SENTRA berkomitmen untuk menghadirkan inovasi yang berakar
                    pada kebutuhan nyata di lapangan.
                  </p>

                  {/* Team Avatars */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col gap-4 mt-6"
                  >
                    <p className="text-[17px] leading-[1.8] font-medium text-gray-600">
                      Tim Sentra:
                    </p>
                    <AvatarSmartGroup
                      users={[
                        {
                          name: 'drferdiiskandar',
                          role: 'CEO Sentra\nFull Stack Dev',
                          image: '/avatar/boss.png',
                        },
                        {
                          name: 'Nurma',
                          role: 'Administration\nSentra',
                          image: '/avatar/nurma.png',
                        },
                        { name: 'Joseph', role: 'Liasion\nSentra', image: '/avatar/joseph.png' },
                        { name: 'Kevins', role: 'Enggineer\nSentra', image: '/avatar/kevinss.png' },
                      ]}
                      variant="uniform"
                      size={120}
                      overlap={-30}
                      ringColor="ring-white"
                      hoverScale={1.1}
                      tooltipBg="bg-yellow-400 text-black"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: AADI Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border shadow-lg p-8"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div
                  className="inline-block px-3 py-1 text-xs rounded-full border border-[#002157]/20 bg-[#002157]/5"
                  style={{ color: '#002157' }}
                >
                  Compliance
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#002157' }}>
                  AADI Compliance
                </h3>
              </div>
              <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                Ringkasan kepatuhan klinis, teknis, dan AI untuk platform AADI.
              </p>
            </div>

            <Tabs defaultValue="clinical" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger
                  value="clinical"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#002157] data-[state=active]:font-semibold transition-all duration-200 hover:bg-gray-50"
                >
                  Clinical
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#002157] data-[state=active]:font-semibold transition-all duration-200 hover:bg-gray-50"
                >
                  Technical
                </TabsTrigger>
              </TabsList>

              {/* Clinical & Regulatory */}
              <TabsContent value="clinical" className="mt-4 space-y-3">
                <Card className="border-muted/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <FileCheck2 className="h-4 w-4 text-primary" />
                      Clinical & Healthcare Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        Data Kesehatan Elektronik
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        HL7 <strong>FHIR R4</strong> mapping untuk interoperabilitas EMR/EPUS.
                      </p>
                      <Badge className="mt-2" variant="outline">
                        FHIR R4
                      </Badge>
                    </div>
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        Clinical Safety & Guideline
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        Kesesuaian dengan <strong>WHO/IDI</strong> dan <strong>Fornas</strong>.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="outline">WHO</Badge>
                        <Badge variant="outline">IDI</Badge>
                        <Badge variant="outline">Fornas</Badge>
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        Terminologi Medis
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        Pengkodean <strong>ICD-10</strong>, <strong>LOINC</strong>,{' '}
                        <strong>SNOMED CT</strong>.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="outline">ICD-10</Badge>
                        <Badge variant="outline">LOINC</Badge>
                        <Badge variant="outline">SNOMED CT</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-lg border p-3 text-[14px] leading-[1.8] font-medium text-gray-600">
                  <div className="flex items-center gap-2 text-gray-600 font-medium mb-1">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                    Acceptance (MVP)
                  </div>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>155+ pathway prioritas tervalidasi internal</li>
                    <li>Zero major DDI pada screening resep</li>
                  </ul>
                </div>
              </TabsContent>

              {/* Technical, Data, and AI */}
              <TabsContent value="technical" className="mt-4 space-y-3">
                <Card className="border-muted/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Technical & AI Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        Data Security
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        Enkripsi <strong>AES‑256</strong>, audit trail lokal.
                      </p>
                      <Badge variant="outline" className="mt-2">
                        AES‑256
                      </Badge>
                    </div>
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        Privacy & Access
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        <strong>Zero‑Cloud Toggle</strong> (offline‑first).
                      </p>
                      <Badge variant="outline" className="mt-2">
                        Local‑First
                      </Badge>
                    </div>
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        Ethical AI
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        Kesesuaian <strong>WHO AI in Health</strong>.
                      </p>
                      <Badge variant="outline" className="mt-2">
                        WHO AI
                      </Badge>
                    </div>
                    <div className="rounded-lg border p-3">
                      <h4 className="font-medium text-[14px] leading-[1.8] text-gray-600 mb-1">
                        AI Management System
                      </h4>
                      <p className="text-[14px] leading-[1.8] font-medium text-gray-600">
                        Praktik <strong>ISO/IEC 42001:2023</strong>.
                      </p>
                      <Badge variant="outline" className="mt-2">
                        ISO/IEC 42001
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-lg border p-3 text-[14px] leading-[1.8] font-medium text-gray-600">
                  <div className="flex items-center gap-2 text-gray-600 font-medium mb-1">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                    Operational Notes
                  </div>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Mode audit dengan evidence tokens</li>
                    <li>Tidak ada PHI tersimpan saat zero‑cloud aktif</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
