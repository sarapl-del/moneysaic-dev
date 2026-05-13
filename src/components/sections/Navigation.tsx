import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-muted-border">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-9">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-base font-semibold text-dark">moneysaic</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#integration" className="text-base leading-6 font-normal text-dark hover:text-brand transition-colors">
            Integration
          </a>
          <a href="#features" className="text-base leading-6 font-normal text-dark hover:text-brand transition-colors">
            Features
          </a>
          <a href="https://calendly.com/doug-barr-dlabs/30min" target="_blank" rel="noopener noreferrer">
            <Button className="h-12 rounded-[7px] bg-brand px-8 text-base font-normal text-white hover:bg-brand/90">
              Book a meeting with our team →
            </Button>
          </a>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-6">
              <a href="#integration" onClick={() => setOpen(false)} className="text-base font-normal text-dark">
                Integration
              </a>
              <a href="#features" onClick={() => setOpen(false)} className="text-base font-normal text-dark">
                Features
              </a>
              <a href="https://calendly.com/doug-barr-dlabs/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-[7px] bg-brand px-6 py-3 text-base font-medium text-white hover:bg-brand/90">
                  Book a meeting with our team →
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
