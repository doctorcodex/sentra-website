// Developed by doctorcodex
// Demo compact UI with Oxford Blue & Red Orange accent + guided tutorial cursor, clinical summary, and diagnosis section
// Includes lightweight runtime tests for summary generator

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

// ============================
// Utilities / Pure functions
// ============================
export type SummaryInput = {
  checks: string[];
  status?: string;
  plan?: string;
  free?: string;
  diff?: string;
  main?: string;
};

export function generateClinicalSummary(input: SummaryInput): string {
  const bagian: string[] = [];
  if (input.checks?.length) bagian.push(`Gejala: ${input.checks.join(", ")}.`);
  if (input.status) bagian.push(`Status: ${input.status}`);
  if (input.plan) bagian.push(`Rencana: ${input.plan}`);
  if (input.free) bagian.push(input.free.trim());
  if (input.diff) bagian.push(`Diagnosis Banding: ${input.diff}`);
  if (input.main) bagian.push(`Diagnosis Utama: ${input.main}`);
  return bagian.join(" \n");
}

// Lightweight test harness (renders small badge + logs details)
function DevDiagnostics() {
  const tests: { name: string; pass: boolean; details?: string }[] = [];

  // Test 1: empty input -> empty string
  const t1 = generateClinicalSummary({ checks: [] }) === "";
  tests.push({ name: "Empty -> empty string", pass: t1 });

  // Test 2: checks only
  const t2out = generateClinicalSummary({ checks: ["Febris", "Fatigue"] });
  tests.push({ name: "Checks only contains 'Gejala'", pass: /Gejala: Febris, Fatigue\./.test(t2out), details: t2out });

  // Test 3: full input ordering
  const t3out = generateClinicalSummary({
    checks: ["Febris"],
    status: "Stabil",
    plan: "Kontrol 1 minggu",
    free: "Note bebas",
    diff: "DBD; Influenza",
    main: "URTI",
  });
  const t3pass = /Gejala: Febris\./.test(t3out) && /Status: Stabil/.test(t3out) && /Rencana: Kontrol 1 minggu/.test(t3out) && /Note bebas/.test(t3out) && /Diagnosis Banding: DBD; Influenza/.test(t3out) && /Diagnosis Utama: URTI/.test(t3out);
  tests.push({ name: "Full summary composition", pass: t3pass, details: t3out });

  useEffect(() => {
    // Log test details in dev
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.groupCollapsed("[DevDiagnostics] Summary tests");
      tests.forEach((t) => console.warn(`${t.pass ? "✅" : "❌"} ${t.name}`, t.details ? `\n→ ${t.details}` : ""));
      console.groupEnd();
    }
  }, [tests]);

  const allPass = tests.every((t) => t.pass);
  return (
    <span
      title="Runtime tests for summary generator"
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-semibold border`}
      style={{
        color: allPass ? '#10b981' : '#f43f5e',
        backgroundColor: allPass ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
        borderColor: allPass ? '#10b981' : '#f43f5e'
      }}
    >
      <span className={`h-2 w-2 rounded-full ${allPass ? "bg-emerald-500" : "bg-rose-500"}`} />
      {allPass ? "Tests passed" : "Tests failed"}
    </span>
  );
}

export default function SentraAadiDemo() {
  console.log("SentraAadiDemo rendering...");
  const [activeSystem, setActiveSystem] = useState("Sistemik");
  const [devOpen, setDevOpen] = useState({
    status: false,
    course: false,
    summary: false,
    adherence: false,
    pharmacogen: false,
  });
  const [notes, setNotes] = useState({
    status: "",
    course: "",
    summary: "",
    adherence: "",
    pharmacogen: "",
  });

  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [checks, setChecks] = useState<string[]>([]);
  const [freeSummary, setFreeSummary] = useState("");
  const [diffDiag, setDiffDiag] = useState("");
  const [mainDiag, setMainDiag] = useState("");

  const oxford = "#14213d";
  const accent = "#F71D25"; // Sentra Red
  const options = ["Febris", "BB turun", "Anoreksia", "Fatigue", "Menggigil"];

  const generateBtnRef = useRef<HTMLButtonElement | null>(null);
  const developmentCardRef = useRef<HTMLDivElement | null>(null);
  const neuroTabRef = useRef<HTMLButtonElement | null>(null);
  const summaryBoxRef = useRef<HTMLDivElement | null>(null);

  const [showTutorial, setShowTutorial] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [tooltip, setTooltip] = useState<string>("");
  const [pulse, setPulse] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGenerate = () => {
    setNotes({
      status: "Pasien menunjukkan perbaikan gejala sistemik; TD 128/78 mmHg, suhu 36.9°C.",
      course: "2 minggu terapi: hari 1–3 demam, hari 4–7 membaik; kini stabil tanpa komplikasi.",
      summary: "Lanjutkan regimen saat ini; jadwal kontrol 1 minggu; edukasi hidrasi & monitoring gejala.",
      adherence: "Kepatuhan sekitar 90%; 1 dosis lupa dalam 7 hari terakhir, telah diberi pengingat harian.",
      pharmacogen: "PGx: CYP2C19 *1/*1 (NM), CYP2D6 *1/*2 (NM). Tidak perlu penyesuaian dosis untuk terapi saat ini.",
    });
    setDevOpen({ status: true, course: true, summary: true, adherence: true, pharmacogen: true });

    // Autofill diagnosis cards
    setDiffDiag(
      "Dengue tanpa tanda peringatan; Influenza; Tifoid ringan. Pertimbangkan anemia defisiensi besi bila BB turun berlanjut."
    );
    setMainDiag("Infeksi virus saluran napas atas (URTI) – stabil, kemungkinan pasca viral.");
  };

  const DevRow = ({ title, k }: { title: string; k: keyof typeof notes }) => {
    const value = notes[k] || "";
    const [flash, setFlash] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (devOpen[k]) setVisible(true);
    }, [devOpen[k], k]);

    useEffect(() => {
      if (value && animationEnabled) {
        setFlash(true);
        const t = setTimeout(() => setFlash(false), 700);
        return () => clearTimeout(t);
      }
    }, [value]);

    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setDevOpen((s) => ({ ...s, [k]: !s[k] }))}
          className="w-full flex items-center justify-between py-3 text-left"
        >
          <span className="font-medium text-gray-800 text-[14px]">{title}</span>
          <svg
            className={`h-5 w-5 transition-transform ${devOpen[k] ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {devOpen[k] && (
          <div
            className="pb-3 rounded-md"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity .25s ease-out",
              boxShadow: flash ? `0 0 0 2px ${accent}` : "none",
            }}
          >
            <textarea
              className="w-full rounded-md border border-gray-300 p-3 text-[13px] focus:outline-none focus:ring-2"
              style={{ outline: "none", accentColor: accent }}
              value={value}
              onChange={(e) => setNotes({ ...notes, [k]: e.target.value })}
              rows={3}
            />
          </div>
        )}
      </div>
    );
  };

  const Tab = ({ label, active, onClick, tabRef }: { label: string; active: boolean; onClick: () => void; tabRef?: (el: HTMLButtonElement | null) => void; }) => (
    <button
      ref={tabRef}
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-[13px] font-medium border ${
        active ? `text-white shadow` : `text-gray-700 hover:bg-gray-50`
      }`}
      style={{ backgroundColor: active ? oxford : "white", borderColor: oxford }}
    >
      {label}
    </button>
  );

  // memoized clinical summary via pure function
  const clinicalSummary = useMemo(() => {
    if (checks.length === 0 && !freeSummary.trim() && !diffDiag.trim() && !mainDiag.trim()) return "";
    return generateClinicalSummary({
      checks,
      status: notes.status,
      plan: notes.summary,
      free: freeSummary.trim() || undefined,
      diff: diffDiag,
      main: mainDiag,
    });
  }, [checks, freeSummary, diffDiag, mainDiag, notes.status, notes.summary]);

  const toggleCheck = (label: string) => {
    setChecks((prev) => (prev.includes(label) ? prev.filter((v) => v !== label) : [...prev, label]));
  };

  type TargetKey = "generate" | "development" | "neuro" | "summary";
  const targetMap: Record<TargetKey, () => DOMRect | null> = {
    generate: () => generateBtnRef.current?.getBoundingClientRect() ?? null,
    development: () => developmentCardRef.current?.getBoundingClientRect() ?? null,
    neuro: () => neuroTabRef.current?.getBoundingClientRect() ?? null,
    summary: () => summaryBoxRef.current?.getBoundingClientRect() ?? null,
  };

  function moveCursorTo(target: TargetKey, opts?: { offsetX?: number; offsetY?: number; center?: boolean }) {
    const rect = targetMap[target]();
    if (!rect) return;
    const x = (opts?.center ? rect.left + rect.width / 2 : rect.left + (opts?.offsetX ?? rect.width * 0.8));
    const y = (opts?.center ? rect.top + rect.height / 2 : rect.top + (opts?.offsetY ?? rect.height * 0.6));
    setCursorPos({ x, y });
  }

  async function runTutorial() {
    if (isPlaying) return;
    setIsPlaying(true);
    setShowTutorial(true);

    await wait(1200);
    moveCursorTo("generate", { center: true });
    setTooltip("Klik 'Generate' untuk mengisi otomatis.");
    await wait(2500);
    clickPulse();
    handleGenerate();

    await wait(2500);
    smoothScrollIntoView(developmentCardRef.current);
    await wait(1000);
    moveCursorTo("development", { center: true });
    setTooltip("Bagian DEVELOPMENT otomatis terisi dan berkorelasi dengan hasil Generate.");

    await wait(3000);
    moveCursorTo("neuro", { center: true });
    setTooltip("Pilih sistem 'Neurologis' untuk fokus penilaian.");
    await wait(2000);
    clickPulse();
    setActiveSystem("Neurologis");

    await wait(2500);
    smoothScrollIntoView(summaryBoxRef.current);
    await wait(1000);
    moveCursorTo("summary", { offsetX: 24, offsetY: 24 });
    setTooltip("Ringkasan Klinis terbentuk otomatis dari input di atas.");

    await wait(3500);
    setTooltip("");
    setIsPlaying(false);
  }

  function wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }

  function clickPulse() {
    setPulse(true);
    setTimeout(() => setPulse(false), 260);
  }

  function smoothScrollIntoView(el: HTMLElement | null) {
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  useEffect(() => {
    if (!showTutorial) setCursorPos({ x: -100, y: -100 });
  }, [showTutorial]);

  return (
    <div className="min-h-screen w-full bg-white pt-20 px-6 text-[13px] leading-[1.7] relative">
      {/* Mobile Browser Frame */}
      <div className="mx-auto max-w-7xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-300 relative" style={{ fontSize: '13px' }}>
        {/* Device Status Bar */}
        <div className="bg-black text-white text-xs px-4 py-1 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-semibold">9:41</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
            </div>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
        {/* Browser Tab Bar */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 flex items-center justify-between border-b border-gray-600">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
            </div>
            <div className="bg-gray-600 rounded-lg px-3 py-1 flex items-center gap-2 shadow-inner">
              <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center shadow-sm">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-xs font-medium">aadi-protokol7.com</span>
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a1 1 0 110 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-500 mx-1"></div>
            <button className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Browser Content Area */}
        <div className="bg-white p-6 space-y-5 relative">
          {/* Mobile Home Indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full mb-2"></div>
          {/* Top strip with actions */}
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-3">
              <DevDiagnostics />
              <button
                onClick={runTutorial}
                className="rounded-lg px-4 py-2 text-white text-[13px] font-semibold shadow"
                style={{ backgroundColor: accent }}
                disabled={isPlaying}
                title="Putar tutorial beranotasi"
              >
                {isPlaying ? "Memutar…" : "Start Tutorial"}
              </button>
              <label className="hidden sm:flex items-center gap-2 text-[13px] text-gray-700">
                <input type="checkbox" checked={animationEnabled} onChange={(e)=>setAnimationEnabled(e.target.checked)} style={{ accentColor: accent }} />
                Animasi autofill
              </label>
              <span
                className="hidden md:inline-flex items-center gap-1 rounded-full px-3 py-1 text-[13px] font-semibold border"
                style={{
                  color: '#10b981',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  borderColor: '#10b981'
                }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> FHIR LINK
              </span>
            </div>
          </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 pb-8 relative">
          {/* Mobile Device Frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl shadow-2xl -z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-xl -z-10"></div>
          <section className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 flex flex-col gap-3 min-h-[260px] lg:col-span-1">
            <h2 className="text-[14px] font-semibold text-gray-900 h2-underline" style={{ color: '#002147', fontFamily: 'var(--font-heading)' }}>PATIENT ID</h2>
            <Field label="Nama"><input className="input text-[13px]" defaultValue="Budi Santoso" /></Field>
            <Field label="No. Rekam"><input className="input text-[13px]" defaultValue="654321" /></Field>
            <Field label="Tanggal Lahir"><input className="input text-[13px]" defaultValue="03/15/1955" /></Field>
            <button ref={generateBtnRef} onClick={handleGenerate} className="w-full mt-3 rounded-lg py-3 text-white text-[13px] font-semibold shadow" style={{ backgroundColor: accent }}>Generate</button>
          </section>

          <section ref={developmentCardRef} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 flex flex-col gap-2 min-h-[260px] lg:col-span-1">
            <h2 className="text-[14px] font-semibold text-gray-900 h2-underline" style={{ color: '#002147', fontFamily: 'var(--font-heading)' }}>DEVELOPMENT</h2>
            <DevRow title="Status" k="status" />
            <DevRow title="Course" k="course" />
            <DevRow title="Summary" k="summary" />
            <DevRow title="Adherence" k="adherence" />
            <DevRow title="Pharmacogenomics" k="pharmacogen" />
            <button className="w-full mt-3 rounded-lg py-3 text-white text-[13px] font-semibold shadow" style={{ backgroundColor: oxford }}>Medical Record</button>
          </section>

          <section className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 flex flex-col gap-3 min-h-[260px] lg:col-span-1">
            <h2 className="text-[14px] font-semibold text-gray-900 h2-underline" style={{ color: '#002147', fontFamily: 'var(--font-heading)' }}>CLINICAL ASSESMENT</h2>
            <div className="flex flex-wrap gap-2">
              {["Sistemik","Neurologis","Kardiovaskular","Gastrointestinal","Urologi","Muskuloskeletal","Gejala Lainnya"].map((s) => (
                <Tab
                  key={s}
                  label={s}
                  active={activeSystem === s}
                  onClick={() => setActiveSystem(s)}
                  tabRef={s === "Neurologis" ? (el) => (neuroTabRef.current = el) : undefined}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {options.map((v)=> (
                <label key={v} className="flex items-center gap-1.5 text-[13px] text-gray-800">
                  <input type="checkbox" className="h-5 w-5 rounded border-gray-300" style={{ accentColor: accent }} checked={checks.includes(v)} onChange={()=>toggleCheck(v)} />{v}
                </label>
              ))}
            </div>
            <textarea className="mt-2 w-full rounded-md border border-gray-300 p-3 text-[13px] focus:outline-none focus:ring-2" style={{ outline: "none", accentColor: accent }} placeholder="Ringkasan bebas (opsional)..." rows={4} value={freeSummary} onChange={(e)=>setFreeSummary(e.target.value)} />
          </section>

          <section className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 flex flex-col gap-3 min-h-[260px] lg:col-span-1">
            <h2 className="text-[14px] font-semibold text-gray-900 h2-underline" style={{ color: '#002147', fontFamily: 'var(--font-heading)' }}>DIAGNOSIS</h2>

            <Field label="Differential Diagnosis">
              <textarea className="w-full rounded-md border border-gray-300 p-3 text-[13px] focus:outline-none focus:ring-2" style={{ accentColor: accent }} placeholder="Masukkan diagnosis banding..." rows={4} value={diffDiag} onChange={(e)=>setDiffDiag(e.target.value)} />
            </Field>

            <Field label="Diagnosis Utama">
              <textarea className="w-full rounded-md border border-gray-300 p-3 text-[13px] focus:outline-none focus:ring-2" style={{ accentColor: accent }} placeholder="Masukkan diagnosis utama..." rows={4} value={mainDiag} onChange={(e)=>setMainDiag(e.target.value)} />
            </Field>

            {clinicalSummary && (
              <div ref={summaryBoxRef} className="mt-4 rounded-lg border p-4 text-[13px] leading-relaxed relative" style={{ borderColor: oxford }}>
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />
                  <span className="font-semibold text-[14px]" style={{ color: 'var(--fg)' }}>Ringkasan Klinis</span>
                </div>
                <pre className="whitespace-pre-wrap" style={{ color: 'var(--fg)' }}>{clinicalSummary}</pre>
              </div>
            )}
          </section>

          {/* Card Pharmacy Section */}
          <section className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 flex flex-col gap-3 min-h-[260px] lg:col-span-1">
            <h2 className="text-[14px] font-semibold text-gray-900 h2-underline" style={{ color: '#002147', fontFamily: 'var(--font-heading)' }}>CARD PHARMACY</h2>

            <Field label="Medication">
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 rounded-lg border border-blue-200" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-[13px] font-medium" style={{ color: 'var(--fg)' }}>Paracetamol 500mg</span>
                  <span className="text-[12px]" style={{ color: 'var(--muted)' }}>3x1</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg border border-green-200" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[13px] font-medium" style={{ color: 'var(--fg)' }}>Amoxicillin 500mg</span>
                  <span className="text-[12px]" style={{ color: 'var(--muted)' }}>3x1</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg border border-yellow-200" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)' }}>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-[13px] font-medium" style={{ color: 'var(--fg)' }}>Vitamin C 1000mg</span>
                  <span className="text-[12px]" style={{ color: 'var(--muted)' }}>1x1</span>
                </div>
              </div>
            </Field>

            <Field label="Dosage Instructions">
              <textarea className="w-full rounded-md border border-gray-300 p-3 text-[13px] focus:outline-none focus:ring-2" style={{ accentColor: accent }} placeholder="Instruksi penggunaan obat..." rows={3} defaultValue="Minum setelah makan. Hindari alkohol selama pengobatan." />
            </Field>

            <button className="w-full mt-3 rounded-lg py-3 text-white text-[13px] font-semibold shadow" style={{ backgroundColor: accent }}>Generate Prescription</button>
          </section>

        </div>

          <p className="text-center text-[13px] max-w-4xl mx-auto pb-8" style={{ color: 'var(--muted)' }}>Konten dan fitur dalam versi demo ini bukan produk akhir dan dapat berubah. Demo ini hanya untuk ilustrasi.</p>
        </div>
      </div>

      {/* Tutorial cursor overlay */}
      {showTutorial && (
        <>
          {/* Pointer-shaped cursor (SVG) */}
          <div
            style={{
              position: "fixed",
              left: cursorPos.x,
              top: cursorPos.y,
              width: 24,
              height: 24,
              transform: "translate(-50%, -50%)",
              transition: "left 1200ms cubic-bezier(0.22, 1, 0.36, 1), top 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
              zIndex: 60,
              pointerEvents: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={pulse ? accent : oxford}
              width="24"
              height="24"
            >
              <path d="M13 20.5L11 15H7l6-11v16.5z" />
            </svg>
          </div>

          {tooltip && (
            <div
              className="fixed px-4 py-3 rounded-lg shadow-md border"
              style={{
                left: Math.max(8, cursorPos.x + 20),
                top: Math.max(8, cursorPos.y + 20),
                backgroundColor: "#FEE505",
                borderColor: "#e5e7eb",
                zIndex: 60,
                maxWidth: 380,
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              <div className="font-semibold mb-2" style={{ color: oxford, fontSize: "17px" }}>Tutorial</div>
              <div className="text-gray-800">{tooltip}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}


function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mb-3">
      <span className="block text-[14px] font-semibold text-gray-600 mb-1">{label}</span>
      {children}
    </label>
  );
}
