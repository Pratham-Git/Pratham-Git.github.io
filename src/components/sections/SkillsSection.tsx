
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Skill categories
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    name: "Web & App Development",
    skills: [
      { name: "JSP", level: 85 },
      { name: "React Native", level: 80 },
      { name: "Android Studio", level: 75 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    name: "Technologies & Tools",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "TensorFlow/Keras", level: 75 },
      { name: "Solidity", level: 65 },
    ],
  },
];

// Additional specialized skills
const specializedSkills = [
  "MobileNet Architecture",
  "Web3.js",
  "Blockchain Development",
  "Machine Learning",
  "RESTful APIs",
  "Database Design",
  "UI/UX Design",
  "Mobile Development",
  "Servlets",
  "System Architecture",
  "Testing & Debugging",
  "Version Control",
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/50 dark:bg-gray-900/50">
      <div className="section-container">
        <p className="subtitle">My Expertise</p>
        <h2 className="section-heading">Skills & Proficiencies</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8 animate-fade-in-right">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-left">
            <h3 className="text-xl font-semibold mb-6">Specialized Skills</h3>
            <div className="flex flex-wrap gap-3">
              {specializedSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <p className="mb-4">
                I am currently expanding my expertise in the following areas:
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Python Data Structures and Algorithms</li>
                <li>LeetCode problem-solving and competitive programming</li>
                <li>Blockchain development with Ethereum and Solidity</li>
                <li>Advanced AI & ML applications with TensorFlow and Keras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
