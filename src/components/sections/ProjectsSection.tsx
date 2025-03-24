
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Quotation and Tender Management System",
    description: "A web application for managing quotations and tenders, developed for Indian Railway Works Contract Management System.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["Java", "JSP", "MySQL", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Developing a comprehensive module that handles complex tender management workflows while ensuring data integrity and security."
  },
  {
    title: "Dog Breed Identification Model",
    description: "Machine learning model using MobileNet architecture to identify dog breeds from images.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["Python", "TensorFlow", "Keras", "MobileNet"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Optimizing the model for accuracy while ensuring efficient performance on various devices, trained on an RTX 3060."
  },
  {
    title: "Blockchain-Based Job Marketplace",
    description: "A decentralized platform connecting freelancers with employers using smart contracts for secure transactions.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Implementing secure smart contracts that protect both freelancers and employers while maintaining a user-friendly interface."
  },
  {
    title: "Blockchain-Based Offline Payment System",
    description: "An Android application enabling offline cryptocurrency payments using blockchain technology through Bluetooth connections.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["Android Studio", "Java", "Blockchain", "Bluetooth API"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Implementing secure blockchain transactions in offline environments while maintaining the integrity of the transaction ledger."
  },
  {
    title: "Ocean Focus App",
    description: "A productivity application that helps users focus on their studies with timed sessions and progress tracking.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["React Native", "JavaScript", "Mobile UI/UX"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Creating an engaging and distraction-free UI that encourages productivity while providing useful metrics on study habits."
  }
];

export function ProjectsSection() {
  // Card tilt effect
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement, index: number) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const tiltX = deltaY * 10; // Tilt up-down (reversed)
      const tiltY = -deltaX * 10; // Tilt left-right (reversed)
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Create a subtle shine effect based on mouse position
      const shine = card.querySelector('.card-shine') as HTMLDivElement;
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
      }
    };
    
    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      const shine = card.querySelector('.card-shine') as HTMLDivElement;
      if (shine) {
        shine.style.background = 'rgba(255,255,255,0)';
      }
    };
    
    cardRefs.current.forEach((card, index) => {
      if (card) {
        // Add event listeners
        card.addEventListener('mousemove', (e) => handleMouseMove(e, card, index));
        card.addEventListener('mouseleave', () => handleMouseLeave(card));
        
        // Add shine element
        const shine = document.createElement('div');
        shine.className = 'card-shine absolute inset-0 pointer-events-none';
        card.appendChild(shine);
      }
    });
    
    return () => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e, card, index));
          card.removeEventListener('mouseleave', () => handleMouseLeave(card));
          
          // Remove shine element
          const shine = card.querySelector('.card-shine');
          if (shine) {
            card.removeChild(shine);
          }
        }
      });
    };
  }, []);

  return (
    <section id="projects">
      <div className="section-container">
        <p className="subtitle">My Work</p>
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card card-tilt overflow-hidden flex flex-col h-full animate-fade-in-up relative" 
              style={{animationDelay: `${index * 100}ms`}}
              ref={el => cardRefs.current[index] = el}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl transition-all duration-300 hover:text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="badge-hover transition-all duration-300">{tech}</Badge>
                  ))}
                </div>
                <h4 className="font-medium mb-2">Key Challenge:</h4>
                <p className="text-sm text-muted-foreground">{project.challenge}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="btn-hover-effect" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </a>
                </Button>
                <Button size="sm" className="btn-hover-effect" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="btn-hover-effect">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
