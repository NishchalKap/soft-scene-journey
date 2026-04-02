import sattvaLogo from '@/assets/sattva-logo.png';

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={sattvaLogo} alt="Sattva" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-serif text-xl">Sattva</h3>
                <p className="text-xs text-primary-foreground/50">विचार से उपचार</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-sm leading-relaxed">
              Your gentle healthcare companion. Modern clarity meets Ayurvedic wisdom — 
              guiding you from confusion to care, naturally.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm mb-1">Product</h4>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">How it works</a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Features</a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">For Doctors</a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Pricing</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm mb-1">Company</h4>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">About</a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Blog</a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Terms</a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Sattva Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Instagram</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Twitter</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
