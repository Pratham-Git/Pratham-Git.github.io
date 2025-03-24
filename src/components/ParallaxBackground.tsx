
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
      {/* Primary blob that follows cursor closely */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-transform duration-200 ease-out"
        style={{ 
          transform: `translate(${position.x * 40}px, ${position.y * 40}px)`,
        }}
      />
      
      {/* Secondary blobs that move in different directions */}
      <div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300/5 dark:bg-blue-700/5 rounded-full blur-3xl transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${-position.x * 60}px, ${position.y * 30}px)`,
        }}
      />
      
      <div 
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-300/5 dark:bg-purple-700/5 rounded-full blur-3xl transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate(${position.x * 50}px, ${-position.y * 50}px)`,
        }}
      />
      
      {/* Smaller floating elements */}
      <div 
        className="absolute top-1/2 right-1/2 w-24 h-24 bg-green-300/10 dark:bg-green-700/10 rounded-full blur-xl transition-transform duration-150 ease-out"
        style={{ 
          transform: `translate(${-position.x * 25}px, ${-position.y * 25}px)`,
        }}
      />
      
      <div 
        className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-yellow-300/10 dark:bg-yellow-700/10 rounded-full blur-xl transition-transform duration-200 ease-out"
        style={{ 
          transform: `translate(${-position.x * 35}px, ${-position.y * 15}px)`,
        }}
      />
      
      <div 
        className="absolute top-1/5 left-1/3 w-20 h-20 bg-pink-300/10 dark:bg-pink-700/10 rounded-full blur-lg transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate(${position.x * 20}px, ${position.y * 60}px)`,
        }}
      />
      
      {/* Small particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm transition-transform duration-300 ease-out"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(${(position.x - 0.5) * (i % 3 + 1) * 30}px, ${(position.y - 0.5) * (i % 4 + 1) * 30}px)`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
}
