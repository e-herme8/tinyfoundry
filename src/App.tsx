import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, FileSpreadsheet, KeyRound, Play, Send, WandSparkles } from 'lucide-react';
import { MarketingLanding } from './components/landing/MarketingLanding';
import { Button } from './components/ui/Button';
import { Badge } from './components/ui/Badge';

type View = 'landing' | 'demo';

type PausableAnimation = {
  pause?: () => void;
};

const demoSteps = [
  {
    title: 'Raw workbook',
    body: 'A sample tax projection spreadsheet with tabs, formulas, missing fields, and assumptions hidden across the file.',
    details: ['28 tabs detected', '41 formulas mapped', '6 missing fields flagged'],
  },
  {
    title: 'Workflow map',
    body: 'TinyFoundry turns the file into a clear app flow: intake, validation, AI review note, partner approval, and export.',
    details: ['4 screens proposed', '2 approval gates', '1 automation script'],
  },
  {
    title: 'Private app sketch',
    body: 'The final preview shows a desktop-ready SPA your team could run locally with selected files, your model, and reviewable outputs.',
    details: ['Windows/Mac package', 'PDF + CSV export', 'Human-reviewed actions'],
  },
];

export default function App() {
  const [view, setView] = useState<View>('landing');

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' ? (
        <motion.div
          key="landing"
          exit={{ opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <MarketingLanding onDemo={() => setView('demo')} />
        </motion.div>
      ) : (
        <motion.div
          key="demo"
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          <DemoPage onBack={() => setView('landing')} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DemoPageProps = {
  onBack: () => void;
};

function DemoPage({ onBack }: DemoPageProps) {
  const reduceMotion = useReducedMotion();
  const demoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const root = demoRef.current;
    if (!root) return;

    const reveal = animate(root.querySelectorAll('[data-demo-reveal]'), {
      opacity: [0, 1],
      y: [18, 0],
      duration: 620,
      delay: stagger(75),
      ease: 'outCubic',
    }) as PausableAnimation;

    const progress = animate(root.querySelectorAll('[data-progress-bar]'), {
      scaleX: [0, 1],
      duration: 1050,
      delay: stagger(220),
      ease: 'inOutQuad',
    }) as PausableAnimation;

    return () => {
      reveal.pause?.();
      progress.pause?.();
    };
  }, [reduceMotion]);

  return (
    <main ref={demoRef} className="min-h-screen overflow-hidden bg-[#08090a] px-4 py-5 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#d96b3b]/15 blur-[140px]" />
        <div className="absolute bottom-[-16rem] right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-[#5e6ad2]/18 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <nav data-demo-reveal className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 opacity-100 backdrop-blur-xl">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to landing
        </button>
        <Badge tone="pro" className="border-[#d96b3b]/30 bg-[#d96b3b]/10 text-[#ffd1bf]">Demo page</Badge>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl pb-20 pt-16 lg:pt-24">
        <div data-demo-reveal className="mx-auto max-w-4xl text-center opacity-100">
          <Badge tone="core" className="border-[#5e6ad2]/30 bg-[#5e6ad2]/10 text-[#c9ceff]">Simulated build</Badge>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-7xl">Watch one spreadsheet become a private app.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            This demo shows the core sales story: selected data, chosen AI model, local automation workspace, and a reviewable desktop app sketch.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {demoSteps.map((step, index) => (
            <article key={step.title} data-demo-reveal className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1011] p-6 opacity-100 shadow-[rgba(0,0,0,0.45)_0px_24px_80px]">
              <div className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-[#d96b3b] to-[#5e6ad2]" data-progress-bar />
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                {index === 0 ? <FileSpreadsheet className="h-5 w-5 text-[#f4c7b1]" /> : index === 1 ? <WandSparkles className="h-5 w-5 text-[#c9ceff]" /> : <CheckCircle2 className="h-5 w-5 text-emerald-300" />}
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-[-0.05em] text-white">{step.title}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{step.body}</p>
              <div className="mt-6 space-y-2">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d96b3b]" />
                    {detail}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div data-demo-reveal className="mt-6 grid gap-5 opacity-100 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d96b3b] text-white">
                <KeyRound className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Setup clarity</p>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">What the customer controls</h3>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm leading-6 text-zinc-400">
              <p>1. Which workbook or folder the app can read.</p>
              <p>2. Which AI provider/API key is used, if AI reasoning is needed.</p>
              <p>3. Which local automations can run inside the isolated workspace.</p>
              <p>4. Which outputs need human approval before export or action.</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#d96b3b]/25 bg-[#0f1011] p-6 shadow-[0_0_0_1px_rgba(217,107,59,0.12),0_30px_90px_rgba(0,0,0,0.45)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#f4c7b1]">Tiny app sketch request</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.06em] text-white">Want this for your workflow?</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              The real conversion flow asks a visitor for one spreadsheet, checklist, or repeated task — then returns a proposed app map.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Industry', 'Workflow pain', 'Current file type', 'Desired output'].map((field) => (
                <label key={field} className="block rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left transition focus-within:border-[#d96b3b]/60">
                  <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">{field}</span>
                  <input
                    className="mt-2 w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                    placeholder={field === 'Industry' ? 'Tax, law, finance…' : field === 'Workflow pain' ? 'What keeps breaking?' : field === 'Current file type' ? 'Excel, PDF, folder…' : 'PDF report, desktop app…'}
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="button" className="h-12 bg-[#d96b3b] px-6 text-base text-white hover:bg-[#ef7a45]">
                Request my app sketch <Send className="ml-2 h-4 w-4" />
              </Button>
              <button type="button" onClick={onBack} className="inline-flex h-10 items-center justify-center text-sm font-medium text-zinc-400 transition hover:text-white">
                Back to landing <Play className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
