
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="subtitle">Web Developer | ML Enthusiast | Blockchain Explorer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A third-year engineering student passionate about creating innovative solutions
              through code and design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full border border-primary/20 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </a>
    </section>
  );
}
