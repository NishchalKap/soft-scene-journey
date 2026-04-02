import { Scene } from '@/components/Scene';
import { useScrollScene } from '@/hooks/useScrollScene';

import clayCharacter from '@/assets/clay-character.png';
import clayPhone from '@/assets/clay-phone.png';
import clayConfusion from '@/assets/clay-confusion.png';
import clayDoctor from '@/assets/clay-doctor.png';
import clayDashboard from '@/assets/clay-dashboard.png';
import clayReport from '@/assets/clay-report.png';
import clayMortar from '@/assets/clay-mortar.png';
import clayLogo from '@/assets/clay-logo.png';

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
      {/* Ambient background orbs */}
      <FloatingOrb className="w-96 h-96 top-[10%] -left-48 float-animation-slow" />
      <FloatingOrb className="w-64 h-64 top-[40%] -right-32 float-animation-delayed" />
      <FloatingOrb className="w-80 h-80 top-[70%] -left-20 float-animation" />

      {/* 1. WELCOME */}
      <Scene parallaxSpeed={0.2}>
        <div className="flex flex-col items-center text-center gap-8">
          <img 
            src={clayCharacter} 
            alt="Sattva clay character" 
            className="w-48 md:w-64 breathe-animation drop-shadow-2xl"
            width={768} height={1024}
          />
          <h1 className="scene-text max-w-2xl">
            Healthcare shouldn't feel overwhelming.
          </h1>
          <div className="w-12 h-1 rounded-full bg-primary opacity-40" />
        </div>
      </Scene>

      {/* 2. SYMPTOMS */}
      <Scene parallaxSpeed={0.35}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 flex justify-center">
            <img 
              src={clayCharacter} 
              alt="Character coughing" 
              className="w-40 md:w-56 drop-shadow-xl"
              loading="lazy" width={768} height={1024}
              style={{ animation: 'breathe 2s ease-in-out infinite', transformOrigin: 'center bottom' }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="scene-text mb-4">It often starts small…</h2>
            <p className="scene-subtext">A cough. A headache. Something you brush off.</p>
          </div>
        </div>
      </Scene>

      {/* 3. CONFUSION */}
      <Scene parallaxSpeed={0.4}>
        <div className="flex flex-col items-center text-center gap-8">
          <img 
            src={clayConfusion} 
            alt="Floating question marks" 
            className="w-64 md:w-80 float-animation drop-shadow-xl"
            loading="lazy" width={768} height={512}
          />
          <h2 className="scene-text max-w-lg">But clarity is missing.</h2>
          <p className="scene-subtext max-w-md">Too many tabs. Conflicting advice. No clear path.</p>
        </div>
      </Scene>

      {/* 4. DISCOVERY */}
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

      {/* 5. FORM */}
      <Scene parallaxSpeed={0.25}>
        <div className="flex flex-col items-center text-center gap-10">
          <h2 className="scene-text max-w-lg mb-2">Just answer a few simple questions.</h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            {['How are you feeling?', 'Any symptoms?', 'How long?'].map((q, i) => (
              <ClayCard key={i} className={`transform transition-all duration-700 hover:scale-105`}
                style={{ animationDelay: `${i * 200}ms` } as React.CSSProperties}
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
      <Scene parallaxSpeed={0.35}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 flex justify-center">
            <img 
              src={clayMortar} 
              alt="Ayurveda mortar and pestle" 
              className="w-48 md:w-64 grind-animation drop-shadow-2xl"
              loading="lazy" width={768} height={768}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="scene-text mb-4">Support your healing, naturally.</h2>
            <p className="scene-subtext">Ayurvedic wisdom meets modern clarity.</p>
          </div>
        </div>
      </Scene>

      {/* 10. NAMASTE */}
      <Scene parallaxSpeed={0.2}>
        <div className="flex flex-col items-center text-center gap-8">
          <img 
            src={clayCharacter} 
            alt="Namaste" 
            className="w-48 md:w-64 breathe-animation drop-shadow-2xl"
            loading="lazy" width={768} height={1024}
          />
          <h2 className="scene-text max-w-md">Clarity changes everything.</h2>
        </div>
      </Scene>

      {/* 11. LOGO + CTA */}
      <Scene parallaxSpeed={0.15}>
        <div className="flex flex-col items-center text-center gap-8">
          <img 
            src={clayLogo} 
            alt="Sattva logo" 
            className="w-64 md:w-80 drop-shadow-2xl float-animation-slow"
            loading="lazy" width={1264} height={848}
          />
          <p className="scene-subtext italic">Vichar Se Upchar</p>
          <button className="clay-surface-lg px-10 py-4 text-lg font-medium text-primary-foreground bg-primary hover:scale-105 transition-transform duration-300 cursor-pointer">
            Start with clarity
          </button>
        </div>
      </Scene>

      {/* Footer spacer */}
      <div className="h-20" />
    </main>
  );
}
