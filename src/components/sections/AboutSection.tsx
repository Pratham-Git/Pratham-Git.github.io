
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layers } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50 dark:bg-gray-900/50">
      <div className="section-container">
        <p className="subtitle">About Me</p>
        <h2 className="section-heading">Engineering My Future</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-right">
            <p className="text-lg">
              I am a third-year engineering student with a passion for 
              web development, data mining, and machine learning. Currently 
              focusing on expanding my knowledge in these areas, I am 
              constantly seeking new challenges and opportunities to grow.
            </p>
            <p className="text-lg">
              My journey in engineering has led me to explore various 
              technologies, from front-end frameworks to blockchain concepts. 
              I believe in creating solutions that are not only technically 
              sound but also user-friendly and accessible.
            </p>
            <p className="text-lg">
              My goal is to leverage my technical skills and knowledge to 
              contribute to innovative projects that make a real impact in 
              the world of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-left">
            <Card className="glass-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Building responsive and interactive web applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Data Mining</h3>
                <p className="text-muted-foreground">
                  Extracting insights from large datasets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card md:col-span-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Blockchain</h3>
                <p className="text-muted-foreground">
                  Exploring decentralized technologies and cryptocurrencies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
