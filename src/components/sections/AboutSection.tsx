
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
              I am a third-year Computer Science student at SRM Institute of Science and Technology,
              specializing in AI and Machine Learning. My academic journey is complemented by practical
              experience in web development, database management, and blockchain technologies.
            </p>
            <p className="text-lg">
              With a foundation in Java, Python, and SQL, I've developed applications ranging from
              web-based management systems to mobile apps and ML models. My experience at CRIS and
              BloomExim has equipped me with real-world software development skills.
            </p>
            <p className="text-lg">
              My goal is to leverage my technical expertise to create innovative solutions that
              bridge the gap between emerging technologies and practical applications, particularly
              in the fields of blockchain and artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-left">
            <Card className="glass-card transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:bg-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Building responsive and interactive web applications with Java, JSP, and React.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:bg-primary/20">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">AI & ML</h3>
                <p className="text-muted-foreground">
                  Developing models using TensorFlow, Keras, and MobileNet architecture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card md:col-span-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:bg-primary/20">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Blockchain</h3>
                <p className="text-muted-foreground">
                  Exploring decentralized applications with Solidity and Web3.js.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
