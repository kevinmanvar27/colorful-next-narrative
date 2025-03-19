
import React from 'react';
import { cn } from '@/lib/utils';
import NodeIcon from './NodeIcon';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  showNodeIcon?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
  showNodeIcon = false
}) => {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-lg border border-white/10 bg-background hover:bg-black/50 transition-all duration-300 overflow-hidden group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {showNodeIcon && (
          <div className="flex justify-center mb-6">
            <NodeIcon size="md" />
          </div>
        )}
        
        {icon && <div className="mb-4">{icon}</div>}
        
        <h3 className="font-medium text-sm mb-2">{title}</h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
