
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layers } from "lucide-react";
import { useRef, useEffect } from "react";

export function AboutSection() {
  // Card hover effect
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const tiltX = deltaY * 8;
      const tiltY = -deltaX * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`;
      
      // Create a subtle shine effect
      const shine = card.querySelector('.card-shine') as HTMLDivElement;
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
      }
    };
    
    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
      const shine = card.querySelector('.card-shine') as HTMLDivElement;
      if (shine) {
        shine.style.background = 'rgba(255,255,255,0)';
      }
    };
    
    cardRefs.current.forEach((card) => {
      if (card) {
        // Add event listeners
        card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.addEventListener('mouseleave', () => handleMouseLeave(card));
        
        // Add shine element
        const shine = document.createElement('div');
        shine.className = 'card-shine absolute inset-0 pointer-events-none';
        card.appendChild(shine);
      }
    });
    
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
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
            <Card 
              className="glass-card card-tilt relative overflow-hidden" 
              ref={el => cardRefs.current[0] = el}
            >
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
            
            <Card 
              className="glass-card card-tilt relative overflow-hidden" 
              ref={el => cardRefs.current[1] = el}
            >
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
            
            <Card 
              className="glass-card card-tilt md:col-span-2 relative overflow-hidden" 
              ref={el => cardRefs.current[2] = el}
            >
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
