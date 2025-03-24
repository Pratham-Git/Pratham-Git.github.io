
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Implementing secure payment processing and optimizing database queries for large product catalogs."
  },
  {
    title: "Machine Learning Model",
    description: "A predictive model for stock market analysis using historical data and sentiment analysis.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["Python", "TensorFlow", "Pandas", "Natural Language Processing"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Processing large datasets efficiently and creating accurate prediction algorithms."
  },
  {
    title: "Blockchain Explorer",
    description: "A web application for visualizing blockchain transactions and network statistics.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png",
    tech: ["JavaScript", "Web3.js", "React", "D3.js"],
    liveLink: "#",
    githubLink: "#",
    challenge: "Real-time data synchronization and creating intuitive visualizations for complex blockchain data."
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
