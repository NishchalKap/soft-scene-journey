import { Scene } from '@/components/Scene';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import ladyWelcome from '@/assets/lady-welcome.png';
import ladyCough from '@/assets/lady-cough.png';
import ladyConfused from '@/assets/lady-confused.png';
import ladyNamaste from '@/assets/lady-namaste.png';
import ladyAyurveda from '@/assets/lady-ayurveda.png';
import clayPhone from '@/assets/clay-phone.png';
import clayConfusion from '@/assets/clay-confusion.png';
import clayDoctor from '@/assets/clay-doctor.png';
import clayDashboard from '@/assets/clay-dashboard.png';
import clayReport from '@/assets/clay-report.png';
import sattvaLogo from '@/assets/sattva-logo.png';

function FloatingOrb({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute rounded-full opacity-15 blur-3xl pointer-events-none ${className}`}
      style={{ background: 'hsl(var(--primary))' }}
    />
  );
}

function ClayCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`clay-surface-lg p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4">
      {children}
    </span>
  );
}

export default function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* Ambient background depth */}
      <FloatingOrb className="w-[500px] h-[500px] top-[5%] -left-64 float-animation-slow" />
      <FloatingOrb className="w-[400px] h-[400px] top-[25%] -right-48 float-animation-delayed" />
      <FloatingOrb className="w-[350px] h-[350px] top-[50%] -left-32 float-animation" />
      <FloatingOrb className="w-[300px] h-[300px] top-[75%] -right-40 float-animation-slow" />

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <Scene parallaxSpeed={0.15}>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-20">
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={ladyWelcome}
              alt="Sattva character"
              className="w-[55%] md:w-[65%] max-w-[420px] breathe-animation drop-shadow-2xl"
              width={1280} height={720}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <SectionLabel>Welcome to Sattva</SectionLabel>
            <h1 className="scene-text max-w-xl mb-6">
              Healthcare shouldn't feel overwhelming.
            </h1>
            <p className="scene-subtext max-w-md mb-8">
              From first symptom to full clarity — your gentle companion through every health question.
            </p>
            <a
              href="#cta"
              className="inline-block px-8 py-4 rounded-2xl text-base font-semibold bg-primary text-primary-foreground shadow-[0_6px_24px_-4px_hsl(var(--primary)/0.4)] hover:shadow-[0_10px_32px_-4px_hsl(var(--primary)/0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Start with clarity →
            </a>
          </div>
        </div>
      </Scene>

      {/* ═══════════════ 2. ABOUT SATTVA ═══════════════ */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-transparent pointer-events-none" />
        <Scene parallaxSpeed={0.2} minHeight="min-h-0">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="scene-text mb-8">Why Sattva Exists</h2>
            <p className="scene-subtext mb-10 max-w-2xl mx-auto">
              The first mile of healthcare is broken. When symptoms appear, most people turn to the internet — 
              only to find conflicting advice, confusing jargon, and no clear next step. By the time they reach a doctor,
              they've already lost time, money, and peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <ClayCard className="text-center">
                <p className="font-serif text-3xl text-primary mb-2">72%</p>
                <p className="text-sm text-muted-foreground">of patients feel confused before their first consultation</p>
              </ClayCard>
              <ClayCard className="text-center">
                <p className="font-serif text-3xl text-primary mb-2">3.2x</p>
                <p className="text-sm text-muted-foreground">more likely to delay care when overwhelmed</p>
              </ClayCard>
              <ClayCard className="text-center">
                <p className="font-serif text-3xl text-primary mb-2">89%</p>
                <p className="text-sm text-muted-foreground">want a single trusted source of health clarity</p>
              </ClayCard>
            </div>
          </div>
        </Scene>
      </div>

      {/* ═══════════════ 3. SYMPTOMS (Image Left) ═══════════════ */}
      <section id="symptoms">
        <Scene parallaxSpeed={0.3}>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 flex justify-center">
              <img
                src={ladyCough}
                alt="Character coughing"
                className="w-[60%] md:w-[70%] max-w-[400px] drop-shadow-xl breathe-animation"
                loading="lazy" width={1280} height={720}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <SectionLabel>The Trigger</SectionLabel>
              <h2 className="scene-text mb-4">It often starts small…</h2>
              <p className="scene-subtext mb-4">A cough. A headache. Something you brush off — until it doesn't go away.</p>
              <p className="text-base text-muted-foreground/70 leading-relaxed">
                You search online, ask friends, try home remedies. But the uncertainty lingers.
                That's the first-mile problem — and Sattva was built to solve it.
              </p>
            </div>
          </div>
        </Scene>
      </section>

      {/* ═══════════════ 4. CONFUSION (Image Right) ═══════════════ */}
      <Scene parallaxSpeed={0.35}>
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="flex-1 flex justify-center relative">
            <img
              src={ladyConfused}
              alt="Confused woman"
              className="w-[55%] md:w-[65%] max-w-[380px] drop-shadow-xl breathe-animation relative z-10"
              loading="lazy" width={1280} height={720}
            />
            <img
              src={clayConfusion}
              alt="Floating question marks"
              className="absolute -top-10 -right-2 md:-right-8 w-36 md:w-48 float-animation opacity-60"
              loading="lazy" width={768} height={512}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <SectionLabel>The Gap</SectionLabel>
            <h2 className="scene-text mb-4">But clarity is missing.</h2>
            <p className="scene-subtext mb-4">Too many tabs. Conflicting advice. No clear path forward.</p>
            <p className="text-base text-muted-foreground/70 leading-relaxed">
              You deserve to understand what's happening with your body — in language that 
              makes sense, with a plan that feels right.
            </p>
          </div>
        </div>
      </Scene>

      {/* ═══════════════ 5. DISCOVERY (Image Left) ═══════════════ */}
      <section id="discovery">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
          <Scene parallaxSpeed={0.25}>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1 flex justify-center">
                <img
                  src={clayPhone}
                  alt="Sattva phone app"
                  className="w-[50%] md:w-[60%] max-w-[340px] float-animation drop-shadow-2xl"
                  loading="lazy" width={640} height={896}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <SectionLabel>The Solution</SectionLabel>
                <h2 className="scene-text mb-4">That's where Sattva comes in.</h2>
                <p className="scene-subtext mb-6">Your health companion — gentle, smart, always clear.</p>
                <div className="space-y-3">
                  {[
                    'AI-powered symptom analysis',
                    'Structured health reports in minutes',
                    'Direct doctor consultations',
                    'Ayurvedic wellness guidance',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Scene>
        </div>
      </section>

      {/* ═══════════════ 6. FORM (Full Width) ═══════════════ */}
      <Scene parallaxSpeed={0.2} minHeight="min-h-0">
        <div className="flex flex-col items-center text-center gap-8">
          <SectionLabel>Simple Process</SectionLabel>
          <h2 className="scene-text max-w-lg mb-2">Just answer a few simple questions.</h2>
          <p className="scene-subtext max-w-md mb-4">No medical jargon. No complicated forms. Just clarity.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 w-full max-w-3xl">
            {[
              { q: 'How are you feeling?', desc: 'Describe your symptoms in your own words' },
              { q: 'Any patterns?', desc: 'When it happens, what makes it better or worse' },
              { q: 'How long?', desc: 'Timeline helps us understand severity' },
            ].map((item, i) => (
              <ClayCard key={i} className="transform transition-all duration-500 hover:scale-[1.03] text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-lg text-primary">{i + 1}</span>
                </div>
                <p className="font-serif text-lg text-foreground mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </ClayCard>
            ))}
          </div>
        </div>
      </Scene>

      {/* ═══════════════ 7. REPORT — Product Hero (Image Right) ═══════════════ */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />
        <Scene parallaxSpeed={0.3}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="flex-1 flex justify-center relative">
              <img
                src={clayReport}
                alt="AI Health report"
                className="w-[60%] md:w-[75%] max-w-[380px] glow-pulse drop-shadow-2xl relative z-10"
                loading="lazy" width={640} height={800}
              />
              {/* Supporting smaller UI elements */}
              <div className="absolute -bottom-4 -left-2 md:-left-8 clay-surface p-3 md:p-4 z-20">
                <p className="text-[10px] md:text-xs text-muted-foreground mb-1">Confidence</p>
                <p className="font-serif text-sm md:text-base text-primary font-medium">94% Match</p>
              </div>
              <div className="absolute -top-2 -right-2 md:-right-6 clay-surface p-3 md:p-4 z-20">
                <p className="text-[10px] md:text-xs text-muted-foreground mb-1">Analysis</p>
                <p className="font-serif text-sm md:text-base text-primary font-medium">Complete ✓</p>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <SectionLabel>Core Feature</SectionLabel>
              <h2 className="scene-text mb-4">See what's actually happening.</h2>
              <p className="scene-subtext mb-4">
                Our AI generates a structured, clear health report — not just data, but real understanding.
              </p>
              <div className="space-y-3">
                {[
                  'Symptom breakdown with severity levels',
                  'Possible conditions ranked by likelihood',
                  'Recommended next steps & specialists',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Scene>
      </div>

      {/* ═══════════════ 8. DOCTOR (Image Left) ═══════════════ */}
      <Scene parallaxSpeed={0.25}>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src={clayDoctor}
              alt="Doctor video call"
              className="w-[55%] md:w-[65%] max-w-[380px] breathe-animation drop-shadow-2xl"
              loading="lazy" width={768} height={768}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <SectionLabel>Expert Care</SectionLabel>
            <h2 className="scene-text mb-4">Get the right guidance.</h2>
            <p className="scene-subtext mb-4">
              Connect with verified doctors who already understand your context through the report you share.
            </p>
            <p className="text-base text-muted-foreground/70 leading-relaxed">
              No repeating yourself. No wasted visits. Just meaningful consultations 
              that lead to real answers.
            </p>
          </div>
        </div>
      </Scene>

      {/* ═══════════════ 9. DASHBOARD (Full Width) ═══════════════ */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <Scene parallaxSpeed={0.2}>
          <div className="flex flex-col items-center text-center gap-8">
            <SectionLabel>Your Health Hub</SectionLabel>
            <h2 className="scene-text max-w-lg mb-2">Everything, in one place.</h2>
            <p className="scene-subtext max-w-lg mb-6">
              Reports, appointments, prescriptions, wellness plans — organized and always accessible.
            </p>
            <img
              src={clayDashboard}
              alt="Health dashboard"
              className="w-full max-w-2xl drop-shadow-2xl float-animation-slow"
              loading="lazy" width={1024} height={640}
            />
          </div>
        </Scene>
      </div>

      {/* ═══════════════ 10. AYURVEDA (Image Right) ═══════════════ */}
      <section id="ayurveda">
        <Scene parallaxSpeed={0.3}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="flex-1 flex justify-center">
              <img
                src={ladyAyurveda}
                alt="Ayurveda healing"
                className="w-[60%] md:w-[70%] max-w-[440px] drop-shadow-2xl breathe-animation"
                loading="lazy" width={1280} height={720}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <SectionLabel>Holistic Healing</SectionLabel>
              <h2 className="scene-text mb-4">Support your healing, naturally.</h2>
              <p className="scene-subtext mb-4">
                Ayurvedic wisdom meets modern clarity — personalized wellness 
                rooted in India's oldest healing tradition.
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed">
                From herbal remedies to lifestyle adjustments, Sattva blends ancient knowledge 
                with your personal health data for guidance that truly fits.
              </p>
            </div>
          </div>
        </Scene>
      </section>

      {/* ═══════════════ 11. NAMASTE (Image Left) ═══════════════ */}
      <Scene parallaxSpeed={0.2}>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src={ladyNamaste}
              alt="Namaste"
              className="w-[55%] md:w-[65%] max-w-[380px] breathe-animation drop-shadow-2xl"
              loading="lazy" width={1280} height={720}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="scene-text mb-4">Clarity changes everything.</h2>
            <p className="scene-subtext">
              When you understand what's happening with your body, 
              fear becomes confidence, confusion becomes a plan, 
              and healthcare finally feels human.
            </p>
          </div>
        </div>
      </Scene>

      {/* ═══════════════ 12. LOGO + CTA ═══════════════ */}
      <section id="cta">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-card/60 pointer-events-none" />
          <Scene parallaxSpeed={0.1}>
            <div className="flex flex-col items-center text-center gap-6">
              <img
                src={sattvaLogo}
                alt="Sattva logo"
                className="w-36 md:w-48 drop-shadow-2xl float-animation-slow"
                loading="lazy" width={1024} height={1024}
              />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Sattva</h2>
              <p className="scene-subtext italic">विचार से उपचार</p>
              <p className="text-base text-muted-foreground max-w-md">
                Begin your journey from confusion to clarity. Your health deserves a better first step.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-12 py-5 rounded-2xl text-lg font-semibold bg-primary text-primary-foreground shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.5)] hover:shadow-[0_12px_40px_-6px_hsl(var(--primary)/0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Start with clarity →
              </a>
            </div>
          </Scene>
        </div>
      </section>

      <Footer />
    </main>
  );
}
