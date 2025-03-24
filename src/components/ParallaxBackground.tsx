
import { useEffect, useState } from "react";

export function ParallaxBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      setPosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${position.x * 15}px, ${position.y * 15}px)` 
        }}
      />
      <div 
        className="absolute top-1/3 -right-16 w-64 h-64 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${-position.x * 20}px, ${position.y * 20}px)` 
        }}
      />
      <div 
        className="absolute bottom-32 left-1/4 w-48 h-48 bg-purple-300/10 dark:bg-purple-700/10 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${position.x * 25}px, ${-position.y * 25}px)` 
        }}
      />
      <div 
        className="absolute bottom-0 right-1/3 w-40 h-40 bg-green-300/10 dark:bg-green-700/10 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${-position.x * 15}px, ${-position.y * 15}px)` 
        }}
      />
    </div>
  );
}
