
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Intern / Software Developer",
    company: "Centre for Railway Information Systems (CRIS), New Delhi — CEP Group",
    period: "June 2024 - August 2024",
    description: "Worked under the guidance of the Principal Project Engineer in the CEP group on the Indian Railway Works Contract Management System (IRWCMS) Web Application.",
    skills: ["Java", "JSP", "Servlets", "Bootstrap", "MySQL"],
    achievements: [
      "Solely developed a module for handling quotations and manual tenders using Java Servlets, JSP, and Bootstrap",
      "Improved the efficiency of tender management through streamlined processes",
      "Ensured robust functionality through comprehensive testing and validation",
      "Met project deadlines independently"
    ]
  },
  {
    title: "Intern / Software Developer",
    company: "BloomExim Pvt. Ltd. | JohnPride, New Delhi",
    period: "June 2023 - August 2023",
    description: "Participated in a software development internship focusing on website quality assurance and maintenance.",
    skills: ["Quality Assurance", "Bug Tracking", "File Management", "Web Development"],
    achievements: [
      "Identified and reported bugs in the company website, improving user experience and overall functionality",
      "Regularly communicated with the development team to track bug fixes and ensure timely updates",
      "Managed file transfers and website updates using tools such as FileZilla, contributing to efficient project workflows"
    ]
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science with Specialization in AI and ML",
    institution: "SRM Institute of Science and Technology, Delhi NCR",
    period: "2022 - 2026 (Expected)",
    description: "Pursuing a specialized degree in Computer Science with a focus on Artificial Intelligence and Machine Learning technologies."
  },
  {
    degree: "Higher Secondary Education",
    institution: "K.R. Mangalam World School, GK-II",
    period: "2022",
    description: "Completed higher secondary education with a focus on Science and Mathematics, laying the foundation for engineering studies."
  },
  {
    degree: "Secondary Education",
    institution: "K.R. Mangalam World School, GK-II",
    period: "",
    description: "Completed secondary education with strong academic performance."
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

        <h2 className="section-heading mt-16">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-medium">{edu.institution}</CardDescription>
                  </div>
                  {edu.period && (
                    <Badge variant="outline" className="text-sm font-normal">
                      {edu.period}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
