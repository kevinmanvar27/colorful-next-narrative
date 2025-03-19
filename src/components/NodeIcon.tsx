
import React from 'react';
import { cn } from '@/lib/utils';

interface NodeIconProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const NodeIcon: React.FC<NodeIconProps> = ({ 
  size = 'md', 
  animated = false,
  className
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn(
      "relative",
      sizeClasses[size],
      animated && "animate-pulse-slow",
      className
    )}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full",
          animated && "animate-rotate"
        )}
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Outer points */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <React.Fragment key={i}>
            <circle 
              cx={50 + 45 * Math.cos(deg * Math.PI / 180)} 
              cy={50 + 45 * Math.sin(deg * Math.PI / 180)} 
              r="2" 
              fill="currentColor" 
            />
            <line 
              x1={50} 
              y1={50} 
              x2={50 + 45 * Math.cos(deg * Math.PI / 180)} 
              y2={50 + 45 * Math.sin(deg * Math.PI / 180)} 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeOpacity="0.5" 
            />
          </React.Fragment>
        ))}
        
        {/* Inner circle */}
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

export default NodeIcon;
