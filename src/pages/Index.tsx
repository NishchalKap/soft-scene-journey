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
import clayMortar from '@/assets/clay-mortar.png';
import sattvaLogo from '@/assets/sattva-logo.png';

function FloatingOrb({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute rounded-full opacity-20 blur-3xl ${className}`}
      style={{ background: 'hsl(var(--primary))' }}
    />
  );
}

function ClayCard({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`clay-surface-lg p-6 md:p-8 ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* Ambient background orbs */}
      <FloatingOrb className="w-96 h-96 top-[10%] -left-48 float-animation-slow" />
      <FloatingOrb className="w-64 h-64 top-[40%] -right-32 float-animation-delayed" />
      <FloatingOrb className="w-80 h-80 top-[70%] -left-20 float-animation" />

      {/* 1. WELCOME */}
      <Scene parallaxSpeed={0.2}>
        <div className="flex flex-col items-center text-center gap-8 pt-16">
          <img
            src={ladyWelcome}
            alt="Sattva character"
            className="w-56 md:w-72 breathe-animation drop-shadow-2xl"
            width={1280} height={720}
          />
          <h1 className="scene-text max-w-2xl">
            Healthcare shouldn't feel overwhelming.
          </h1>
          <div className="w-12 h-1 rounded-full bg-primary opacity-40" />
        </div>
      </Scene>

      {/* 2. SYMPTOMS */}
      <section id="symptoms">
        <Scene parallaxSpeed={0.35}>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 flex justify-center">
              <img
                src={ladyCough}
                alt="Character coughing"
                className="w-52 md:w-72 drop-shadow-xl breathe-animation"
                loading="lazy" width={1280} height={720}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="scene-text mb-4">It often starts small…</h2>
              <p className="scene-subtext">A cough. A headache. Something you brush off.</p>
            </div>
          </div>
        </Scene>
      </section>

      {/* 3. CONFUSION */}
      <Scene parallaxSpeed={0.4}>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          <div className="flex-1 flex justify-center relative">
            <img
              src={ladyConfused}
              alt="Confused woman"
              className="w-52 md:w-72 drop-shadow-xl breathe-animation relative z-10"
              loading="lazy" width={1280} height={720}
            />
            <img
              src={clayConfusion}
              alt="Floating question marks"
              className="absolute -top-8 -right-4 w-32 md:w-40 float-animation opacity-70"
              loading="lazy" width={768} height={512}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="scene-text mb-4">But clarity is missing.</h2>
            <p className="scene-subtext">Too many tabs. Conflicting advice. No clear path.</p>
          </div>
        </div>
      </Scene>

      {/* 4. DISCOVERY */}
      <section id="discovery">
        <Scene parallaxSpeed={0.3}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="flex-1 flex justify-center">
              <img
                src={clayPhone}
                alt="Sattva phone app"
                className="w-48 md:w-64 float-animation drop-shadow-2xl"
                loading="lazy" width={640} height={896}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="scene-text mb-4">That's where Sattva comes in.</h2>
              <p className="scene-subtext">Your health companion — gentle, smart, always clear.</p>
            </div>
          </div>
        </Scene>
      </section>

      {/* 5. FORM */}
      <Scene parallaxSpeed={0.25}>
        <div className="flex flex-col items-center text-center gap-10">
          <h2 className="scene-text max-w-lg mb-2">Just answer a few simple questions.</h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            {['How are you feeling?', 'Any symptoms?', 'How long?'].map((q, i) => (
              <ClayCard key={i} className="transform transition-all duration-700 hover:scale-105"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <p className="text-sm font-medium text-muted-foreground mb-2">Question {i + 1}</p>
                <p className="font-serif text-lg text-foreground">{q}</p>
              </ClayCard>
            ))}
          </div>
        </div>
      </Scene>

      {/* 6. REPORT */}
      <Scene parallaxSpeed={0.35}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 flex justify-center">
            <img
              src={clayReport}
              alt="Health report"
              className="w-56 md:w-72 glow-pulse drop-shadow-2xl"
              loading="lazy" width={640} height={800}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="scene-text mb-4">See what's actually happening.</h2>
            <p className="scene-subtext">A structured, clear report — not just data, but understanding.</p>
          </div>
        </div>
      </Scene>

      {/* 7. DOCTOR */}
      <Scene parallaxSpeed={0.3}>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="flex-1 flex justify-center">
            <img
              src={clayDoctor}
              alt="Doctor video call"
              className="w-52 md:w-72 breathe-animation drop-shadow-2xl"
              loading="lazy" width={768} height={768}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="scene-text mb-4">Get the right guidance.</h2>
            <p className="scene-subtext">Connect with verified doctors who understand your context.</p>
          </div>
        </div>
      </Scene>

      {/* 8. DASHBOARD */}
      <Scene parallaxSpeed={0.25}>
        <div className="flex flex-col items-center text-center gap-10">
          <h2 className="scene-text max-w-lg">Everything, in one place.</h2>
          <img
            src={clayDashboard}
            alt="Health dashboard"
            className="w-full max-w-xl drop-shadow-2xl float-animation-slow"
            loading="lazy" width={1024} height={640}
          />
        </div>
      </Scene>

      {/* 9. AYURVEDA */}
      <section id="ayurveda">
        <Scene parallaxSpeed={0.35}>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 flex justify-center relative">
              <img
                src={ladyAyurveda}
                alt="Ayurveda healing"
                className="w-64 md:w-80 drop-shadow-2xl breathe-animation"
                loading="lazy" width={1280} height={720}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="scene-text mb-4">Support your healing, naturally.</h2>
              <p className="scene-subtext">Ayurvedic wisdom meets modern clarity.</p>
            </div>
          </div>
        </Scene>
      </section>

      {/* 10. NAMASTE */}
      <Scene parallaxSpeed={0.2}>
        <div className="flex flex-col items-center text-center gap-8">
          <img
            src={ladyNamaste}
            alt="Namaste"
            className="w-56 md:w-72 breathe-animation drop-shadow-2xl"
            loading="lazy" width={1280} height={720}
          />
          <h2 className="scene-text max-w-md">Clarity changes everything.</h2>
        </div>
      </Scene>

      {/* 11. LOGO + CTA */}
      <section id="cta">
        <Scene parallaxSpeed={0.15}>
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src={sattvaLogo}
              alt="Sattva logo"
              className="w-48 md:w-64 drop-shadow-2xl float-animation-slow"
              loading="lazy" width={1024} height={1024}
            />
            <p className="font-serif text-2xl md:text-3xl text-foreground">Sattva</p>
            <p className="scene-subtext italic">विचार से उपचार</p>
            <a
              href="#"
              className="inline-block mt-2 px-12 py-5 rounded-2xl text-lg font-semibold bg-primary text-primary-foreground shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.5)] hover:shadow-[0_12px_40px_-6px_hsl(var(--primary)/0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Start with clarity →
            </a>
          </div>
        </Scene>
      </section>

      <Footer />
    </main>
  );
}
