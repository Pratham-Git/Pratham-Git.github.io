
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-6 border-4 border-primary/20 transition-all duration-300 hover:border-primary hover:scale-105">
              <AvatarImage src="/lovable-uploads/caa827b9-3842-4ff2-8ffe-d7a9313e343f.png" alt="Pratham Jaiswal" />
              <AvatarFallback>PJ</AvatarFallback>
            </Avatar>
            <p className="subtitle transition-all duration-300 hover:bg-primary/20 hover:scale-105">Web Developer | ML Enthusiast | Blockchain Explorer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-primary transition-colors duration-300 hover:text-primary/80">Pratham Jaiswal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              A third-year engineering student passionate about creating innovative solutions
              through code and design.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="https://github.com/Pratham-Git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/30 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-jaiswal-ab89a8277/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/30 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20">
                <Download className="mr-2 h-4 w-4" />Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full border border-primary/20 animate-bounce hover:bg-primary/10 transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </a>
    </section>
  );
}
