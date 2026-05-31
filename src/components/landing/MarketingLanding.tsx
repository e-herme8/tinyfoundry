import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import type { Icon } from '@phosphor-icons/react';
import {
  ArrowRight,
  CheckCircle,
  CursorClick,
  Database,
  FileXls,
  Flask,
  Graph,
  Key,
  Laptop,
  LockKey,
  Play,
  Robot,
  ShieldCheck,
} from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TinyFoundryLogo } from '../brand/LogoMarks';

type MarketingLandingProps = {
  onDemo: () => void;
};

type PausableAnimation = {
  pause?: () => void;
};

const painPoints = [
  'The spreadsheet works, but only one person really understands it.',
  'Your workflow is too specific for generic SaaS and too small for a full dev project.',
  'AI sounds useful, but nobody has translated it into your actual files, rules, and decisions.',
  'Sensitive client data cannot just be pasted into random tools.',
];

const forgeSteps = [
  {
    icon: FileXls,
    label: 'Selected files',
    title: 'Connect the sheets and documents you choose.',
    body: 'Excel models, CSVs, PDFs, checklists, and working folders become the raw material — not your whole computer.',
  },
  {
    icon: Key,
    label: 'Chosen model',
    title: 'Bring the AI provider your team trusts.',
    body: 'Use your preferred LLM/API key for drafting, extraction, summarization, and reviewable reasoning where it helps.',
  },
  {
    icon: Flask,
    label: 'Local workbench',
    title: 'Add a controlled automation environment.',
    body: 'For repeatable jobs, TinyFoundry can set up an isolated local workspace for spreadsheet cleanup, report generation, and approved scripts.',
  },
  {
    icon: Laptop,
    label: 'Desktop app',
    title: 'Package the workflow into a tiny private app.',
    body: 'A focused SPA wrapped for Windows or Mac, built around your rules, review steps, exports, and team habits.',
  },
];

const useCases = [
  ['Tax projection app', 'Turn a workbook into guided scenarios, client inputs, calculations, and PDF-ready outputs.'],
  ['Legal intake console', 'Convert intake forms into structured triage, missing-info flags, and matter summaries.'],
  ['Finance review pack', 'Read local sheets, check variance, draft commentary, and export a reusable review packet.'],
  ['Compliance checklist', 'Transform SOPs into an evidence-capture workflow with approval gates and status tracking.'],
  ['Document request tracker', 'Track what is missing, received, reviewed, and ready without another heavyweight platform.'],
  ['AI report builder', 'Use your chosen model to summarize selected data and prepare reviewable business reports.'],
];

const comparison = [
  ['Excel', 'Flexible thinking', 'Fragile repeatable processes'],
  ['Generic SaaS', 'Standard workflows', 'The weird process that makes your firm different'],
  ['No-code', 'Someone wants to become the builder', 'You just need the tool to exist'],
  ['ChatGPT', 'Open-ended help', 'Reusable workflows tied to files, rules, approvals, and exports'],
  ['TinyFoundry', 'Specific expert workflows', 'When you need a private app, not a platform migration'],
];

export function MarketingLanding({ onDemo }: MarketingLandingProps) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const forgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const root = rootRef.current;
    if (!root) return;

    const heroItems = root.querySelectorAll('[data-hero-reveal]');
    const heroAnimation = animate(heroItems, {
      opacity: [0, 1],
      y: [22, 0],
      duration: 720,
      delay: stagger(82),
      ease: 'outCubic',
    }) as PausableAnimation;

    const orbitAnimation = animate(root.querySelectorAll('[data-orbit-chip]'), {
      y: [-7, 7],
      rotate: [-1.5, 1.5],
      duration: 3600,
      delay: stagger(220),
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    }) as PausableAnimation;

    return () => {
      heroAnimation.pause?.();
      orbitAnimation.pause?.();
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const forge = forgeRef.current;
    if (!forge) return;

    const animation = animate(forge.querySelectorAll('[data-forge-node]'), {
      opacity: [0, 1],
      x: [-16, 0],
      duration: 620,
      delay: stagger(115),
      ease: 'outCubic',
    }) as PausableAnimation;

    const beam = animate(forge.querySelectorAll('[data-forge-beam]'), {
      scaleX: [0, 1],
      opacity: [0.2, 1],
      duration: 950,
      delay: stagger(160),
      ease: 'inOutQuad',
    }) as PausableAnimation;

    return () => {
      animation.pause?.();
      beam.pause?.();
    };
  }, [reduceMotion]);

  return (
    <main ref={rootRef} className="min-h-screen overflow-hidden bg-[#08090a] text-[#f7f8f8] selection:bg-[#d96b3b]/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#5e6ad2]/20 blur-[150px]" />
        <div className="absolute right-[-16rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-[#d96b3b]/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      </div>

      <section className="relative z-10 px-4 py-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[rgba(0,0,0,0.45)_0px_18px_60px] backdrop-blur-2xl">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group text-white transition hover:scale-[1.015]">
            <TinyFoundryLogo />
          </button>

          <div className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
            <a className="transition hover:text-white" href="#problem">Problem</a>
            <a className="transition hover:text-white" href="#how">How it works</a>
            <a className="transition hover:text-white" href="#privacy">Privacy</a>
            <a className="transition hover:text-white" href="#use-cases">Use cases</a>
          </div>

          <Button type="button" onClick={onDemo} className="bg-white text-zinc-950 hover:bg-zinc-200">
            Try the demo
          </Button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-28">
          <div>
            <div data-hero-reveal className="opacity-100">
              <Badge tone="pro" className="border-[#d96b3b]/30 bg-[#d96b3b]/10 text-[#ffd1bf]">Private micro-app foundry</Badge>
            </div>
            <h1 data-hero-reveal className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-7xl lg:text-[6.35rem]">
              Your spreadsheet is already the prototype.
              <span className="block bg-gradient-to-r from-white via-[#f4c7b1] to-[#8fa5ff] bg-clip-text text-transparent">We turn it into the app.</span>
            </h1>
            <p data-hero-reveal className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl">
              TinyFoundry converts the Excel models, checklists, documents, and expert workflows your business already uses into small private apps for your team's laptops — with optional AI and local automation built around your rules.
            </p>
            <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={onDemo} className="h-12 bg-[#d96b3b] px-6 text-base text-white shadow-[0_0_45px_rgba(217,107,59,0.35)] hover:bg-[#ef7a45]">
                Watch a workflow become an app <ArrowRight className="ml-2 h-4 w-4" weight="bold" />
              </Button>
              <a href="#how" className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-6 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d96b3b]/60">
                See how it works
              </a>
            </div>
            <div data-hero-reveal className="mt-9 grid gap-3 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
              {['Selected files only', 'Bring your own AI model', 'Isolated local automation workspace', 'Review before important actions'].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#d96b3b]" weight="fill" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div data-hero-reveal className="relative min-h-[620px] opacity-100">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#d96b3b]/10 via-[#5e6ad2]/10 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0f1011]/95 p-4 shadow-[rgba(0,0,0,0.55)_0px_30px_100px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.045] px-4 py-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">Foundry bench / live sketch</p>
                  <p className="mt-1 text-sm font-medium text-white">Tax projection workbook → private review app</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
              </div>

              <div ref={forgeRef} className="grid gap-4 lg:grid-cols-[0.82fr_0.18fr_1fr]">
                <div className="space-y-3">
                  <WorkbenchNode icon={FileXls} title="2026-tax-scenarios.xlsx" label="Selected local file" lines={['28 tabs detected', '41 formulas mapped', '6 missing fields flagged']} />
                  <WorkbenchNode icon={Key} title="Preferred model key" label="Optional AI routing" lines={['Draft commentary', 'Explain assumptions', 'No training toggle']} />
                  <WorkbenchNode icon={Flask} title="Automation workbench" label="Isolated local environment" lines={['Read workbook', 'Clean inputs', 'Generate PDF pack']} />
                </div>

                <div className="hidden flex-col items-center justify-center gap-5 lg:flex">
                  {[0, 1, 2].map((beam) => (
                    <span key={beam} data-forge-beam className="h-px w-full origin-left bg-gradient-to-r from-[#d96b3b] to-[#5e6ad2] opacity-80" />
                  ))}
                </div>

                <div data-forge-node className="rounded-[1.75rem] border border-[#5e6ad2]/30 bg-[#08090a] p-4 opacity-100 shadow-[0_0_0_1px_rgba(94,106,210,0.12),0_24px_70px_rgba(0,0,0,0.45)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8fa5ff]">Generated tiny app</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-[-0.05em] text-white">Tax Review Console</h3>
                    </div>
                    <Badge tone="core" className="normal-case tracking-normal">.exe / .dmg</Badge>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <MiniPanel title="Guided intake" value="12 fields" />
                    <MiniPanel title="Validation checks" value="8 flags" />
                    <MiniPanel title="AI notes" value="Reviewable" />
                    <MiniPanel title="Export" value="PDF + CSV" />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Robot className="h-4 w-4 text-[#d96b3b]" weight="duotone" />
                      AI review note
                    </div>
                    <p className="text-sm leading-6 text-zinc-400">
                      Scenario B increases estimated liability by 14%. Two assumptions need partner review before the client pack is exported.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">Approve</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">Revise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FloatingChip className="left-0 top-10" icon={Database} label="Local data" />
            <FloatingChip className="right-4 top-28" icon={LockKey} label="Human approval" />
            <FloatingChip className="bottom-6 left-8" icon={Graph} label="Reusable playbook" />
          </div>
        </div>
      </section>

      <SectionShell id="problem" eyebrow="The real problem" title="Important work is trapped in fragile tools." intro="Your team already has the logic. It lives in spreadsheets, internal checklists, client forms, copied formulas, shared folders, and the judgment of the person who just knows how it works.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <motion.article
              key={point}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-[rgba(255,255,255,0.04)_0px_0px_0px_1px_inset]"
            >
              <p className="font-mono text-xs text-[#d96b3b]">0{index + 1}</p>
              <p className="mt-5 text-base leading-7 text-zinc-200">{point}</p>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="how" eyebrow="Foundry flow" title="From messy process to working app." intro="We do not sell AI transformation. We build one focused tool around one repeated expert workflow, then make the next one faster.">
        <div className="grid gap-4 lg:grid-cols-4">
          {forgeSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="group rounded-[1.75rem] border border-white/10 bg-[#0f1011] p-6 transition hover:-translate-y-1 hover:border-[#d96b3b]/35 hover:bg-white/[0.045]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#f4c7b1]">
                    <Icon className="h-5 w-5" weight="duotone" />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8fa5ff]">{step.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.04em] text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{step.body}</p>
              </article>
            );
          })}
        </div>
      </SectionShell>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge tone="core" className="border-[#5e6ad2]/30 bg-[#5e6ad2]/10 text-[#c9ceff]">Interactive demo</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.065em] text-white sm:text-6xl">Watch a spreadsheet become a tiny app.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Pick a sample workflow, see the messy input, watch TinyFoundry map fields and review gates, then preview the generated app screens.
            </p>
            <Button type="button" onClick={onDemo} className="mt-7 h-12 bg-white px-6 text-base text-zinc-950 hover:bg-zinc-200">
              Open demo page <Play className="ml-2 h-4 w-4" weight="fill" />
            </Button>
          </div>

          <button type="button" onClick={onDemo} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090a] p-4 text-left shadow-[rgba(0,0,0,0.5)_0px_30px_90px] focus:outline-none focus:ring-2 focus:ring-[#d96b3b]/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,107,59,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(94,106,210,0.22),transparent_36%)] opacity-80 transition group-hover:scale-105" />
            <div className="relative grid gap-3 md:grid-cols-3">
              {['Raw workbook', 'Mapped workflow', 'Desktop app'].map((label, index) => (
                <div key={label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Step 0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.04em] text-white">{label}</h3>
                  <div className="mt-5 space-y-2">
                    {[0, 1, 2].map((line) => (
                      <span key={line} className="block h-2 rounded-full bg-white/10" style={{ width: `${92 - line * 18}%` }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-4 flex items-center gap-2 text-sm font-medium text-[#f4c7b1]">
              <CursorClick className="h-4 w-4" weight="duotone" /> Click to launch the simulated build
            </div>
          </button>
        </div>
      </section>

      <SectionShell id="privacy" eyebrow="Trust model" title="Built for private, practical work." intro="TinyFoundry is designed for teams that care where their data goes. You choose which files the app can access, which model provider to use, and what actions require approval.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Selected files only', 'The app works with files or folders you choose. It does not need to scan your entire computer.'],
            ['Visible AI flow', 'If AI reasoning is needed, selected context can be sent to the provider you configure — with the flow made clear.'],
            ['Review before action', 'The app can prepare analysis, drafts, exports, and scripts. Your team approves important outputs.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
              <ShieldCheck className="h-6 w-6 text-emerald-300" weight="duotone" />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="use-cases" eyebrow="Use cases" title="Small apps for serious work." intro="The first wedge is not a platform. It is one workflow your team repeats every week, packaged into something safer and easier to reuse.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(([title, body]) => (
            <article key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0f1011] p-5 transition hover:border-[#5e6ad2]/40 hover:bg-white/[0.04]">
              <h3 className="text-lg font-semibold tracking-[-0.04em] text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Why this wins" title="Not Excel. Not SaaS. Not no-code. The missing middle." intro="TinyFoundry sits between fragile files and expensive software projects: custom enough to fit your workflow, small enough to ship quickly.">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1011]">
          {comparison.map(([tool, good, bad], index) => (
            <div key={tool} className="grid gap-4 border-b border-white/10 p-5 last:border-b-0 md:grid-cols-[0.8fr_1fr_1fr]">
              <div className="font-semibold tracking-[-0.03em] text-white">{tool}</div>
              <div className="text-sm leading-6 text-zinc-400"><span className="text-emerald-200">Good for:</span> {good}</div>
              <div className="text-sm leading-6 text-zinc-400"><span className={index === 4 ? 'text-[#f4c7b1]' : 'text-rose-200'}>{index === 4 ? 'Best when:' : 'Breaks when:'}</span> {bad}</div>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-[#d96b3b]/25 bg-[#0f1011] p-8 text-center shadow-[0_0_0_1px_rgba(217,107,59,0.12),0_35px_100px_rgba(0,0,0,0.55)] sm:p-12">
          <Badge tone="pro" className="border-[#d96b3b]/30 bg-[#d96b3b]/10 text-[#ffd1bf]">Start with one workflow</Badge>
          <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.065em] text-white sm:text-6xl">What small app would save your team ten hours this month?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            Try the demo, then send the spreadsheet, checklist, or process your team keeps working around. We will sketch what it could become.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={onDemo} className="h-12 bg-[#d96b3b] px-7 text-base text-white hover:bg-[#ef7a45]">
              Get my tiny app sketch <ArrowRight className="ml-2 h-4 w-4" weight="bold" />
            </Button>
            <a href="#use-cases" className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 text-base font-medium text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#d96b3b]/60">
              Explore use cases
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

type WorkbenchNodeProps = {
  icon: Icon;
  title: string;
  label: string;
  lines: string[];
};

function WorkbenchNode({ icon: Icon, title, label, lines }: WorkbenchNodeProps) {
  return (
    <div data-forge-node className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 opacity-100">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-[#08090a] text-[#f4c7b1]">
          <Icon className="h-4 w-4" weight="duotone" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
          <h3 className="mt-1 text-sm font-semibold tracking-[-0.03em] text-white">{title}</h3>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {lines.map((line) => (
          <div key={line} className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d96b3b]" />
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

type MiniPanelProps = {
  title: string;
  value: string;
};

function MiniPanel({ title, value }: MiniPanelProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
      <p className="text-xs text-zinc-500">{title}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

type FloatingChipProps = {
  icon: Icon;
  label: string;
  className: string;
};

function FloatingChip({ icon: Icon, label, className }: FloatingChipProps) {
  return (
    <div data-orbit-chip className={`absolute hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-medium text-white shadow-[rgba(0,0,0,0.35)_0px_18px_50px] backdrop-blur-xl md:flex ${className}`}>
      <Icon className="h-3.5 w-3.5 text-[#f4c7b1]" weight="duotone" />
      {label}
    </div>
  );
}

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <section id={id} className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <Badge tone="neutral" className="border-white/10 bg-white/[0.04] text-zinc-300">{eyebrow}</Badge>
          <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.065em] text-white sm:text-6xl">{title}</h2>
          <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
