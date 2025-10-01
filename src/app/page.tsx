import { useMemo } from "react";
import { Linkedin, Mail, Rocket, Shield, Cpu, BookOpen, Layers, Flame, ChevronRight, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ---------------------------------------------
// Quick data model
// ---------------------------------------------
const links = {
  email: "jackryanrumpf@gmail.com",
  linkedin: "https://www.linkedin.com/in/jackrumpf/",
};

const ventures = [
  {
    title: "AerLock",
    subtitle: "Next‑gen cybersecurity startup",
    badge: "Co‑Founder",
    highlights: [
      "AI that not only detects threats but patches them instantly",
      "Custom Proxmox + Tailscale lab for live malware battles",
      "Pushed into CREATE‑X Launch, building fast and loud",
    ],
    href: "https://aerlock.com",
    icon: Shield,
  },
  {
    title: "GridEye",
    subtitle: "Football analytics with computer vision",
    badge: "Co‑Founder",
    highlights: [
      "Maps all 22 players in real‑time, calls plays like a coach",
      "Design‑partner outreach with NCAA teams",
      "Took home gold at Hacklytics sports analytics",
    ],
    href: "https://devpost.com/software/grideye",
    icon: Cpu,
  },
  {
    title: "Deep Robotics",
    subtitle: "Underwater welding & inspection ROV",
    badge: "Co‑Founder",
    highlights: [
      "Remote‑operated welding arms + holonomic thrusters",
      "Taking on $2B subsea maintenance market",
      "Pitching as the alternative to risky saturation dives",
    ],
    href: "https://create-x.gatech.edu/node/9702",
    icon: Wrench,
  },
  {
    title: "PipeX",
    subtitle: "Robotics for pipe inspection & repair",
    badge: "Co‑Founder",
    highlights: [
      "Vision‑driven detection of cracks + corrosion",
      "Automates one of the sketchiest maintenance jobs",
      "Won 1st place RoboTech 2025 (Advanced Track)",
    ],
    href: "https://devpost.com/software/pipex",
    icon: Layers,
  },
];

const teamsAndProjects = [
  {
    title: "Propulsive Landers — Structures Sub‑Team Lead",
    subtitle: "Building rockets that don’t just fly, they land",
    bullets: [
      "Leading 30+ engineers, grinding 40+ hrs/week on CAD/FEA/CFD",
      "Validating aero + vibro sims in Ansys",
      "FEA on engines, MATLAB for nozzle + grain design",
    ],
    href: "https://gtpropulsivelanders.org",
    icon: Flame,
  },
  {
    title: "Pedro Pathing",
    subtitle: "Reactive path planning that actually sticks",
    bullets: [
      "Maintainer; dropped PRs for mecanum kinematics",
      "Used by thousands worldwide",
      "pedropathing.com",
    ],
    href: "https://pedropathing.com",
    icon: Layers,
  },
];

const research = [
  {
    title: "Coaxial & Differential TVC Systems for Rockets",
    venue: "AIAA (Lead Author)",
    note: "+25% better control — FEA + MATLAB turned into control",
    href: "https://arc.aiaa.org/doi/10.2514/6.2025-99480",
    icon: Rocket,
  },
  {
    title: "Disc Baffle Optimization in Sloshing N2O Tanks",
    venue: "AIAA (Co‑Author)",
    note: "~34% drop in pressure spikes — CFD in Fluent",
    href: "https://arc.aiaa.org/doi/10.2514/6.2025-99478",
    icon: BookOpen,
  },
];

const experience = [
  {
    role: "Mechanical, Structural & Process Eng. Intern",
    org: "Savannah River Mission Completion (DOE)",
    time: "May – Jul 2025",
    bullets: [
      "3D modeled a 2,000‑part radioactive system",
      "Prototyped fixes overnight — kept the plant moving",
      "Analyzed pumps, handed ops team fresh data viz for control",
    ],
  },
  {
    role: "Technical Consultant Intern",
    org: "Spark Starter Studio",
    time: "Apr 2024 – Apr 2025",
    bullets: [
      "Launched products with clients like Mondelez — shipped fast, no fluff",
      "Ran IT security audits, exposed cracks, pushed upgrade roadmaps",
      "Teamed with devs to spin up web pages that actually convert",
    ],
  },
  {
    role: "ML Researcher & App Developer",
    org: "Emory Global Health Institute",
    time: "Apr – Jun 2023",
    bullets: [
      "Built a music therapy app with ML + EEG integration",
      "Drafted a paper on brainwave‑driven therapy effectiveness",
      "Designed a slick UI making therapy tools simple to use",
    ],
  },
  {
    role: "Design & Manufacturing Eng. Intern",
    org: "ABB Motion — NEMA Motors",
    time: "May – Jun 2023",
    bullets: [
      "Designed custom VFDs, built out full control panel",
      "Cranked out automation to boost line speed ~5%",
      "Repped the eng team to International Paper execs",
    ],
  },
];

export default function Portfolio() {
  const initials = useMemo(() => "JR", []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-emerald-500 text-slate-900 flex items-center justify-center font-bold">
              {initials}
            </div>
            <span className="font-semibold tracking-tight">Jack Rumpf</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {[
              ["Ventures", "#ventures"],
              ["Teams & Projects", "#teams"],
              ["Research", "#research"],
              ["Experience", "#experience"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="hover:underline underline-offset-4">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="bg-emerald-500 text-slate-900 hover:bg-emerald-400">
              <a href={`mailto:${links.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-slate-600">Founder • Builder • Hacker</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            4× Founder. 3× Intern. 2× Published. Cracking the future wide open.
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-emerald-500 text-slate-900 hover:bg-emerald-400">
              <a href="#ventures">
                Explore my work <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <Section id="ventures" title="Ventures">
        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((v) => (
            <a key={v.title} href={v.href ?? "#"} target={v.href ? "_blank" : undefined} rel={v.href ? "noreferrer" : undefined}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <v.icon className="h-5 w-5" />
                    <CardTitle className="text-lg">{v.title}</CardTitle>
                  </div>
                  <div className="text-slate-500 text-sm">{v.subtitle}</div>
                  <Badge>{v.badge}</Badge>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  {v.highlights.map((h, i) => (
                    <li key={i} className="list-none">• {h}</li>
                  ))}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* TEAMS & PROJECTS */}
      <Section id="teams" title="Teams & Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {teamsAndProjects.map((p) => (
            <a key={p.title} href={p.href ?? "#"} target={p.href ? "_blank" : undefined} rel={p.href ? "noreferrer" : undefined}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <p.icon className="h-5 w-5" />
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </div>
                  <div className="text-slate-500 text-sm">{p.subtitle}</div>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="list-none">• {b}</li>
                  ))}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research" title="Research">
        <div className="grid md:grid-cols-2 gap-6">
          {research.map((r) => (
            <a key={r.title} href={r.href} target="_blank" rel="noreferrer">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <r.icon className="h-5 w-5" />
                    <CardTitle className="text-lg">{r.title}</CardTitle>
                  </div>
                  <div className="text-slate-500 text-sm">{r.venue}</div>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">{r.note}</CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((e) => (
            <Card key={e.role} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-lg">{e.role}</CardTitle>
                <div className="text-slate-500 text-sm">{e.org} • {e.time}</div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="list-none">• {b}</li>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FOOTER (minimal) */}
      <footer className="mt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jack Rumpf.</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={`mailto:${links.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------
// Small presentational helpers
// ---------------------------------------------
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}