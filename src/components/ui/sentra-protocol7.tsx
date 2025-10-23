// Developed by doctorcodex
// Figma-like components landing section cloned from screenshot

// lucide imports retained earlier are no longer used; removed to keep bundle clean
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function SentraProtocol7() {
  return (
    <section aria-labelledby="figma-landing-title" className="bg-background py-16">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h1 id="figma-landing-title" className="text-2xl md:text-3xl font-semibold h2-underline" style={{ color: '#002157' }}>Protocol 7</h1>
        <p className="mt-4 text-[17px] leading-[1.8] font-medium text-gray-600 max-w-2xl mx-auto">
          Dibangun di atas <strong>Protokol 7</strong>, AADI menghadirkan alur <strong>end-to-end</strong> diagnosis hingga tatalaksana, teroptimasi untuk Fasilitas Kesehatan Tingkat Pertama (FKTP).
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild size="md">
            <Link href="#">Email Kami</Link>
          </Button>
          <Button asChild size="md" variant="outline" className="gap-2">
            <Link href="#" aria-label="Documentation">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: 'conic-gradient(from 0deg, #8b5cf6, #22c55e, #f59e0b, #ef4444, #3b82f6)' }} />
                Documentation
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-6 border-t" style={{ borderColor: 'var(--border)' }} />

      <div className="container mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-border bg-white text-left p-6 flex flex-col gap-3">
            <Image src={f.iconSrc} alt="" width={18} height={18} className="mt-[2px]" />
            <div>
              <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#002147' }}>{f.title}</h3>
              <p className="text-[17px] leading-[1.8] font-medium text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-10 text-center">
        <p className="tracking-widest text-[11px] text-muted-foreground">ENDORSED BY IKATAN DOKTER INDONESIA KEDIRI</p>
      </div>
    </section>
  );
}

type FeatureItem = { iconSrc: string; title: string; desc: string };
const features: FeatureItem[] = [
  {
    iconSrc: '/icons/magic-wand.svg',
    title: 'Synthesia Engine (Multimodal Intake)',
    desc: 'Mesin yang mengumpulkan dan menganalisis data pasien dari berbagai sumber (suara, teks, gambar medis, data sensor) secara terpadu.'
  },
  {
    iconSrc: '/icons/target.svg',
    title: 'Bayesian Oracle (Explainable Probabilistic Dx)',
    desc: 'Sistem diagnosis berbasis probabilitas Bayesian yang memperbarui kemungkinan diagnosis seiring bertambahnya data.'
  },
  {
    iconSrc: '/icons/layers.svg',
    title: 'Treatment Pathway (+ AI‑Powered Pharmacy)',
    desc: 'Peta rencana perawatan dinamis dan personal, terintegrasi dengan sistem farmasi untuk keamanan serta ketersediaan obat.'
  },
  {
    iconSrc: '/icons/bar-chart.svg',
    title: 'Predictive & Prognosis Analytics',
    desc: 'Analitik untuk memprediksi risiko penyakit (prediksi) dan memperkirakan perjalanan serta outcome penyakit (prognosis).'
  },
  {
    iconSrc: '/icons/link-1.svg',
    title: 'SENTRA Connect',
    desc: 'Platform penghubung terpusat untuk koordinasi perawatan lintas layanan dan fasilitas.'
  },
  {
    iconSrc: '/icons/reader.svg',
    title: 'Guideline & Protocol Integration',
    desc: 'Integrasi otomatis pedoman klinis terbaru ke dalam alur kerja sehingga langkah klinis tetap sesuai standar.'
  },
  {
    iconSrc: '/icons/file-text.svg',
    title: 'Intelligent Documentation Assistant (SOAP Generator)',
    desc: 'Asisten cerdas yang menghasilkan catatan medis berformat SOAP dari percakapan, mengurangi beban administratif dokter.'
  },
  {
    iconSrc: '/icons/update.svg',
    title: "Phase 1 Q3 '26",
    desc: 'DeepSight Imaging; Scoring Matrix; Clinical Trajectory Visualizer; Integrated Referral; EPUS SyncBridge.'
  },
  {
    iconSrc: '/icons/rocket.svg',
    title: 'Phase 2',
    desc: 'NeuroCare Integration System, Cognitive Clinical Library, Virtual Clinical Assistant, Clinical Protocol Tracker — many more coming.'
  },
];
