import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, PaperPlaneTilt } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TinyFoundryLogo } from '../brand/LogoMarks';

import anvilMarkUrl from '../../../assets/collateral/brand/tf-mark-anvil.svg';
import heroWorkbenchUrl from '../../../assets/collateral/hero/tf-hero-forge-workbench.svg';
import overlapCardsUrl from '../../../assets/collateral/hero/tf-hero-overlap-cards.svg';
import localFilesCardUrl from '../../../assets/collateral/hero/tf-hero-local-files-card.svg';
import aiProviderCardUrl from '../../../assets/collateral/hero/tf-hero-ai-provider-card.svg';
import automationCardUrl from '../../../assets/collateral/hero/tf-hero-automation-card.svg';
import desktopAppCardUrl from '../../../assets/collateral/hero/tf-hero-desktop-app-card.svg';
import foundryFlowUrl from '../../../assets/collateral/sections/tf-section-foundry-flow-line.svg';
import trustBoundaryUrl from '../../../assets/collateral/sections/tf-section-trust-boundary.svg';
import demoTriptychUrl from '../../../assets/collateral/sections/tf-section-demo-triptych.svg';
import editorialCirclesUrl from '../../../assets/collateral/sections/tf-section-circles-warm-gray.svg';
import gridTextureUrl from '../../../assets/collateral/textures/tf-texture-grid-faint.svg';
import metalRuleUrl from '../../../assets/collateral/textures/tf-texture-metal-grain.svg';
import iconSelectedFilesUrl from '../../../assets/collateral/icons/tf-icon-selected-files.svg';
import iconAiProviderUrl from '../../../assets/collateral/icons/tf-icon-ai-provider.svg';
import iconLocalWorkbenchUrl from '../../../assets/collateral/icons/tf-icon-local-workbench.svg';
import iconDesktopAppUrl from '../../../assets/collateral/icons/tf-icon-desktop-app.svg';
import iconPrivacyShieldUrl from '../../../assets/collateral/icons/tf-icon-privacy-shield.svg';
import iconHumanReviewUrl from '../../../assets/collateral/icons/tf-icon-human-review.svg';
import iconWorkflowMapUrl from '../../../assets/collateral/icons/tf-icon-workflow-map.svg';

type MarketingLandingProps = {
  onDemo: () => void;
};

type PausableAnimation = {
  pause?: () => void;
};

const foundryInputs = [
  {
    title: 'Selected files',
    label: '01 / SOURCE',
    body: 'Choose the Excel sheets, PDFs, folders, and checklists your workflow actually needs. Nothing more by default.',
    icon: iconSelectedFilesUrl,
  },
  {
    title: 'Your AI provider',
    label: '02 / INTELLIGENCE',
    body: 'Bring the model/API key your firm trusts. TinyFoundry shapes the approved context instead of spraying data everywhere.',
    icon: iconAiProviderUrl,
  },
  {
    title: 'Local automation',
    label: '03 / WORKBENCH',
    body: 'Use an isolated local workspace for repeatable scripts: clean spreadsheets, generate reports, or package review materials.',
    icon: iconLocalWorkbenchUrl,
  },
  {
    title: 'Private tiny app',
    label: '04 / OUTPUT',
    body: 'Ship a focused web/desktop tool around your rules, approvals, exports, and team habits.',
    icon: iconDesktopAppUrl,
  },
];

const problemRows = [
  ['01', 'The spreadsheet is mission-critical, but fragile.', 'Only one person knows which tabs matter, which formulas can break, and which numbers need review.'],
  ['02', 'Generic SaaS misses the weird workflow.', 'The process that makes your firm good is too specific for a standard platform and too small for an enterprise build.'],
  ['03', 'AI is powerful, but disconnected from the real work.', 'A chatbot is not the same as a reusable app tied to files, rules, approvals, and exports.'],
  ['04', 'Privacy optics matter.', 'Client or financial data needs a controlled path: selected files, chosen provider, visible context, human approval.'],
];

const useCases = [
  'Tax projection app',
  'Legal intake console',
  'Finance review pack',
  'Compliance evidence tracker',
  'Document request command center',
  'AI-assisted report builder',
];

const miniCards = [
  { src: localFilesCardUrl, alt: 'TinyFoundry selected workbook collateral card', caption: 'Selected local workbook' },
  { src: aiProviderCardUrl, alt: 'TinyFoundry chosen AI provider collateral card', caption: 'Preferred model key' },
  { src: automationCardUrl, alt: 'TinyFoundry local Python automation workbench collateral card', caption: 'Local automation venv' },
  { src: desktopAppCardUrl, alt: 'TinyFoundry private desktop app collateral card', caption: 'Packaged tiny app' },
];

export function MarketingLanding({ onDemo }: MarketingLandingProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reduceMotion) {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => {
        node.style.opacity = '1';
        node.style.transform = 'none';
      });
      return;
    }

    const intro = animate(root.querySelectorAll('[data-hero-reveal]'), {
      opacity: [0, 1],
      y: [34, 0],
      duration: 820,
      delay: stagger(92),
      ease: 'outCubic',
    }) as PausableAnimation;

    const floaters = animate(root.querySelectorAll('[data-float]'), {
      y: [-10, 10],
      rotate: [-1.4, 1.4],
      duration: 4200,
      delay: stagger(210),
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    }) as PausableAnimation;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.dataset.revealed = 'true';
          animate(node, {
            opacity: [0, 1],
            y: [42, 0],
            duration: 760,
            ease: 'outCubic',
          });
          const children = node.querySelectorAll('[data-stagger-child]');
          if (children.length) {
            animate(children, {
              opacity: [0, 1],
              y: [24, 0],
              duration: 650,
              delay: stagger(80),
              ease: 'outCubic',
            });
          }
          const rules = node.querySelectorAll('[data-rule]');
          if (rules.length) {
            animate(rules, {
              scaleX: [0, 1],
              opacity: [0.15, 1],
              duration: 980,
              delay: stagger(120),
              ease: 'inOutQuad',
            });
          }
          observer.unobserve(node);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    root.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));

    return () => {
      intro.pause?.();
      floaters.pause?.();
      observer.disconnect();
    };
  }, [reduceMotion]);

  return (
    <main ref={rootRef} className="min-h-screen overflow-hidden bg-[#08090a] text-[#f7f8f8] selection:bg-[#d96b3b]/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true">
        <img src={gridTextureUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
        <div className="absolute left-[-18rem] top-[-18rem] h-[44rem] w-[44rem] rounded-full bg-[#d96b3b]/20 blur-[160px]" />
        <div className="absolute right-[-20rem] top-[20rem] h-[46rem] w-[46rem] rounded-full bg-[#5e6ad2]/18 blur-[170px]" />
      </div>

      <section className="relative z-10 px-4 py-5 sm:px-6 lg:px-8">
        <nav data-hero-reveal className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#08090a]/70 px-4 py-3 opacity-0 shadow-[rgba(0,0,0,0.45)_0px_18px_60px] backdrop-blur-2xl">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group text-white transition hover:scale-[1.015]">
            <TinyFoundryLogo />
          </button>

          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#problem">Problem</a>
            <a className="transition hover:text-white" href="#foundry">Foundry</a>
            <a className="transition hover:text-white" href="#trust">Trust</a>
            <a className="transition hover:text-white" href="#cases">Use cases</a>
          </div>

          <Button type="button" onClick={onDemo} className="bg-white text-zinc-950 hover:bg-zinc-200">
            Demo <Play className="ml-2 h-4 w-4" weight="fill" />
          </Button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-10 pb-24 pt-18 sm:pt-24 lg:grid-cols-[0.92fr_1.08fr] lg:pb-32 lg:pt-28">
          <div>
            <div data-hero-reveal className="opacity-0">
              <Badge tone="pro" className="border-[#d96b3b]/30 bg-[#d96b3b]/10 text-[#ffd1bf]">Private micro-app foundry</Badge>
            </div>
            <h1 data-hero-reveal className="mt-7 max-w-5xl text-[clamp(4.35rem,10vw,8.9rem)] font-black uppercase leading-[0.78] tracking-[-0.095em] text-white opacity-0">
              Small apps.
              <span className="block text-[#e8e2d8]">Serious work.</span>
              <span className="block bg-gradient-to-r from-[#ffb08b] via-white to-[#8fa5ff] bg-clip-text text-transparent">Local first.</span>
            </h1>
            <p data-hero-reveal className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 opacity-0 sm:text-xl">
              TinyFoundry turns the spreadsheets, documents, checklists, and expert workflows already sitting on your team&apos;s computers into modern private web and desktop apps — with optional AI and local automation controlled by you.
            </p>
            <div data-hero-reveal className="mt-9 flex flex-col gap-3 opacity-0 sm:flex-row">
              <Button type="button" onClick={onDemo} className="h-[3.25rem] bg-[#d96b3b] px-7 text-base text-white shadow-[0_0_50px_rgba(217,107,59,0.35)] hover:bg-[#ef7a45]">
                Watch the transformation <ArrowRight className="ml-2 h-4 w-4" weight="bold" />
              </Button>
              <a href="#foundry" className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/15 bg-white/[0.055] px-7 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d96b3b]/60">
                Explore the foundry
              </a>
            </div>
          </div>

          <div data-hero-reveal className="relative min-h-[540px] overflow-visible opacity-0 lg:min-h-[640px]">
            <div className="absolute left-2 top-6 h-[92%] w-[92%] rounded-full border border-white/10 opacity-50" aria-hidden="true" />
            <div className="absolute right-8 top-20 h-56 w-56 rounded-full border border-[#d96b3b]/35" aria-hidden="true" />
            <motion.img
              data-float
              src={overlapCardsUrl}
              alt="Overlapping TinyFoundry cards showing selected files, AI key, and a generated tiny app."
              className="absolute right-0 top-2 w-[min(680px,92vw)] max-w-none drop-shadow-[0_50px_120px_rgba(0,0,0,0.55)]"
              initial={false}
            />
            <motion.img
              data-float
              src={heroWorkbenchUrl}
              alt="Selected local work files flowing through a foundry bench into private app outputs."
              className="absolute bottom-4 left-0 w-[min(640px,88vw)] max-w-none rounded-[2.4rem] border border-white/10 bg-[#0f1011]/70 p-3 shadow-[0_40px_130px_rgba(0,0,0,0.48)] backdrop-blur-xl"
              initial={false}
            />
            <div data-float className="absolute left-4 top-14 hidden rounded-full border border-white/15 bg-[#08090a]/80 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ffd1bf] shadow-2xl backdrop-blur-xl sm:block">
              Files → Flow → App
            </div>
          </div>
        </div>
      </section>

      <section id="problem" data-reveal className="relative z-10 bg-[#e8e2d8] px-4 py-24 text-[#08090a] opacity-0 sm:px-6 lg:px-8 lg:py-32">
        <img src={editorialCirclesUrl} alt="" aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover opacity-55 mix-blend-multiply" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#9c4928]">What breaks</p>
            </div>
            <h2 className="max-w-5xl text-[clamp(3.4rem,8vw,7.8rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]">
              The work is already designed. It is just trapped in fragile tools.
            </h2>
          </div>

          <div className="mt-20 divide-y divide-[#08090a]/20 border-y border-[#08090a]/20">
            {problemRows.map(([num, title, body]) => (
              <article key={num} data-stagger-child className="grid gap-5 py-7 opacity-0 md:grid-cols-[0.14fr_0.38fr_1fr] md:items-start">
                <span className="font-mono text-sm font-black text-[#d96b3b]">{num}</span>
                <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">{title}</h3>
                <p className="max-w-2xl text-base leading-7 text-[#08090a]/68">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="foundry" data-reveal className="relative z-10 px-4 py-24 opacity-0 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.48fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#ffd1bf]">The foundry flow</p>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.84] tracking-[-0.075em] sm:text-7xl">Select. Shape. Approve. Ship.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400 lg:justify-self-end">
              Borrowing the spacious service-row rhythm from Antaeus, this flow makes the product feel confident: users choose the raw material, TinyFoundry maps the workflow, AI is optional and controlled, and the output is a private app.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#111316] p-3 shadow-[0_34px_120px_rgba(0,0,0,0.45)]">
            <img src={foundryFlowUrl} alt="Four TinyFoundry stages: select the real work, shape the flow, keep context private, and ship the tiny app." className="w-full rounded-[1.75rem]" />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {foundryInputs.map((item) => (
              <article key={item.title} data-stagger-child className="group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 opacity-0 transition duration-300 hover:-translate-y-1 hover:border-[#d96b3b]/45 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <img src={item.icon} alt="" aria-hidden="true" className="h-8 w-8 text-white invert" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">{item.label}</span>
                </div>
                <h3 className="mt-8 text-2xl font-black uppercase leading-none tracking-[-0.055em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="relative z-10 px-4 py-24 opacity-0 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#8fa5ff]">Juna-inspired card system</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.84] tracking-[-0.075em] sm:text-7xl">Concrete inputs. Tactile outputs.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              The page should not just say “AI app builder.” These cards show the real material: local files, a chosen model, a controlled automation environment, and a polished app shell.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {miniCards.map((card, index) => (
              <figure key={card.caption} data-stagger-child className={`opacity-0 ${index % 2 ? 'sm:translate-y-10' : ''}`}>
                <img src={card.src} alt={card.alt} className="w-full rounded-[1.6rem] shadow-[0_28px_90px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1" />
                <figcaption className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">{card.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" data-reveal className="relative z-10 bg-[#e8e2d8] px-4 py-24 text-[#08090a] opacity-0 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#9c4928]">Trust model</p>
            <h2 className="mt-5 text-[clamp(3.2rem,7vw,7.2rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]">Local by default. AI by choice.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#08090a]/70">
              Your files stay local by default. If AI is used, you choose the provider and control what context is sent. Important actions still pass through a human gate.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-[#08090a]/75 sm:grid-cols-3">
              {[
                [iconPrivacyShieldUrl, 'Selected files'],
                [iconAiProviderUrl, 'Chosen provider'],
                [iconHumanReviewUrl, 'Human approval'],
              ].map(([icon, label]) => (
                <div key={label} className="rounded-2xl border border-[#08090a]/15 bg-[#f7f8f8]/50 p-4">
                  <img src={icon} alt="" aria-hidden="true" className="mb-4 h-7 w-7" />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.25rem] border border-[#08090a]/10 bg-[#08090a] p-3 shadow-[0_36px_110px_rgba(8,9,10,0.35)]">
            <img src={trustBoundaryUrl} alt="TinyFoundry local boundary diagram showing local files, app, Python environment, user API key, human gate, and optional provider." className="w-full rounded-[1.75rem]" />
          </div>
        </div>
      </section>

      <section data-reveal className="relative z-10 px-4 py-24 opacity-0 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#ffd1bf]">Demo path</p>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.84] tracking-[-0.075em] sm:text-7xl">A page that scrolls like a pitch, then opens a demo.</h2>
            </div>
            <div className="rounded-[2.25rem] border border-white/10 bg-[#111316] p-3">
              <img src={demoTriptychUrl} alt="Demo triptych showing raw workbook, mapped workflow, and desktop app." className="w-full rounded-[1.75rem]" />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button type="button" onClick={onDemo} className="h-[3.25rem] bg-white px-7 text-base text-[#08090a] hover:bg-zinc-200">
              Open the demo <ArrowRight className="ml-2 h-4 w-4" weight="bold" />
            </Button>
          </div>
        </div>
      </section>

      <section id="cases" data-reveal className="relative z-10 px-4 py-24 opacity-0 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-y border-white/12 py-10 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#8fa5ff]">What we can forge first</p>
              <h2 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]">Tiny tools for expert teams.</h2>
            </div>
            <img src={iconWorkflowMapUrl} alt="" aria-hidden="true" className="h-14 w-14 invert" />
          </div>
          <div className="divide-y divide-white/12">
            {useCases.map((item, index) => (
              <div key={item} data-stagger-child className="group grid gap-4 py-8 opacity-0 sm:grid-cols-[0.16fr_1fr_0.16fr] sm:items-center">
                <span className="font-mono text-xs font-black text-zinc-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.06em] text-white transition group-hover:text-[#ffd1bf] sm:text-5xl">{item}</h3>
                <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 justify-self-start transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#d96b3b]/60 sm:justify-self-end">
                  <ArrowRight className="h-5 w-5" weight="bold" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="relative z-10 px-4 pb-10 pt-20 opacity-0 sm:px-6 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-[#e8e2d8] text-[#08090a] shadow-[0_44px_130px_rgba(0,0,0,0.42)]">
          <img src={metalRuleUrl} alt="" aria-hidden="true" className="h-12 w-full object-cover" />
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <div>
              <img src={anvilMarkUrl} alt="TinyFoundry Anvil T/F mark" className="h-20 w-20 rounded-3xl bg-[#08090a] p-4" />
              <h2 className="mt-8 text-[clamp(3.2rem,7vw,7.6rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">Bring us the messy file.</h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-xl leading-8 text-[#08090a]/70">
                We&apos;ll turn one spreadsheet, checklist, document workflow, or repeated expert process into a private app sketch that your team can actually judge.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="button" onClick={onDemo} className="h-[3.25rem] bg-[#08090a] px-7 text-base text-white hover:bg-[#1b1d21]">
                  Start with the demo <PaperPlaneTilt className="ml-2 h-4 w-4" weight="fill" />
                </Button>
                <a href="#problem" className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-[#08090a]/20 px-7 text-base font-black uppercase tracking-[-0.02em] transition hover:bg-[#08090a] hover:text-white">
                  Re-read the pitch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
