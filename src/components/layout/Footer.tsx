
import { Heart, Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pratham Jaiswal. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Computer Science Student • SRM Institute of Science and Technology
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <a
              href="https://github.com/Pratham-Git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-jaiswal-ab89a8277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
