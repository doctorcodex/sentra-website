// Developed by doctorcodex
// FAQ section with accordion - sentra/ui style

'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqItemsLeft = [
  {
    id: 'item-1',
    question: 'Apa itu AADI?',
    answer:
      'AADI (Augmented Artificial Intelligent Diagnostic Integrated) adalah sistem pendukung keputusan klinis berbasis kecerdasan buatan yang membantu tenaga kesehatan dalam proses anamnesis, diagnosis, tatalaksana, dan dokumentasi medis secara terintegrasi.',
  },
  {
    id: 'item-2',
    question: 'Siapa yang dapat menggunakan platform AADI?',
    answer:
      'AADI dirancang untuk digunakan oleh dokter umum, tenaga medis di fasilitas kesehatan tingkat pertama (FKTP), serta institusi kesehatan yang ingin meningkatkan efisiensi proses klinis tanpa mengorbankan keselamatan pasien.',
  },
  {
    id: 'item-3',
    question: 'Apakah AADI menggantikan peran tenaga medis?',
    answer:
      'Tidak. AADI tidak menggantikan keputusan klinis manusia. Sistem ini berfungsi sebagai clinical co-pilot yang membantu mempercepat analisis dan dokumentasi, sementara keputusan akhir tetap berada di tangan profesional medis.',
  },
  {
    id: 'item-4',
    question: 'Bagaimana AADI menjaga keamanan dan kerahasiaan data pasien?',
    answer:
      'AADI menggunakan enkripsi AES-256 dan prinsip Zero-Cloud Toggle (offline-first). Semua data dapat diproses secara lokal di perangkat atau server fasilitas kesehatan tanpa harus dikirim ke cloud, memastikan privasi dan kendali penuh terhadap data pasien.',
  },
  {
    id: 'item-5',
    question: 'Standar apa yang digunakan AADI untuk interoperabilitas data?',
    answer:
      'AADI mengadopsi standar internasional FHIR R4 (HL7) untuk pertukaran data medis, serta mendukung terminologi medis seperti ICD-10, LOINC, dan SNOMED CT agar kompatibel dengan sistem rekam medis nasional dan internasional.',
  },
];

const faqItemsRight = [
  {
    id: 'item-6',
    question: 'Apakah AADI sesuai dengan pedoman dan regulasi kesehatan di Indonesia?',
    answer:
      'Ya. AADI disusun berdasarkan Pedoman IDI, Fornas Kemenkes RI, dan Permenkes No. 24 Tahun 2022 terkait penyelenggaraan rekam medis dan telemedisin, serta telah dirancang untuk memenuhi praktik terbaik WHO.',
  },
  {
    id: 'item-7',
    question: 'Bagaimana AADI membantu dalam proses diagnosis dan terapi?',
    answer:
      'AADI menggabungkan analisis Bayesian probabilistik dan rule-based reasoning untuk memberikan daftar diagnosis diferensial beserta alasan medisnya. Sistem juga menawarkan rekomendasi terapi dan pemeriksaan lanjutan yang sesuai kemampuan fasilitas.',
  },
  {
    id: 'item-8',
    question: 'Apakah AADI dapat terhubung dengan sistem rekam medis elektronik (EMR/EPUS)?',
    answer:
      'Ya. Melalui modul EPUS SyncBridge, AADI dapat terintegrasi secara langsung dengan sistem EMR atau EPUS nasional menggunakan protokol FHIR API yang aman dan terenkripsi.',
  },
  {
    id: 'item-9',
    question: 'Bagaimana AADI memastikan transparansi dan keadilan dalam penggunaan AI?',
    answer:
      'AADI menerapkan prinsip Explainable AI, bias evaluation, serta human-in-the-loop. Setiap rekomendasi disertai bukti dan alasan yang dapat ditinjau, sehingga pengguna memahami dasar keputusan sistem.',
  },
  {
    id: 'item-10',
    question: 'Bagaimana cara institusi kesehatan mengimplementasikan AADI?',
    answer:
      'Implementasi dilakukan melalui kemitraan resmi dengan tim AADI. Proses mencakup analisis kebutuhan, instalasi sistem lokal, pelatihan pengguna, serta uji kepatuhan keamanan data dan klinis sebelum digunakan secara operasional.',
  },
];

export default function SentraFaq() {
  return (
    <section className="pb-16 md:pb-20 bg-blue-50">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold h2-underline"
            style={{ color: '#002157' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[17px] leading-[1.8] font-medium text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban yang cepat dan komprehensif untuk pertanyaan umum mengenai platform
            AADI, fitur klinis, dan integrasi layanan kesehatan.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <Accordion.Root
              type="single"
              collapsible
              className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
            >
              {faqItemsLeft.map((item, index) => (
                <div key={item.id} className="group">
                  <Accordion.Item
                    value={item.id}
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between cursor-pointer text-sm hover:no-underline py-3 group">
                        <span className="text-left text-[17px] leading-[1.8] font-medium text-gray-600">
                          {item.question}
                        </span>
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <p className="text-[17px] leading-[1.8] font-medium text-gray-600 pb-4">
                        {item.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                  {index < faqItemsLeft.length - 1 && (
                    <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                  )}
                </div>
              ))}
            </Accordion.Root>
          </div>

          {/* Right Column */}
          <div>
            <Accordion.Root
              type="single"
              collapsible
              className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
            >
              {faqItemsRight.map((item, index) => (
                <div key={item.id} className="group">
                  <Accordion.Item
                    value={item.id}
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between cursor-pointer text-sm hover:no-underline py-3 group">
                        <span className="text-left text-[17px] leading-[1.8] font-medium text-gray-600">
                          {item.question}
                        </span>
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <p className="text-[17px] leading-[1.8] font-medium text-gray-600 pb-4">
                        {item.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                  {index < faqItemsRight.length - 1 && (
                    <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                  )}
                </div>
              ))}
            </Accordion.Root>
          </div>
        </div>
        <p className="text-muted-foreground mt-6 mx-auto w-fit text-xs text-center">
          Can&apos;t find what you&apos;re looking for? Contact our{' '}
          <a href="#" className="text-primary font-medium hover:underline">
            customer support team
          </a>
        </p>
      </div>
    </section>
  );
}
