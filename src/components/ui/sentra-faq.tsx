// Developed by doctorcodex
// FAQ section with plus icon accordion - sentra/ui style
// Based on Shadcn Library FAQ Grid Plus Icons

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const faqItemsLeft = [
  {
    id: "item-1",
    question: "Apa itu AADI?",
    answer:
      "AADI (Augmented Artificial Intelligent Diagnostic Integrated) adalah sistem pendukung keputusan klinis berbasis kecerdasan buatan yang membantu tenaga kesehatan dalam proses anamnesis, diagnosis, tatalaksana, dan dokumentasi medis secara terintegrasi.",
  },
  {
    id: "item-2",
    question: "Siapa yang dapat menggunakan platform AADI?",
    answer:
      "AADI dirancang untuk digunakan oleh dokter umum, tenaga medis di fasilitas kesehatan tingkat pertama (FKTP), serta institusi kesehatan yang ingin meningkatkan efisiensi proses klinis tanpa mengorbankan keselamatan pasien.",
  },
  {
    id: "item-3",
    question: "Apakah AADI menggantikan peran tenaga medis?",
    answer:
      "Tidak. AADI tidak menggantikan keputusan klinis manusia. Sistem ini berfungsi sebagai clinical co-pilot yang membantu mempercepat analisis dan dokumentasi, sementara keputusan akhir tetap berada di tangan profesional medis.",
  },
  {
    id: "item-4",
    question: "Bagaimana AADI menjaga keamanan dan kerahasiaan data pasien?",
    answer:
      "AADI menggunakan enkripsi AES-256 dan prinsip Zero-Cloud Toggle (offline-first). Semua data dapat diproses secara lokal di perangkat atau server fasilitas kesehatan tanpa harus dikirim ke cloud, memastikan privasi dan kendali penuh terhadap data pasien.",
  },
  {
    id: "item-5",
    question: "Standar apa yang digunakan AADI untuk interoperabilitas data?",
    answer:
      "AADI mengadopsi standar internasional FHIR R4 (HL7) untuk pertukaran data medis, serta mendukung terminologi medis seperti ICD-10, LOINC, dan SNOMED CT agar kompatibel dengan sistem rekam medis nasional dan internasional.",
  },
];

const faqItemsRight = [
  {
    id: "item-6",
    question: "Apakah AADI sesuai dengan pedoman dan regulasi kesehatan di Indonesia?",
    answer:
      "Ya. AADI disusun berdasarkan Pedoman IDI, Fornas Kemenkes RI, dan Permenkes No. 24 Tahun 2022 terkait penyelenggaraan rekam medis dan telemedisin, serta telah dirancang untuk memenuhi praktik terbaik WHO.",
  },
  {
    id: "item-7",
    question: "Bagaimana AADI membantu dalam proses diagnosis dan terapi?",
    answer:
      "AADI menggabungkan analisis Bayesian probabilistik dan rule-based reasoning untuk memberikan daftar diagnosis diferensial beserta alasan medisnya. Sistem juga menawarkan rekomendasi terapi dan pemeriksaan lanjutan yang sesuai kemampuan fasilitas.",
  },
  {
    id: "item-8",
    question: "Apakah AADI dapat terhubung dengan sistem rekam medis elektronik (EMR/EPUS)?",
    answer:
      "Ya. Melalui modul EPUS SyncBridge, AADI dapat terintegrasi secara langsung dengan sistem EMR atau EPUS nasional menggunakan protokol FHIR API yang aman dan terenkripsi.",
  },
  {
    id: "item-9",
    question: "Bagaimana AADI memastikan transparansi dan keadilan dalam penggunaan AI?",
    answer:
      "AADI menerapkan prinsip Explainable AI, bias evaluation, serta human-in-the-loop. Setiap rekomendasi disertai bukti dan alasan yang dapat ditinjau, sehingga pengguna memahami dasar keputusan sistem.",
  },
  {
    id: "item-10",
    question: "Bagaimana cara institusi kesehatan mengimplementasikan AADI?",
    answer:
      "Implementasi dilakukan melalui kemitraan resmi dengan tim AADI. Proses mencakup analisis kebutuhan, instalasi sistem lokal, pelatihan pengguna, serta uji kepatuhan keamanan data dan klinis sebelum digunakan secara operasional.",
  },
];

export default function SentraFaq() {
  const [value, setValue] = useState<string>();

  // Combine all FAQ items
  const allFaqItems = [...faqItemsLeft, ...faqItemsRight];

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl" style={{ color: '#002157' }}>
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[17px] leading-[1.8] font-medium max-w-2xl" style={{ color: 'var(--muted)' }}>
          Temukan jawaban yang cepat dan komprehensif untuk pertanyaan umum mengenai platform AADI, fitur klinis, dan integrasi layanan kesehatan.
        </p>

        <div className="mt-10 grid w-full gap-x-10 md:grid-cols-2">
          {/* Left Column - First 5 items */}
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            {allFaqItems.slice(0, 5).map((item, index) => (
              <AccordionItem key={item.id} value={`question-${index}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}
                    style={{ color: 'var(--fg)' }}
                  >
                    {item.question}
                    <PlusIcon className="h-5 w-5 shrink-0 transition-transform duration-200" style={{ color: 'var(--muted)' }} />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-base text-pretty" style={{ color: 'var(--muted)' }}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column - Remaining items */}
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            {allFaqItems.slice(5).map((item, index) => (
              <AccordionItem key={item.id} value={`question-${index + 5}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}
                    style={{ color: 'var(--fg)' }}
                  >
                    {item.question}
                    <PlusIcon className="h-5 w-5 shrink-0 transition-transform duration-200" style={{ color: 'var(--muted)' }} />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-base text-pretty" style={{ color: 'var(--muted)' }}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
