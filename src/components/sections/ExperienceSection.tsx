
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    period: "May 2023 - Aug 2023",
    description: "Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to implement new features and fix bugs.",
    skills: ["React.js", "Node.js", "MongoDB", "Agile"],
    achievements: [
      "Reduced page load time by 40% through code optimization",
      "Implemented a new dashboard feature that increased user engagement by 25%",
      "Contributed to the company's open-source projects"
    ]
  },
  {
    title: "Research Assistant",
    company: "University Research Lab",
    period: "Jan 2023 - Present",
    description: "Assisting in research on machine learning applications in healthcare. Developing models for medical image analysis and prediction of patient outcomes.",
    skills: ["Python", "TensorFlow", "Data Analysis", "Research Methodology"],
    achievements: [
      "Co-authored a research paper published in a peer-reviewed journal",
      "Developed a machine learning model with 92% accuracy for disease prediction",
      "Presented research findings at two university symposiums"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Student Innovation Hub",
    period: "Sep 2022 - Dec 2022",
    description: "Led the frontend development for a student-run startup creating educational technology solutions. Designed and implemented responsive user interfaces.",
    skills: ["HTML/CSS", "JavaScript", "UI/UX Design", "Figma"],
    achievements: [
      "Designed and implemented the UI for a learning management system used by 500+ students",
      "Improved website accessibility to WCAG 2.1 AA standards",
      "Mentored junior team members in frontend development"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="section-container">
        <p className="subtitle">My Journey</p>
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm font-normal">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
