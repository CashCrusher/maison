import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Badge({ children, className, rotation = 0 }) {
  // We use inline style for custom rotation to avoid generating too many arbitrary tailwind classes if randomized
  return (
    <div 
      className={cn(
        "inline-flex items-center px-3 py-1.5",
        "bg-pine-deep text-parchment font-mono text-xs tracking-widest uppercase",
        "shadow-sm shadow-ink/10",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  );
}
