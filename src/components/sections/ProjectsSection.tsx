
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

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
    title: "Ocean Focus App",
    description: "A productivity application that helps users focus on their studies with timed sessions and progress tracking.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["React Native", "JavaScript", "Mobile UI/UX"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Creating an engaging and distraction-free UI that encourages productivity while providing useful metrics on study habits."
  },
  {
    title: "Offline Payment System",
    description: "An Android application enabling UPI-like payments without internet connectivity using Bluetooth or AirDrop technology.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["Android Studio", "Java", "Bluetooth API", "Payment Processing"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Ensuring secure transaction processing in offline environments while maintaining ease of use comparable to online payment systems."
  }
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-container">
        <p className="subtitle">My Work</p>
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden flex flex-col h-full animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <h4 className="font-medium mb-2">Key Challenge:</h4>
                <p className="text-sm text-muted-foreground">{project.challenge}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
